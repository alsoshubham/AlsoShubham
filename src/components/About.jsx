export default function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:w-5/12 lg:w-5/12">
            <img
              className="rounded-full"
              src="https://avatars.githubusercontent.com/u/133507548?s=400&u=064bdc851b32056353195e216032a4cb5ee4d338&v=4"
              alt="Profile"
            />
          </div>
          <div className="md:w-7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              React development is carried out by passionate developers
            </h2>
            <p className="mt-6 text-gray-600">
            I'm a passionate Full Stack Developer, crafting digital solutions. My journey in tech started with a curiosity about how things work on the web, and it has evolved into a professional career building robust and scalable applications.
            </p>
            <p className="mt-4 text-gray-600">
              Nobis minus voluptatibus pariatur dignissimos libero quaerat iure
              expedita at? Asperiores nemo possimus nesciunt dicta veniam
              aspernatur quam mollitia.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
