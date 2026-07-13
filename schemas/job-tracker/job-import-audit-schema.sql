CREATE TABLE IF NOT EXISTS job_import_runs (
    id bigserial primary key,
    import_source text not null,
    import_file_path text,
    import_file_name text,
    import_format text,
    records_seen integer default 0,
    records_valid integer default 0,
    records_rejected integer default 0,
    records_inserted integer default 0,
    records_updated integer default 0,
    duplicate_candidates integer default 0,
    status text not null default 'pending',
    error_summary text,
    started_at timestamptz default now(),
    finished_at timestamptz,
    raw_summary jsonb
);

CREATE INDEX IF NOT EXISTS idx_job_import_runs_status ON job_import_runs(status);
CREATE INDEX IF NOT EXISTS idx_job_import_runs_import_source ON job_import_runs(import_source);
CREATE INDEX IF NOT EXISTS idx_job_import_runs_import_file_name ON job_import_runs(import_file_name);
CREATE INDEX IF NOT EXISTS idx_job_import_runs_started_at ON job_import_runs(started_at);

CREATE TABLE IF NOT EXISTS job_import_rejections (
    id bigserial primary key,
    import_run_id bigint references job_import_runs(id) on delete cascade,
    rejection_reason text not null,
    raw_record jsonb,
    created_at timestamptz default now()
);

CREATE INDEX IF NOT EXISTS idx_job_import_rejections_import_run_id ON job_import_rejections(import_run_id);
CREATE INDEX IF NOT EXISTS idx_job_import_rejections_rejection_reason ON job_import_rejections(rejection_reason);
CREATE INDEX IF NOT EXISTS idx_job_import_rejections_created_at ON job_import_rejections(created_at);
