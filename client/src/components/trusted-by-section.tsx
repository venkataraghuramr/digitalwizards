import { SiAdobe, SiAmazon, SiApple, SiGoogle, SiSamsung } from "react-icons/si";
import { FaMicrosoft } from "react-icons/fa";

export default function TrustedBySection() {
  return (
    <section className="py-12 bg-purple-50/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-xl text-purple-700 font-medium mb-8">Trusted by growing brands</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-60">
          <SiGoogle className="h-12 w-auto text-gray-500" />
          <FaMicrosoft className="h-12 w-auto text-gray-500" />
          <SiApple className="h-12 w-auto text-gray-500" />
          <SiAmazon className="h-12 w-auto text-gray-500" />
          <SiAdobe className="h-12 w-auto text-gray-500" />
          <SiSamsung className="h-12 w-auto text-gray-500" />
        </div>
      </div>
    </section>
  );
}
