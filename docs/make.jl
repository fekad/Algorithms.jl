using Documenter, Algorithms

makedocs(
    sitename="Algorithms",
    # authors="Adam Fekete",
    repo="https://github.com/fekad/Algorithms.jl/blob/{commit}{path}#L{line}",
    format=Documenter.HTML(),
    pages = [
        "index.md",
        "Visualisation" => [
            "visualisation.md"
        ],
        "cheatsheet.md"
    ]
)

deploydocs(;
    repo="github.com/fekad/Algorithms.jl",
    branch = "gh-pages",
    devbranch = "main",
)