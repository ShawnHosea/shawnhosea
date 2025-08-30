@app
shawnhosea

@aws
timeout 30

@tables
posts
  key *String

webmentions
  key *String

@static
prune true

@plugins
architect/plugin-lambda-invoker
enhance/arc-plugin-enhance
enhance/arc-plugin-styles
enhance/styles-cribsheet
enhance/arc-plugin-block-bots
create-post-metadata
create-rss-feed

@events
check-webmention
  src jobs/events/check-webmention
incoming-webmention
  src jobs/events/incoming-webmention
outgoing-webmention
  src jobs/events/outgoing-webmention

@scheduled
check-rss
  rate 1 day
  src jobs/scheduled/check-rss

@enhance-styles
config theme-minimal.json