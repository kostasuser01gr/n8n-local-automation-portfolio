CREATE TABLE IF NOT EXISTS knowledge_documents (
  id bigserial PRIMARY KEY,
  document_id text NOT NULL,
  title text NOT NULL,
  source text NOT NULL,
  document_type text NOT NULL,
  topic text NOT NULL,
  classification text NOT NULL,
  confidence numeric(5,2) NOT NULL DEFAULT 0,
  summary text NOT NULL,
  key_points jsonb NOT NULL DEFAULT '[]'::jsonb,
  action_items jsonb NOT NULL DEFAULT '[]'::jsonb,
  review_required boolean NOT NULL DEFAULT true,
  processing_mode text NOT NULL DEFAULT 'deterministic',
  raw_document jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE UNIQUE INDEX IF NOT EXISTS idx_knowledge_documents_document_id_unique
ON knowledge_documents(document_id);

CREATE INDEX IF NOT EXISTS idx_knowledge_documents_topic
ON knowledge_documents(topic);

CREATE INDEX IF NOT EXISTS idx_knowledge_documents_classification
ON knowledge_documents(classification);

CREATE TABLE IF NOT EXISTS knowledge_processing_runs (
  id bigserial PRIMARY KEY,
  source_batch text NOT NULL,
  processing_mode text NOT NULL,
  model_name text,
  records_seen integer NOT NULL DEFAULT 0,
  records_persisted integer NOT NULL DEFAULT 0,
  review_required_count integer NOT NULL DEFAULT 0,
  status text NOT NULL DEFAULT 'completed',
  summary jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_knowledge_processing_runs_created_at
ON knowledge_processing_runs(created_at);
