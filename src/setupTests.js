import "@testing-library/jest-dom";
import { TextEncoder, TextDecoder } from "util";

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
window.scrollTo = jest.fn();

// Simulate the GitHub Pages subdirectory in CRA's test environment.
process.env.PUBLIC_URL = "/AlexandreDubois";
