create table departamentos
(
    id_departamento integer default nextval('departamento_id_departamento_seq'::regclass) not null
        constraint pk_id_departamento
            primary key,
    nombre          varchar
);

alter table departamentos
    owner to postgres;

INSERT INTO public.departamentos (id_departamento, nombre) VALUES (1, 'Huila');
INSERT INTO public.departamentos (id_departamento, nombre) VALUES (2, 'Tolima');
INSERT INTO public.departamentos (id_departamento, nombre) VALUES (3, 'Antioquia');
INSERT INTO public.departamentos (id_departamento, nombre) VALUES (4, 'Santander');
