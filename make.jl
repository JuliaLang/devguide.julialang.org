#!/usr/bin/env -S julia --startup-file=no

using Documenter

makedocs(
    modules = Module[],
    format = Documenter.HTML(),
    clean = true,
    pages = [
        "Julia Developer's Guide" => "index.md",
        "Issues" => "issues.md",
        "Documentation" => "documentation.md",
        "Proposing changes" => "proposals.md",
        "Code" => "code.md",
        "Walkthrough" => "walkthrough.md",
        "Core Developers" => "developers.md",
    ],
    sitename = "Julia Developer's Guide",
    authors = "The Julia Project",
)

deploydocs(
    repo = "JuliaLang/devguide.julialang.org",
    cname = "devguide.julialang.org",
    devbranch = "main",
    versions = nothing
)
