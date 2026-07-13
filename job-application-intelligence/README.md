# Job Application Intelligence

This project imports job application sample data into PostgreSQL and records import activity.

## Verified Result

- `job_applications=2`
- `job_import_runs=1`
- `job_import_rejections=0`

## Files

- Workflow: [workflow export](../workflows/job-tracker/job-application-intelligence.release.workflow.json)
- Schemas: [application schema](../schemas/job-tracker/job-tracker-schema.sql), [audit schema](../schemas/job-tracker/job-import-audit-schema.sql)
- Sample data: [JSON](../sample-data/job-tracker/jobs-import-example.json), [CSV](../sample-data/job-tracker/jobs-import-example.csv)
- Screenshots: [canvas](../screenshots/job-tracker/workflow-canvas.png), [execution](../screenshots/job-tracker/successful-execution-green-nodes.png)
- Case study: [case-studies/job-tracker.md](../case-studies/job-tracker.md)

## Setup

Follow [docs/IMPORT_GUIDE.md](../docs/IMPORT_GUIDE.md), then assign the local PostgreSQL credential to every PostgreSQL node before execution.
