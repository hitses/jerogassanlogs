# Crear un puntero de escritura con efecto pestañeo en CSS

En el archivo CSS correspondiente creamos el siguiente código:

```css
.blink {
  animation: blinking 1s step-start infinite;
}

@keyframes blinking {
  0%,
  50%,
  100% {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
}
```

Luego creamos en el archivo HTML un elemento con la clase **blink**:

```html
<span class="blink">_</span>
```

Puedes ver el resultado en el título de esta misma web.
