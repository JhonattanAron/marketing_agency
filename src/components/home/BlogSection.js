function BlogSectionHome() {
  const posts = [
    {
      title: "The Gourmet Traveler's Inn",
      href: "#",
      category: { name: "reseña", href: "#" },
      description:
        "Gracias a la colaboración con esta agencia, mi start-up experimentó una increíble transformación. Su enfoque estratégico y conocimientos técnicos nos guiaron desde la concepción hasta el éxito. Su equipo no solo es profesional, sino que también se convierte en un aliado apasionado en el viaje emprendedor. Recomendaría esta agencia sin dudarlo a cualquier start-up que busque un impulso real hacia el éxito.",
      date: "16 de marzo de 2023",
      datetime: "2023-03-16",
      imageUrl:
        "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      readingTime: "6 min",
      author: {
        name: "Marta Aufderehar",
        href: "#",
        imageUrl:
          "https://images.unsplash.com/photo-1667132970685-a2109a3ed00d?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    },
    {
      title: "Urban Elegance",
      href: "#",
      category: { name: "reseña", href: "#" },
      description:
        "Colaborar con esta agencia fue el catalizador que mi start-up necesitaba. Su enfoque estratégico y habilidades técnicas sobresalientes no solo optimizaron nuestro producto, sino que también revolucionaron nuestra estrategia comercial. Gracias a su compromiso y visión única, nuestro proyecto pasó de ser una idea prometedora a una realidad próspera. Su equipo no solo proporcionó soluciones, sino que también se convirtió en un socio invaluable en nuestro viaje hacia el éxito empresarial. Recomendaría esta agencia a cualquier emprendedor que busque no solo resultados, sino también una asociación estratégica genuina y efectiva.",
      date: "10 de marzo de 2023",
      datetime: "2022-03-10",
      imageUrl:
        "https://images.unsplash.com/photo-1595665593673-bf1ad72905c0?q=80&w=1028&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      readingTime: "4 min",
      author: {
        name: "Samuel Goyette",
        href: "#",
        imageUrl:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    },
    {
      title: "TecnoBoutique",
      href: "#",
      category: { name: "reseña", href: "#" },
      description:
        "Mi experiencia con esta agencia fue nada menos que transformadora para mi start-up de fundas de teléfonos personalizadas. Desde el principio, su equipo demostró una comprensión profunda de nuestras necesidades y una creatividad excepcional. No solo nos proporcionaron soluciones técnicas sólidas, sino que también nos guiaron estratégicamente en la creación de una marca única. Gracias a su orientación y experiencia, nuestra start-up pasó de ser una idea aislada a una línea de productos exitosa apreciada por nuestros clientes. Su enfoque centrado en el cliente y la dedicación al detalle no solo impulsaron nuestro negocio, sino que también hicieron que el viaje emprendedor fuera emocionante y gratificante. Recomendaría esta agencia sin dudarlo a cualquier emprendedor que busque un impulso real a su visión.",
      date: "12 de febrero de 2023",
      datetime: "2023-02-12",
      imageUrl:
        "https://images.unsplash.com/photo-1542219550-76864b1bc385?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      readingTime: "11 min",
      author: {
        name: "Efrain Metz",
        href: "#",
        imageUrl:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    },
  ];
  return (
    <div className="relative bg-gray-50 px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
      <div className="absolute inset-0">
        <div className="h-1/3 bg-white sm:h-2/3" />
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Impulsa tu Start-up: Transformamos Ideas en Éxito
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
            Somos tu socio estratégico para el crecimiento empresarial. Desde la
            concepción hasta el éxito, promovemos tu start-up con experiencia y
            visión única. ¿Listo para llevar tu idea al siguiente nivel? Únete a
            nosotros y haz que tu start-up prospere.
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <div
              key={post.title}
              className="flex flex-col overflow-hidden rounded-lg shadow-xl"
            >
              <div className="flex-shrink-0">
                <img
                  className="h-48 w-full object-cover"
                  src={post.imageUrl}
                  alt=""
                />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    <a href={post.category.href} className="hover:underline">
                      {post.category.name}
                    </a>
                  </p>
                  <a href={post.href} className="mt-2 block">
                    <p className="text-xl font-semibold text-gray-900">
                      {post.title}
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      {post.description}
                    </p>
                  </a>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <a href={post.author.href}>
                      <span className="sr-only">{post.author.name}</span>
                      <img
                        className="h-10 w-10 rounded-full"
                        src={post.author.imageUrl}
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      <a href={post.author.href} className="hover:underline">
                        {post.author.name}
                      </a>
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time dateTime={post.datetime}>{post.date}</time>
                      <span aria-hidden="true">&middot;</span>
                      <span>{post.readingTime} min de lectura</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogSectionHome;
