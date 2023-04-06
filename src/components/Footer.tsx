import { faHeart, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  const emailAddress: String = "viqb@uci.edu";
  const githubLink: String = "https://github.com/Calvin-QB";
  const linkedin: String = "https://www.linkedin.com/in/calvin-b-545877253/";

  return (
    <div className="px-16 md:px-16 py-20 bg-custom-black">
      <div className="text-center text-xl">
        Made with
        <FontAwesomeIcon
          className="text-red-600 px-2 hover:animate-pulse"
          icon={faHeart}
        />
        by Calvin
      </div>

      <div className="flex flex-row justify-center pt-10  text-4xl gap-12">
        <a href={`${githubLink}`}>
          <FontAwesomeIcon icon={faGithub} />{" "}
        </a>

        <a href={`${linkedin}`}>
          <FontAwesomeIcon icon={faLinkedin} />{" "}
        </a>

        <a href={`mailto:${emailAddress}`}>
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
