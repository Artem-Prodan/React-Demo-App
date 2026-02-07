
// Polyfill TextEncoder/TextDecoder for Jest + Node
const { TextEncoder, TextDecoder } = require("util"); //node built-in module
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

require("@testing-library/jest-dom");
