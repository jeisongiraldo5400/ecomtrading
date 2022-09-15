create table municipios
(
    id_municipio    integer default nextval('municipio_id_municipio_seq'::regclass) not null
        constraint pk_id_municipio
            primary key,
    nombre          varchar                                                         not null,
    departamento_id integer                                                         not null
        constraint fk_departamento_id
            references departamentos
);

alter table municipios
    owner to postgres;

INSERT INTO public.municipios (id_municipio, nombre, departamento_id) VALUES (1, 'Pitalito', 1);
INSERT INTO public.municipios (id_municipio, nombre, departamento_id) VALUES (2, 'La Argentina', 1);
INSERT INTO public.municipios (id_municipio, nombre, departamento_id) VALUES (3, 'La Plata', 1);
INSERT INTO public.municipios (id_municipio, nombre, departamento_id) VALUES (4, 'Neiva', 1);
INSERT INTO public.municipios (id_municipio, nombre, departamento_id) VALUES (5, 'Ibague', 2);
INSERT INTO public.municipios (id_municipio, nombre, departamento_id) VALUES (6, 'Medellin', 3);
INSERT INTO public.municipios (id_municipio, nombre, departamento_id) VALUES (7, 'Buscaramanga', 4);
