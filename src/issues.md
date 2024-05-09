# Filing issues

# Triaging issues

# GitHub labels

## Status

`status:X` labels indicates where the issue/PR is situated in its lifecycle, and
any actions that need to be taken regarding it.

### Prompts for action

- `awaiting review`
- `help wanted`
- `merge me`
- `needs compat annotation`
- `needs decision`
- `needs docs`
- `needs more info`
- `needs nanosoldier run`
- `needs news`
- `needs pkgeval`
- `needs tests`
- `waiting for author`

### Calls for help

- `MWE wanted`
- `bisect wanted`
- `forget me not`
- `priority`
- `rr trace wanted`
- `triage`

### Other

- `DO NOT MERGE`

## Kind

The general nature of the issue/PR

### General kinds

- `breaking`
- `experimental`
- `feature`
- `invalid`
- `julep`
- `minor change`
- `regression`
- `spam`
- `speculative`
- `upstream`

### Kinds of bugs

- `bug`
- `bugfix`
- `embarassing bugfix`
- `heisenbug`
- `correctness bug`
- `asan trophy case`
- `kernel bug`

### Issue specific kinds

- `duplicate`
- `good first issue`
- `potential benchmark`
- `rr trace included`

### PR specific kinds

- `deprecation`
- `don't squash`
- `excision`
- `re-land`
- `revert`
- `release`

## Systems

`system:X` labels indicate the nature of the system the issue/PR pertains to,
whether that be the hardware architecture or operating system. 

- `apple silicon rosetta`
- `apple silicon`
- `arm`
- `freebsd`
- `linux`
- `mac`
- `MS-DOS`
- `powerpc`
- `riscv`
- `windows`
- `wine`
- `x86`

## Domains

`domain:X` labels indicate broad areas of the Julia codebase that aren't
contained to a single module.

- `arrays:sparse`
- `arrays`
- `artifacts`
- `bignums`
- `broadcast`
- `building`
- `ci`, continuous integration
- `cmd`, calling of external programs
- `code coverage`
- `collections`, data structures holding multiple items
- `complex`, complex numbers
- `dates`, the `Dates` stdlib and anything else date/time related
- `display and printing`
- `docs`
- `embedding`
- `equality`
- `error handling`
- `error messages`
- `ffi`
- `filesystem`
- `float16`
- `fold`
- `gpu`
- `hashing`
- `io`
- `iteration`
- `linear algebra`
- `maths`
- `missing data`
- `multithreading`
- `packages`
- `parallelism`
- `randomness`
- `ranges`
- `rationals`
- `search & find`
- `sorting`
- `statistics`
- `strings`
- `tooling`
- `types and dispatch`
- `unicode`

## Compiler

- `codegen`
- `effects`
- `inference`
- `interpreter`
- `latency`
- `llvm`
- `lowering`
- `musl`
- `optimizer`
- `plugins`
- `precompilation`
- `simd`
- `traits`
- `wasm`

## Stdlibs

- `JLLs`
- `REPL`
- `TOML`
- `markdown`

## Uncategorised

- `GC`
- `Hacktoberfest`
- `build`
- `caching`
- `design`
- `error messages`
- `existential crisis`
- `libgit2` (stdlib or something else?)
- `logging` (stdlib or more general?)
- `macros` (compiler? domain?)
- `modules` (domain? syntax?)
- `mysys2` (delete?)
- `observability`
- `parser`
- `performance`
- `pkgimage`
- `profiler`
- `release`
- `security`
- `semantic conflict`
- `sockets` (stdlib or more general?)
- `test` (sdlib vs tests of Julia itself)
- `testsystem`

We also have the family of backport/version related labels.

## Rare/obselete labels

Labels that should probably be removed or repurposed, based on either the exitance of better labels or rare usage.

- `domain:artifacts`: rarely used
- `existential crisis`: merge into general "!?!?"-label
- `linalg triage`: only 5 labels, fold into `triage`?
- `mysys2`: only 2 labels
- `semtantic conflict`: only 1 label
- `release`: only 3 labels

# Triage team
