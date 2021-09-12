"use strict";

console.clear();

{
  const today = new Date(); /**現在の日付を西暦から取得 */
  let year = today.getFullYear(); /**現在の年を取得して、宣言 */
  let month = today.getMonth(); /** 現在の月を取得して、宣言*/

  function getCalenderHead() {
    const dates = [];/*空の配列を作る */
    const d = new Date(year, month, 0).getDate(); /**先月の末日を取得 */
    const n = new Date(year, month, 1).getDay(); /**今月の初日の曜日を取得 */

    for (let i = 0; i < n; i++) { /** */
      dates.unshift({
        date: d - i,
        isToday: false,
        isDisabled: true,
      });
    }
    return dates;
  }

  function getCalenderBody() {
    const dates = []; ///date:日付, day:曜日
    const lastDate = new Date(year, month + 1, 0).getDate();

    for (let i = 1; i <= lastDate; i++) {
      dates.push({
        date: i,
        isToday: false,
        isDisabled: false,
      });
    }

    if (year === today.getFullYear() && month === today.getMonth()) {
      dates[today.getDate() - 1].isToday = true;
    }
    /**ページが切り替わったときの処理、ページが切り替われば月が変わるから（場合によっては年も変わる）ページが変わった時、現在の月と年がクリックしたあとの月と年と同じ時isTodayがtrueになって文字が太くなる */
    return dates;
  }

  function getCalenderTail() {
    const dates = [];
    const lastDay = new Date(year, month + 1, 0).getDay();

    for (let i = 1; i < 7 - lastDay; i++) {
      dates.push({ date: i, isToday: false, isDisabled: true });
    }
    return dates;
  }

  function clearCalender() {
    const tbody = document.querySelector("tbody");

    while (tbody.firstChild) {
      tbody.removeChild(tbody.firstChild);
    }
  }

  function renderTitle() {
    const title = `${year}/${String(month + 1).padStart(2, "0")}`;
    document.getElementById("title").textContent = title;
  }

  function renderWeeks() {
    const dates = [
      ...getCalenderHead(),
      ...getCalenderBody(),
      ...getCalenderTail(),
    ];
    const weeks = []; /**週ごとの配列 週ごとのデータが入っている */
    const weeksCount = dates.length / 7; /**何週分あるか */

    for (let i = 0; i < weeksCount; i++) {
      weeks.push(dates.splice(0, 7));
    }

    weeks.forEach((week) => {
      const tr = document.createElement("tr");
      week.forEach((date) => {
        const td = document.createElement("td");

        td.textContent = date.date;
        if (date.isToday) {
          td.classList.add("today");
        }
        if (date.isDisabled) {
          td.classList.add("disabled");
        }
        tr.appendChild(td);
      });
      document.querySelector("tbody").appendChild(tr);
    });
  }

  function createCalender() {
    clearCalender();
    renderTitle();
    renderWeeks();
  }

  document.getElementById("prev").addEventListener("click", () => {
    month--;
    if (month < 0) {
      year--;
      month = 11;
    }
    createCalender();
  });
  document.getElementById("next").addEventListener("click", () => {
    month++;
    if (month > 11) {
      year++;
      month = 0;
    }
    createCalender();
  });
  document.getElementById("today").addEventListener("click", () => {
    year = today.getFullYear();
    month = today.getMonth();
    createCalender();
  });

  createCalender();
}
