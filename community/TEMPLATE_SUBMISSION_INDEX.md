# n8n Template Submission Index

Live portfolio: https://n8n-local-automation-portfolio.vercel.app
Repository: https://github.com/kostasuser01gr/n8n-local-automation-portfolio
Release: https://github.com/kostasuser01gr/n8n-local-automation-portfolio/releases/tag/v0.2.0

Repository: https://github.com/kostasuser01gr/n8n-local-automation-portfolio

## Readiness Ranking

1. Job Application Intelligence Pipeline
2. Fleet Operations Automation System
3. Local AI Knowledge Workflow

## Job Application Intelligence Pipeline

Title: Job Application Intelligence Pipeline

Short description: Import job application sample data into PostgreSQL with import-run tracking and rejection counts.

Use case: Local builders can inspect a workflow that reads sample data, writes application records, and records import evidence.

Prerequisites: n8n, PostgreSQL, local sample data, scoped file access.

Required credential: PostgreSQL credential named `Local n8n Postgres`.

Setup steps: apply schemas, import workflow JSON, assign credential, execute manually, verify row counts.

Workflow JSON: `workflows/job-tracker/job-application-intelligence.release.workflow.json`

Sample data: `sample-data/job-tracker/`

Screenshots: `screenshots/job-tracker/`

Node overview: file input, validation, scoring, PostgreSQL inserts, final output.

Compatibility note: tested in local self-hosted n8n.

Limitations: small deterministic sample data.

Tags: n8n, PostgreSQL, local-first, workflow automation, job tracker.

Validation evidence: `job_applications=2`, `job_import_runs=1`, `job_import_rejections=0`.

## Fleet Operations Automation System

Title: Fleet Operations Automation System

Short description: Persist fleet vehicle sample records and operation run evidence in PostgreSQL.

Use case: Local builders can inspect a workflow for operations intake and run tracking.

Prerequisites: n8n and PostgreSQL.

Required credential: PostgreSQL credential named `Local n8n Postgres`.

Setup steps: apply schema, import workflow JSON, assign credential, execute manually, verify row counts.

Workflow JSON: `workflows/fleet-operations/fleet-operations-automation.release.workflow.json`

Sample data: `sample-data/fleet-operations/`

Screenshots: `screenshots/fleet-operations/`

Node overview: intake shaping, PostgreSQL inserts, operation run output.

Compatibility note: tested in local self-hosted n8n.

Limitations: small deterministic sample data.

Tags: n8n, PostgreSQL, fleet operations, local-first, operations automation.

Validation evidence: `fleet_vehicles=3`, `fleet_operation_runs=1`.

## Local AI Knowledge Workflow

Title: Local AI Knowledge Workflow

Short description: Process local knowledge document sample data and persist document/run evidence in PostgreSQL.

Use case: Local builders can inspect document-processing workflow structure without relying on external APIs for the verified path.

Prerequisites: n8n and PostgreSQL.

Required credential: PostgreSQL credential named `Local n8n Postgres`.

Setup steps: apply schema, import workflow JSON, assign credential, execute manually, verify row counts.

Workflow JSON: `workflows/local-ai-knowledge/local-ai-knowledge-processing.release.workflow.json`

Sample data: `sample-data/local-ai-knowledge/`

Screenshots: `screenshots/local-ai-knowledge/`

Node overview: document sample input, deterministic processing, PostgreSQL inserts, processing run output.

Compatibility note: tested in local self-hosted n8n.

Limitations: small deterministic sample data; optional local model experimentation is outside the verified persistence path.

Tags: n8n, PostgreSQL, local AI, knowledge workflow, local-first.

Validation evidence: `knowledge_documents=3`, `knowledge_processing_runs=1`.
