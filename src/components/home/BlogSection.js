function BlogSectionHome() {
  const posts = [
    {
      title: "The Gourmet Traveler's Inn",
      href: "#",
      category: { name: "review", href: "#" },
      description:
        "Thanks to the collaboration with this agency, my start-up underwent an amazing transformation. His strategic approach and technical knowledge guided us from conception to success. Their team is not only professional, but also becomes a passionate ally in the entrepreneurial journey. I would recommend this agency without hesitation to any start-up looking for a real boost towards success!",
      date: "Mar 16, 2023",
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
      category: { name: "review", href: "#" },
      description:
        "Collaborating with this agency was the catalyst my start-up needed. His strategic approach and outstanding technical skills not only optimized our product but also revolutionized our business strategy. Thanks to their commitment and unique vision, our project went from a promising idea to a thriving reality. Their team not only provided solutions but also became an invaluable partner in our journey to business success. I would recommend this agency to any entrepreneur looking not only for results, but for a genuine and effective strategic partnership!",
      date: "Mar 10, 2023",
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
      category: { name: "review", href: "#" },
      description:
        "My experience with this agency was nothing short of transformative for my custom phone case start-up. From the beginning, your team demonstrated a deep understanding of our needs and exceptional creativity. They not only provided us with solid technical solutions but also guided us strategically in creating a unique brand. Thanks to their guidance and experience, our start-up went from being an isolated idea to a successful product line appreciated by our customers. His customer-centric approach and dedication to detail not only drove our business, but also made the entrepreneurial journey exciting and rewarding. I would without hesitation recommend this agency to any entrepreneur looking for a real boost to their vision!",
      date: "Feb 12, 2023",
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
            Power your Start-up: We Transform Ideas into Success
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
            We are your strategic partner for business growth. From conception
            to success, we promote your start-up with experience and unique
            vision. Ready to take your idea to the next level? Join us and make
            your start-up prosper
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <div
              key={post.title}
              className="flex flex-col overflow-hidden rounded-lg shadow-lg"
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
                      <span>{post.readingTime} read</span>
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
