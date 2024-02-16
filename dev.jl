#!/usr/bin/env -S julia --startup-file=no

using LiveServer
servedocs(doc_env=true, foldername=@__DIR__)
