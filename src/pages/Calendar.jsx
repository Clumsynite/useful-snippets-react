/* eslint-disable implicit-arrow-linebreak */
import React, { useEffect, useRef, useState } from "react";
import moment from "moment";
import "../styles/Calendar.css";
import { number, oneOf, string } from "prop-types";

const monthFormat = "MMMM yyyy";
const dateFormat = "DD MMMM yyyy";

const flexRow = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
};

const flexCol = {
  display: "flex",
  flexDirection: "column",
};

const Calendar = () => {
  const calendarOptions = { row: 6, columns: 7 };
  const today = moment().toISOString();
  const [currentMonth, setCurrentMonth] = useState(moment(today).format(monthFormat));
  const [dates, setDates] = useState([]);

  const [cellWidth, setCellWidth] = useState(null);

  const weeks = moment.weekdays();
  const generateDatesArray = () => {
    const date = `01 ${currentMonth}`;
    const firstDateOfMonth = moment(date, dateFormat);
    const firstDayOfWeek = moment(firstDateOfMonth).weekday(0);
    const daysOnCalendar = calendarOptions.row * calendarOptions.columns;
    const calDates = Array.from({ length: daysOnCalendar }, (_, i) => moment(firstDayOfWeek).add(i, "day"));
    setDates(calDates);
  };

  const dayCellRef = useRef(null);

  useEffect(() => {
    if (dayCellRef.current) {
      const width = dayCellRef.current.clientWidth;
      setCellWidth(width);
    }
  }, [dayCellRef]);

  const onNextMonthClick = () => setCurrentMonth(moment(currentMonth, monthFormat).add(1, "month").format(monthFormat));
  const onPreviousMonthClick = () =>
    setCurrentMonth(moment(currentMonth, monthFormat).subtract(1, "month").format(monthFormat));
  const onTodayClick = () => setCurrentMonth(moment(today).format(monthFormat));

  useEffect(() => {
    generateDatesArray();
  }, [currentMonth]);

  return (
    <div>
      <div style={{ ...flexRow, justifyContent: "space-between" }}>
        <div style={{ fontSize: 32, fontWeight: 500 }}>Calendar</div>
        <div
          onClick={onTodayClick}
          className="month-button"
          style={{ fontSize: 24, padding: "6px 24px", border: "1px solid #000", borderRadius: 8 }}
          role="button"
          tabIndex={0}
          onKeyDown={() => {}}
        >
          Today
        </div>
      </div>
      <div style={{ padding: 4, margin: "24px 0" }}>
        <div style={{ ...flexRow, justifyContent: "space-between", borderBottom: "1px solid #000" }}>
          <div
            style={{ ...flexRow }}
            className="month-button"
            onClick={onPreviousMonthClick}
            onKeyDown={() => {}}
            role="button"
            tabIndex={0}
          >
            <div style={{ fontSize: 42, paddingRight: 12, fontWeight: 300 }}>{"<"}</div>
            <div>{moment(currentMonth, monthFormat).subtract(1, "month").format(monthFormat)}</div>
          </div>
          <div style={{ fontSize: 32, fontWeight: "bold", padding: 12 }}>{currentMonth}</div>

          <div
            style={{ ...flexRow }}
            onClick={onNextMonthClick}
            onKeyDown={() => {}}
            role="button"
            tabIndex={0}
            className="month-button"
          >
            <div>{moment(currentMonth, monthFormat).add(1, "month").format(monthFormat)}</div>
            <div style={{ fontSize: 42, paddingLeft: 12, fontWeight: 300 }}>{">"}</div>
          </div>
        </div>
        <div style={{ border: "1px solid lightgrey", backgroundColor: "#fff" }}>
          <div style={{ ...flexRow }}>
            {weeks.map((week, i) => (
              <div
                key={week + currentMonth}
                ref={i === 0 ? dayCellRef : null}
                style={{ flex: weeks.length / 10, textAlign: "center", padding: 24, border: "1px solid lightgrey" }}
              >
                {week}
              </div>
            ))}
          </div>
          {dates.length ? (
            <div style={{ ...flexCol }}>
              {Array.from({ length: calendarOptions.row }, (_, rowIndex) => (
                <div style={{ ...flexRow }} key={`${currentMonth}${Math.random() * 100}`}>
                  {Array.from({ length: calendarOptions.columns }, (__, colIndex) => {
                    const dateIndex = rowIndex * 7 + colIndex;
                    const date = dates[dateIndex];
                    return (
                      <DateCell
                        date={date}
                        dates={dates}
                        height={cellWidth}
                        currentMonth={currentMonth}
                        key={`${dateIndex} ${currentMonth} ${date.format(dateFormat)}`}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
          ) : (
            <div style={{ width: "100%", padding: 24 }}>Loading Calendar...</div>
          )}
        </div>
      </div>
    </div>
  );
};

const DateCell = ({ date, height = "auto", currentMonth }) => {
  const formattedDate = moment(date).format("DD");
  const isToday = date.isSame(moment(), "day");
  const isSameMonth = date.isSame(moment(currentMonth, monthFormat), "month");

  let fontColor = "#00000080";
  if (isToday) fontColor = "#fff";
  else if (isSameMonth) fontColor = "#000";

  return (
    <div
      style={{
        flex: 7 / 10,
        textAlign: "center",
        padding: 10,
        height,
        width: height,
        border: "1px solid lightgrey",
        ...flexCol,
        justifyContent: "flex-start",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <span
          style={{
            color: fontColor,
            border: isToday ? "2px solid #000" : "",
            padding: 8,
            borderRadius: "50%",
            backgroundColor: isToday ? "#000" : "transparent",
          }}
        >
          {formattedDate}
        </span>
      </div>
    </div>
  );
};
DateCell.propTypes = {
  date: string.isRequired,
  height: oneOf([string, number]).isRequired,
  currentMonth: string.isRequired,
};
export default Calendar;
