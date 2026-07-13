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
- `screenshots/`: verified authenticated n8n UI screenshots and final-output evidence
- `docs/`: import, validation, and execution notes
- `scripts/`: local validation and secret scan helpers

## Verified Screenshots

| Project | Workflow canvas | Successful execution |
|---|---|---|
| Job Application Intelligence Pipeline | [Canvas](screenshots/job-tracker/workflow-canvas.png) | [Execution](screenshots/job-tracker/successful-execution-green-nodes.png) |
| Fleet Operations Automation System | [Canvas](screenshots/fleet-operations/workflow-canvas.png) | [Execution](screenshots/fleet-operations/successful-execution-green-nodes.png) |
| Local AI Knowledge Workflow | [Canvas](screenshots/local-ai-knowledge/workflow-canvas.png) | [Execution](screenshots/local-ai-knowledge/successful-execution-green-nodes.png) |

## Quick Validation

```bash
./scripts/validate-release.sh
./scripts/secret-scan.sh
```

## Import Notes

Create a PostgreSQL credential in n8n named `Local n8n Postgres`, apply the relevant schema, import the workflow JSON, confirm every PostgreSQL node uses that credential, and execute locally.

No live credentials, database files, backups, or private environment files are included.
