Rutas de Actores

Este documento define rutas para gestionar actores en una base de datos. Proporciona operaciones para obtener actores, obtener un actor por ID, crear un nuevo actor, actualizar un actor existente y eliminar un actor.
Ruta: Obtener Todos los Actores

    URL: /actors
    Método HTTP: GET
    Descripción: Obtiene todos los actores almacenados en la base de datos.
    Parámetros de consulta: Ninguno.
    Respuestas:
        Código de estado 200: Devuelve una matriz de objetos JSON que representan a los actores.
        Código de estado 500: Si se produce un error al obtener los actores.

Ruta: Obtener un Actor por ID

    URL: /actors/:id
    Método HTTP: GET
    Descripción: Obtiene un actor específico por su ID.
    Parámetros de ruta: id (ID del actor que se desea obtener).
    Respuestas:
        Código de estado 200: Devuelve un objeto JSON que representa al actor.
        Código de estado 404: Si el actor no se encuentra en la base de datos.
        Código de estado 500: Si se produce un error al obtener el actor.

Ruta: Crear un Nuevo Actor

    URL: /actors
    Método HTTP: POST
    Descripción: Crea un nuevo actor en la base de datos.
    Parámetros de cuerpo (en el JSON de la solicitud):
        first_name (nombre del actor).
        last_name (apellido del actor).
        usuario (para acceder, el usuario debe ser igual a "admin").
    Respuestas:
        Código de estado 200: El actor se crea con éxito.
        Código de estado 403: Acceso no autorizado si el usuario no es igual a "admin".
        Código de estado 500: Si se produce un error al crear el actor.

Ruta: Actualizar un Actor por ID

    URL: /actors/:id
    Método HTTP: PUT
    Descripción: Actualiza un actor existente por su ID.
    Parámetros de ruta: id (ID del actor que se desea actualizar).
    Parámetros de cuerpo (en el JSON de la solicitud):
        first_name (nombre actualizado del actor).
        last_name (apellido actualizado del actor).
        usuario (para acceder, el usuario debe ser igual a "admin").
    Respuestas:
        Código de estado 200: El actor se actualiza con éxito.
        Código de estado 403: Acceso no autorizado si el usuario no es igual a "admin".
        Código de estado 500: Si se produce un error al actualizar el actor.

Ruta: Eliminar un Actor por ID

    URL: /actors/:id
    Método HTTP: DELETE
    Descripción: Elimina un actor existente por su ID.
    Parámetros de ruta: id (ID del actor que se desea eliminar).
    Parámetros de cuerpo (en el JSON de la solicitud):
        usuario (para acceder, el usuario debe ser igual a "admin").
    Respuestas:
        Código de estado 200: El actor se elimina con éxito.
        Código de estado 403: Acceso no autorizado si el usuario no es igual a "admin".
        Código de estado 500: Si se produce un error al eliminar el actor.