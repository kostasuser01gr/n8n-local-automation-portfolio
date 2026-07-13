# Local AI Workflow Tutorial Draft

Repository: https://github.com/kostasuser01gr/n8n-local-automation-portfolio

## Goal

Process local knowledge documents into structured records without depending on paid APIs for the verified baseline.

## Steps

1. Apply the Local AI Knowledge schema.
2. Create or select the local PostgreSQL credential.
3. Import the sanitized workflow release.
4. Execute the deterministic manual-trigger path.
5. Verify with `portfolio/local-ai-knowledge/scripts/report-local-ai-knowledge.sh`.

## Verified Demo Result

- 3 knowledge documents persisted
- 1 processing run recorded
- 0 documents requiring review

## Optional Local Model Branch

The workflow includes an optional Ollama HTTP branch, but it is not connected to the verified persistence path. Select and test a specific installed local model before enabling it.
