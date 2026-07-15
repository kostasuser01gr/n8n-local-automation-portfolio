# Tutorial Draft: Local n8n Workflow With PostgreSQL Audit Trail

Live portfolio: https://n8n-local-automation-portfolio.vercel.app
Repository: https://github.com/kostasuser01gr/n8n-local-automation-portfolio
Release: https://github.com/kostasuser01gr/n8n-local-automation-portfolio/releases/tag/v0.2.0

Repository: https://github.com/kostasuser01gr/n8n-local-automation-portfolio

## Goal

Build a local n8n workflow that validates input records, persists valid data to PostgreSQL, and stores an import audit summary.

## Steps

1. Start the local n8n stack.
2. Apply the PostgreSQL schema.
3. Create a PostgreSQL credential named `Local n8n Postgres`.
4. Import the workflow JSON.
5. Assign the credential to PostgreSQL nodes.
6. Execute manually.
7. Run the report script.
8. Capture safe evidence.

## Key Pattern

Use a run-level audit table in addition to the business table. This makes it easier to explain what happened during an execution and debug partial failures.

## Safety Notes

- Use synthetic sample data.
- Do not publish `.env`.
- Do not screenshot credentials.
- Do not claim success before query results prove persistence.
