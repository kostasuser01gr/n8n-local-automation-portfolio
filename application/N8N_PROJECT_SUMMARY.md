# n8n Project Summary

## Overview

This portfolio demonstrates local-first n8n workflow engineering with PostgreSQL persistence, Docker-based self-hosting, execution evidence, release sanitization, and reviewer-focused documentation.

The project is completed and verified locally. It is designed to show how I build, debug, validate, and package n8n workflows.

## Project 1: Job Application Intelligence Pipeline

Purpose: import job application data into PostgreSQL and record import activity.

Verified result:

- `job_applications=2`
- `job_import_runs=1`
- `job_import_rejections=0`

Evidence:

- Workflow execution evidence
- Database count output
- Report script output
- Screenshots
- Sanitized release workflow
- Case study and README

## Project 2: Fleet Operations Automation System

Purpose: model a fleet operations workflow with persisted vehicle records and operation run tracking.

Verified result:

- `fleet_vehicles=3`
- `fleet_operation_runs=1`

Evidence:

- Workflow execution evidence
- Database count output
- Screenshots
- Sanitized release workflow
- Case study and README

## Project 3: Local AI Knowledge Workflow

Purpose: process local knowledge documents and persist processing results in PostgreSQL.

Verified result:

- `knowledge_documents=3`
- `knowledge_processing_runs=1`

Evidence:

- Workflow execution evidence
- Database count output
- Screenshots
- Sanitized release workflow
- Case study and README

## Shared Technical Foundation

- Self-hosted local n8n
- Docker and Colima
- PostgreSQL
- External-disk-backed persistence
- Restricted n8n file access
- Local Git release history
- Backup validation
- Secret scanning
- Release package validation

## Application Value

The portfolio shows ability to own the full workflow lifecycle: implementation, execution, troubleshooting, evidence capture, documentation, packaging, and safety review.
