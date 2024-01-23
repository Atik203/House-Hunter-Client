import React from "react";

const TargetAudienceSection = () => {
  return (
    <div className="container mx-auto my-16">
      {/* Other content on your website */}

      {/* New section for target audience and benefits */}
      <section id="target-audience" className="py-12 bg-gray-100">
        <h2 className="text-4xl font-bold mb-10 text-center">
          Who Benefits from Our Website?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 w-10/12 mx-auto gap-8">
          {/* Developer Persona */}
          <div className="persona bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Developers</h3>
            <p className="text-gray-600">
              Explore powerful tools and resources for seamless development.
            </p>
          </div>

          {/* Corporate Professionals Persona */}
          <div className="persona bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">
              Corporate Professionals
            </h3>
            <p className="text-gray-600">
              Access valuable insights and solutions for corporate challenges.
            </p>
          </div>

          {/* Bankers Persona */}
          <div className="persona bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Bankers</h3>
            <p className="text-gray-600">
              Discover financial tools and information tailored for banking
              professionals.
            </p>
          </div>

          {/* Personal Task Management Persona */}
          <div className="persona bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">
              Personal Task Management
            </h3>
            <p className="text-gray-600">
              Simplify your life with easy task management, stylish design, and
              user-friendly features.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-4xl font-bold mb-10 text-center">
            Benefits for All Users
          </h2>

          <ul className="list-disc text-center list-inside text-lg text-gray-700">
            <li className="mb-3">
              Stay updated with the latest industry trends.
            </li>
            <li className="mb-3">
              Enhance your skills with our educational resources.
            </li>
            <li>Connect and collaborate with like-minded professionals.</li>
            <li className="mt-3">
              Effortless task management with stylish and user-friendly design.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default TargetAudienceSection;
