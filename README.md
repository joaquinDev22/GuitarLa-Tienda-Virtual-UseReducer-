# GuitarLa-Tienda-Virtual-UseReducer

Esta versión del e-commerce GuitarLA traslada la gestión lógica de la cesta de compras a un reductor formal (cartReducer). A través del despacho de acciones estructuradas, la aplicación manipula de manera determinista el listado de productos, controlando de manera segura la suma, resta y vaciado de productos. Representa un ejemplo avanzado de separación de responsabilidades y modularidad técnica, ideal para proyectos que requieran un mayor control en las reglas comerciales asociadas a la gestión de inventarios virtuales y flujos transaccionales.

# Características Claves
- Arquitectura predecible: Toda mutación de la orden es el resultado de despachar una acción bien definida.
- Tipado completo de negocio: Estructuración rigurosa de las acciones e interfaces (add-to-cart, remove-from-cart, increase-quantity, decrease-quantity, clear-cart).
- Sincronización consistente: Mantiene la persistencia en LocalStorage y todas las restricciones comerciales a nivel del motor de estados.

# Stack Tecnológico
- Frontend: React 19, TypeScript.
- Estilos: Tailwind CSS v4.
- Herramientas de Construcción: Vite.

# Valor Técnico Demostrado
- Modelado y transición de estados mediante funciones reductoras puras independientes de la plataforma visual.
- Estricta tipificación de interfaces de negocio y colecciones complejas en TypeScript.
- Demostración práctica de patrones avanzados de gestión de estados en React.
