CREATE TABLE IF NOT EXISTS fleet_vehicles (
  id bigserial PRIMARY KEY,
  registration_plate text NOT NULL,
  company text NOT NULL,
  vehicle_group text,
  model text NOT NULL,
  wash_type text,
  eco boolean DEFAULT false,
  current_status text NOT NULL,
  operational_priority text NOT NULL,
  maintenance_flag boolean DEFAULT false,
  damage_flag boolean DEFAULT false,
  fuel_level integer,
  current_location text,
  assigned_employee text,
  notes text,
  source_batch text,
  raw_record jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE UNIQUE INDEX IF NOT EXISTS idx_fleet_vehicles_plate_unique
ON fleet_vehicles (lower(registration_plate));

CREATE INDEX IF NOT EXISTS idx_fleet_vehicles_status
ON fleet_vehicles(current_status);

CREATE INDEX IF NOT EXISTS idx_fleet_vehicles_priority
ON fleet_vehicles(operational_priority);

CREATE TABLE IF NOT EXISTS fleet_operation_runs (
  id bigserial PRIMARY KEY,
  source_batch text NOT NULL,
  records_seen integer NOT NULL DEFAULT 0,
  records_valid integer NOT NULL DEFAULT 0,
  records_rejected integer NOT NULL DEFAULT 0,
  duplicate_candidates integer NOT NULL DEFAULT 0,
  high_priority_count integer NOT NULL DEFAULT 0,
  status text NOT NULL DEFAULT 'completed',
  summary jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_fleet_operation_runs_created_at
ON fleet_operation_runs(created_at);
