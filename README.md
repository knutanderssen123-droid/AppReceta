# AppReceta - FamilyRecipes

Aplicacion web de recetas familiares hecha con HTML, CSS y JavaScript (sin frameworks).

## Estado actual

- Selector de miembros de familia.
- Busqueda de recetas por ingredientes.
- Filtros por categoria.
- Favoritos por usuario.
- Creacion y borrado de recetas propias.
- Datos guardados en `localStorage`.

## Como ejecutar

1. Abre `index.html` en el navegador.
2. Crea un miembro.
3. Entra en "Ingredientes" y busca recetas.

No necesita instalacion de paquetes.

## Proximo plan recomendado (ordenado)

1. **Estabilizar base**
   - Revisar errores de consola.
   - Validar flujos clave (crear usuario, buscar, guardar receta, favorito).
2. **Mejorar estructura**
   - Separar `app.js` en modulos: `data`, `storage`, `ui`, `recipes`.
   - Crear carpeta `js/` y mover scripts.
3. **Persistencia real**
   - Pasar de `localStorage` a backend (Firebase o Supabase).
   - Agregar autenticacion basica por usuario.
4. **Features utiles**
   - Editar receta creada.
   - Busqueda por nombre.
   - Lista de compra desde ingredientes.
5. **Calidad**
   - Añadir tests basicos (al menos para busqueda y filtros).
   - Configurar deploy en GitHub Pages.

## Primera tarea concreta para hoy

Implementar **editar receta** en "Mis Recetas":
- Boton "Editar" en cada receta creada.
- Reusar el formulario actual.
- Guardar cambios sin crear receta duplicada.

Esta tarea te da una mejora real de producto sin cambiar toda la arquitectura.
