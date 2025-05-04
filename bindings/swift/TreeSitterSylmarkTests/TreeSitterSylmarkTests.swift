import XCTest
import SwiftTreeSitter
import TreeSitterSylmark

final class TreeSitterSylmarkTests: XCTestCase {
    func testCanLoadGrammar() throws {
        let parser = Parser()
        let language = Language(language: tree_sitter_sylmark())
        XCTAssertNoThrow(try parser.setLanguage(language),
                         "Error loading Sylmark grammar")
    }
}
