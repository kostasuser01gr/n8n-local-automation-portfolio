# n8n Application Project Summary

Repository: https://github.com/kostasuser01gr/n8n-local-automation-portfolio

I built and executed a local-first n8n automation portfolio backed by PostgreSQL and Docker Compose. The work includes three verified workflows:

1. Job Application Intelligence Pipeline
2. Fleet Operations Automation System
3. Local AI Knowledge and Document Processing Workflow

Verified persistence:

- `job_applications=2`, `job_import_runs=1`, `job_import_rejections=0`
- `fleet_vehicles=3`, `fleet_operation_runs=1`
- `knowledge_documents=3`, `knowledge_processing_runs=1`

The delivery includes sanitized workflow exports, PostgreSQL schemas, sample data, evidence files, screenshot manifests, case studies, validation scripts, a local GitHub-ready package, and a final secret scan.

The most important debugging result was resolving two real runtime blockers: isolating the CLI task broker port from the running n8n server and adding an explicit n8n file-access allowlist for the mounted Job Tracker import path.
