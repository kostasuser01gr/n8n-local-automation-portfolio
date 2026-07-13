# n8n Project Walkthrough

Repository: https://github.com/kostasuser01gr/n8n-local-automation-portfolio

## Purpose

This walkthrough explains how to present the portfolio in a technical review without overstating what was built. The core message is simple: three n8n workflows were executed locally, persisted data to PostgreSQL, and were packaged with evidence and safety checks.

## Step 1: Start With The Environment

Describe the local stack:

- macOS Apple Silicon
- Docker and Colima
- Local self-hosted n8n
- PostgreSQL
- External-disk-backed persistence
- n8n bound to localhost
- PostgreSQL kept internal to the Docker network

Key point: this was built as a local-first implementation with verified persistence.

## Step 2: Show The Three Workflows

Walk through each workflow at the outcome level:

- Job Application Intelligence Pipeline imported job application data.
- Fleet Operations Automation System persisted fleet records and operation run tracking.
- Local AI Knowledge Workflow processed local knowledge documents and persisted processing output.

Keep the focus on workflow behavior, execution evidence, and persistence.

## Step 3: Show Verified Counts

Use exact counts:

- `job_applications=2`
- `job_import_runs=1`
- `job_import_rejections=0`
- `fleet_vehicles=3`
- `fleet_operation_runs=1`
- `knowledge_documents=3`
- `knowledge_processing_runs=1`

Explain that these counts are intentionally demo-scoped and verified locally.

## Step 4: Explain Debugging

Use the debugging story as the main technical signal:

1. The initial execution path exposed a CLI task broker conflict.
2. The fix separated the CLI execution broker from the running n8n service.
3. A later file-node issue exposed n8n file access restrictions.
4. The fix added scoped `N8N_RESTRICT_FILE_ACCESS_TO` entries for the required mounted paths.
5. The workflows were re-run and verified with PostgreSQL counts.

This demonstrates diagnosis from actual failures rather than architecture churn.

## Step 5: Show Release Packaging

Explain that the release package includes:

- Sanitized workflow exports
- Schemas
- Sample data
- Screenshots
- Evidence files
- READMEs
- Case studies
- Validation scripts
- Secret scan scripts

Key point: the package is meant for safe review and possible future publication after approval.

## Step 6: Show Safety Checks

Mention:

- Final secret scan passed.
- Credential IDs and owner metadata were removed from release exports.
- n8n resume tokens and runner IDs were redacted from final evidence.
- Backup validation completed.
- Relative links and screenshot references were validated.

## Step 7: Close With Role Relevance

Connect the work to n8n:

- Workflow engineering
- Self-hosted operations
- PostgreSQL debugging
- Credential hygiene
- Release packaging
- Documentation
- Community-ready examples
- Support-style reproduction and isolation

## Suggested Closing Line

"The strongest signal here is that I did not just design workflows. I operated the local n8n system, executed the workflows, debugged real runtime issues, verified persistence, and packaged the result so another technical reviewer could inspect it safely."
