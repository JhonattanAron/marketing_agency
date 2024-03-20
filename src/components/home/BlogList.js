const posts = [
  {
    title: "QuitoShops",
    href: "#",
    category: {
      name: "Reseña",
      href: "#",
      color: "bg-indigo-100 text-indigo-800",
    },
    description:
      "Adapleat ha sido esencial para el éxito de mi negocio. Su equipo de expertos no solo rediseñó por completo nuestro sitio web, sino que también mejoró la experiencia del usuario, lo que resultó en un aumento significativo en la participación de nuestros clientes. ¡Gracias Adapleat por su excelente servicio y profesionalismo! Recomiendo encarecidamente sus servicios.",
    date: "16 de marzo de 2020",
    datetime: "2023-10-16",
    author: {
      name: "Aron Cachago",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    readingTime: "6 min",
  },
  {
    title: "Nat Spa",
    href: "#",
    category: { name: "Reseña", href: "#", color: "bg-pink-100 text-pink-800" },
    description:
      "Estoy extremadamente satisfecho con los consejos y el trabajo de Adapleat. Transformaron nuestro antiguo sitio web en una plataforma moderna y atractiva. Además, su atención personalizada y rápida respuesta a nuestras necesidades fueron impresionantes. Sin duda, Adapleat es el socio ideal para cualquier empresa que busque mejorar su presencia en línea.",
    date: "10 de marzo de 2020",
    datetime: "2020-03-10",
    author: {
      name: "Dessie Ryan",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    readingTime: "4 min",
  },
  {
    title: "Joy Technologys",
    href: "#",
    category: {
      name: "Reseña",
      href: "#",
      color: "bg-green-100 text-green-800",
    },
    description:
      "Adapleat superó mis expectativas. Su equipo no solo comprendió completamente nuestra visión, sino que también nos proporcionó soluciones creativas para mejorar la funcionalidad y el diseño de nuestro sitio web. La colaboración fue perfecta y el resultado final fue exactamente lo que necesitábamos. Definitivamente, Adapleat es el socio perfecto para el desarrollo web.",
    date: "12 de febrero de 2020",
    datetime: "2020-02-12",
    author: {
      name: "Rafael Collins",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    readingTime: "11 min",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function BlogList() {
  return (
    <div className="bg-white px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
      <div className="relative mx-auto max-w-lg divide-y-2 divide-gray-200 lg:max-w-7xl">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Nuestros Clientes Actualmente
          </h2>
          <p className="mt-3 text-xl text-gray-500 sm:mt-4">
            Ellos COnfian en nosotros y Nosotros Confiamos en ellos
          </p>
        </div>
        <div className="mt-12 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
          {posts.map((post) => (
            <div key={post.title}>
              <div>
                <a href={post.category.href} className="inline-block">
                  <span
                    className={classNames(
                      post.category.color,
                      "inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium"
                    )}
                  >
                    {post.category.name}
                  </span>
                </a>
              </div>
              <a href={post.href} className="mt-4 block">
                <p className="text-xl font-semibold text-gray-900">
                  {post.title}
                </p>
                <p className="mt-3 text-base text-gray-500">
                  {post.description}
                </p>
              </a>
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
                    <a href={post.author.href}>{post.author.name}</a>
                  </p>
                  <div className="flex space-x-1 text-sm text-gray-500">
                    <time dateTime={post.datetime}>{post.date}</time>
                    <span aria-hidden="true">&middot;</span>
                    <span>{post.readingTime} min de lectura</span>
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
