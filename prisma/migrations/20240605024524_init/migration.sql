-- AlterTable
CREATE SEQUENCE equipo_id_seq;
ALTER TABLE "Equipo" ALTER COLUMN "id" SET DEFAULT nextval('equipo_id_seq');
ALTER SEQUENCE equipo_id_seq OWNED BY "Equipo"."id";
