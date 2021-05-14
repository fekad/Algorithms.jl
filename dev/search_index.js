var documenterSearchIndex = {"docs":
[{"location":"cheatsheet/#Showcase","page":"Showcase","title":"Showcase","text":"","category":"section"},{"location":"cheatsheet/","page":"Showcase","title":"Showcase","text":"This page showcases the various page elements that are supported by Documenter. It should be read side-by-side with its source (docs/src/showcase.md) to see what syntax exactly is used to create the various elements.","category":"page"},{"location":"cheatsheet/#Table-of-contents","page":"Showcase","title":"Table of contents","text":"","category":"section"},{"location":"cheatsheet/","page":"Showcase","title":"Showcase","text":"A table of contents can be generated with an @contents block. The one for this page renders as","category":"page"},{"location":"cheatsheet/","page":"Showcase","title":"Showcase","text":"Pages = [\"showcase.md\"]","category":"page"},{"location":"cheatsheet/#Basic-Markdown","page":"Showcase","title":"Basic Markdown","text":"","category":"section"},{"location":"cheatsheet/","page":"Showcase","title":"Showcase","text":"Documenter can render all the Markdown syntax supported by the Julia Markdown parser. You can use all the usual markdown syntax, such as bold text and italic text and print(\"inline code\").","category":"page"},{"location":"cheatsheet/","page":"Showcase","title":"Showcase","text":"Code blocks are rendered as follows:","category":"page"},{"location":"cheatsheet/","page":"Showcase","title":"Showcase","text":"This is an non-highlighted code block.\n... Rendered in monospace.","category":"page"},{"location":"cheatsheet/","page":"Showcase","title":"Showcase","text":"When the language is specified for the block, e.g. by starting the block with ```julia, the contents gets highlighted appropriately (for the language that are supported by the highlighter).","category":"page"},{"location":"cheatsheet/","page":"Showcase","title":"Showcase","text":"function foo(x::Integer)\n    @show x + 1\nend","category":"page"},{"location":"cheatsheet/","page":"Showcase","title":"Showcase","text":"For mathematics, both inline and display equations are available. Inline equations should be written as LaTeX between two backticks, e.g. ``A x^2 + B x + C = 0``. It will render as A x^2 + B x + C = 0.","category":"page"},{"location":"cheatsheet/","page":"Showcase","title":"Showcase","text":"The LaTeX for display equations must be wrapped in a ```math code block and will render like","category":"page"},{"location":"cheatsheet/","page":"Showcase","title":"Showcase","text":"x_12 = frac-B pm sqrtB^2 - 4 A C2A","category":"page"},{"location":"cheatsheet/","page":"Showcase","title":"Showcase","text":"By default, the HTML output renders equations with KaTeX, but MathJax can optionally be used as well.","category":"page"},{"location":"cheatsheet/","page":"Showcase","title":"Showcase","text":"Finally, admonitions for notes, warnings and such:","category":"page"},{"location":"cheatsheet/#Note-admonition","page":"Showcase","title":"Note admonition","text":"","category":"section"},{"location":"cheatsheet/","page":"Showcase","title":"Showcase","text":"note: 'note' admonition\nAdmonitions look like this. This is a !!! note-type admonition.Note that admonitions themselves can contain other block-level elements too, such as code blocks. E.g.f(x) = x^2However, you can not have at-blocks, docstrings, doctests etc. in an admonition.Headings are OK though:Heading 1Heading 2Heading 3Heading 4Heading 5Heading 6","category":"page"},{"location":"cheatsheet/#Info-admonition","page":"Showcase","title":"Info admonition","text":"","category":"section"},{"location":"cheatsheet/","page":"Showcase","title":"Showcase","text":"info: 'info' admonition\nThis is a !!! info-type admonition. This is the same as a !!! note-type.","category":"page"},{"location":"cheatsheet/#Tip-admonition","page":"Showcase","title":"Tip admonition","text":"","category":"section"},{"location":"cheatsheet/","page":"Showcase","title":"Showcase","text":"tip: 'tip' admonition\nThis is a !!! tip-type admonition.","category":"page"},{"location":"cheatsheet/#Warning-admonition","page":"Showcase","title":"Warning admonition","text":"","category":"section"},{"location":"cheatsheet/","page":"Showcase","title":"Showcase","text":"warning: 'warning' admonition\nThis is a !!! warning-type admonition.","category":"page"},{"location":"cheatsheet/#Danger-admonition","page":"Showcase","title":"Danger admonition","text":"","category":"section"},{"location":"cheatsheet/","page":"Showcase","title":"Showcase","text":"danger: 'danger' admonition\nThis is a !!! danger-type admonition.","category":"page"},{"location":"cheatsheet/#Compat-admonition","page":"Showcase","title":"Compat admonition","text":"","category":"section"},{"location":"cheatsheet/","page":"Showcase","title":"Showcase","text":"compat: 'compat' admonition\nThis is a !!! compat-type admonition.","category":"page"},{"location":"cheatsheet/#Unknown-admonition-class","page":"Showcase","title":"Unknown admonition class","text":"","category":"section"},{"location":"cheatsheet/","page":"Showcase","title":"Showcase","text":"ukw: Unknown admonition class\nAdmonition with an unknown admonition class. This is a code example.","category":"page"},{"location":"cheatsheet/#Lists","page":"Showcase","title":"Lists","text":"","category":"section"},{"location":"cheatsheet/","page":"Showcase","title":"Showcase","text":"Tight lists look as follows","category":"page"},{"location":"cheatsheet/","page":"Showcase","title":"Showcase","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.\nNulla quis venenatis justo.\nIn non sodales eros.","category":"page"},{"location":"cheatsheet/","page":"Showcase","title":"Showcase","text":"If the lists contain paragraphs or other block level elements, they look like this:","category":"page"},{"location":"cheatsheet/","page":"Showcase","title":"Showcase","text":"Morbi et varius nisl, eu semper orci.\nDonec vel nibh sapien. Maecenas ultricies mauris sapien. Nunc et sem ac justo ultricies dignissim ac vitae sem.\nNulla molestie aliquet metus, a dapibus ligula.\nMorbi pellentesque sodales sollicitudin. Fusce semper placerat suscipit. Aliquam semper tempus ex, non efficitur erat posuere in. Fusce at orci eu ex sagittis commodo.\nFusce tempus scelerisque egestas. Pellentesque varius nulla a varius fringilla.\nFusce nec urna eu orci porta blandit.","category":"page"},{"location":"cheatsheet/","page":"Showcase","title":"Showcase","text":"Numbered lists are also supported","category":"page"},{"location":"cheatsheet/","page":"Showcase","title":"Showcase","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.\nNulla quis venenatis justo.\nIn non sodales eros.","category":"page"},{"location":"cheatsheet/","page":"Showcase","title":"Showcase","text":"As are nested lists","category":"page"},{"location":"cheatsheet/","page":"Showcase","title":"Showcase","text":"Morbi et varius nisl, eu semper orci.\nDonec vel nibh sapien. Maecenas ultricies mauris sapien. Nunc et sem ac justo ultricies dignissim ac vitae sem.\nLorem ipsum dolor sit amet, consectetur adipiscing elit.\nNulla quis venenatis justo.\nIn non sodales eros.\nNulla molestie aliquet metus, a dapibus ligula.\nLorem ipsum dolor sit amet, consectetur adipiscing elit.\nNulla quis venenatis justo.\nIn non sodales eros.\nFusce nec urna eu orci porta blandit.","category":"page"},{"location":"cheatsheet/","page":"Showcase","title":"Showcase","text":"Lists can also be included in other blocks that can contain block level items","category":"page"},{"location":"cheatsheet/","page":"Showcase","title":"Showcase","text":"note: Bulleted lists in admonitions\nLorem ipsum dolor sit amet, consectetur adipiscing elit.\nNulla quis venenatis justo.\nIn non sodales eros.","category":"page"},{"location":"cheatsheet/","page":"Showcase","title":"Showcase","text":"note: Large lists in admonitions\nMorbi et varius nisl, eu semper orci.\nDonec vel nibh sapien. Maecenas ultricies mauris sapien. Nunc et sem ac justo ultricies dignissim ac vitae sem.\nLorem ipsum dolor sit amet, consectetur adipiscing elit.\nNulla quis venenatis justo.\nIn non sodales eros.\nNulla molestie aliquet metus, a dapibus ligula.\nLorem ipsum dolor sit amet, consectetur adipiscing elit.\nNulla quis venenatis justo.\nIn non sodales eros.\nFusce nec urna eu orci porta blandit.","category":"page"},{"location":"cheatsheet/","page":"Showcase","title":"Showcase","text":"Morbi et varius nisl, eu semper orci.\nDonec vel nibh sapien. Maecenas ultricies mauris sapien. Nunc et sem ac justo ultricies dignissim ac vitae sem.\nLorem ipsum dolor sit amet, consectetur adipiscing elit.\nNulla quis venenatis justo.\nIn non sodales eros.","category":"page"},{"location":"cheatsheet/#Tables","page":"Showcase","title":"Tables","text":"","category":"section"},{"location":"cheatsheet/","page":"Showcase","title":"Showcase","text":"object implemented value\nA ✓ 10.00\nBB ✓ 1000000.00","category":"page"},{"location":"cheatsheet/","page":"Showcase","title":"Showcase","text":"With explicit alignment.","category":"page"},{"location":"cheatsheet/","page":"Showcase","title":"Showcase","text":"object implemented value\nA ✓ 10.00\nBB ✓ 1000000.00","category":"page"},{"location":"cheatsheet/","page":"Showcase","title":"Showcase","text":"Tables that are too wide should become scrollable.","category":"page"},{"location":"cheatsheet/","page":"Showcase","title":"Showcase","text":"object implemented value\nA ✓ 10.00\nBBBBBBBBBBBBBBBBBBBB ✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓ 1000000000000000000000000000000000000000000000000000000.00","category":"page"},{"location":"cheatsheet/#Footnotes","page":"Showcase","title":"Footnotes","text":"","category":"section"},{"location":"cheatsheet/","page":"Showcase","title":"Showcase","text":"Footnote references can be added with the [^label] syntax.[1] The footnote definitions get collected at the bottom of the page.","category":"page"},{"location":"cheatsheet/","page":"Showcase","title":"Showcase","text":"The footnote label can be an arbitrary string and even consist of block-level elements.[Clarke61]","category":"page"},{"location":"cheatsheet/","page":"Showcase","title":"Showcase","text":"[1]: A footnote definition uses the [^label]: ... sytax in a block scope.","category":"page"},{"location":"cheatsheet/","page":"Showcase","title":"Showcase","text":"[Clarke61]: Any sufficiently advanced technology is indistinguishable from magic.Arthur C. Clarke, Profiles of the Future (1961): Clarke's Third Law.","category":"page"},{"location":"cheatsheet/#Headings","page":"Showcase","title":"Headings","text":"","category":"section"},{"location":"cheatsheet/","page":"Showcase","title":"Showcase","text":"Finally, headings render as follows","category":"page"},{"location":"cheatsheet/#Heading-level-3","page":"Showcase","title":"Heading level 3","text":"","category":"section"},{"location":"cheatsheet/#Heading-level-4","page":"Showcase","title":"Heading level 4","text":"","category":"section"},{"location":"cheatsheet/#Heading-level-5","page":"Showcase","title":"Heading level 5","text":"","category":"section"},{"location":"cheatsheet/#Heading-level-6","page":"Showcase","title":"Heading level 6","text":"","category":"section"},{"location":"cheatsheet/","page":"Showcase","title":"Showcase","text":"To see an example of a level 1 heading see the page title and for level 2 heading, see the one just under this paragraph.","category":"page"},{"location":"cheatsheet/","page":"Showcase","title":"Showcase","text":"note: Headings in sidebars\nLevel 1 and 2 heading show up in the sidebar, for the current page.","category":"page"},{"location":"cheatsheet/#Docstrings","page":"Showcase","title":"Docstrings","text":"","category":"section"},{"location":"cheatsheet/","page":"Showcase","title":"Showcase","text":"The key feature of Documenter, of course, is the ability to automatically include docstrings from your package in the manual. The following example docstrings come from the demo DocumenterShowcase module, the source of which can be found in docs/DocumenterShowcase.jl.","category":"page"},{"location":"cheatsheet/","page":"Showcase","title":"Showcase","text":"To include a docstrings into a manual page, you needs to use an @docs block","category":"page"},{"location":"cheatsheet/","page":"Showcase","title":"Showcase","text":"```@docs\nDocumenterShowcase\n```","category":"page"},{"location":"cheatsheet/","page":"Showcase","title":"Showcase","text":"This will include a single docstring and it will look like this","category":"page"},{"location":"cheatsheet/","page":"Showcase","title":"Showcase","text":"DocumenterShowcase","category":"page"},{"location":"cheatsheet/","page":"Showcase","title":"Showcase","text":"You can include the docstrings corresponding to different function signatures one by one. E.g., the DocumenterShowcase.foo function has two signatures – (::Integer) and (::AbstractString).","category":"page"},{"location":"cheatsheet/","page":"Showcase","title":"Showcase","text":"```@docs\nDocumenterShowcase.foo(::Integer)\n```","category":"page"},{"location":"cheatsheet/","page":"Showcase","title":"Showcase","text":"yielding the following docstring","category":"page"},{"location":"cheatsheet/","page":"Showcase","title":"Showcase","text":"DocumenterShowcase.foo(::Integer)","category":"page"},{"location":"cheatsheet/","page":"Showcase","title":"Showcase","text":"And now, by having DocumenterShowcase.foo(::AbstractString) in the @docs block will give the other docstring","category":"page"},{"location":"cheatsheet/","page":"Showcase","title":"Showcase","text":"DocumenterShowcase.foo(::AbstractString)","category":"page"},{"location":"cheatsheet/","page":"Showcase","title":"Showcase","text":"However, if you want, you can also combine multiple docstrings into a single docstring block. The DocumenterShowcase.bar function has the same signatures as","category":"page"},{"location":"cheatsheet/","page":"Showcase","title":"Showcase","text":"If we just put DocumenterShowcase.bar in an @docs block, it will combine the docstrings as follows:","category":"page"},{"location":"cheatsheet/","page":"Showcase","title":"Showcase","text":"DocumenterShowcase.bar","category":"page"},{"location":"cheatsheet/","page":"Showcase","title":"Showcase","text":"If you have very many docstrings, you may also want to consider using the @autodocs block which can include a whole set of docstrings automatically based on certain filtering options","category":"page"},{"location":"cheatsheet/#An-index-of-docstrings","page":"Showcase","title":"An index of docstrings","text":"","category":"section"},{"location":"cheatsheet/","page":"Showcase","title":"Showcase","text":"The @index block can be used to generate a list of all the docstrings on a page (or even across pages) and will look as follows","category":"page"},{"location":"cheatsheet/","page":"Showcase","title":"Showcase","text":"Pages = [\"showcase.md\"]","category":"page"},{"location":"cheatsheet/#Multiple-uses-of-the-same-symbol","page":"Showcase","title":"Multiple uses of the same symbol","text":"","category":"section"},{"location":"cheatsheet/","page":"Showcase","title":"Showcase","text":"Sometimes a symbol has multiple docstrings, for example a type definition, inner and outer constructors. The example below shows how to use specific ones in the documentation.","category":"page"},{"location":"cheatsheet/","page":"Showcase","title":"Showcase","text":"DocumenterShowcase.Foo\nDocumenterShowcase.Foo()\nDocumenterShowcase.Foo{T}()","category":"page"},{"location":"cheatsheet/#Doctesting-example","page":"Showcase","title":"Doctesting example","text":"","category":"section"},{"location":"cheatsheet/","page":"Showcase","title":"Showcase","text":"Often you want to write code example such as this:","category":"page"},{"location":"cheatsheet/","page":"Showcase","title":"Showcase","text":"julia> f(x) = x^2\nf (generic function with 1 method)\n\njulia> f(3)\n9","category":"page"},{"location":"cheatsheet/","page":"Showcase","title":"Showcase","text":"If you write them as a ```jldoctest code block, Documenter can make sure that the doctest has not become outdated. See Doctests for more information.","category":"page"},{"location":"cheatsheet/","page":"Showcase","title":"Showcase","text":"Script-style doctests are supported too:","category":"page"},{"location":"cheatsheet/","page":"Showcase","title":"Showcase","text":"2 + 2\n# output\n4","category":"page"},{"location":"cheatsheet/#Running-interactive-code","page":"Showcase","title":"Running interactive code","text":"","category":"section"},{"location":"cheatsheet/","page":"Showcase","title":"Showcase","text":"@example block run a code snippet and insert the output into the document. E.g. the following Markdown","category":"page"},{"location":"cheatsheet/","page":"Showcase","title":"Showcase","text":"```@example\n2 + 3\n```","category":"page"},{"location":"cheatsheet/","page":"Showcase","title":"Showcase","text":"becomes the following code-output block pair","category":"page"},{"location":"cheatsheet/","page":"Showcase","title":"Showcase","text":"2 + 3","category":"page"},{"location":"cheatsheet/","page":"Showcase","title":"Showcase","text":"If the last element can be rendered as an image or text/html etc. (the corresponding Base.show method for the particular MIME type has to be defined), it will be rendered appropriately. e.g.:","category":"page"},{"location":"cheatsheet/","page":"Showcase","title":"Showcase","text":"using Main: DocumenterShowcase\nDocumenterShowcase.SVGCircle(\"000\", \"aaa\")","category":"page"},{"location":"cheatsheet/","page":"Showcase","title":"Showcase","text":"This is handy when combined with the Markdown standard library","category":"page"},{"location":"cheatsheet/","page":"Showcase","title":"Showcase","text":"using Markdown\nMarkdown.parse(\"\"\"\n`Markdown.MD` objects can be constructed dynamically on the fly and still get rendered \"natively\".\n\"\"\")","category":"page"},{"location":"cheatsheet/","page":"Showcase","title":"Showcase","text":"If the last value in an @example block is a nothing, the standard output from the blocks' evaluation gets displayed instead","category":"page"},{"location":"cheatsheet/","page":"Showcase","title":"Showcase","text":"println(\"Hello World\")","category":"page"},{"location":"cheatsheet/","page":"Showcase","title":"Showcase","text":"However, do note that if the block prints to standard output, but also has a final non-nothing value, the standard output just gets discarded:","category":"page"},{"location":"cheatsheet/","page":"Showcase","title":"Showcase","text":"println(\"Hello World\")\n42","category":"page"},{"location":"cheatsheet/#REPL-type","page":"Showcase","title":"REPL-type","text":"","category":"section"},{"location":"cheatsheet/","page":"Showcase","title":"Showcase","text":"@repl block can be used to simulate the REPL evaluation of code blocks. For example, the following block","category":"page"},{"location":"cheatsheet/","page":"Showcase","title":"Showcase","text":"```@repl\nusing Statistics\nxs = collect(1:10)\nmedian(xs)\nsum(xs)\n```","category":"page"},{"location":"cheatsheet/","page":"Showcase","title":"Showcase","text":"It gets expanded into something that looks like as if it was evaluated in the REPL, with the julia> prompt prepended etc.:","category":"page"},{"location":"cheatsheet/","page":"Showcase","title":"Showcase","text":"using Statistics\nxs = collect(1:10)\nmedian(xs)\nsum(xs)","category":"page"},{"location":"cheatsheet/#Doctest-showcase","page":"Showcase","title":"Doctest showcase","text":"","category":"section"},{"location":"cheatsheet/","page":"Showcase","title":"Showcase","text":"Currently exists just so that there would be doctests to run in manual pages of Documenter's manual. This page does not show up in navigation.","category":"page"},{"location":"cheatsheet/","page":"Showcase","title":"Showcase","text":"julia> 2 + 2\n4","category":"page"},{"location":"cheatsheet/","page":"Showcase","title":"Showcase","text":"The following doctests needs doctestsetup:","category":"page"},{"location":"cheatsheet/","page":"Showcase","title":"Showcase","text":"julia> Documenter.Utilities.splitexpr(:(Foo.Bar.baz))\n(:(Foo.Bar), :(:baz))","category":"page"},{"location":"cheatsheet/","page":"Showcase","title":"Showcase","text":"Let's also try @meta blocks:","category":"page"},{"location":"cheatsheet/","page":"Showcase","title":"Showcase","text":"DocTestSetup = quote\n  f(x) = x^2\nend","category":"page"},{"location":"cheatsheet/","page":"Showcase","title":"Showcase","text":"julia> f(2)\n4","category":"page"},{"location":"cheatsheet/","page":"Showcase","title":"Showcase","text":"DocTestSetup = nothing","category":"page"},{"location":"visualisation/#Plotting","page":"Plotting","title":"Plotting","text":"","category":"section"},{"location":"visualisation/#scaler-fields:-point-cloud","page":"Plotting","title":"scaler fields: point cloud","text":"","category":"section"},{"location":"visualisation/","page":"Plotting","title":"Plotting","text":"aaa","category":"page"},{"location":"visualisation/#vector-fields:-cones-and-streamlines","page":"Plotting","title":"vector fields: cones and streamlines","text":"","category":"section"},{"location":"visualisation/","page":"Plotting","title":"Plotting","text":"aaaa","category":"page"},{"location":"visualisation/#atomic-structures","page":"Plotting","title":"atomic structures","text":"","category":"section"},{"location":"visualisation/","page":"Plotting","title":"Plotting","text":"aa","category":"page"},{"location":"#Collection-of-code-snippets","page":"Collection of code snippets","title":"Collection of code snippets","text":"","category":"section"},{"location":"","page":"Collection of code snippets","title":"Collection of code snippets","text":"This repo was inspired by the algorithm-archive project.","category":"page"},{"location":"","page":"Collection of code snippets","title":"Collection of code snippets","text":"ih","category":"page"}]
}
