Contexto: Un sistema de solicitudes Web.  (como referencia;  Jira Service desk)

Propósito de la prueba:  evaluar la lógica de programación , uso de  tecnologías requeridas y buenas prácticas como clean code.

requisitos: Uso de react y redux. Opcionalmente materialUI o Tailwind. No se usaran apis, todo es en memoria o mediante la escritura / lectura de archivos json si lo define usted.

datos del ticket: Titulo, descripción, tipo (Técnico , Funcional) , fecha/hora solicitud, prioridad (alta , media, baja). Estado del ticket (abierto , Cerrado)

1) listar ticket - > se podrán ordenar los ticket, pudiendo filtrar por tipo, prioridad y estado. También ordenar por fecha.

2) editar ticket-> será posible cambiar la prioridad. Por ejemplo; si el ticket está en prioridad alta, podrá pasar a prioridad media o baja. y tambien será posible cambiar el estado solo los abiertos.

3) crear ticket, con los datos indicados del ticket.
