# Introduction Post Draft

Repository: https://github.com/kostasuser01gr/n8n-local-automation-portfolio

I finished a local-first n8n portfolio with three executed workflows: job application intelligence, fleet operations automation, and local knowledge processing.

The workflows run in self-hosted n8n, persist to PostgreSQL, and include sanitized exports, schemas, sample data, evidence files, and validation scripts. The most useful part of the build was debugging real runtime issues: a task broker port conflict during CLI execution and an n8n file-access policy that blocked a mounted import file.

I am sharing this as a practical example of making automation demonstrable: not just a workflow diagram, but execution proof, database counts, reports, backups, and a clean release package.

No posting has been automated; this is a draft for manual review.
