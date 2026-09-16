#!/usr/bin/env bash
# Verify each YouTube ID on three axes:
#   1. oEmbed          — the video exists and is public (returns real title/author)
#   2. playability     — watch-page playabilityStatus is OK, NOT members-only / private /
#                        age-gated / region-blocked. oEmbed and the IFrame API both PASS
#                        members-only videos, so this check is the one that matters.
#   3. embeddable      — see tools/embedtest.html (IFrame Player API onError 101/150)
# Usage: ./verify_videos.sh ids.txt   (one ID per line)
UA="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124 Safari/537.36"
printf "%-14s %-6s %-11s %s\n" "ID" "OEMB" "PLAYABLE" "TITLE / AUTHOR / REASON"
fails=0
while read -r id rest; do
  [ -z "$id" ] && continue
  case "$id" in \#*) continue;; esac

  oe=$(curl -s -m 25 -A "$UA" "https://www.youtube.com/oembed?url=https%3A//www.youtube.com/watch%3Fv%3D${id}&format=json")
  if [ "$(printf '%s' "$oe" | head -c 1)" = "{" ]; then
    title=$(printf '%s' "$oe" | python3 -c 'import sys,json;d=json.load(sys.stdin);print(d.get("title","?")+"  ~ "+d.get("author_name","?"))' 2>/dev/null)
    ok="LIVE"
  else
    title="(not available)"; ok="DEAD"
  fi

  page=$(curl -s -m 25 -A "$UA" "https://www.youtube.com/watch?v=${id}")
  status=$(printf '%s' "$page" | grep -o '"playabilityStatus":{"status":"[A-Z_]*"' | head -1 | sed 's/.*"status":"//;s/"//')
  [ -z "$status" ] && status="UNKNOWN"
  gated=""
  printf '%s' "$page" | grep -q 'ypcMetadataRenderer\|Members-only\|membersOnly' && gated=" [MEMBERS-ONLY]"

  if [ "$ok" != "LIVE" ] || [ "$status" != "OK" ]; then fails=$((fails+1)); mark="** "; else mark="   "; fi
  printf "%s%-11s %-6s %-11s %s%s\n" "$mark" "$id" "$ok" "$status" "$title" "$gated"
done < "$1"
echo "----"
[ "$fails" -eq 0 ] && echo "ALL PASS" || echo "$fails FAILED (marked **)"
