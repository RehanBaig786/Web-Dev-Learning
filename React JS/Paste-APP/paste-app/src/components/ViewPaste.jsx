import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Copy, ArrowLeft } from "lucide-react";
import toast from "react-hot-toast";

const ViewPaste = () => {
  const { id } = useParams();
  const allpastes = useSelector((state) => state.paste.pastes);
  const paste = allpastes.filter((p) => p._id === id)[0];
  const navigate = useNavigate();

  console.log("Paste->", paste);

  return (
    <div className="min-h-screen bg-[#0f1115] px-4 py-8 text-white sm:px-6 gap-4">
      <div className="mx-auto max-w-6xl">
        <input
          className="w-full rounded-xl border border-white/10 bg-[#171a21] px-5 py-4 text-xl font-semibold text-white outline-none mb-4"
          type="text"
          placeholder="Paste title"
          value={paste.title}
          disabled
        />

        <div className="w-full flex flex-col items-start relative rounded bg-opacity-10 border border-[rgba(128,121,121,0.3)] backdrop-blur-2xl">
          {/* Top Bar */}
          <div className="w-full rounded-t flex items-center justify-between px-4 py-2 border-b border-[rgba(128,121,121,0.3)]">
            {/* Circles */}
            <div className="flex gap-x-[6px] items-center select-none">
              <div className="w-[13px] h-[13px] rounded-full bg-[rgb(255,95,87)]" />

              <div className="w-[13px] h-[13px] rounded-full bg-[rgb(254,188,46)]" />

              <div className="w-[13px] h-[13px] rounded-full bg-[rgb(45,200,66)]" />
            </div>

            {/* Copy + Back */}
            <div className="flex items-center gap-4">
              {/* Copy */}
              <button
                className="text-gray-400 transition hover:text-green-400"
                onClick={() => {
                  navigator.clipboard.writeText(paste.content);
                  toast.success("Copied to Clipboard");
                }}
              >
                <Copy size={20} />
              </button>

              {/* Back */}
              <button
                className="text-gray-400 transition hover:text-blue-400"
                onClick={() => navigate("/pastes")}
              >
                <ArrowLeft size={20} />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="w-full">
            <textarea
              className="min-h-[520px] w-full resize-y rounded-b-xl border border-white/10 bg-[#171a21] p-5 text-base leading-7 text-gray-300 outline-none"
              value={paste.content}
              placeholder="Paste content"
              rows={20}
              disabled
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewPaste;
