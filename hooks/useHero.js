import React, { useEffect, useState } from "react";

const convertDateFormat = (originalDate) => {
  let [datePart, timePart] = originalDate.split(" ");

  let [day, month, year] = datePart.split("-").map(Number);

  let [hour, minute] = timePart.split(":").map(Number);

  let originalDateTime = new Date(year, month - 1, day, hour, minute);

  let dayNames = [
    "minggu",
    "senin",
    "selasa",
    "rabu",
    "kamis",
    "jumat",
    "sabtu",
  ];
  let dayName = dayNames[originalDateTime.getDay()];

  let monthNames = [
    "januari",
    "februari",
    "maret",
    "april",
    "mei",
    "juni",
    "juli",
    "agustus",
    "september",
    "oktober",
    "november",
    "desember",
  ];
  let monthName = monthNames[originalDateTime.getMonth()];

  let currentDate = new Date();
  let timeDifference = originalDateTime - currentDate;

  let days = Math.max(Math.floor(timeDifference / (1000 * 60 * 60 * 24)), 0);
  let hours = Math.max(
    Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    0
  );
  let minutes = Math.max(
    Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60)),
    0
  );
  let seconds = Math.max(Math.floor((timeDifference % (1000 * 60)) / 1000), 0);

  return {
    formated_date: `${dayName}, ${day} ${monthName} ${year}`,
    days: days.toString().padStart(2, "0"),
    hours: hours.toString().padStart(2, "0"),
    minutes: minutes.toString().padStart(2, "0"),
    seconds: seconds.toString().padStart(2, "0"),
  };
};

const createCallendarTime = (originalDate) => {
  var dateParts = originalDate.split(/[- :]/);
  var year = parseInt(dateParts[2]);
  var month = parseInt(dateParts[1]) - 1;
  var day = parseInt(dateParts[0]);
  var hour = parseInt(dateParts[3]);
  var minute = parseInt(dateParts[4]);
  var date = new Date(year, month, day, hour, minute);
  return date.toISOString().replace(/[-:]/g, "").replace("T", "T");
};

function useHero({ weddingDate }) {
  const [date, setDate] = useState(null);
  const [windowWidth, setWindowWidth] = useState(0);
  const calendarTime = createCallendarTime(weddingDate);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(convertDateFormat(weddingDate));
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
    }
  }, []);

  return { date, windowWidth, calendarTime };
}

export default useHero;
