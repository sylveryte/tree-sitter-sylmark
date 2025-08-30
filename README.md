# Sylmark Tree-sitter Grammar

- This grammar is written for markdown files specifically to
  be used in [sylmark lsp](https://codeberg.org/sylveryte/sylmark)
- It supports only nodes required by the sylmark lsp

## Bugs

- [ ] only 1 heading is recognized

### first heading

```typescript
somethint;
```

### second heading

```typescript
somethint;
```

- [ ] old norg links are creating error
      if md contains {https://lksajdf}[link]
