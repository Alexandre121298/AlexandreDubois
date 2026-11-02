import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "./App";
import emailjs from "@emailjs/browser";

jest.mock("@emailjs/browser", () => ({
  __esModule: true,
  default: { sendForm: jest.fn() },
}));

beforeEach(() => {
  window.history.replaceState(null, "", "/AlexandreDubois/#/");
  emailjs.sendForm.mockReset();
});

test("opens the DataPulse case study through the home page", async () => {
  render(<App />);
  fireEvent.click(screen.getByRole("link", { name: /Explorer le projet/ }));
  expect(
    await screen.findByRole("heading", { level: 1, name: /DataPulse/ }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole("link", { name: /Essayer DataPulse/ }),
  ).toHaveAttribute(
    "href",
    "https://datapulse-api-722245064686.europe-west1.run.app/",
  );
  expect(
    screen.getByRole("link", { name: /Voir le code sur GitHub/ }),
  ).toHaveAttribute("href", "https://github.com/Alexandre121298/datapulse");
  expect(document.title).toBe("DataPulse — Alexandre Dubois");
});

test("provides a CV URL under the GitHub Pages project path", () => {
  render(<App />);
  expect(
    screen.getByRole("link", { name: /Télécharger mon CV/ }),
  ).toHaveAttribute("href", "/AlexandreDubois/cv.pdf");
});

test("the skip link focuses the main content without changing the hash route", () => {
  render(<App />);
  fireEvent.click(screen.getByRole("link", { name: /Aller au contenu/ }));
  expect(screen.getByRole("main")).toHaveFocus();
  expect(window.location.hash).toBe("#/");
});

async function openContact() {
  render(<App />);
  fireEvent.click(screen.getByRole("link", { name: "Contact" }));
  await screen.findByRole("heading", { name: /Parlons de votre/ });
  fireEvent.change(screen.getByLabelText("Votre nom"), {
    target: { value: "Visiteur" },
  });
  fireEvent.change(screen.getByLabelText("Votre adresse email"), {
    target: { value: "visiteur@example.com" },
  });
  fireEvent.change(screen.getByLabelText("Votre message"), {
    target: { value: "Bonjour, échangeons sur une opportunité." },
  });
}

test("shows a sending state and confirmation, without sending real emails", async () => {
  let finish;
  emailjs.sendForm.mockReturnValue(
    new Promise((resolve) => {
      finish = resolve;
    }),
  );
  await openContact();
  fireEvent.click(screen.getByRole("button", { name: /Envoyer le message/ }));
  expect(screen.getByRole("button", { name: /Envoi en cours/ })).toBeDisabled();
  expect(emailjs.sendForm).toHaveBeenCalledTimes(1);
  finish({ text: "OK" });
  expect(await screen.findByRole("status")).toHaveTextContent(
    "Merci pour votre message",
  );
});

test("keeps the message and allows a retry when EmailJS fails", async () => {
  emailjs.sendForm
    .mockRejectedValueOnce(new Error("Service indisponible"))
    .mockResolvedValueOnce({ text: "OK" });
  await openContact();
  fireEvent.click(screen.getByRole("button", { name: /Envoyer le message/ }));
  expect(await screen.findByRole("alert")).toHaveTextContent(
    "L’envoi a échoué",
  );
  expect(screen.getByLabelText("Votre message")).toHaveValue(
    "Bonjour, échangeons sur une opportunité.",
  );
  fireEvent.click(screen.getByRole("button", { name: /Envoyer le message/ }));
  await waitFor(() =>
    expect(screen.getByRole("status")).toHaveTextContent(
      "Merci pour votre message",
    ),
  );
  expect(emailjs.sendForm).toHaveBeenCalledTimes(2);
});
