export type RentalCarEs = {
    title: string;
    description: string;
    features: string[];
    technologies: string[];
    github: string;
    vercel: string;
}

export const rentalCarsDataEs: RentalCarEs = {
  title: "Renta de Autos",
  description: "Una aplicación web para rentar autos, permitiendo a los administradores gestionar los listados y a los usuarios rentar vehículos de forma segura.",
  features: [
    "Crear: Los administradores pueden agregar nuevos listados de autos a la plataforma a través de formularios en la interfaz.",
    "Leer: La aplicación muestra una lista de todos los autos disponibles de manera clara y organizada.",
    "Actualizar: Los administradores pueden editar los detalles de los autos, como precios, disponibilidad y descripciones.",
    "Eliminar: Los listados de autos pueden ser eliminados de forma segura de la plataforma cuando sea necesario.",
    "Buscar: Los usuarios pueden encontrar rápidamente autos específicos usando la función de búsqueda."
  ],
  technologies: [
    "Prisma: Un ORM moderno que simplifica la gestión de bases de datos y la interacción con PostgreSQL.",
    "PostgreSQL: Un sistema de gestión de bases de datos relacional utilizado para almacenar y gestionar datos.",
    "Next.js: Un framework de React para construir aplicaciones web y APIs, con soporte para generación de sitios estáticos y renderizado del lado del servidor.",
    "React: Una biblioteca de JavaScript para construir interfaces de usuario, utilizada en conjunto con Next.js.",
    "Tailwind CSS: Un framework CSS de utilidades que ayuda a diseñar interfaces de usuario de forma rápida y flexible.",
    "Zod: Una biblioteca de validación de esquemas que se integra bien con Prisma para la validación de datos."
  ],
  github: "https://github.com/Luiskd1/rental-cars",
  vercel: "https://rental-cars-gamma.vercel.app/"
};

