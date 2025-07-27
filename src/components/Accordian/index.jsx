import { useState } from "react";
import data from "./data";

const Accordian = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(id) {
    setSelected(id === selected ? null : id);
  }

  function handleMultiSelection(id) {
    let copyMultiple = [...multiple];

    const findIndexOfId = copyMultiple.indexOf(id);
    if (findIndexOfId === -1) copyMultiple.push(id);
    else copyMultiple.splice(findIndexOfId, 1);
    setMultiple(copyMultiple);

    // راه حل دوم
    //  let copyMultiple = [...multiple];
    //     if (multiple.includes(id)) {
    //       copyMultiple = copyMultiple.filter((item) => item !== id);
    //       // console.log(multiple);
    //       setMultiple(copyMultiple);
    //     } else setMultiple([...multiple, id]);
  }

  function handleChangeSelectionChoice() {
    setEnableMultiSelection(!enableMultiSelection);
    setSelected(null);
    setMultiple([]);
  }

  console.log(selected);
  console.log(multiple);
  console.log("enableMultiSelection=" + enableMultiSelection);

  return (
    <div className="flex justify-center items-center my-3 flex-col gap-10 ">
      <button
        onClick={handleChangeSelectionChoice}
        className="px-[10px] py-[10px] bg-[#614101] text-white font-bold cursor-pointer"
        style={{ opacity: enableMultiSelection ? 1 : 0.7 }}
      >
        enable multiple selection
      </button>
      <div className="w-[500px]">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div key={dataItem.id}>
              <div className="bg-[#614101] mb-[10px] px-5 py-7">
                <div className="border-b-[1px] border-white">
                  <div
                    className="text-[#ffffff] flex justify-between items-center cursor-pointer pb-5"
                    onClick={
                      enableMultiSelection
                        ? () => handleMultiSelection(dataItem.id)
                        : () => handleSingleSelection(dataItem.id)
                    }
                  >
                    <h3>{dataItem.question}</h3>
                    <span>+</span>
                  </div>
                </div>

                {/* راه حل اول  */}
                {enableMultiSelection
                  ? multiple.indexOf(dataItem.id) !== -1 && (
                      <div className="text-white h-auto ">
                        {dataItem.answer}
                      </div>
                    )
                  : selected === dataItem.id && (
                      <div className="text-white h-auto ">
                        {dataItem.answer}
                      </div>
                    )}

                {/* راه حل دوم
                {selected === dataItem.id ||
                multiple.indexOf(dataItem.id) !== -1 ? (
                  <div className="text-white h-auto ">{dataItem.answer}</div>
                ) : null} */}
              </div>
            </div>
          ))
        ) : (
          <div>No data found!</div>
        )}
      </div>
    </div>
  );
};

export default Accordian;
