#!/usr/bin/env bash
set -euo pipefail

root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$root"

patterns='(n8n_enc_|n8n_sec_|localN8nPostgres01|/Volumes/CORSAIR|/Users/user|X-N8N-API-KEY|Bearer[[:space:]]+[A-Za-z0-9._-]{20,}|password[[:space:]]*[:=][[:space:]]*[^[:space:]]{8,})'

echo "Running sanitized package secret scan..."
if rg -n -i "$patterns" --glob '!/.git/**' --glob '!scripts/secret-scan.sh' --glob '!scripts/validate-release.sh' .; then
  echo "Potential secret/private value pattern found. Review output above." >&2
  exit 1
fi

echo "Secret scan passed."
