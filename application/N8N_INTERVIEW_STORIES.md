# n8n Interview Stories

Live portfolio: https://n8n-local-automation-portfolio.vercel.app
Repository: https://github.com/kostasuser01gr/n8n-local-automation-portfolio
Release: https://github.com/kostasuser01gr/n8n-local-automation-portfolio/releases/tag/v0.2.0

Repository: https://github.com/kostasuser01gr/n8n-local-automation-portfolio

## Story 1: Execution Debugging

Situation: A workflow package was ready, but first execution exposed runtime blockers.

Action: I separated a CLI task broker conflict from the running n8n service, then fixed a file-node access issue using scoped `N8N_RESTRICT_FILE_ACCESS_TO` configuration.

Result: The workflow executed successfully and PostgreSQL row counts confirmed persistence.

## Story 2: Release Sanitization

Situation: Workflow exports and screenshots needed to be safe for public review.

Action: I removed credential IDs, owner metadata, local runtime paths, and sensitive execution markers, then validated the package with a secret scan.

Result: The release package contains sanitized workflows, screenshots, sample data, and evidence without live credentials.

## Story 3: Evidence-Based Portfolio Packaging

Situation: A static workflow export alone would not prove the work.

Action: I added screenshots, execution summaries, database counts, case studies, validation scripts, and application materials.

Result: The repository can be reviewed as a complete workflow engineering package.
