# Job Tracker Tutorial Draft

Live portfolio: https://n8n-local-automation-portfolio.vercel.app
Repository: https://github.com/kostasuser01gr/n8n-local-automation-portfolio
Release: https://github.com/kostasuser01gr/n8n-local-automation-portfolio/releases/tag/v0.2.0

Repository: https://github.com/kostasuser01gr/n8n-local-automation-portfolio

## Goal

Import local job data, classify opportunities, and persist job application records plus import-run audit metadata.

## Steps

1. Apply the Job Tracker schema.
2. Create an n8n PostgreSQL credential named `Local n8n Postgres`.
3. Place the sample JSON where the workflow expects it, or update the config node.
4. Import the sanitized workflow release.
5. Confirm PostgreSQL nodes use the local credential.
6. Execute the workflow.
7. Verify with `./scripts/report-job-tracker.sh`.

## Verified Demo Result

- 2 job applications
- 1 import run
- 0 rejections

## Debugging Note

The verified local run required n8n file access to include the mounted import directory. The release export uses a portable `/files/job-tracker/jobs-import-example.json` path.
