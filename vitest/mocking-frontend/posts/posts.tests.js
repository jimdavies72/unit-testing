import {it, expect, describe, beforeEach} from 'vitest'

import {extractPostData} from './posts.js'

// local mock objects

const testTitle = "title";
const testContent = "testContent";
let testFormData;

describe("extractPostData()", () => {
  beforeEach(() => {
    testFormData = {
      title: testTitle,
      content: testContent,
      get(key) {
        return this[key];
      },
    };
  })
  
  it('should extract title and content from provided form data', () => {

    const data = extractPostData(testFormData)

    expect(data.title).toBe(testTitle)
    expect(data.content).toBe(testContent);
  });
});
