import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <div className="w-full py-3 px-3 bg-teal-900 text-white flex justify-between items-center">
      <p className="text-sm font-bold font-mono">Rubayed Ahmed Foysal</p>

      <a
        href="https://github.com/git-rubayedFoysal"
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-1.5 text-sm font-bold hover:text-teal-300 transition-colors"
      >
        <FaGithub className="size-5" />
        GitHub
      </a>
    </div>
  );
}

export default Footer;
