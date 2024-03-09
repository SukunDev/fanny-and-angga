import React from "react";

function useEvent() {
  const dateFormat = (originalDate) => {
    let [datePart] = originalDate.split(" ");

    let [day, month, year] = datePart.split("-").map(Number);

    let originalDateTime = new Date(year, month - 1, day);

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
    return {
      dayName: dayName,
      day: day,
      monthName: monthName,
      year: year,
      text: `${dayName}, ${day} ${monthName} ${year}`,
    };
  };
  return { dateFormat };
}

export default useEvent;
