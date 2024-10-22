var documenterSearchIndex = {"docs":
[{"location":"walkthrough/#Walkthrough-of-a-typical-contribution","page":"Walkthrough","title":"Walkthrough of a typical contribution","text":"","category":"section"},{"location":"issues/#Filing-issues","page":"Issues","title":"Filing issues","text":"","category":"section"},{"location":"issues/#Triaging-issues","page":"Issues","title":"Triaging issues","text":"","category":"section"},{"location":"issues/#GitHub-labels","page":"Issues","title":"GitHub labels","text":"","category":"section"},{"location":"issues/#Status","page":"Issues","title":"Status","text":"","category":"section"},{"location":"issues/","page":"Issues","title":"Issues","text":"status:X labels indicates where the issue/PR is situated in its lifecycle, and any actions that need to be taken regarding it.","category":"page"},{"location":"issues/#Prompts-for-action","page":"Issues","title":"Prompts for action","text":"","category":"section"},{"location":"issues/","page":"Issues","title":"Issues","text":"awaiting review\nhelp wanted\nmerge me\nneeds compat annotation\nneeds decision\nneeds docs\nneeds more info\nneeds nanosoldier run\nneeds news\nneeds pkgeval\nneeds tests\nwaiting for author","category":"page"},{"location":"issues/#Calls-for-help","page":"Issues","title":"Calls for help","text":"","category":"section"},{"location":"issues/","page":"Issues","title":"Issues","text":"MWE wanted\nbisect wanted\nforget me not\npriority\nrr trace wanted\ntriage","category":"page"},{"location":"issues/#Other","page":"Issues","title":"Other","text":"","category":"section"},{"location":"issues/","page":"Issues","title":"Issues","text":"DO NOT MERGE","category":"page"},{"location":"issues/#Kind","page":"Issues","title":"Kind","text":"","category":"section"},{"location":"issues/","page":"Issues","title":"Issues","text":"The general nature of the issue/PR","category":"page"},{"location":"issues/#General-kinds","page":"Issues","title":"General kinds","text":"","category":"section"},{"location":"issues/","page":"Issues","title":"Issues","text":"breaking\nexperimental\nfeature\ninvalid\njulep\nminor change\nregression\nspam\nspeculative\nupstream","category":"page"},{"location":"issues/#Kinds-of-bugs","page":"Issues","title":"Kinds of bugs","text":"","category":"section"},{"location":"issues/","page":"Issues","title":"Issues","text":"bug\nbugfix\nembarassing bugfix\nheisenbug\ncorrectness bug\nasan trophy case\nkernel bug","category":"page"},{"location":"issues/#Issue-specific-kinds","page":"Issues","title":"Issue specific kinds","text":"","category":"section"},{"location":"issues/","page":"Issues","title":"Issues","text":"duplicate\ngood first issue\npotential benchmark\nrr trace included","category":"page"},{"location":"issues/#PR-specific-kinds","page":"Issues","title":"PR specific kinds","text":"","category":"section"},{"location":"issues/","page":"Issues","title":"Issues","text":"deprecation\ndon't squash\nexcision\nre-land\nrevert\nrelease","category":"page"},{"location":"issues/#Systems","page":"Issues","title":"Systems","text":"","category":"section"},{"location":"issues/","page":"Issues","title":"Issues","text":"system:X labels indicate the nature of the system the issue/PR pertains to, whether that be the hardware architecture or operating system. ","category":"page"},{"location":"issues/","page":"Issues","title":"Issues","text":"apple silicon rosetta\napple silicon\narm\nfreebsd\nlinux\nmac\nMS-DOS\npowerpc\nriscv\nwindows\nwine\nx86","category":"page"},{"location":"issues/#Domains","page":"Issues","title":"Domains","text":"","category":"section"},{"location":"issues/","page":"Issues","title":"Issues","text":"domain:X labels indicate broad areas of the Julia codebase that aren't contained to a single module.","category":"page"},{"location":"issues/","page":"Issues","title":"Issues","text":"arrays:sparse\narrays\nartifacts\nbignums\nbroadcast\nbuilding\nci, continuous integration\ncmd, calling of external programs\ncode coverage\ncollections, data structures holding multiple items\ncomplex, complex numbers\ndates, the Dates stdlib and anything else date/time related\ndisplay and printing\ndocs\nembedding\nequality\nerror handling\nerror messages\nffi\nfilesystem\nfloat16\nfold\ngpu\nhashing\nio\niteration\nlinear algebra\nmaths\nmissing data\nmultithreading\npackages\nparallelism\nrandomness\nranges\nrationals\nsearch & find\nsorting\nstatistics\nstrings\ntooling\ntypes and dispatch\nunicode","category":"page"},{"location":"issues/#Compiler","page":"Issues","title":"Compiler","text":"","category":"section"},{"location":"issues/","page":"Issues","title":"Issues","text":"codegen\neffects\ninference\ninterpreter\nlatency\nllvm\nlowering\nmusl\noptimizer\nplugins\nprecompilation\nsimd\ntraits\nwasm","category":"page"},{"location":"issues/#Stdlibs","page":"Issues","title":"Stdlibs","text":"","category":"section"},{"location":"issues/","page":"Issues","title":"Issues","text":"JLLs\nREPL\nTOML\nmarkdown","category":"page"},{"location":"issues/#Uncategorised","page":"Issues","title":"Uncategorised","text":"","category":"section"},{"location":"issues/","page":"Issues","title":"Issues","text":"GC\nHacktoberfest\nbuild\ncaching\ndesign\nerror messages\nexistential crisis\nlibgit2 (stdlib or something else?)\nlogging (stdlib or more general?)\nmacros (compiler? domain?)\nmodules (domain? syntax?)\nmysys2 (delete?)\nobservability\nparser\nperformance\npkgimage\nprofiler\nrelease\nsecurity\nsemantic conflict\nsockets (stdlib or more general?)\ntest (sdlib vs tests of Julia itself)\ntestsystem","category":"page"},{"location":"issues/","page":"Issues","title":"Issues","text":"We also have the family of backport/version related labels.","category":"page"},{"location":"issues/#Rare/obselete-labels","page":"Issues","title":"Rare/obselete labels","text":"","category":"section"},{"location":"issues/","page":"Issues","title":"Issues","text":"Labels that should probably be removed or repurposed, based on either the exitance of better labels or rare usage.","category":"page"},{"location":"issues/","page":"Issues","title":"Issues","text":"domain:artifacts: rarely used\nexistential crisis: merge into general \"!?!?\"-label\nlinalg triage: only 5 labels, fold into triage?\nmysys2: only 2 labels\nsemtantic conflict: only 1 label\nrelease: only 3 labels","category":"page"},{"location":"issues/#Triage-team","page":"Issues","title":"Triage team","text":"","category":"section"},{"location":"code/#Basic-checklist","page":"Code","title":"Basic checklist","text":"","category":"section"},{"location":"code/#Kinds-of-code-contributions","page":"Code","title":"Kinds of code contributions","text":"","category":"section"},{"location":"code/#Core-functionality-or-base-libraries","page":"Code","title":"Core functionality or base libraries","text":"","category":"section"},{"location":"code/#The-standard-library","page":"Code","title":"The standard library","text":"","category":"section"},{"location":"code/#Patch-releases","page":"Code","title":"Patch releases","text":"","category":"section"},{"location":"code/#Tests","page":"Code","title":"Tests","text":"","category":"section"},{"location":"code/#Formatting-guidelines","page":"Code","title":"Formatting guidelines","text":"","category":"section"},{"location":"code/#reviewing","page":"Code","title":"Reviewing code","text":"","category":"section"},{"location":"code/#Tips","page":"Code","title":"Tips","text":"","category":"section"},{"location":"proposals/#Proposing-changes-and-new-features","page":"Proposing changes","title":"Proposing changes and new features","text":"","category":"section"},{"location":"proposals/#Small-changes","page":"Proposing changes","title":"Small changes","text":"","category":"section"},{"location":"proposals/#Large-changes","page":"Proposing changes","title":"Large changes","text":"","category":"section"},{"location":"#Introduction","page":"Julia Developer's Guide","title":"Introduction","text":"","category":"section"},{"location":"","page":"Julia Developer's Guide","title":"Julia Developer's Guide","text":"The Julia project thrives on the efforts of it's community to help improve the project. We'd love to help you get involved too! This guide is a comprehensive resource for new and experienced contributors alike. There are many more ways to contribute than just submitting code, all highly valuable and greatly appreciated 😍.","category":"page"},{"location":"#Types-of-contributions","page":"Julia Developer's Guide","title":"Types of contributions","text":"","category":"section"},{"location":"","page":"Julia Developer's Guide","title":"Julia Developer's Guide","text":"Filing an issue\nContributing code\nReviewing submitted pull requests\nProposing changes\nImproving the documentation","category":"page"},{"location":"#Asking-questions","page":"Julia Developer's Guide","title":"Asking questions","text":"","category":"section"},{"location":"","page":"Julia Developer's Guide","title":"Julia Developer's Guide","text":"The discourse forum and zulip chat are great places to ask questions. On discourse we have the new to Julia and General Usage categories, and Zulip has #helpdesk. We also have a Julia Slack and an (unofficial) Discord server.","category":"page"},{"location":"","page":"Julia Developer's Guide","title":"Julia Developer's Guide","text":"Please ask questions! Don't worry about \"wasting expert time\", contributors are important to us. If you feel comfortable, it's good to ask questions in public spaces so others can see the questions and answers, and learn from them too.","category":"page"},{"location":"#Code-of-conduct","page":"Julia Developer's Guide","title":"Code of conduct","text":"","category":"section"},{"location":"","page":"Julia Developer's Guide","title":"Julia Developer's Guide","text":"We want to maintain a friendly and welcoming environment; all interactions in official Julia spaces should respect the community standards.","category":"page"},{"location":"developers/#Core-developers","page":"Core Developers","title":"Core developers","text":"","category":"section"},{"location":"developers/#Accepting-pull-requests","page":"Core Developers","title":"Accepting pull requests","text":"","category":"section"},{"location":"developers/#Areas-of-expertise","page":"Core Developers","title":"Areas of expertise","text":"","category":"section"},{"location":"developers/#Base-Julia","page":"Core Developers","title":"Base Julia","text":"","category":"section"},{"location":"developers/","page":"Core Developers","title":"Core Developers","text":"Sorting: Lilith Hafner (@LilithHafner)","category":"page"},{"location":"developers/#Standard-Library","page":"Core Developers","title":"Standard Library","text":"","category":"section"},{"location":"developers/","page":"Core Developers","title":"Core Developers","text":"JuliaSyntaxHighlighting: Timothy (@tecosaur)\nJuliaSyntax: Claire Foster (@c42f)\nLinearAlgebra: Daniel Karrasch (@dkarrasch)\nSparseArrays: Daniel Karrasch (@dkarrasch)\nStyledStrings: Timothy (@tecosaur)","category":"page"},{"location":"developers/#Other","page":"Core Developers","title":"Other","text":"","category":"section"},{"location":"developers/","page":"Core Developers","title":"Core Developers","text":"Continuous Integration (CI): Dilum Aluthge (@DilumAluthge)\nBuildKite: Dilum Aluthge (@DilumAluthge)\nJuliaup: David Anthoff (@davidanthoff)","category":"page"},{"location":"developers/#Becoming-a-core-developer","page":"Core Developers","title":"Becoming a core developer","text":"","category":"section"}]
}