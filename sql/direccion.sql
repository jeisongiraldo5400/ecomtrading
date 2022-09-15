create table direccion
(
    id_direccion    integer default nextval('"direccion _id_direccion_seq"'::regclass) not null
        constraint pk_id_direccion
            primary key,
    direccion       varchar                                                            not null,
    departamento_id integer                                                            not null
        constraint fk_departamento_id
            references departamentos,
    municipio_id    integer                                                            not null
        constraint fk_municipio_id
            references municipios,
    propietario_id  integer                                                            not null
        constraint "fk_propietario_Id"
            references propietario
);

alter table direccion
    owner to postgres;

INSERT INTO public.direccion (id_direccion, direccion, departamento_id, municipio_id, propietario_id) VALUES (10, 'carrera 8 # 7a 36', 1, 2, 67);
INSERT INTO public.direccion (id_direccion, direccion, departamento_id, municipio_id, propietario_id) VALUES (12, 'calle 7 # 1 -10 ', 1, 1, 77);
INSERT INTO public.direccion (id_direccion, direccion, departamento_id, municipio_id, propietario_id) VALUES (13, 'carrera 8 # 7a 36', 1, 1, 78);
INSERT INTO public.direccion (id_direccion, direccion, departamento_id, municipio_id, propietario_id) VALUES (14, 'carrera 8 # 7a 36', 1, 1, 79);
INSERT INTO public.direccion (id_direccion, direccion, departamento_id, municipio_id, propietario_id) VALUES (15, 'carrera 8 # 7a 36', 1, 1, 80);
INSERT INTO public.direccion (id_direccion, direccion, departamento_id, municipio_id, propietario_id) VALUES (16, 'Calle 1 # 4 - 43', 1, 1, 82);
INSERT INTO public.direccion (id_direccion, direccion, departamento_id, municipio_id, propietario_id) VALUES (11, 'carrera 8 # 7a 36', 1, 2, 68);
INSERT INTO public.direccion (id_direccion, direccion, departamento_id, municipio_id, propietario_id) VALUES (17, 'CALLE 1 # 4 - 45', 1, 2, 84);
INSERT INTO public.direccion (id_direccion, direccion, departamento_id, municipio_id, propietario_id) VALUES (18, 'carrera 8 # 7a 36', 1, 2, 85);
INSERT INTO public.direccion (id_direccion, direccion, departamento_id, municipio_id, propietario_id) VALUES (19, 'calle 8', 1, 1, 86);
