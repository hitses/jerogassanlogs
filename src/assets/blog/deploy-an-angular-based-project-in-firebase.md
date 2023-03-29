# Implementar un proyecto basado en Angular en Firebase

Acceder a la web de <a href="https://firebase.google.com/" target="_blank">Firebase <i class="awesome fa-solid fa-arrow-up-right-from-square"></i></a>.

Acceder a la consola.

Agregar un nuevo proyecto.

Ponerle un nombre al proyecto.

Decidir si se va a activar <a href="https://analytics.google.com/analytics/web/" target="_blank">Google Analytics <i class="awesome fa-solid fa-arrow-up-right-from-square"></i></a>. De ser así, se debe seleccionar la cuenta con la que se va a enlazar el servicio.

Crear proyecto y esperar a que finalice la operación.

Para preparar el entorno de producción, acceder desde el menú de la izquierda a <span class="bold">Compilación/Hosting</span>.

Seleccionar <span class="bold">Comenzar</span>.

Comprobar si <span class="bold">Firebase CLI</span> está instalado en el sistema. Para ello, se debe ejecutar el siguiente comando:

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

Una vez se realiza el proceso, se debe acceder a la raíz del proyecto en la consola de comandos para iniciar el proyecto en <span class="bold">Firebase CLI</span> con el siguiente comando:

```bash
firebase init
```

Al ejecutar el comando <span class="bold">Firebase CLI</span> realiza una serie de preguntas de configuración. 

- <span class="bold">Which Firebase features do you want to set up for this directory?</span>
  - Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys.
- <span class="bold">Please select an option:</span>
  - Use an existing project.
- <span class="bold">Select a default Firebase project for this directory:</span>
  - Seleccionar el nombre del proyecto que se ha creado anteriormente en la consola de <span class="bold">Firebase</span>.
- <span class="bold">What do you want to use as your public directory?</span>
  - Public.
- <span class="bold">Configure as a single-page app (rewrite all urls to /index.html)?</span>
  - Yes.
- <span class="bold">Set up automatic builds and deploys with GitHub?</span>
  - No.

Se generan dos archivos de configuración: <span class="bold">.firebaserc</span> y <span class="bold">firebase.json</span>.

A continuación, se debe realizar la construcción de lo que será la aplicación web con el siguiente comando:

```bash
ng build
```

En el archivo <span class="bold">firebase.json</span> se debe realizar un cambio. En la propiedad <span class="bold">"public"</span> hay que añadir <span class="bold">"dist/project-name"</span>:

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