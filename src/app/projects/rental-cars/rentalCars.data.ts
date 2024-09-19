
export type RentalCar = {
    title: string;
    description: string;
    features: string[];
    technologies: string[];
    github: string;
    vercel: string;
}

export const rentalCarsData:RentalCar  = 
    {
        title: "Rental Cars",
        description: "A web application for renting cars, allowing admins to manage listings and users to securely rent vehicles.",
        features: [
          "Create: Admins can add new car listings to the platform via forms in the interface.",
          "Read: The application displays a list of all available cars in a clear and organized manner.",
          "Update: Admins can edit car details, such as pricing, availability, and descriptions.",
          "Delete: Car listings can be securely deleted from the platform when needed.",
          "Search: Users can quickly find specific cars using the search function."
        ],
        technologies: [
          "Prisma: A modern ORM that simplifies database management and interaction with PostgreSQL.",
          "PostgreSQL: A relational database management system used for storing and managing data.",
          "Next.js: A React framework for building web applications and APIs, supporting static site generation and server-side rendering.",
          "React: A JavaScript library for building user interfaces, used in conjunction with Next.js.",
          "Tailwind CSS: A utility-first CSS framework that helps design user interfaces quickly and flexibly.",
          "Zod: A schema validation library that integrates well with Prisma for data validation."
        ],
        github: "https://github.com/Luiskd1/rental-cars",
        vercel: "https://rental-cars-gamma.vercel.app/"
      }
      
