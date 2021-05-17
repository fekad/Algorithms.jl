using Documenter, Algorithms

makedocs(
    sitename="Algorithms",
    # repo="https://github.com/fekad/Algorithms.jl/blob/{commit}{path}#L{line}",
    pages = [
        "index.md",
        "Semiclassical models" => [
            "Drude model" => "semiclassical_models/drude.md",
            "Lorentz modes" => "semiclassical_models/lorentz.md",
            "Gaussian" => "semiclassical_models/gaussian.md",
            "Voigt" => "semiclassical_models/voigt.md",
        ],
        "Visualisation/Plotting" => [
            "plotting/pointcloud.md",
            "plotting/atomic_structures.md"
        ],
    ]
)

deploydocs(;
    repo="github.com/fekad/Algorithms.jl",
    devbranch = "main"
)