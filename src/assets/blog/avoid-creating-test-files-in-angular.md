# Evitar crear archivos test en Angular

Se comprueba que el proyecto no se encuentra en estado de ejecución.

Dentro del proyecto de Angular, se accede al archivo <span class="bold">angular.json</span> en la raíz
de directorios.

Se busca con Command + F (MacOs) o Ctrl + F (Windows) el elemento que no
queramos crear con su archivo de pruebas unitarias:

```json
"@schematics/angular:component" <- El único que aparece por defecto
"@schematics/angular:class"
"@schematics/angular:directive"
"@schematics/angular:guard"
"@schematics/angular:pipe"
"@schematics/angular:service"
```

Dentro del objeto se añade la siguiente línea de código:

```json
"skipTests": true
```

Guardar los cambios realizados en los archivos modificados.

Se puede añadir el siguiente extracto de código en <span class="bold">schematics</span>:

```json
"@schematics/angular:component": {
  "style": "scss",
  "skipTests": true
},
"@schematics/angular:class": {
  "skipTests": true
},
"@schematics/angular:directive": {
  "skipTests": true
},
"@schematics/angular:guard": {
  "skipTests": true
},
"@schematics/angular:pipe": {
  "skipTests": true
},
"@schematics/angular:service": {
  "skipTests": true
}
```
