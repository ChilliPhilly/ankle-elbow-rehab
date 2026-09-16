#!/usr/bin/env bash
# Verify each YouTube ID: (a) exists & is public via oEmbed, (b) is embeddable via the /embed page.
# Usage: ./verify_videos.sh ids.txt   (one ID per line, optional "  # label" comment)
UA="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124 Safari/537.36"
printf "%-14s %-6s %-6s %s\n" "ID" "OEMB" "EMBED" "TITLE / AUTHOR"
while read -r id rest; do
  [ -z "$id" ] && continue
  case "$id" in \#*) continue;; esac
  oe=$(curl -s -m 25 -A "$UA" "https://www.youtube.com/oembed?url=https%3A//www.youtube.com/watch%3Fv%3D${id}&format=json")
  code=$(printf '%s' "$oe" | head -c 1)
  if [ "$code" = "{" ]; then
    title=$(printf '%s' "$oe" | python3 -c 'import sys,json; d=json.load(sys.stdin); print(d.get("title","?")+"  ~ "+d.get("author_name","?"))' 2>/dev/null)
    ok="LIVE"
  else
    title="(not available: $(printf '%s' "$oe" | head -c 60))"; ok="DEAD"
  fi
  emb=$(curl -s -m 25 -A "$UA" "https://www.youtube.com/embed/${id}" | grep -o '"playableInEmbed":[a-z]*' | head -1 | cut -d: -f2)
  [ -z "$emb" ] && emb="?"
  printf "%-14s %-6s %-6s %s\n" "$id" "$ok" "$emb" "$title"
done < "$1"
