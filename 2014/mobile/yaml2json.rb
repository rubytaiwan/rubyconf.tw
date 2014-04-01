#!/usr/bin/env ruby
require 'yaml'
require 'json'

puts YAML.load(File.read(ARGV[0])).to_json
