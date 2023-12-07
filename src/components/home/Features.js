import { CheckIcon } from "@heroicons/react/24/outline";

const features = [
  {
    name: "Web Development Services",
    description:
      "Elevate your online presence with our comprehensive web development solutions. From inviting team collaboration to seamless list views, we streamline your digital experience.",
  },
  {
    name: "Responsive Designs",
    description:
      "Crafting keyboard shortcuts for success, we ensure your website is not just visually appealing but also user-friendly, enhancing navigation and engagement.",
  },
  {
    name: "Optimized Calendars",
    description:
      "Syncing seamlessly with your business goals, our web development services include optimized calendars for efficient scheduling and management of essential events.",
  },
  {
    name: "Proactive Notifications",
    description:
      "Stay informed and ahead with our proactive notification systems. We keep you in the loop, ensuring you never miss a critical update or opportunity.",
  },
  {
    name: "Interactive Boards",
    description:
      "Experience project management like never before with interactive boards that facilitate collaboration, streamline workflows, and enhance productivity.",
  },
  {
    name: "Comprehensive Reporting",
    description:
      "Gain valuable insights into your web performance. Our reporting tools provide in-depth analytics, allowing you to make informed decisions for continued growth.",
  },
  {
    name: "Mobile-Friendly Solutions",
    description:
      "Your website on the go! Our mobile app development ensures your business remains accessible and user-friendly across various devices, providing a seamless experience.",
  },
];

export default function Features() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:py-24 lg:px-8">
        <div>
          <h2 className="text-lg font-semibold text-indigo-600">
            Everything you need
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
            All-in-one platform
          </p>
          <p className="mt-4 text-lg text-gray-500">
            At AdaptLeap, the most fundamental thing for us is to ensure that
            our customers are completely 100% satisfied. We strive to exceed
            your expectations, offering customized solutions and high-quality
            services that reflect our commitment to excellence and complete
            customer satisfaction.
          </p>
        </div>
        <div className="mt-12 lg:col-span-2 lg:mt-0">
          <dl className="space-y-10 sm:grid sm:grid-flow-col sm:grid-cols-2 sm:grid-rows-4 sm:gap-x-6 sm:gap-y-10 sm:space-y-0 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <CheckIcon
                    className="absolute h-6 w-6 text-green-500"
                    aria-hidden="true"
                  />
                  <p className="ml-9 text-lg font-medium leading-6 text-gray-900">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-9 text-base text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
