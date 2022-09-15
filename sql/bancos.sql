create table bancos
(
    id_banco serial
        constraint pk_id_banco
            primary key,
    nombre   varchar
);

alter table bancos
    owner to postgres;

INSERT INTO public.bancos (id_banco, nombre) VALUES (1, 'Bancolombia');
INSERT INTO public.bancos (id_banco, nombre) VALUES (2, 'Davivienda');
INSERT INTO public.bancos (id_banco, nombre) VALUES (3, 'NEQUI');
INSERT INTO public.bancos (id_banco, nombre) VALUES (4, 'BBVA');
INSERT INTO public.bancos (id_banco, nombre) VALUES (5, 'BANCO DE BOGOTA');
