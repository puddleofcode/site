---
date: 2007-05-09
slug: file-modify
title: File.modify!
tags:
  - ruby
  - tips

section: story
image: ../images/titles/archived.jpg
author: Michał Kalbarczyk
author_image: ../images/authors/michal.png
---

Here is a little ruby File class method called modify!.
This simple method allows you to invoke a block on file content - array of chomped lines.

This beautiful method looks like this ;)

```ruby
class File
  def self.modify!( filename, &block )
    file = open( filename, 'r+' )
    lines = file.readlines.collect! do |line|
      line.chomp
    end
    yield lines
    file.pos = 0
    file.print(lines.join("\n"))
    file.truncate(file.pos)
    file.close
  end
end
```

And it can be use it like this:

```ruby
File.modify!('somefile.txt') do |lines|
  lines.collect! do |line|
    line.upcase+"!"
  end
  lines << "new line"
end
```

For now it's too small to make a gem. But maybe I'll add some similar object methods, who knows ;)
