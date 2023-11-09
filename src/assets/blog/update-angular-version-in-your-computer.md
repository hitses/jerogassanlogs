# Actualizar la versión de Angular en tu ordenador

## MacOS y Linux

_Nota_: si no puedes ver las carpetas ocultas de tu sistema, utiliza el atajo de teclado **Shift + Command + .**. Vuelve a realizar esta operación si no quieres ver carpetas ocultas de tu sistema en tu día a día una vez finalizados los pasos para actualizar Angular.

1. Ejecuta el comando **ng version** y comprueba que sale una versión diferente a la que quieres tener instalada.
2. Ejecuta el comando **sudo npm uninstall -g @angular/cli**.
3. Ejecuta el comando **ng version** y comprueba que no reconoce el comando **ng**.
4. Seguidamente, utiliza el comando **sudo npm cache clean --force**.
5. Ejecuta el comando **sudo npm install -g @angular/cli**.
6. Ejecuta el comando **ng version** y comprueba que sale la última versión de Angular compatible con tu versión de Node.JS instalada.

Si el paso número _3_ te devuelve la misma versión de Angular que en el paso número _1_, sigue estos pasos:

1. En **MacOS**, accede a cualquier carpeta del Finder y selecciona **Ir/Ordenador** en la barra superior o presiona simultáneamente **Shift + Command + C**.
2. Accede a la ruta **/usr/local/lib/node_modules**.
3. Localiza y elimina la carpeta **@angular**, **@ng** o **ng** .
4. Ejecuta el comando **ng version** y comprueba que no reconoce el comando **ng**.
5. Seguidamente, utiliza el comando **sudo npm cache clean --force**.
6. Ejecuta el comando **sudo npm install -g @angular/cli**.
7. Ejecuta el comando **ng version** y comprueba que sale la última versión de Angular compatible con tu versión de Node.JS instalada.

Espero que estos pasos sean suficientes para solucionar la actualización de Angular.

## Windows

_Nota_: si no puedes ver las carpetas ocultas de tu sistema, en cualquier carpeta del sistema accede a la pestaña **Ver/Mostrar** y activa la opción **Elementos ocultos**. Vuelve a realizar esta operación si no quieres ver carpetas ocultas de tu sistema en tu día a día una vez finalizados los pasos para actualizar Angular.

1. Ejecuta el comando **ng version** y comprueba que sale una versión diferente a la que quieres tener instalada.
2. Ejecuta el comando **npm uninstall -g @angular/cli**.
3. Ejecuta el comando **ng version** y comprueba que no reconoce el comando **ng**.
4. Seguidamente, utiliza el comando **npm cache clean --force**.
5. Ejecuta el comando **npm install -g @angular/cli**.
6. Ejecuta el comando **ng version** y comprueba que sale la última versión de Angular compatible con tu versión de Node.JS instalada.

Si el paso número _3_ te devuelve la misma versión de Angular que en el paso número _1_, sigue estos pasos:

1. Accede a la ruta **C:/Usuarios/<Nombre de tu PC>/AppData/Roaming/npm/node_modules/**.
2. Localiza y elimina la carpeta **@angular**, **@ng** o **ng** .
3. Ejecuta el comando **ng version** y comprueba que no reconoce el comando **ng**.
4. Seguidamente, utiliza el comando **npm cache clean --force**.
5. Ejecuta el comando **npm install -g @angular/cli**.
6. Ejecuta el comando **ng version** y comprueba que sale la última versión de Angular compatible con tu versión de Node.JS instalada.

Espero que estos pasos sean suficientes para solucionar la actualización de Angular.
