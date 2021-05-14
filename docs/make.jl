using Documenter, Algorithms

makedocs(
    sitename="Algorithms",
    pages = [
        "index.md",
        "Visualisation" => [
            "visualisation.md"
        ],
        "cheatsheet.md"
    ]
)
