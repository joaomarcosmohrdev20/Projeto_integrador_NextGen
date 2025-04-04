PGDMP      8                |         
   db_nextgen    16.4    16.4     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16575 
   db_nextgen    DATABASE     �   CREATE DATABASE db_nextgen WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Portuguese_Brazil.1252';
    DROP DATABASE db_nextgen;
                postgres    false            �           0    0    DATABASE db_nextgen    COMMENT     7   COMMENT ON DATABASE db_nextgen IS 'NextGen database ';
                   postgres    false    4808                        2615    16576    schema1    SCHEMA        CREATE SCHEMA schema1;
    DROP SCHEMA schema1;
                postgres    false            �           0    0    SCHEMA schema1    COMMENT     *   COMMENT ON SCHEMA schema1 IS 'schema1

';
                   postgres    false    6            �            1259    16590 	   customers    TABLE     q  CREATE TABLE schema1.customers (
    realname_customers text DEFAULT 'customers'::text NOT NULL,
    age_customers integer DEFAULT 0 NOT NULL,
    email_customers text DEFAULT 'customers'::text NOT NULL,
    password_customers text DEFAULT 'customers'::text NOT NULL,
    username_customers text DEFAULT 'customers'::text NOT NULL,
    id_customers integer NOT NULL
);
    DROP TABLE schema1.customers;
       schema1         heap    postgres    false    6            �            1259    16605    customers_id_customers_seq    SEQUENCE     �   CREATE SEQUENCE schema1.customers_id_customers_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 2   DROP SEQUENCE schema1.customers_id_customers_seq;
       schema1          postgres    false    6    217            �           0    0    customers_id_customers_seq    SEQUENCE OWNED BY     [   ALTER SEQUENCE schema1.customers_id_customers_seq OWNED BY schema1.customers.id_customers;
          schema1          postgres    false    218            �            1259    16577    games    TABLE     C  CREATE TABLE schema1.games (
    id_games integer DEFAULT 0 NOT NULL,
    name_games text DEFAULT 'games'::text NOT NULL,
    preco_games numeric DEFAULT 0.0 NOT NULL,
    horaszerar_games numeric DEFAULT 0.0 NOT NULL,
    classfica_games integer DEFAULT 0 NOT NULL,
    genero_games text DEFAULT 'games'::text NOT NULL
);
    DROP TABLE schema1.games;
       schema1         heap    postgres    false    6            *           2604    16606    customers id_customers    DEFAULT     �   ALTER TABLE ONLY schema1.customers ALTER COLUMN id_customers SET DEFAULT nextval('schema1.customers_id_customers_seq'::regclass);
 F   ALTER TABLE schema1.customers ALTER COLUMN id_customers DROP DEFAULT;
       schema1          postgres    false    218    217            �          0    16590 	   customers 
   TABLE DATA           �   COPY schema1.customers (realname_customers, age_customers, email_customers, password_customers, username_customers, id_customers) FROM stdin;
    schema1          postgres    false    217   �       �          0    16577    games 
   TABLE DATA           t   COPY schema1.games (id_games, name_games, preco_games, horaszerar_games, classfica_games, genero_games) FROM stdin;
    schema1          postgres    false    216   J       �           0    0    customers_id_customers_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('schema1.customers_id_customers_seq', 5, true);
          schema1          postgres    false    218            .           2606    16613    customers customers_pkey 
   CONSTRAINT     a   ALTER TABLE ONLY schema1.customers
    ADD CONSTRAINT customers_pkey PRIMARY KEY (id_customers);
 C   ALTER TABLE ONLY schema1.customers DROP CONSTRAINT customers_pkey;
       schema1            postgres    false    217            ,           2606    16589    games id_games 
   CONSTRAINT     S   ALTER TABLE ONLY schema1.games
    ADD CONSTRAINT id_games PRIMARY KEY (id_games);
 9   ALTER TABLE ONLY schema1.games DROP CONSTRAINT id_games;
       schema1            postgres    false    216            0           2606    16615    customers un_emailcustomers 
   CONSTRAINT     b   ALTER TABLE ONLY schema1.customers
    ADD CONSTRAINT un_emailcustomers UNIQUE (email_customers);
 F   ALTER TABLE ONLY schema1.customers DROP CONSTRAINT un_emailcustomers;
       schema1            postgres    false    217            �   T   x���O�W�M,J�/V���(�4����傅r�"F鹉�9z����I�%%�F�Ӑ�$��$��@R��h�=... A�#�      �      x������ � �     