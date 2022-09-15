create table uploads
(
    id_uploads         serial
        primary key,
    cedula_propietario integer not null,
    img                text    not null
);

comment on table uploads is 'subir imagenes';

alter table uploads
    owner to postgres;

INSERT INTO public.uploads (id_uploads, cedula_propietario, img) VALUES (11, 1232, '1232.png');
INSERT INTO public.uploads (id_uploads, cedula_propietario, img) VALUES (12, 77343, '77343.png');
INSERT INTO public.uploads (id_uploads, cedula_propietario, img) VALUES (13, 232, '232.png');
INSERT INTO public.uploads (id_uploads, cedula_propietario, img) VALUES (14, 322, '322.png');
INSERT INTO public.uploads (id_uploads, cedula_propietario, img) VALUES (15, 1081417825, '1081417825.png');
INSERT INTO public.uploads (id_uploads, cedula_propietario, img) VALUES (17, 66, '66.png');
INSERT INTO public.uploads (id_uploads, cedula_propietario, img) VALUES (16, 2, '2.png');
INSERT INTO public.uploads (id_uploads, cedula_propietario, img) VALUES (18, 2, '2.png');
INSERT INTO public.uploads (id_uploads, cedula_propietario, img) VALUES (19, 8, '8.png');
INSERT INTO public.uploads (id_uploads, cedula_propietario, img) VALUES (20, 5, '5.png');
INSERT INTO public.uploads (id_uploads, cedula_propietario, img) VALUES (21, 8080, '8080.png');
INSERT INTO public.uploads (id_uploads, cedula_propietario, img) VALUES (22, 1012411710, '1012411710.png');
INSERT INTO public.uploads (id_uploads, cedula_propietario, img) VALUES (23, 1234567893, '1234567893.png');
