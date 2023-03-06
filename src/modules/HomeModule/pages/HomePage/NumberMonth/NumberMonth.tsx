import React from "react";

export const Months = (props: MonthsProps) => {


interface Month {
    name: string;
    days: number;
  }

  interface MonthsProps {
    months: Month[];
  }

const numberMonth:Month[] = [
    { name: "January", days: 31 },
    { name: "Febuary", days: 28 },
    { name: "March", days: 31 },
    { name: "April", days: 30 },
    { name: "May", days: 31 },
    { name: "June", days: 30 },
    { name: "July", days: 31 },
    { name: "August", days: 31 },
    { name: "September", days: 30 },
    { name: "October", days: 31 },
    { name: "November", days: 30 },
    { name: "December", days: 31 },
  ];
  <Months months={numberMonth} />

return (
    numberMonth.map((month) => (
        <option key={month.name} value={month.name}>
          {month.name}
        </option>
      ))
)
  

}
