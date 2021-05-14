using Documenter, Algorithms

makedocs(
    sitename="Algorithms",
    repo="https://github.com/fekad/Algorithms.jl/blob/{commit}{path}#L{line}",
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
    devbranch = "main"
)