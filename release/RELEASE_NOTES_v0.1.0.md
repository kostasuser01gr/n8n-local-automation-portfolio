# v0.1.0 - Verified Local-First n8n Portfolio

This release packages three verified local n8n workflows with PostgreSQL-backed persistence evidence.

## Included Workflows

- Job Application Intelligence Pipeline
- Fleet Operations Automation System
- Local AI Knowledge Workflow

## Included Artifacts

- Sanitized n8n workflow exports
- PostgreSQL schemas
- Sample data
- Authenticated n8n UI screenshots
- Final-output evidence
- Case studies
- Import guide
- Sanitization notes
- Release validation script
- Secret scan script
- Application package materials

## Verified Persistence

- `job_applications=2`, `job_import_runs=1`, `job_import_rejections=0`
- `fleet_vehicles=3`, `fleet_operation_runs=1`
- `knowledge_documents=3`, `knowledge_processing_runs=1`

## Validation

Before publication, run:

```bash
./scripts/validate-release.sh
./scripts/secret-scan.sh
```

## Scope

This is a local verified workflow portfolio. It does not include private environment files, database files, backups, credential exports, or live credentials.
