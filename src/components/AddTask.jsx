import { useState } from "react";
import PopUp from "./PopUp";

function AddTask({ setTaskList }) {
  const [isShowingPopup, setIsShowingPopup] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          setIsShowingPopup(!isShowingPopup);
        }}
        className="text-white bg-blue-500 text-base font-semibold px-6 py-1 rounded-lg cursor-pointer absolute top-1/2 right-20 -translate-y-1/2"
      >
        New
      </button>

      {isShowingPopup && (
        <PopUp
          setTaskList={setTaskList}
          setIsShowingPopup={setIsShowingPopup}
        />
      )}
    </>
  );
}

export default AddTask;
