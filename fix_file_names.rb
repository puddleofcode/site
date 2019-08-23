#!/usr/bin/ruby
require 'yaml'
require 'fileutils'

def check_filename(path)
  frontmatter = YAML.load_file(path)
  case frontmatter["section"]
  when "story"
    check_story(path, frontmatter)
  # when "til"
  #   check_til(path, frontmatter)
  else
    []
  end
end

def check_story(path, frontmatter)
  dir_name = File.dirname(path)
  file_name = File.basename(path)
  proper_file_name = "#{frontmatter['date']}-#{frontmatter['slug']}.md"
  if file_name == proper_file_name
    []
  else
    [{from: path, to: "#{dir_name}/#{proper_file_name}"}]
  end
end

# def check_til(path, frontmatter)
#   dir_name = File.dirname(path)
#   file_name = File.basename(path)
#   proper_file_name = "#{frontmatter['date']}-#{frontmatter['slug']}.md"
#   if file_name == proper_file_name
#     []
#   else
#     [{from: path, to: "#{dir_name}/#{proper_file_name}"}]
#   end
# end

to_rename = []

Dir.glob('cms/**/*.md') {|file_name|
  to_rename += check_filename(file_name)
}

to_rename.each do |move|
  puts "Ranaming #{move[:from]} to #{move[:to]}..."
  FileUtils.mv(move[:from], move[:to])
end
