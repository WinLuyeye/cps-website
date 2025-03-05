import React from "react";
import Image from "next/image";

const WhyChooseUsSection = () => {
  return (
    <section className="bg-white py-16 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Texte */}
        <div>
          <h3 className="text-blue-500 text-lg font-bold uppercase mb-4">
            Pourquoi nous choisir
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight mb-6">
            Solution intelligente pour <br /> parquer son véhicule.
          </h2>
          <p className="text-gray-600 mb-8">
            Tincidunt morbi penatibus non ridiculus commodo consectetur faucibus.
            Malesuada sociosqu platea phasellus pharetra consequat ultrices lacus
            nunc praesent pulvinar litora.
          </p>
          <div className="space-y-6">
            {/* Élément 1 */}
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-lg font-bold">✓</span>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-800">Facile à installer</h4>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
                  luctus nec ullamcorper mattis, pulvinar dapibus leo.
                </p>
              </div>
            </div>
            {/* Élément 2 */}
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-lg font-bold">✓</span>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-800">Transactions sécurisées</h4>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
                  luctus nec ullamcorper mattis, pulvinar dapibus leo.
                </p>
              </div>
            </div>
            {/* Élément 3 */}
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-lg font-bold">✓</span>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-800">Assistance 24/7J</h4>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
                  luctus nec ullamcorper mattis, pulvinar dapibus leo.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="relative">
          {/* <div className="absolute bg-gradient-to-tr from-blue-300 to-blue-500 rounded-full w-96 h-96 -top-16 -right-16"></div> */}
          <img
            src="/mockup-phone.png" // Remplacez par le chemin de votre image
            alt="Mockup App FindPark"
            className="relative z-10"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
