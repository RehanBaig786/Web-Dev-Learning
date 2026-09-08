import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToPaste, updateToPaste } from "../redux/pasteSlice";
import { Copy, PlusCircle } from "lucide-react";

const Home = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [serachParams, setSearchParams] = useSearchParams();
  const pasteId = serachParams.get("pasteId");
  const dispatch = useDispatch();
  const allPastes = useSelector((state) => state.paste.pastes);

  function createPaste() {
    const paste = {
      title: title,
      content: value,
      _id: pasteId || Date.now().toString(36),
      createAt: new Date().toISOString(),
    };

    if (pasteId) {
      //update
      dispatch(updateToPaste(paste));
    } else {
      //create
      dispatch(addToPaste(paste));
    }

    setTitle("");
    setValue("");
    setSearchParams({});
  }
  const resetPaste = () => {
    setTitle("");
    setValue("");
    setSearchParams({});
    // navigate("/");
  };

  useEffect(() => {
    if (pasteId) {
      const paste = allPastes.find((p) => p._id === pasteId);
      setTitle(paste.title);
      setValue(paste.content);
    }
  }, [pasteId, allPastes]);

  return (
    <div className="min-h-screen bg-[#0f1115] px-4 py-8 text-white sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-5 flex flex-col gap-3 sm:flex-row">
          <input
            className="w-full rounded-xl border border-white/10 bg-[#171a21] px-4 py-3 text-base text-white outline-none placeholder:text-gray-600 transition focus:border-white/25 focus:bg-[#1a1e26]"
            type="text"
            placeholder="Enter paste title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <button
            onClick={createPaste}
            className="w-full rounded-xl border border-blue-400 bg-blue-700 px-6 py-4 text-xl font-extrabold text-[25px] text-black shadow-lg transition duration-200 hover:bg-blue-500 hover:shadow-blue-500/20 active:scale-[0.98] md:w-[40%]"
          >
            {pasteId ? "Update My Paste" : "Create My Paste"}
          </button>
          {pasteId && (
            <button
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700"
              onClick={resetPaste}
            >
              <PlusCircle size={20} />
            </button>
          )}
        </div>
        <div
          className={`w-full flex flex-col items-start relative rounded bg-opacity-10 border border-[rgba(128,121,121,0.3)] backdrop-blur-2xl`}
        >
          <div
            className={`w-full rounded-t flex items-center justify-between gap-x-4 px-4 py-2 border-b border-[rgba(128,121,121,0.3)]`}
          >
            <div className="w-full flex gap-x-[6px] items-center select-none group">
              <div className="w-[13px] h-[13px] rounded-full flex items-center justify-center p-[1px] overflow-hidden bg-[rgb(255,95,87)]" />

              <div
                className={`w-[13px] h-[13px] rounded-full flex items-center justify-center p-[1px] overflow-hidden bg-[rgb(254,188,46)]`}
              />

              <div className="w-[13px] h-[13px] rounded-full flex items-center justify-center p-[1px] overflow-hidden bg-[rgb(45,200,66)]" />
            </div>

            <div
              className={`w-fit rounded-t flex items-center justify-between gap-x-4 px-4`}
            >
              {/*Copy  button */}
              <button
                className={`flex justify-center items-center  transition-all duration-300 ease-in-out group`}
                onClick={() => {
                  navigator.clipboard.writeText(value);
                  toast.success("Copied to Clipboard", {
                    position: "top-right",
                  });
                }}
              >
                <Copy className="group-hover:text-sucess-500" size={20} />
              </button>
            </div>
          </div>

          <textarea
            className="min-h-[520px] w-full resize-y rounded-xl border border-white/10 bg-[#171a21] p-5 text-base leading-7 text-gray-200 outline-none placeholder:text-gray-600 transition focus:border-white/25 focus:bg-[#1a1e26]"
            value={value}
            placeholder="Write your paste here..."
            onChange={(e) => setValue(e.target.value)}
            rows={20}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
