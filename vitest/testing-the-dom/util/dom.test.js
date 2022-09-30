import fs from "fs";
import path from "path";

import { it, expect, vi, beforeEach } from "vitest";

// We need to use a virtual DOM to access the document. Therefore, we can access this via the test script in package.json with either:
// --environment happy-dom
// --environment jsdom
// "test": "vitest --run --environment happy-dom"
import { Window } from "happy-dom";

import { showError } from "./dom.js";

const htmlDocPath = path.join(process.cwd(), "index.html");
const htmlContent = fs.readFileSync(htmlDocPath).toString();

const window = new Window();
const document = window.document;
//document.write(htmlContent);
vi.stubGlobal("document", document);

beforeEach(() => {
  document.body.innerHTML = "";
  document.write(htmlContent);
});

it("should add an error paragraph to id='errors' element", () => {
  const errorMessage = "error";

  showError(errorMessage);

  const errorsEl = document.getElementById("errors");
  const errorParagraph = errorsEl.firstElementChild;

  expect(errorParagraph.textContent).toBe(errorMessage);
});

it("should not contain an error paragraph initially", () => {
  const errorsEl = document.getElementById("errors");
  const errorParagraph = errorsEl.firstElementChild;

  expect(errorParagraph).toBeNull();
});