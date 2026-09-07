import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux"
import { addToPaste, updateToPaste } from "../redux/pasteSlice";

const ViewPaste = () => {

  const {id} = useParams();
  const allpastes = useSelector((state) => state.paste.pastes)
  const paste = allpastes.filter((p) => p._id === id)[0];

  return (
  <div className="min-h-screen bg-[#0f1115] px-4 py-8 text-white sm:px-6">
    <div className="mx-auto max-w-6xl">

      <input
        className="w-full rounded-xl border border-white/10 bg-[#171a21] px-5 py-4 text-xl font-semibold text-white outline-none"
        type="text"
        placeholder="Paste title"
        value={paste.title}
        disabled
      />

      <div className="mt-5">
        <textarea
          className="min-h-[520px] w-full resize-y rounded-xl border border-white/10 bg-[#171a21] p-5 text-base leading-7 text-gray-300 outline-none"
          value={paste.content}
          placeholder="Paste content"
          rows={20}
          disabled
        />
      </div>

    </div>
  </div>
);
}

export default ViewPaste