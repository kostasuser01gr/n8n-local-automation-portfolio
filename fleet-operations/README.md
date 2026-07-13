# Fleet Operations

This project models a local fleet operations workflow with PostgreSQL persistence.

## Verified Result

- `fleet_vehicles=3`
- `fleet_operation_runs=1`

## Files

- Workflow: [workflow export](../workflows/fleet-operations/fleet-operations-automation.release.workflow.json)
- Schema: [fleet schema](../schemas/fleet-operations/fleet-operations-schema.sql)
- Sample data: [JSON](../sample-data/fleet-operations/fleet-intake-example.json), [CSV](../sample-data/fleet-operations/fleet-intake-example.csv)
- Screenshots: [canvas](../screenshots/fleet-operations/workflow-canvas.png), [execution](../screenshots/fleet-operations/successful-execution-green-nodes.png)
- Case study: [case-studies/fleet-operations.md](../case-studies/fleet-operations.md)

## Setup

Follow [docs/IMPORT_GUIDE.md](../docs/IMPORT_GUIDE.md), then assign the local PostgreSQL credential to every PostgreSQL node before execution.
