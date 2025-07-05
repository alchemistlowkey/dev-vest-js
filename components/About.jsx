import { assets } from "@/assets/assets";
import Image from "next/image";

const About = () => {
  const teamMembers = [
    {
      name: "Victor D. Fadoju",
      role: "Founder & CEO",
      description:
        "With over 15 years of experience in real estate, Victor leads our team with a passion for helping clients find their perfect home.",
      image: assets.john_doe,
    },
    {
      name: "John Smith",
      role: "Senior Property Consultant",
      description:
        "John specializes in urban apartments and has a keen eye for matching clients with properties that suit their unique needs.",
      image: assets.john_smith,
    },
    {
      name: "Emily Johnson",
      role: "Rental Specialist",
      description:
        "Emily is dedicated to finding the best rental options for clients, ensuring affordability and comfort in every deal.",
      image: assets.mary_jane,
    },
  ];

  return (
    <div className="px-5 sm:px-10 md:px-20">
      <div className="py-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <h2 className="text-2xl md:text-3xl font-bold text-[#E6B027] text-center">
          About Us
        </h2>
        <div className="md:py-10 md:pl-10 py-4 pr-0">
          <p className="text-sm md:text-base mb-10 leading-relaxed">
            Welcome to <strong>DriveVest Real Estate</strong>, your premier
            destination for finding the perfect apartment, house, or rental
            property. With years of experience in the real estate industry, we
            specialize in connecting clients with their dream homes, whether
            you're looking to buy, rent, or invest. Our team is dedicated to
            providing personalized service, expert guidance, and unmatched
            market knowledge to ensure a seamless and stress-free experience.
          </p>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            At DriveVest, we believe that a home is more than just a place to
            live—it's where memories are made, families grow, and dreams come to
            life. That’s why we go above and beyond to match you with properties
            that fit your lifestyle, budget, and aspirations. From cozy
            apartments in vibrant urban centers to spacious family homes in
            serene suburbs, we have something for everyone.
          </p>

          <div className="flex flex-col md:flex-row gap-8 mt-8">
            <div className="flex-1 bg-gray-50 p-6 rounded-lg shadow-md border border-[#E6B027] transition-transform hover:translate-y-1/8 md:hover:translate-0 duration-300">
              <h3 className="text-xl md:text-2xl font-semibold text-[#E6B027] mb-4">
                Our Mission
              </h3>
              <p className="text-sm md:text-base leading-relaxed">
                Our mission is to make home ownership and renting accessible,
                transparent, and enjoyable for all. We strive to provide
                exceptional service, leveraging our expertise and innovative
                tools to help you find a property that feels like home from the
                moment you step inside.
              </p>
            </div>
            <div className="flex-1 bg-gray-50 p-6 rounded-lg shadow-md border border-[#E6B027] transition-transform hover:-translate-y-1/8 md:hover:translate-0 duration-300">
              <h3 className="text-xl md:text-2xl font-semibold text-[#E6B027] mb-4">
                Our Vision
              </h3>
              <p className="text-sm md:text-base leading-relaxed">
                We envision a world where everyone has access to their ideal
                living space. By fostering strong relationships with our clients
                and staying at the forefront of the real estate industry, we aim
                to redefine the home-buying and renting experience for
                generations to come.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-[#E6B027] mb-8">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg border border-[#E6B027] shadow-md hover:-translate-y-1 transition-transform duration-300"
            >
              <Image
                src={member.image}
                alt={member.name}
                className="max-w-[130px] mx-auto rounded-full h-30 w-30 mb-4"
              />
              <h4 className="text-lg md:text-xl font-semibold text-[#E6B027] my-2">
                {member.name}
              </h4>
              <p className="text-sm md:text-base text-gray-600 my-4">
                {member.role}
              </p>
              <p className="text-sm md:text-base text-gray-600 my-2">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
