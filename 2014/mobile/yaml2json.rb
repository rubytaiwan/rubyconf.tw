#!/usr/bin/env ruby
require 'yaml'
require 'json'

puts JSON.generate(YAML.load(File.read(ARGV[0])), ascii_only: true)
