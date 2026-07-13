# Workflow Template Submission Draft

## Template Candidate

Job Application Intelligence Pipeline

## Summary

This n8n workflow imports job application sample data, writes application records to PostgreSQL, records an import run, and tracks rejected rows.

## Use Case

The workflow is useful for builders who want an example of local file import, PostgreSQL persistence, import audit records, and evidence-based workflow validation.

## Verified Result

- `job_applications=2`
- `job_import_runs=1`
- `job_import_rejections=0`

## Requirements

- Local n8n instance
- PostgreSQL database
- PostgreSQL credential named `Local n8n Postgres`
- Schema files from `schemas/job-tracker/`
- Sample data from `sample-data/job-tracker/`
- Scoped n8n file access for the sample-data path

## Setup

1. Apply `schemas/job-tracker/job-tracker-schema.sql`.
2. Apply `schemas/job-tracker/job-import-audit-schema.sql`.
3. Create a local PostgreSQL credential in n8n.
4. Import `workflows/job-tracker/job-application-intelligence.release.workflow.json`.
5. Assign the PostgreSQL credential to every PostgreSQL node.
6. Update the file path if needed for your local n8n environment.
7. Execute manually.
8. Query PostgreSQL to confirm row counts.

## Evidence Included

- Workflow canvas screenshot
- Successful execution screenshot
- Final-output evidence
- Case study
- Import guide
- Sanitization notes

## Template Notes

This is a local-first example. It intentionally avoids external services and keeps the sample data small.
