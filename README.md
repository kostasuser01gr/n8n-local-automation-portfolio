# Local-First n8n Portfolio Workflows

This package contains three sanitized n8n workflow examples that were executed locally and verified against PostgreSQL persistence.

## Included Projects

| Project | Verified result |
|---|---:|
| Job Application Intelligence Pipeline | 2 job rows, 1 import run, 0 rejections |
| Fleet Operations Automation System | 3 fleet vehicle rows, 1 operation run |
| Local AI Knowledge Workflow | 3 knowledge document rows, 1 processing run |

## Contents

- `workflows/`: sanitized n8n workflow exports
- `schemas/`: PostgreSQL schemas required by the workflows
- `sample-data/`: shareable sample inputs
- `case-studies/`: evidence-based project writeups
- `screenshots/`: screenshot manifests and auth-boundary proof
- `docs/`: import, validation, and execution notes
- `scripts/`: local validation and secret scan helpers

## Quick Validation

```bash
./scripts/validate-release.sh
./scripts/secret-scan.sh
```

## Import Notes

Create a PostgreSQL credential in n8n named `Local n8n Postgres`, apply the relevant schema, import the workflow JSON, confirm every PostgreSQL node uses that credential, and execute locally.

No live credentials, database files, backups, or private environment files are included.
