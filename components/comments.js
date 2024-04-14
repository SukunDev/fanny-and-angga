"use client";

import React from "react";
import { PiSpinnerLight } from "react-icons/pi";
import CommentsContainer from "./commentsContainer";
import useComments from "@/hooks/useComments";

export default function Comments() {
  const {
    handleInput,
    formHandle,
    updateDataHandle,
    handleCloseModal,
    handleOnPageChange,
    formData,
    defaultName,
    formLoading,
    comments,
    isLoading,
    pagination,
    showChangeModal,
  } = useComments();

  return (
    <>
      <section id="comment" className="relative z-10">
        <div className="bg-gradient-to-b from-white via-gray-200 to-gray-300">
          <div>
            <div className="w-full h-16 bg-white"></div>
            <div className="w-0 h-0 border-x-[calc(50vw)] border-l-transparent border-t-[30px] md:border-t-[40px] border-t-white border-r-transparent"></div>
          </div>
          <div className="container mx-auto">
            <div className="px-2 mt-4 text-center text-gray-500 capitalize">
              <h3 className="text-lg font-medium text-gray-700 md:text-xl">
                konfirmasi kehadiran
              </h3>
              <p className="text-sm font-thin md:text-base">
                mohon kesediaanya untuk melakukan konfirmasi kehadiran, supaya
                kami bisa mempersiapkan kehadiran anda dengan baik.
              </p>
            </div>
            <form
              onSubmit={formHandle}
              className="relative flex flex-col px-2 mt-8 text-sm md:text-base"
            >
              <input
                type="text"
                name="name"
                className="px-4 py-2 rounded-md outline-none bg-gray-50 placeholder:font-thin"
                placeholder="Tulis Nama anda"
                onChange={handleInput}
                value={formData.name}
                required={defaultName ? false : true}
                readOnly={defaultName ? true : false}
              />
              <textarea
                name="message"
                className="px-4 py-2 mt-2 rounded-md outline-none bg-gray-50 placeholder:font-thin"
                placeholder="Ucapan & Doa"
                rows={4}
                onChange={handleInput}
                value={formData.message}
                required
              ></textarea>
              <select
                name="hadir"
                className="px-4 py-2 mt-2 font-thin text-gray-500 rounded-md outline-none bg-gray-50"
                onChange={handleInput}
                value={formData.hadir}
                required
              >
                <option className="font-thin text-gray-700" value={""}>
                  konfirmasi kehadiran
                </option>
                <option className="font-thin text-gray-700" value={true}>
                  Hadir
                </option>
                <option className="font-thin text-gray-700" value={false}>
                  Tidak Hadir
                </option>
              </select>
              <button
                className="px-8 py-2 mt-4 text-white bg-green-500 rounded-lg w-fit"
                type="submit"
              >
                kirim
              </button>
              {formLoading ? (
                <div className="absolute -inset-4 backdrop-blur">
                  <PiSpinnerLight className="absolute inset-0 m-auto text-3xl text-gray-900 w-fit h-fit animate-spin" />
                </div>
              ) : (
                ""
              )}
            </form>
          </div>
        </div>
        <div className="py-8 bg-gray-300">
          <div className="container mx-auto">
            <div className="flex flex-row-reverse items-center gap-4">
              <div className="w-full h-px mt-2 bg-slate-500"></div>
              <h3 className="ml-4 text-xl font-thin md:text-2xl text-slate-500 whitespace-nowrap">
                Buku Tamu
              </h3>
            </div>
            <CommentsContainer
              commentList={comments}
              pagination={pagination}
              isLoading={isLoading}
              onChange={handleOnPageChange}
            />
          </div>
        </div>
        <div className="bg-stone-500 h-28">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#d1d5db"
              fillOpacity="1"
              d="M0,32L60,32C120,32,240,32,360,48C480,64,600,96,720,106.7C840,117,960,107,1080,96C1200,85,1320,75,1380,69.3L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
            ></path>
          </svg>
        </div>
      </section>
      {showChangeModal ? (
        <div className="fixed inset-0 bg-black/70 z-[999]">
          <div className="fixed inset-0 m-auto w-fit h-fit">
            <div className="p-8 mx-4 bg-white rounded-lg">
              <div className="text-center">
                <h3 className="text-2xl font-medium text-gray-600">
                  Data Anda Sudah Terekam
                </h3>
                <p className="mt-1 font-thin text-gray-400">
                  apakah anda ingin mengubah data anda
                </p>
              </div>
              <div className="flex items-center justify-center gap-4 mt-4">
                <button
                  onClick={updateDataHandle}
                  className="px-10 py-1 text-white capitalize transition duration-300 bg-green-500 rounded-md hover:bg-green-400 active:bg-green-500"
                >
                  ya
                </button>
                <button
                  onClick={handleCloseModal}
                  className="px-8 py-1 text-white capitalize transition duration-300 bg-red-500 rounded-md hover:bg-red-400 active:bg-red-500"
                >
                  tidak
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
