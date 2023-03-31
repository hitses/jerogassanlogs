# Implementar un proyecto basado en Angular en Firebase

Acceder a la web de <a href="https://firebase.google.com/" target="_blank">Firebase <i class="awesome fa-solid fa-arrow-up-right-from-square"></i></a>.

Acceder a la consola.

Agregar un nuevo proyecto.

Ponerle un nombre al proyecto.

Decidir si se va a activar <a href="https://analytics.google.com/analytics/web/" target="_blank">Google Analytics <i class="awesome fa-solid fa-arrow-up-right-from-square"></i></a>. De ser así, se debe seleccionar la cuenta con la que se va a enlazar el servicio.

Crear proyecto y esperar a que finalice la operación.

Para preparar el entorno de producción, acceder desde el menú de la izquierda a <strong>Compilación/Hosting</strong>.

Seleccionar <strong>Comenzar</strong>.

Comprobar si <strong>Firebase CLI</strong> está instalado en el sistema. Para ello, se debe ejecutar el siguiente comando:

```bash
firebase tools --version
```

Si no está instalado se debe ejecutar el siguiente comando:

```bash
npm install -g firebase-tools
```

Una vez instalado se debe iniciar sesión en la herramienta. Para ello, se debe ejecutar el comando siguiente:

```bash
firebase login
```

Pide las credenciales a través de una ventana emergente del navegador y se debe seleccionar la cuenta con la que se va a preparar el hosting. También pide recuperar información, por defecto no se activa esta opción.

Una vez se realiza el proceso, se debe acceder a la raíz del proyecto en la consola de comandos para iniciar el proyecto en <strong>Firebase CLI</strong> con el siguiente comando:

```bash
firebase init
```

Al ejecutar el comando <strong>Firebase CLI</strong> realiza una serie de preguntas de configuración. 

- <strong>Which Firebase features do you want to set up for this directory?</strong>
  - Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys.
- <strong>Please select an option:</strong>
  - Use an existing project.
- <strong>Select a default Firebase project for this directory:</strong>
  - Seleccionar el nombre del proyecto que se ha creado anteriormente en la consola de <strong>Firebase</strong>.
- <strong>What do you want to use as your public directory?</strong>
  - Public.
- <strong>Configure as a single-page app (rewrite all urls to /index.html)?</strong>
  - Yes.
- <strong>Set up automatic builds and deploys with GitHub?</strong>
  - No.

Se generan dos archivos de configuración: <strong>.firebaserc</strong> y <strong>firebase.json</strong>.

A continuación, se debe realizar la construcción de lo que será la aplicación web con el siguiente comando:

```bash
ng build
```

En el archivo <strong>firebase.json</strong> se debe realizar un cambio. En la propiedad <strong>"public"</strong> hay que añadir <strong>"dist/project-name"</strong>:

```json
{
  "hosting": {
    "public": "dist/project-name",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

En este punto ya se puede desplegar la página web con el siguiente comando:

```bash
firebase deploy
```

A partir de este punto, cada vez que se realice un cambio en la aplicación web se deben volver a ejecutar los dos últimos comandos.