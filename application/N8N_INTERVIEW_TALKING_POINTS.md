# n8n Interview Talking Points

Live portfolio: https://n8n-local-automation-portfolio.vercel.app
Repository: https://github.com/kostasuser01gr/n8n-local-automation-portfolio
Release: https://github.com/kostasuser01gr/n8n-local-automation-portfolio/releases/tag/v0.2.0

Repository: https://github.com/kostasuser01gr/n8n-local-automation-portfolio

## Thirty-Second Summary

I built and verified a local-first n8n portfolio with three executed workflows backed by PostgreSQL. The package proves workflow execution, persistence, debugging, sanitization, validation, screenshots, backups, and reviewer-ready release preparation.

## One-Minute Summary

The portfolio runs locally on self-hosted n8n with Docker, Colima, and PostgreSQL. I executed three workflows and verified their database outputs: Job Tracker, Fleet Operations, and Local AI Knowledge. I also prepared sanitized workflow exports, evidence files, screenshots, validation scripts, and a final secret scan. The result is a credible local implementation package, not a claim of live external usage.

## Technical Story

- I configured n8n and PostgreSQL in a local Docker environment with external-disk-backed persistence.
- I imported and executed workflows through supported n8n paths.
- I kept PostgreSQL internal and used a single local credential named `Local n8n Postgres`.
- I verified persistence through database counts and report output.
- I sanitized release exports so credential IDs, owner metadata, and local runtime paths were not exposed.
- I validated the release package and ran a final secret scan.

## Debugging Story

The most useful debugging sequence came during first execution. The workflow did not simply run on the first attempt. I had to inspect the real failure path, separate a CLI task broker conflict from the running n8n service, and then resolve a file-node access failure with a scoped `N8N_RESTRICT_FILE_ACCESS_TO` configuration. I treated both as operational issues, not reasons to redesign the system.

## Verified Counts

- Job Tracker: `job_applications=2`, `job_import_runs=1`, `job_import_rejections=0`
- Fleet Operations: `fleet_vehicles=3`, `fleet_operation_runs=1`
- Local AI Knowledge: `knowledge_documents=3`, `knowledge_processing_runs=1`

## What I Would Emphasize

- I can debug real n8n runtime behavior from logs, node errors, and database state.
- I can package workflows so another reviewer can inspect and import them safely.
- I understand the difference between a working local portfolio and external adoption evidence.
- I pay attention to credentials, release artifacts, file access, backups, and validation.

## Questions I Am Ready To Answer

- How did you verify each workflow actually persisted data?
- How did you keep secrets and credential IDs out of exported workflows?
- What changed when the file node failed?
- How would you convert one of these workflows into a template submission?
- What would you monitor if this ran on a schedule?
- What would you change before sharing this with a broader community audience?

## Careful Claim Boundary

I should describe this as a verified local portfolio. I should not imply external usage, large data volume, paid integration usage, or real user traffic.
