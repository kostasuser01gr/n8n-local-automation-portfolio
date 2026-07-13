# Local AI Knowledge

This project processes local knowledge document sample data and persists processing results to PostgreSQL.

## Verified Result

- `knowledge_documents=3`
- `knowledge_processing_runs=1`

## Files

- Workflow: [workflow export](../workflows/local-ai-knowledge/local-ai-knowledge-processing.release.workflow.json)
- Schema: [knowledge schema](../schemas/local-ai-knowledge/local-ai-knowledge-schema.sql)
- Sample data: [JSON](../sample-data/local-ai-knowledge/knowledge-documents-example.json), [Markdown](../sample-data/local-ai-knowledge/knowledge-documents-example.md)
- Screenshots: [canvas](../screenshots/local-ai-knowledge/workflow-canvas.png), [execution](../screenshots/local-ai-knowledge/successful-execution-green-nodes.png)
- Case study: [case-studies/local-ai-knowledge.md](../case-studies/local-ai-knowledge.md)

## Setup

Follow [docs/IMPORT_GUIDE.md](../docs/IMPORT_GUIDE.md), then assign the local PostgreSQL credential to every PostgreSQL node before execution.
