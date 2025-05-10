package tree_sitter_sylmark_test

import (
	"testing"

	tree_sitter "github.com/tree-sitter/go-tree-sitter"
	tree_sitter_sylmark "github.com/sylveryte/tree-sitter-sylmark/bindings/go"
)

func TestCanLoadGrammar(t *testing.T) {
	language := tree_sitter.NewLanguage(tree_sitter_sylmark.Language())
	if language == nil {
		t.Errorf("Error loading Sylmark grammar")
	}
}
