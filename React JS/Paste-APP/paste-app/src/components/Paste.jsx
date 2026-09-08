import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromPaste } from "../redux/pasteSlice";
import toast from "react-hot-toast";
import { Calendar, Copy, Eye, PencilLine, Trash2, Share2 } from "lucide-react";
import { FormatDate } from "../Utils/FormatDate";

const Paste = () => {
  const pastes = useSelector((state) => state.paste.pastes);
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const filteredData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  function handleDelete(pasteId) {
    dispatch(removeFromPaste(pasteId));
    toast.success("Paste Deleted");
  }

  async function handleShare(paste) {
    const shareData = {
      title: paste.title,
      text: paste.content,
      url: `${window.location.origin}/pastes/${paste._id}`,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(shareData.url);
        toast.success("Link copied to clipboard");
      }
    } catch (error) {
      // User cancelled the share dialog
      if (error.name !== "AbortError") {
        toast.error("Unable to share");
      }
    }
  }

  return (
    <div className="min-h-screen bg-[#0f1115] px-4 py-8 text-white sm:px-6">
      <div className="mx-auto max-w-6xl">
        {/* Search */}
        <div className="mb-6">
          <input
            className="w-full rounded-xl border border-white/10 bg-[#171a21] px-4 py-3 text-sm text-white outline-none placeholder:text-gray-600 transition focus:border-white/25"
            type="search"
            placeholder="Search pastes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Pastes */}
        <div className="flex flex-col gap-3">
          {filteredData.length > 0 &&
            filteredData.map((paste) => {
              return (
                <div
                  key={paste._id}
                  className="flex flex-row items-center gap-6 rounded-xl border border-white/10 bg-[#171a21] px-5 py-5 transition hover:border-white/20"
                >
                  {/* Paste Content */}
                  <div className="min-w-0 flex-1">
                    <h1 className="mb-1 truncate text-lg font-semibold text-white">
                      {paste.title}
                    </h1>

                    <p className="line-clamp-2 break-words text-sm leading-6 text-gray-500">
                      {paste.content}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="flex shrink-0 flex-col items-end gap-3">
                    <div className="flex flex-row items-center gap-4 text-sm">
                      <button className="text-gray-500 transition hover:text-white">
                        <a href={`/?pasteId=${paste?._id}`}>
                          <PencilLine
                            // className="text-black group-hover:text-blue-500"
                            size={20}
                          />
                        </a>
                      </button>

                      <button className="text-gray-500 transition hover:text-white">
                        <a href={`/pastes/${paste?._id}`}>
                          <Eye
                            // className="text-black group-hover:text-orange-500"
                            size={20}
                          />
                        </a>
                      </button>

                      <button
                        onClick={() => handleDelete(paste?._id)}
                        className="text-gray-500 transition hover:text-red-400"
                      >
                        <Trash2
                          // className="text-black group-hover:text-pink-500"
                          size={20}
                        />
                      </button>

                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(paste?.content);
                          toast.success("copied to clipboard");
                        }}
                        className="text-gray-500 transition hover:text-white"
                      >
                        <Copy
                          // className="text-black group-hover:text-green-500"
                          size={20}
                        />
                      </button>

                      <button
                        onClick={() => handleShare(paste)}
                        className="text-gray-500 transition hover:text-white"
                      >
                        <Share2
                          // className="text-black group-hover:text-blue-500"
                          size={20}
                        />
                      </button>
                    </div>

                    <div className="flex flex-row items-center gap-2 text-xs text-gray-600">
                      <Calendar
                      //  className="text-black" 
                       size={20} />
                      {FormatDate(paste?.createAt)}
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Paste;
