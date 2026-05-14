import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <div className="w-full py-4 px-5 bg-teal-900 text-white border-t border-teal-700 flex flex-col sm:flex-row justify-between items-center gap-2">
      <p className="text-sm font-bold font-mono flex items-center gap-2">
        <span className="size-2 rounded-full bg-green-400 inline-block"></span>
        Rubayed Ahmed Foysal
      </p>

      <p className="text-xs font-mono text-teal-300 hidden sm:block">
        // built with React & Redux Toolkit
      </p>

      <a
        href="https://github.com/git-rubayedFoysal"
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-2 text-sm font-mono px-4 py-1.5 rounded border border-teal-600 hover:bg-teal-700 transition-all"
      >
        <FaGithub className="size-4" />
        git-rubayedFoysal
      </a>
    </div>
  );
}

export default Footer;
