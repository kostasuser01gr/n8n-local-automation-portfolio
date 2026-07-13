# Contributing

This package is intended as a local-first portfolio artifact. Contributions should keep the examples deterministic, sanitized, and easy to run on a local n8n instance.

Before submitting changes:

1. Run `./scripts/validate-release.sh`.
2. Run `./scripts/secret-scan.sh`.
3. Keep workflow exports free of credential IDs and credential data.
4. Do not add `.env`, backups, database directories, or private screenshots.
5. Document any required local path or mount in `docs/IMPORT_GUIDE.md`.
