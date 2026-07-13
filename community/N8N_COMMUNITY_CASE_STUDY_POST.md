# Community Case Study Draft: Building a Local-First Job Application Pipeline

Repository: https://github.com/kostasuser01gr/n8n-local-automation-portfolio

I built a local-first n8n workflow that turns job application records into a structured PostgreSQL-backed tracker.

## Problem

Job opportunities can arrive from many sources and quickly become hard to compare. I wanted a workflow that could ingest local JSON/CSV data, normalize it, score each opportunity, and preserve an audit trail of what happened during import.

## Architecture

Manual Trigger -> File Read -> Parse JSON/CSV -> Validate -> Normalize -> Score Fit -> Classify Priority -> Recommend Action -> PostgreSQL Upsert -> Import Audit -> Final Summary

## Reliability Patterns

- Required-field validation
- Duplicate-aware upsert
- Import run tracking
- Rejection records
- Local PostgreSQL reporting
- No embedded credentials

## Current Limitation

[PENDING MANUAL EXECUTION] The public case study should only be posted after I capture a successful n8n execution and PostgreSQL row-count evidence.

## Feedback Request

I would appreciate feedback on the validation flow, audit-table structure, and how to make the workflow more reusable as a community template.
