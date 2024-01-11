---
title: ¿Cómo instalar?
category: Install
icon: install
star: 9
sticky: 9
tag:
  - ADempiere
  - Instalar
article: false
---

-	Para efectos de este manual se utilizó Ubuntu como sistema operativo, puede adaptarse a cualquier distribución y lo que cambiarán serán las sentencias utilizadas 
- Es necesario descargar un JDK, el utilizado en este manual es el JDK 1.8.0_321

1.- Abrir una terminal y escribir:
  ```bash
	apt-get install postgresql apache2
```

2.- Descomprimir jdk en /opt

3.- Descarga la versión de ADempiere 3.9.3
(https://github.com/adempiere/adempiere/releases)

4.- Descomprimir el archivo descargado y mover la carpeta Adempiere en /opt

5.- Editar: 
```bash
    ~ mcedit /etc/environment
```

	Al final del archivo pegar:
 
 ```bash
  JAVA_HOME=/opt/jdk1.8.0_321
  ADEMPIERE_HOME=/opt/Adempiere
  ```

Reiniciar el equipo

6.- Colocar clave a postgres
 ```bash
	~	sudo -u postgres psql postgres
  ~  postgres=# \password postgres
```
7.-  Ejecutar:
```bash
 /opt/Adempiere/RUN_setup.sh
```

Ajustar las configuraciones necesarias y darle en Probar si todo esta OK te dejara guardar 
Si no hay que chequear los servidores de Base de datos que usualmente los problemas vienen de allí 

8.- Ejecutar:
```bash
 /opt/Adempiere/utils/RUN_ImportAdempiere.sh
```

9.- Iniciar adempere
```bash
 /opt/Adempiere/utils/./RUN_Server2.sh
```

Listo! 



- [Cómo instalar JDK 8](./installing-jdk8.md)
