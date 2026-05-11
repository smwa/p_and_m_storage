source "https://rubygems.org"

ruby "~> 3.3"

gem "jekyll", "~> 4.3"
gem "webrick", "~> 1.8"

group :jekyll_plugins do
  gem "jekyll-target-blank"
  gem "jekyll-webp", "~> 1.0"
  gem "jekyll-remove-file-extension"
  gem "jekyll-resize", git: "https://github.com/MichaelCurrin/jekyll-resize"
end

# Windows and JRuby does not include zoneinfo files
platforms :windows, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.1", platforms: :windows
