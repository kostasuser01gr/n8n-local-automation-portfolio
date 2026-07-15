# n8n Community Response Templates

Live portfolio: https://n8n-local-automation-portfolio.vercel.app
Repository: https://github.com/kostasuser01gr/n8n-local-automation-portfolio
Release: https://github.com/kostasuser01gr/n8n-local-automation-portfolio/releases/tag/v0.2.0

Repository: https://github.com/kostasuser01gr/n8n-local-automation-portfolio

## Debugging Reply Template

Thanks for sharing the details. I would start by checking the failing node, exact error message, credential assignment, and whether the file path is visible to the n8n container. In my local portfolio, the useful fix was a scoped file-access configuration rather than broad filesystem access.

## Workflow Sharing Template

Here is a sanitized local-first workflow example with sample data, PostgreSQL schema, screenshots, and validation scripts:

https://github.com/kostasuser01gr/n8n-local-automation-portfolio

The sample counts are small deterministic evidence for execution and persistence.

## Limitation Note

This example is local-first and does not claim external usage. It is meant to be inspected, imported, and adapted in a local n8n environment.
