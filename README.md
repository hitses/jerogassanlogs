# JerogassanLogs

Para realizar una actualización en el blog se debe añadir al archivo `src/assets/blog/blog.md` el elemento `<li>` correspondiente en la parte superior de la lista de posts:

```html
<li class="post">
  <a href="/título-del-archivo-creado-en-src-assets-blog">
    <p class="date">21 02 1991</p>
    Título del post en castellano
  </a>
</li>
```

Crear un archivo Markdown en el mismo directorio que el archivo `blog.md` con el nombre del título del post en inglés y con la extensión `.md`.

Guardar los cambios y subirlos al repositorio.

Realizar un `firebase deploy` para generar la nueva página en producción.
