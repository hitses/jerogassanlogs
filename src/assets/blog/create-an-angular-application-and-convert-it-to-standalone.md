# Crear una aplicación de Angular y convertirla a Standalone

### Creando una nueva aplicación con Angular CLI

Introducir el comando siguiente en el directorio donde se va a guardar el proyecto:

```bash
ng new app-name
```

Angular CLI hará dos preguntas. La primera es si se quieren añadir <strong>rutas</strong> a nuestra aplicación. Hay que contestar que <strong>no</strong>, puesto que luego se va a añadir un modelo de rutas personalizado que no está basado en módulos.

La segunda pregunta es sobre qué tipo de estilos se van a usar. Elegir el que más convenga.

Añadir al archivo .gitignore el <strong>package-lock.json</strong> para que no se suba al repositorio del proyecto.

### Convertir la aplicación de Angular convencional a Standalone

Abrir una ventana de comando con la ruta donde se encuentra la aplicación de Angular creada anteriormente y ejecutar el siguiente comando:

```bash
ng g @angular/core:standalone
```

El instalador hará dos preguntas:

```bash
Choose the type of migration:
- Bootstrap the application using standalone APIs
Which path in your project should be migrated?
- ./
```

Añadir a <strong>angular.json</strong> el siguiente código:

```json
"schematics": {
  "@schematics/angular:component": {
    "style": "scss",
    "skipTests": true,
    "standalone": true
  },
  "@schematics/angular:class": {
    "skipTests": true
  },
  "@schematics/angular:directive": {
    "skipTests": true,
    "standalone": true
  },
  "@schematics/angular:guard": {
    "skipTests": true
  },
  "@schematics/angular:pipe": {
    "skipTests": true,
    "standalone": true
  },
  "@schematics/angular:service": {
    "skipTests": true
  }
},
```

Eliminar código innecesario en main.ts:

```typescript
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { importProvidersFrom } from '@angular/core'
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser' // Solo BrowserModule

providers: [importProvidersFrom(BrowserModule)], // Solo el contenido de la lista
```

Limpiar importaciones innecesarias en app.component.ts.

(Opcional) Eliminar el archivo <strong>app.component.spec.ts</strong>

Eliminar código innecesario en app.component.ts:

```typescript
import { NgSwitch, NgSwitchDefault, NgSwitchCase } from '@angular/common'
imports: [NgSwitch, NgSwitchDefault, NgSwitchCase] // Sólo el contenido de la lista

// Dentro de la clase
title = 'app-name'
```

Eliminar todo el código en app.component.html.

### Enrutado de la aplicación

Crear en la raíz del directorio app el archivo <strong>app.component.routing.ts</strong> y añadir el siguiente código:

```typescript
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./app.component').then((m) => m.AppComponent),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
```

Importar en main.ts las rutas:

```typescript
import { provideRouter } from '@angular/router'
import { routes } from './app/app.component.routing'

providers: [provideRouter(routes)] // Dentro de la lista 'providers'
```