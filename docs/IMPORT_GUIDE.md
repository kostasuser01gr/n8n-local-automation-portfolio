# Import Guide

## 1. Apply Schemas

Apply the schema for the workflow you want to run:

- `schemas/job-tracker/job-tracker-schema.sql`
- `schemas/job-tracker/job-import-audit-schema.sql`
- `schemas/fleet-operations/fleet-operations-schema.sql`
- `schemas/local-ai-knowledge/local-ai-knowledge-schema.sql`

## 2. Create Credential

Create an n8n PostgreSQL credential named `Local n8n Postgres`.

Use your local PostgreSQL host, port, database, user, and password. Do not commit those values.

## 3. Import Workflow

Use n8n UI or CLI:

```bash
n8n import:workflow --input=workflows/job-tracker/job-application-intelligence.release.workflow.json
n8n import:workflow --input=workflows/fleet-operations/fleet-operations-automation.release.workflow.json
n8n import:workflow --input=workflows/local-ai-knowledge/local-ai-knowledge-processing.release.workflow.json
```

## 4. Confirm Credentials

Open each PostgreSQL node and select `Local n8n Postgres`.

## 5. Execute and Verify

Run the workflow manually or with the supported n8n CLI. Query the corresponding tables to verify persistence.
