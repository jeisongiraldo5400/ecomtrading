create table propietario
(
    id_propietario serial
        constraint pk_id_propietario
            primary key,
    nombres        varchar              not null,
    apellidos      varchar              not null,
    telefono       varchar              not null,
    email          varchar    default 0 not null,
    edad           varchar(3) default 0 not null,
    cedula         integer,
    estado         integer    default 1
);

alter table propietario
    owner to postgres;

INSERT INTO public.propietario (id_propietario, nombres, apellidos, telefono, email, edad, cedula, estado) VALUES (71, 'Jeison subida de imagen', 'Giraldo', '3127388554', 'jeison52220@gmail.com', '28', 1081417917, 0);
INSERT INTO public.propietario (id_propietario, nombres, apellidos, telefono, email, edad, cedula, estado) VALUES (68, 'jj', 'jj', '4545', 'jjj@gmail.com', '22', 1081417918, 0);
INSERT INTO public.propietario (id_propietario, nombres, apellidos, telefono, email, edad, cedula, estado) VALUES (85, 'jefferson', 'torres', '3127388554', 'jefferson@gmail.com', '28', 1012411710, 1);
INSERT INTO public.propietario (id_propietario, nombres, apellidos, telefono, email, edad, cedula, estado) VALUES (86, 'brayan ', 'torres', '3127388554', 'brayan@gmail.com', '26', 1234567893, 1);
INSERT INTO public.propietario (id_propietario, nombres, apellidos, telefono, email, edad, cedula, estado) VALUES (84, '8080', '8080', '8080', '8080@gmail.com', '28', 8080, 0);
INSERT INTO public.propietario (id_propietario, nombres, apellidos, telefono, email, edad, cedula, estado) VALUES (67, 'jeison', 'giraldo', '3127388554', 'jeisonq@gmail.com', '26', 1081417919, 0);
INSERT INTO public.propietario (id_propietario, nombres, apellidos, telefono, email, edad, cedula, estado) VALUES (74, '22', '22', '22', '22@gmail.com', '27', 232, 0);
INSERT INTO public.propietario (id_propietario, nombres, apellidos, telefono, email, edad, cedula, estado) VALUES (81, '8', '8', '43141', '8@gmail.com', '26', 8, 0);
INSERT INTO public.propietario (id_propietario, nombres, apellidos, telefono, email, edad, cedula, estado) VALUES (70, 'ff', 'ff', '3197325069', 'brayantorres9607@gmail.com', '26', 1234566, 0);
INSERT INTO public.propietario (id_propietario, nombres, apellidos, telefono, email, edad, cedula, estado) VALUES (75, '32', '22', '3123', '3232@gmail.com', '323', 322, 0);
INSERT INTO public.propietario (id_propietario, nombres, apellidos, telefono, email, edad, cedula, estado) VALUES (80, '4', '4', '4', '4@gmail.com', '4', 4, 0);
INSERT INTO public.propietario (id_propietario, nombres, apellidos, telefono, email, edad, cedula, estado) VALUES (73, '312', '323', '312', '32@gmail.com', '28', 77343, 0);
INSERT INTO public.propietario (id_propietario, nombres, apellidos, telefono, email, edad, cedula, estado) VALUES (72, 'Jeison', 'Giraldo', '3127388554', 'jeis5400@gmail.com', '28', 1232, 0);
INSERT INTO public.propietario (id_propietario, nombres, apellidos, telefono, email, edad, cedula, estado) VALUES (82, '5', '5', '5', '5@gmail.com', '5', 5, 0);
INSERT INTO public.propietario (id_propietario, nombres, apellidos, telefono, email, edad, cedula, estado) VALUES (79, '2', '2', '2', 'jeison542222@gmail.com', '2', 2, 0);
INSERT INTO public.propietario (id_propietario, nombres, apellidos, telefono, email, edad, cedula, estado) VALUES (77, '2', '2', '2', 'jeison542222@gmail.com', '2', 2, 0);
INSERT INTO public.propietario (id_propietario, nombres, apellidos, telefono, email, edad, cedula, estado) VALUES (78, '66', '66', '343', '6674@gmail.com', '28', 66, 0);
INSERT INTO public.propietario (id_propietario, nombres, apellidos, telefono, email, edad, cedula, estado) VALUES (76, 'ww', 'ww', '3123', 'w@gmail.com', '28', 1081417825, 0);
INSERT INTO public.propietario (id_propietario, nombres, apellidos, telefono, email, edad, cedula, estado) VALUES (51, 'Jeison', 'Giraldo', '6767', 'jeison5400@gmail.com', '26', 1080265207, 0);
