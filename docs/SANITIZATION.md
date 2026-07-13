# Sanitization Notes

The release workflows were exported from live n8n and then sanitized before packaging.

Sanitization performed:

- Removed PostgreSQL credential IDs from workflow node credentials.
- Excluded credential data and credential exports.
- Replaced the Job Tracker local import path with `/files/job-tracker/jobs-import-example.json`.
- Excluded backups, live `.env`, database files, and raw local evidence containing private filesystem paths.

Run `scripts/secret-scan.sh` before sharing the package.
