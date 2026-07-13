# n8n Demo Script

Repository: https://github.com/kostasuser01gr/n8n-local-automation-portfolio

## Demo Goal

Show that the portfolio is a verified local n8n implementation with executed workflows, PostgreSQL persistence, sanitized release artifacts, screenshots, validation, and secret scanning.

## Ten-Minute Demo

### 1. Open With Scope

Say:

"This is a local-first n8n portfolio. It proves workflow execution and persistence in a self-hosted local environment. It does not claim external usage."

### 2. Show Final Delivery Report

Open:

- `FULL_DELIVERY_REPORT.md`

Point to:

- Verified workflow counts
- Screenshot verification
- Release package validation
- Final readiness scores
- Backup evidence

### 3. Show The Three Project Folders

Open:

- `portfolio/job-tracker/`
- `portfolio/fleet-operations/`
- `portfolio/local-ai-knowledge/`

For each project, show:

- README
- Case study
- Screenshot folder
- Execution evidence
- Sanitized release workflow

### 4. Show Verified Counts

Use exact results:

- Job Tracker: 2 applications, 1 import run, 0 rejections.
- Fleet Operations: 3 vehicles, 1 operation run.
- Local AI Knowledge: 3 documents, 1 processing run.

### 5. Show Release Package

Open:

- `github-release/`

Point to:

- Sanitized workflows
- Schemas
- Sample data
- Screenshots
- Validation script
- Secret scan script

### 6. Close With Debugging

Say:

"The most useful part of the work was debugging execution. I resolved a CLI broker conflict and a scoped file-access issue, then verified the result through PostgreSQL counts and reports."

## Twenty-Minute Demo

Use the ten-minute demo, then add:

1. Open a sanitized workflow JSON and show that credential IDs are removed.
2. Open one `EXECUTION_EVIDENCE.md` file and show timestamped execution evidence.
3. Open a screenshot folder and show canvas plus successful execution screenshots.
4. Run or describe the release validation script.
5. Run or describe the secret scan script.
6. Explain how `N8N_RESTRICT_FILE_ACCESS_TO` protected local file access while still allowing required import paths.

## Commands To Mention

These commands are useful if a reviewer asks how the package was validated:

```sh
./scripts/doctor.sh
./scripts/query-job-tracker.sh
./scripts/report-job-tracker.sh
cd github-release && ./scripts/validate-release.sh
cd github-release && ./scripts/secret-scan.sh
```

## Claims To Avoid

Avoid implying external usage, large data volume, public uptime, paid usage, or adoption by real users. The correct description is a verified local implementation package.

## Strong Closing

"I built this to show the whole delivery loop: workflow design, local operations, execution, debugging, persistence verification, release sanitization, and clear documentation."
