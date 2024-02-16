#!/usr/bin/env -S julia --startup-file=no

using Documenter

makedocs(;
    modules = Module[],
    format = Documenter.HTML(),
    clean = true,
    pages = [
        "Julia Developer's Guide" => "index.md",
    ],
    sitename = "Julia Developer's Guide",
    authors = "The Julia Project",
)

deploydocs(;
    repo="github.com/tecosaur/julia-dev-guide.jl",
    devbranch = "main",
    versions = nothing
)
