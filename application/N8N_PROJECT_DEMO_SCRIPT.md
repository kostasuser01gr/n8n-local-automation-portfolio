# n8n Project Demo Script

Repository: https://github.com/kostasuser01gr/n8n-local-automation-portfolio

## 1. Open With The Architecture

This is a local-first n8n portfolio running with PostgreSQL persistence. It includes three workflows: Job Tracker, Fleet Operations, and Local AI Knowledge.

## 2. Show Execution Evidence

Open each project evidence file:

- `portfolio/job-tracker/evidence/EXECUTION_EVIDENCE.md`
- `portfolio/fleet-operations/evidence/EXECUTION_EVIDENCE.md`
- `portfolio/local-ai-knowledge/evidence/EXECUTION_EVIDENCE.md`

Point to the status, timestamp, persisted counts, and report outputs.

## 3. Show The Database Proof

Use the report scripts:

```bash
./scripts/report-job-tracker.sh
portfolio/fleet-operations/scripts/report-fleet-operations.sh
portfolio/local-ai-knowledge/scripts/report-local-ai-knowledge.sh
```

## 4. Explain The Debugging

Explain the CLI broker port conflict and the n8n file-access allowlist fix. Emphasize that both were based on actual errors, not guesses.

## 5. Show Release Package

Open `github-release/README.md`, `docs/IMPORT_GUIDE.md`, and `scripts/validate-release.sh`.

## 6. Close With Limitations

UI workflow screenshots require a local authenticated n8n session. External publishing, posting, and repository pushing are intentionally pending user approval.
