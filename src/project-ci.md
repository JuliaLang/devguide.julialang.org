# Project CI

## Build matrix

We want to test all tier 1 platforms with typical julia versions.

Tier 1 github action arch:

- `[ubuntu-latest, windows-latest, macos-15-intel] x [x64]`
- `[macos-latest] x [arm64]`
- `[ubuntu-latest, windows-latest] x [x86]`

Julia versions:

- `['lts', '1', 'nightly']`

```yml

```

## Julia supported platforms

[Julia tiers of support](https://julialang.org/downloads/support/)

- Tier 1 platforms: `linux-glibc-[x64|x86]`, `windows-[x64|x86]`, `macos-[aarch64|x64]`
- Tier 2 platforms:
  - `linux-glibc-aarch64`
  - `FreeBSD-x64`
  - `windows-wsl2-ubuntu-x64`
  - `windows-x86`: Prism (x86 on ARM emulation)
  - `macos-x86`: Rosetta 2 (x86 on ARM emulation)

## Github CI Arch

[GitHub-hosted runners Arch - GitHub Docs](https://docs.github.com/en/actions/reference/runners/github-hosted-runners)

- `[ubuntu-latest, windows-latest, macos-15-intel] x [x64]`
- `[ubuntu-24.04-arm, windows-11-arm, macos-latest] x [arm64]`
