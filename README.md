Rutas de Actores

Este documento define rutas para gestionar actores en una base de datos. Proporciona operaciones para obtener actores, obtener un actor por ID, crear un nuevo actor, actualizar un actor existente y eliminar un actor.

Obtener todos los actores

    Ruta: GET /api/actors
    Descripción: Esta ruta te permite obtener una lista de todos los actores en la base de datos.
    Parámetros de consulta opcionales:
    Ejemplo de solicitud: GET /api/actors/
    Respuesta exitosa (código 200): Devuelve una lista de actores en formato JSON.

Obtener actores con paginación

    Ruta: GET /api/actors/paginated
    Descripción: Esta ruta te permite obtener una lista de actores con paginación, lo que significa que se obtendrán solo un número limitado de registros por página.
    Parámetros de consulta opcionales:
        page: Número de página (por defecto es 1).
        limit: Número de registros por página (por defecto es 10).
    Ejemplo de solicitud: GET /api/actors/paginated?page=1&limit=10
    Respuesta exitosa (código 200): Devuelve una lista de actores con paginación en formato JSON.

Obtener un actor por ID

    Ruta: GET /api/actors/:id
    Descripción: Esta ruta te permite obtener un actor específico por su ID.
    Parámetros de ruta obligatorios:
        id: ID del actor que deseas obtener.
    Ejemplo de solicitud: GET /api/actors/1
    Respuesta exitosa (código 200): Devuelve los detalles del actor en formato JSON.
    Respuesta de error (código 404): Si el actor no se encuentra en la base de datos.

Crear un nuevo actor

    Ruta: POST /api/actors
    Descripción: Esta ruta te permite crear un nuevo actor en la base de datos.
    Cuerpo de la solicitud (JSON):
        first_name: Nombre del actor.
        last_name: Apellido del actor.
        usuario: Debe ser igual a "admin" para autorizar la creación.
    Ejemplo de solicitud:

    json

    POST /api/actors
    {
      "first_name": "Nombre",
      "last_name": "Apellido",
      "usuario": "admin"
    }

    Respuesta exitosa (código 200): Devuelve un mensaje indicando que el actor se ha creado con éxito.
    Respuesta de error (código 403): Si el valor de usuario no es igual a "admin", se denegará el acceso.

Actualizar un actor por ID

    Ruta: PUT /api/actors/:id
    Descripción: Esta ruta te permite actualizar un actor existente en la base de datos por su ID.
    Parámetros de ruta obligatorios:
        id: ID del actor que deseas actualizar.
    Cuerpo de la solicitud (JSON):
        first_name: Nuevo nombre del actor.
        last_name: Nuevo apellido del actor.
        usuario: Debe ser igual a "admin" para autorizar la actualización.
    Ejemplo de solicitud:

    json

    PUT /api/actors/1
    {
      "first_name": "Nuevo Nombre",
      "last_name": "Nuevo Apellido",
      "usuario": "admin"
    }

    Respuesta exitosa (código 200): Devuelve un mensaje indicando que el actor se ha actualizado con éxito.
    Respuesta de error (código 403): Si el valor de usuario no es igual a "admin", se denegará el acceso.

Eliminar un actor por ID

    Ruta: DELETE /api/actors/:id
    Descripción: Esta ruta te permite eliminar un actor existente en la base de datos por su ID.
    Parámetros de ruta obligatorios:
        id: ID del actor que deseas eliminar.
    Cuerpo de la solicitud (JSON):
        usuario: Debe ser igual a "admin" para autorizar la eliminación.
    Ejemplo de solicitud:

    json

    DELETE /api/actors/1
    {
    "usuario": "admin"
    }

    Respuesta exitosa (código 200): Devuelve un mensaje indicando que el actor se ha eliminado con éxito.
    Respuesta de error (código 403): Si el valor de usuario no es igual a "admin", se denegará el acceso.