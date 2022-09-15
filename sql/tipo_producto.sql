create table tipo_producto
(
    id_tipo_producto serial
        constraint pk_id_tipo_producto
            primary key,
    nombre           varchar not null
);

alter table tipo_producto
    owner to postgres;

INSERT INTO public.tipo_producto (id_tipo_producto, nombre) VALUES (1, 'Cafe');
INSERT INTO public.tipo_producto (id_tipo_producto, nombre) VALUES (2, 'Cacao');
INSERT INTO public.tipo_producto (id_tipo_producto, nombre) VALUES (3, 'Algodon');
