# Security

## Supported Scope

These workflows are portfolio examples for local n8n and PostgreSQL execution. They are not published as hosted services.

## Reporting Issues

Open a private local issue or contact the repository owner before sharing any suspected secret exposure publicly.

## Secret Handling

This package must not include:

- `.env` files
- database files
- backup archives
- credential exports
- passwords, tokens, API keys, webhook secrets, or private emails

Run `./scripts/secret-scan.sh` before sharing.
