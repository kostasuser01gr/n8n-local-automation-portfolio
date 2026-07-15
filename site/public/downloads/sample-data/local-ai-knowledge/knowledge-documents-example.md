# Local Knowledge Sample

## PostgreSQL Import Reliability Notes

Use idempotent upserts, audit records, and rejection logs for import workflows. Keep credentials out of workflow JSON. Verify row counts after each execution.

## n8n Community Draft Ideas

Share a practical case study about self-hosted n8n, PostgreSQL persistence, Docker and Colima debugging, and local-first workflow evidence.

## Operations Runbook Fragment

Before changing a workflow, take a local backup. After execution, run health checks, query reports, and secret scans before publishing artifacts.
