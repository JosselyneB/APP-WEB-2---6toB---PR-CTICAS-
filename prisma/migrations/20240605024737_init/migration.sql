-- AlterTable
CREATE SEQUENCE torneo_id_seq;
ALTER TABLE "Torneo" ALTER COLUMN "id" SET DEFAULT nextval('torneo_id_seq');
ALTER SEQUENCE torneo_id_seq OWNED BY "Torneo"."id";
