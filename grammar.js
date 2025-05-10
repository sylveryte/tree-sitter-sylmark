/**
 * @file Minimal Markdown parser for sylmark an markdown pkm lsp
 * @author Sandeep Sahani <sylveryte@protonmail.com>
 * @license MIT
 */

/// <reference types="tree-sitter-cli/dsl" />
// @ts-check
module.exports = grammar({
  name: "sylmark",

  extras: ($) => [/\s+/],

  rules: {
    document: ($) =>
      repeat(choice($.heading, $.link, $.wikilink, $.tag, $.text)),

    heading: () =>
      seq(
        /[#]{1,6}/,
        optional(/\s+/),
        field("title", /[^\n\r]*/),
        optional("\n"),
      ),

    link: () =>
      seq(
        "[",
        field("text", repeat(choice(/[^\]]/, "\\]"))),
        "]",
        "(",
        field("url", repeat(choice(/[^)\n]/, choice("\\)", "\n")))),
        ")",
      ),

    wikilink: () =>
      seq("[[", field("target", repeat(choice(/[^]\n]/, "\\]"))), "]]"),

    tag: () => token(seq("#", /[a-zA-Z0-9_]+/)),

    text: () => token.immediate(/[^#\[\]\[\]]+/),
  },
});
