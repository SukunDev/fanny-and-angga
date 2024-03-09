import useComments from "@/hooks/useComments";
import React from "react";
import {
  PiCaretLeftLight,
  PiCaretRightLight,
  PiSpinnerLight,
} from "react-icons/pi";

export default function CommentsContainer({
  commentList,
  pagination,
  isLoading,
  onChange,
}) {
  const { humanDiff, alphabetColors } = useComments();
  return (
    <>
      <div className="relative z-10 mx-4 mt-4 space-y-2">
        {commentList?.length > 0 ? (
          commentList.map((item, idx) => (
            <div key={idx} className="relative p-4 rounded-md bg-gray-50">
              <div className="flex items-start gap-2">
                <div className="absolute w-0 h-0 -left-3 top-0 rotate-90 border-l-[10px] border-l-transparent border-t-[24px] border-t-gray-50 border-r-[10px] border-r-transparent"></div>
                <div
                  className="relative p-4 rounded-full"
                  style={{
                    backgroundColor: alphabetColors.find(
                      (alphabet) =>
                        alphabet.char === item.name.split("")[0].toUpperCase()
                    )?.color,
                  }}
                >
                  <p className="absolute inset-0 m-auto font-bold text-white uppercase w-fit h-fit">
                    {item.name.split("")[0]}
                  </p>
                </div>
                <div className="flex-grow -mt-1">
                  <div>
                    <h3 className="text-base md:text-lg lg:text-xl">
                      {item.name}
                    </h3>
                  </div>
                  <p className="mt-0.5 text-xs font-thin md:text-base">
                    {humanDiff(item.updated_at)}
                  </p>
                </div>
              </div>
              <p className="mt-2 text-sm font-thin md:textbase">
                {item.message}
              </p>
            </div>
          ))
        ) : (
          <div className="font-bold text-center text-gray-400">
            <p>Belum ada komentar</p>
          </div>
        )}
        {isLoading ? (
          <div className="absolute -inset-4 backdrop-blur">
            <PiSpinnerLight className="absolute inset-0 m-auto text-3xl text-gray-900 w-fit h-fit animate-spin" />
          </div>
        ) : (
          ""
        )}
      </div>
      {commentList?.length > 0 ? (
        <ul className="relative z-20 flex items-center justify-between mx-4 mt-2">
          <li>
            {pagination?.prevPage ? (
              <button
                onClick={() => {
                  onChange(parseInt(pagination.currentPage) - 1);
                }}
                className="px-4 py-1 mt-1 text-gray-500 transition duration-300 bg-gray-200 rounded-full hover:bg-gray-100 active:bg-gray-300 hover:text-gray-700 active:text-gray-400"
              >
                <PiCaretLeftLight className="text-lg" />
              </button>
            ) : (
              ""
            )}
          </li>
          <li>
            {pagination?.nextPage ? (
              <button
                onClick={() => {
                  onChange(parseInt(pagination.currentPage) + 1);
                }}
                className="px-4 py-1 mt-1 text-gray-500 transition duration-300 bg-gray-200 rounded-full hover:bg-gray-100 active:bg-gray-300 hover:text-gray-700 active:text-gray-400"
              >
                <PiCaretRightLight className="text-lg" />
              </button>
            ) : (
              ""
            )}
          </li>
        </ul>
      ) : (
        ""
      )}
    </>
  );
}
