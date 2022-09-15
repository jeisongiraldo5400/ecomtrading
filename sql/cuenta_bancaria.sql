create table cuenta_bancaria
(
    id_cuenta_bancaria serial
        constraint pk_id_cuenta_bancaria
            primary key,
    numero_cuenta      bigint  not null,
    tipo_cuenta_id     integer not null
        constraint fk_tipo_cuenta_id
            references tipo_cuenta,
    banco_id           integer not null
        constraint fk_banco_id
            references bancos,
    propietario_id     integer
        constraint fk_propietario_id
            references propietario
);

alter table cuenta_bancaria
    owner to postgres;

INSERT INTO public.cuenta_bancaria (id_cuenta_bancaria, numero_cuenta, tipo_cuenta_id, banco_id, propietario_id) VALUES (1, 12345678978, 2, 2, 67);
INSERT INTO public.cuenta_bancaria (id_cuenta_bancaria, numero_cuenta, tipo_cuenta_id, banco_id, propietario_id) VALUES (2, 12344556, 1, 1, 68);
INSERT INTO public.cuenta_bancaria (id_cuenta_bancaria, numero_cuenta, tipo_cuenta_id, banco_id, propietario_id) VALUES (3, 31273885444, 1, 1, 77);
INSERT INTO public.cuenta_bancaria (id_cuenta_bancaria, numero_cuenta, tipo_cuenta_id, banco_id, propietario_id) VALUES (4, 223232323232, 1, 1, 78);
INSERT INTO public.cuenta_bancaria (id_cuenta_bancaria, numero_cuenta, tipo_cuenta_id, banco_id, propietario_id) VALUES (5, 42342, 1, 1, 79);
INSERT INTO public.cuenta_bancaria (id_cuenta_bancaria, numero_cuenta, tipo_cuenta_id, banco_id, propietario_id) VALUES (6, 312313, 1, 1, 82);
INSERT INTO public.cuenta_bancaria (id_cuenta_bancaria, numero_cuenta, tipo_cuenta_id, banco_id, propietario_id) VALUES (8, 1234567889, 1, 1, 85);
INSERT INTO public.cuenta_bancaria (id_cuenta_bancaria, numero_cuenta, tipo_cuenta_id, banco_id, propietario_id) VALUES (9, 88888888, 1, 1, 86);
INSERT INTO public.cuenta_bancaria (id_cuenta_bancaria, numero_cuenta, tipo_cuenta_id, banco_id, propietario_id) VALUES (7, 999999, 1, 1, 84);
