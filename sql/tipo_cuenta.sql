create table tipo_cuenta
(
    id_tipo_cuenta serial
        constraint pk_id_tipo_cuenta
            primary key,
    descripcion    varchar
);

alter table tipo_cuenta
    owner to postgres;

INSERT INTO public.tipo_cuenta (id_tipo_cuenta, descripcion) VALUES (1, 'Ahorros');
INSERT INTO public.tipo_cuenta (id_tipo_cuenta, descripcion) VALUES (2, 'Corriente');
