import { FaFacebookF, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";

const SocialMediaSection = () => {
  return (
    <div className="mt-8">
      <h4 className="text-lg font-semibold mb-4">Suivez nos réseaux sociaux</h4>
      <div className="flex space-x-4">
        <a
          href="https://www.facebook.com/CongoParking/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500 text-white hover:bg-blue-600 transition"
        >
          <FaFacebookF className="w-5 h-5" />
        </a>
        <a
          href="https://x.com/congoparking"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-400 text-white hover:bg-blue-500 transition"
        >
          <FaTwitter className="w-5 h-5" />
        </a>
        <a
          href="https://www.linkedin.com/company/congo-parking/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-400 text-white hover:bg-blue-500 transition"
        >
          <FaLinkedin className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
};
export default SocialMediaSection;