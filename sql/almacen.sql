create table almacen
(
    id_almacen         serial
        constraint pk_id_almacen
            primary key,
    propietario_id     integer not null
        constraint fk_propietario_id
            references propietario,
    tipo_producto_id   integer not null
        constraint fk_tipo_producto_id
            references tipo_producto,
    cantidad           bigint  not null,
    telefono           varchar not null,
    nombre             varchar not null,
    nit                varchar not null,
    cuenta_bancaria_id integer not null
        constraint fk_cuenta_bancaria_id
            references cuenta_bancaria,
    estado             integer default 1
);

alter table almacen
    owner to postgres;

INSERT INTO public.almacen (id_almacen, propietario_id, tipo_producto_id, cantidad, telefono, nombre, nit, cuenta_bancaria_id, estado) VALUES (2, 82, 1, 3232, '3232', '32', '32', 6, 0);
INSERT INTO public.almacen (id_almacen, propietario_id, tipo_producto_id, cantidad, telefono, nombre, nit, cuenta_bancaria_id, estado) VALUES (1, 78, 1, 23000, '31427632', 'Almacen store 1', '1234', 4, 0);
INSERT INTO public.almacen (id_almacen, propietario_id, tipo_producto_id, cantidad, telefono, nombre, nit, cuenta_bancaria_id, estado) VALUES (3, 84, 1, 4532, '23313', 'Pitalito 2', '4545', 7, 1);
INSERT INTO public.almacen (id_almacen, propietario_id, tipo_producto_id, cantidad, telefono, nombre, nit, cuenta_bancaria_id, estado) VALUES (4, 86, 2, 3199, '3127388554', 'La argentina', '1081417919', 9, 1);
