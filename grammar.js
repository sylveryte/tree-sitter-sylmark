/**
 * @file Markdown parser for sylmark lsp
 * @author Sandeep Sahani <sylveryte@protonmail.com>
 * @license MIT
 */

/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

module.exports = grammar({
  name: "sylmark",

  rules: {
    // TODO: add the actual grammar rules
    source_file: $ => "hello"
  }
});
