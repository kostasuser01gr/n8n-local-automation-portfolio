# GitHub Release Plan

## Repository Description

Verified local-first n8n automation portfolio with PostgreSQL persistence, Docker/Colima self-hosting, workflow evidence, security checks, and three executed case studies.

## Topics

- `n8n`
- `automation`
- `workflow-automation`
- `workflow-engineering`
- `self-hosted`
- `postgresql`
- `docker`
- `colima`
- `local-first`
- `ai-workflows`
- `ollama`
- `developer-tools`
- `operations-automation`
- `macos`
- `open-source`
- `portfolio`

## Social Preview Text

Three local-first n8n workflows with PostgreSQL persistence, verified execution evidence, sanitized exports, screenshots, validation scripts, and application materials.

Preview asset: `assets/social-preview.png`

## Suggested First Release

Tag: `v0.1.0`

Title: `v0.1.0 - Verified local-first n8n portfolio`

## First Release Notes

This first release packages three verified local n8n workflows:

- Job Application Intelligence Pipeline
- Fleet Operations Automation System
- Local AI Knowledge Workflow

Included:

- Sanitized n8n workflow exports
- PostgreSQL schemas
- Sample data
- Authenticated UI screenshots
- Final-output evidence
- Case studies
- Import guide
- Release validation script
- Secret scan script
- n8n application package materials

Verified persistence:

- `job_applications=2`, `job_import_runs=1`, `job_import_rejections=0`
- `fleet_vehicles=3`, `fleet_operation_runs=1`
- `knowledge_documents=3`, `knowledge_processing_runs=1`

Limitations:

- Local verified portfolio only
- Small sample data
- No live service usage claimed
- No private credentials or environment values included

## Publish Order

1. Confirm `./scripts/validate-release.sh` passes.
2. Confirm `./scripts/secret-scan.sh` passes.
3. Confirm remote URL is configured correctly.
4. Push `main`.
5. Create tag `v0.1.0`.
6. Publish release notes from this file.
7. Add repository description and topics.
8. Submit application materials only after reviewing the public repository.
