import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux"
import { addToPaste, updateToPaste } from "../redux/pasteSlice";


const Home = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [serachParams, setSearchParams] = useSearchParams();
  const pasteId = serachParams.get("pasteId");
  const dispatch = useDispatch()
  const  allPastes  = useSelector((state) => state.paste.pastes);

  useEffect(() => {
      if(pasteId){
        const paste = allPastes.find((p) => p._id === pasteId);
        setTitle(paste.title);
        setValue(paste.content);
      }
    }, [pasteId])

  function createPaste() {
    const paste = {
      title: title,
      content: value,
      _id: pasteId ||
        Date.now().toString(36),
      createAt:new Date().toISOString(),
    }    

    if(pasteId){
      //update
      dispatch(updateToPaste(paste));
    }
    else{
      //create
      dispatch(addToPaste(paste));
    }

    setTitle('');
    setValue('');
    setSearchParams({});
  }

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
          className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-gray-200 active:scale-[0.98] sm:min-w-[170px]"
        >
          {pasteId ? "Update Paste" : "Create Paste"}
        </button>
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
);
};

export default Home;