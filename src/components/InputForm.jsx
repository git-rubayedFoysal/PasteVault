import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPaste, updatePaste } from "../Features/pasteSlice";
import { useParams, useNavigate } from "react-router";
import Editor from "@monaco-editor/react";

function InputForm(props) {
  const { id } = useParams();
  const allPastes = useSelector((state) => state.paste.allPastes);
  const existingPaste = allPastes.find((p) => p.id === id);

  const [title, setTitle] = useState(existingPaste?.title || "");
  const [content, setContent] = useState(existingPaste?.content || "");
  const [language, setLanguage] = useState(
    existingPaste?.language || "javascript",
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="w-full py-4 px-3 flex flex-col justify-between items-stretch">
      <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-3">
        <input
          className="py-2 px-1 w-full rounded-sm text-white text-sm outline-none border-2 border-white/20 bg-gray-950/20 focus:border-cyan-600 transition-all"
          type="text"
          placeholder="Enter Title Here...."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          disabled={props.type === "view"}
        />
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          disabled={props.type === "view"}
          className="w-full sm:w-auto bg-gray-950 border-2 font-bold border-white/20 text-white text-xs px-2 py-2 rounded outline-none focus:border-cyan-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
        >
          <option value="javascript">JavaScript</option>
          <option value="typescript">TypeScript</option>
          <option value="python">Python</option>
          <option value="cpp">C++</option>
          <option value="java">Java</option>
          <option value="css">CSS</option>
          <option value="html">HTML</option>
          <option value="json">JSON</option>
          <option value="markdown">Markdown</option>
          <option value="plaintext">Plain Text</option>
        </select>
        <button
          className="w-full sm:w-auto font-bold whitespace-nowrap text-xs py-2.5 px-5 cursor-pointer rounded border-2 border-green-800 bg-green-800 text-white hover:bg-green-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={props.type === "view"}
          onClick={() => {
            props.type === "create"
              ? dispatch(addPaste({ title, content, language }))
              : dispatch(updatePaste({ id, title, content, language }));
            setTitle("");
            setContent("");
            navigate("/");
          }}
        >
          {props.type === "create" ? "Create My Paste" : "Update"}
        </button>
      </div>

      <div className="mt-5">
        <Editor
          // height="50vh"
          language={language}
          value={content}
          theme="vs-dark"
          className="h-[50vh] sm:h-[65vh] rounded-md overflow-hidden"
          onChange={(value) => setContent(value)}
          options={{
            readOnly: props.type === "view",
            fontSize: 14,
            minimap: { enabled: false },
            wordWrap: "on",
            scrollBeyondLastLine: false,
            automaticLayout: true,
          }}
        />
      </div>
    </div>
  );
}

export default InputForm;
