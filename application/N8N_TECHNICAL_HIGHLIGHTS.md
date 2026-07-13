# n8n Technical Highlights

Repository: https://github.com/kostasuser01gr/n8n-local-automation-portfolio

## Workflow Engineering

- Built three local-first n8n workflows with verified PostgreSQL persistence.
- Used supported n8n import, export, and execution paths.
- Avoided direct manipulation of n8n internal workflow tables.
- Connected PostgreSQL nodes through one local credential named `Local n8n Postgres`.
- Preserved a narrow scope: workflow execution and evidence, not platform redesign.

## PostgreSQL Persistence

- Verified inserts through direct row counts and report scripts.
- Captured count evidence for each project.
- Kept PostgreSQL internal to the Docker network.
- Used schemas and sample data packaged with the release.

Verified counts:

- `job_applications=2`, `job_import_runs=1`, `job_import_rejections=0`
- `fleet_vehicles=3`, `fleet_operation_runs=1`
- `knowledge_documents=3`, `knowledge_processing_runs=1`

## Infrastructure Ownership

- Operated n8n locally on macOS Apple Silicon.
- Used Docker and Colima with external-disk-backed persistence.
- Kept persistent data under the local n8n service root on external storage.
- Validated Docker services, external storage, and backups.
- Maintained local-first boundaries without adding hosted dependencies.

## Debugging

- Diagnosed workflow execution from actual runtime behavior.
- Resolved a CLI task broker port conflict by separating the CLI execution broker from the running n8n service.
- Resolved file-node access failure with scoped `N8N_RESTRICT_FILE_ACCESS_TO` entries.
- Checked credentials, host names, SQL behavior, mount visibility, and workflow inputs during execution verification.

## Release Engineering

- Created sanitized workflow exports for review.
- Removed credential IDs, owner metadata, and local runtime import paths from release artifacts.
- Prepared `github-release/` with workflows, schemas, sample data, screenshots, case studies, docs, and validation scripts.
- Confirmed release package validation passed.
- Confirmed final secret scan passed.

## Security Awareness

- Did not print database passwords or secrets in deliverables.
- Used `.env` values locally without copying secrets into package files.
- Sanitized screenshots and text evidence.
- Redacted n8n resume tokens and runner IDs from final-output evidence.
- Confirmed no high-risk secret markers remained in the final scan report.

## Documentation

- Wrote project READMEs, case studies, evidence files, release docs, and application materials.
- Organized the package so a reviewer can inspect workflow behavior and validation evidence without needing hidden context.
