# n8n Application FAQ

Repository: https://github.com/kostasuser01gr/n8n-local-automation-portfolio

## Is this a real implementation?

Yes. The workflows were executed in a local self-hosted n8n environment, and their outputs were verified in PostgreSQL.

## Is this claiming external usage?

No. The package is a local verified portfolio. It does not claim external users, public deployment, paid integration usage, or business adoption.

## What are the verified workflow results?

- Job Application Intelligence Pipeline: 2 application rows, 1 import run, 0 rejections.
- Fleet Operations Automation System: 3 vehicle rows and 1 operation run.
- Local AI Knowledge Workflow: 3 document rows and 1 processing run.

## How was persistence verified?

Persistence was verified through PostgreSQL row counts, report script output, execution evidence files, screenshots, and the final delivery report.

## How were secrets handled?

Secrets were kept in local environment configuration and were not printed into deliverables. Release exports were sanitized to remove credential IDs, owner metadata, and local runtime import paths. A final secret scan passed.

## What was the most important debugging work?

Two runtime blockers were resolved:

- A CLI task broker port conflict during execution.
- A file-node access restriction issue fixed with scoped `N8N_RESTRICT_FILE_ACCESS_TO` configuration.

## Did the project use external APIs?

The verified persistence path does not depend on external APIs. The Local AI workflow includes a documented optional local Ollama branch, but the verified execution used deterministic local processing.

## Why is the data set small?

The goal was to prove workflow execution, persistence, packaging, and validation. The data size is intentionally demo-scoped.

## What makes this useful for n8n?

It shows practical familiarity with n8n workflow execution, local operations, PostgreSQL debugging, credential handling, release packaging, documentation, and reviewer-safe evidence.

## What should not be claimed in an interview?

Do not claim external adoption, large traffic, public uptime, paid usage, or broad organizational rollout. The correct claim is a completed local-first portfolio with verified execution evidence.
