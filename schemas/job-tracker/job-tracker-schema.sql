CREATE TABLE IF NOT EXISTS job_applications (
    id bigserial primary key,
    job_title text not null,
    company text not null,
    work_model text,
    normalized_location text,
    salary_range text,
    source text,
    job_url text,
    application_status text,
    match_score integer,
    priority text,
    reasons jsonb,
    risks jsonb,
    recommended_action text,
    next_step text,
    tailored_angle text,
    required_skills jsonb,
    preferred_skills jsonb,
    language_requirements jsonb,
    notes text,
    raw_job jsonb,
    created_at timestamptz default now(),
    updated_at timestamptz default now()
);

CREATE INDEX IF NOT EXISTS idx_job_app_company ON job_applications(company);
CREATE INDEX IF NOT EXISTS idx_job_app_priority ON job_applications(priority);
CREATE INDEX IF NOT EXISTS idx_job_app_match_score ON job_applications(match_score);
CREATE INDEX IF NOT EXISTS idx_job_app_status ON job_applications(application_status);
CREATE INDEX IF NOT EXISTS idx_job_app_created_at ON job_applications(created_at);
CREATE UNIQUE INDEX IF NOT EXISTS idx_job_app_unique ON job_applications(lower(company), lower(job_title), coalesce(job_url, ''));

CREATE OR REPLACE FUNCTION update_job_applications_updated_at()
RETURNS trigger
LANGUAGE plpgsql
AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$;

DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1
        FROM pg_trigger
        WHERE tgname = 'trg_job_applications_updated_at'
          AND tgrelid = 'job_applications'::regclass
    ) THEN
        CREATE TRIGGER trg_job_applications_updated_at
        BEFORE UPDATE ON job_applications
        FOR EACH ROW
        EXECUTE FUNCTION update_job_applications_updated_at();
    END IF;
END;
$$;
