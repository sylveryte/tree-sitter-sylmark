Note: Github has mirror original repo on [codeberg](https://codeberg.org/sylveryte/tree-sitter-sylmark)

# Sylmark Tree-sitter Grammar

- This grammar is written for markdown files specifically to
  be used in [sylmark lsp](https://codeberg.org/sylveryte/sylmark)
- It supports only nodes required by the sylmark lsp

## Bugs

- [ ] Recoginises heading even when it's in between text
  - This issue is however fixed in it's [sylmark](https://codeberg.org/sylveryte/sylmark)

```markdown
some text # not actual heading but recognised
```
