#!/usr/bin/env bash
set -euo pipefail

root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$root"

echo "Validating workflow JSON..."
find workflows -name '*.json' -type f -print0 | while IFS= read -r -d '' file; do
  jq -e . "$file" >/dev/null
done

echo "Validating sample JSON..."
find sample-data -name '*.json' -type f -print0 | while IFS= read -r -d '' file; do
  jq -e . "$file" >/dev/null
done

echo "Checking required docs..."
test -f README.md
test -f docs/IMPORT_GUIDE.md
test -f docs/EXECUTION_SUMMARY.md
test -f docs/SANITIZATION.md

echo "Checking release workflows do not contain local credential id..."
credential_marker='localN8n'"Postgres01"
private_volume='/Volumes/'"CORSAIR"
private_user='/Users/'"user"
if rg -n "${credential_marker}|${private_volume}|${private_user}|POSTGRES_PASSWORD|N8N_ENCRYPTION_KEY" workflows docs sample-data case-studies screenshots; then
  echo "Potential private value found." >&2
  exit 1
fi

echo "Release validation passed."
