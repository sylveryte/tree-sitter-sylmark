/**
 * @file Minimal Markdown parser for sylmark an markdown pkm lsp
 * @author Sandeep Sahani <sylveryte@protonmail.com>
 * @license MIT
 */

/// <reference types="tree-sitter-cli/dsl" />
// @ts-check
module.exports = grammar({
  name: "sylmark",

  extras: () => [/\s+/],

  rules: {
    document: ($) =>
      repeat(
        choice(
          $.heading,
          $.link,
          $.wikilink,
          $.tag,
          $.comment,
          $.inline_code,
          $.fenced_code_block,
          $.text,
        ),
      ),

    title: () => /[^\n\r]*/,
    heading: ($) =>
      seq(/[#]{1,6}/, optional(/\s+/), field("title", $.title), optional("\n")),
    // heading: () => token(seq(/(?:^|\n)#{1,6}/, /\s*/, /[^\n\r]*/)),

    url: () =>
      seq(
        choice(/[^)\n]/, "\\)"), // match one or more characters
        repeat(choice(/[^)\n]/, "\\)")), // zero or more characters after
      ),

    urltext: () => seq(choice(/[^\]]/, "\\]"), repeat(choice(/[^\]]/, "\\]"))),
    link: ($) =>
      seq("[", field("text", $.urltext), "]", "(", field("url", $.url), ")"),

    wikitarget: () =>
      seq(choice(/[^]\n]/, "\\]"), repeat(choice(/[^]\n]/, "\\]"))),
    wikilink: ($) => seq("[[", field("target", $.wikitarget), "]]"),

    tag: () => token(seq("#", /[a-zA-Z0-9_]+/)),

    comment: () => token(prec(1, /<!--[\s\S]*?-->/)),

    inline_code: () => token(prec(1, /`[^`\n]*`/)),

    fenced_code_block: () => token(prec(1, /```[\s\S]*?```/)),

    text: () => token(/[^\s#\[\]\[\]`<]+/),
  },
});
