---
section: til
date: 2019-05-16
title: How to get state of any GenServer in Elixir?
author: Michał Kalbarczyk
author_image: ../images/authors/michal.png
---
To get state of any process in erlang/elixir use `:sys.get_state/1`


By name:
```elixir
:sys.get_state(MyGenServer)
```

By pid:
```elixir
:sys.get_state(pid)
```