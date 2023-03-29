# Instalar aplicaciones Homebrew en MacOs con chip Silicon

La documentación oficial de Hombrew se encuentra en su <a href="https://brew.sh/index_es" target="_blank">página web oficial <i class="awesome fa-solid fa-arrow-up-right-from-square"></i></a>.

Hace falta tener instalado Homebrew. Para comprobar que está instalado y su
versión, hay que utilizar el comando siguiente:

```bash
brew -v
```

Si no está instalado en el sistema, se debe introducir siguiente comando:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Para instalar paquetes con Homebrew se utiliza el siguiente comando:

```bash
brew install namePackage
```

Si el comando anterior no funciona, se puede utilizar el siguiente para sistemas
basados en chips ARM:

```bash
arch -x86_64 brew install namePackage
```
