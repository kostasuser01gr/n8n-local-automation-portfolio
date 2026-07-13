# Community Post Draft

Title: Debugging a local n8n workflow package with PostgreSQL persistence

I built a local-first n8n portfolio with three workflows and PostgreSQL persistence. The goal was not to create a large demo. The goal was to prove the full loop: import a workflow, execute it, persist data, debug the runtime, sanitize the export, and package the evidence so another person can inspect it.

The three verified workflows were:

- Job Application Intelligence Pipeline: 2 job rows, 1 import run, 0 rejections.
- Fleet Operations Automation System: 3 vehicle rows and 1 operation run.
- Local AI Knowledge Workflow: 3 document rows and 1 processing run.

The most useful lesson came from debugging. The first execution path exposed a CLI task broker conflict. After that was isolated, a file node failed because n8n file access was too narrow for the mounted sample data path. The fix was not to loosen everything. The fix was to configure scoped file access for the required local paths.

The release package includes:

- Sanitized workflow exports
- PostgreSQL schemas
- Sample data
- Screenshots
- Case studies
- Import guide
- Validation script
- Secret scan script

The main takeaway: a workflow package is easier to trust when it includes evidence. Screenshots help, but database counts, sanitized exports, and repeatable validation scripts make the package much easier to review.

Repository: `https://github.com/kostasuser01gr/n8n-local-automation-portfolio`
