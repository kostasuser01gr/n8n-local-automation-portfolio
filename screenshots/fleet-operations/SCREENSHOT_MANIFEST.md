# Screenshot Manifest: Fleet Operations Automation System

## Captured Automatically

- `n8n-auth-boundary.png`: real Playwright screenshot showing n8n redirected to `/signin`; UI workflow screenshots require an authenticated browser session.
- `postgresql-report-evidence.txt`: captured terminal report output proving persisted database rows.
- `final-output-evidence.txt`: captured raw n8n CLI execution output for the successful run.
- `backup-evidence.txt`: captured backup file and archive integrity proof.
- `external-storage-verification.txt`: captured external-storage verification output.

## Manual UI Captures Required

These screenshots were not captured automatically because local browser access reached the n8n sign-in page and credentials were not available to Codex.

1. Full workflow canvas
   - Open `http://localhost:5678`.
   - Sign in locally.
   - Open workflow id/name: `portfolio-fleet-operations` / `Fleet Operations Automation System`.
   - Zoom to fit the complete canvas.
   - Save as `workflow-canvas.png` in this folder.

2. Successful execution with green nodes
   - In the same workflow, open the most recent successful execution or run it manually.
   - Confirm every executed node is green/successful.
   - Save as `successful-execution-green-nodes.png` in this folder.

3. Final output
   - Open the final node output in the successful execution.
   - Confirm the status and counts match `../evidence/execution-evidence.json`.
   - Save as `final-output.png` in this folder.

## Redaction Requirements

Do not include credentials, passwords, tokens, email addresses, `.env` values, API keys, or private host details in screenshots.
