export const transformData = (data) => {
  const objectKeys = [
    "POSTED_DATE",
    "TRANSACTION_DATE",
    "TRANSACTION_TIME",
    "TOLL_TAG_PLATE",
    "EXIT_PLAZA",
    "EXIT_LANE",
    "ENTRY_TIME",
    "ENTRY_PLAZA",
    "ENTRY_LANE",
    "DEBIT",
    "CREDIT",
    "BALANCE",
  ];
  const mappedData = data.map((row) => {
    const obj = {};

    for (let i = 0; i < row.length; i++) {
      obj[objectKeys[i]] = row[i];
    }

    let carName;
    if (obj.TOLL_TAG_PLATE === "01010002626613") {
      carName = "Prius";
    } else if (obj.TOLL_TAG_PLATE === "8ZYG791-CA" || obj.TOLL_TAG_PLATE === "01010001590574") {
      carName = "Lexus";
    } else if (obj.TOLL_TAG_PLATE === "01010001616305") {
      carName = "BMW";
    } else if (obj.TOLL_TAG_PLATE === "01010002097589") {
      carName = "Highlander";
    }

    const retObj = {
      toll_tag: obj.TOLL_TAG_PLATE,
      toll_price: obj.DEBIT,
      bridge_plaza: obj.EXIT_PLAZA,
      transaction_date: obj.TRANSACTION_DATE,
      car_name: carName,
    };

    return retObj;
  });

  const prius = mappedData.filter((el) => el.car_name === "Prius");
  const lexus = mappedData.filter((el) => el.car_name === "Lexus");
  const bmw = mappedData.filter((el) => el.car_name === "BMW");
  const highlander = mappedData.filter((el) => el.car_name === "Highlander");

  const { monthlyData: priusData, months: priusMonths } = monthlyFilter(prius);
  const { monthlyData: bmwData, months: bmwMonths } = monthlyFilter(bmw);
  const { monthlyData: lexusData, months: lexusMonths } = monthlyFilter(lexus);
  const { monthlyData: highData, months: highMonths } = monthlyFilter(highlander);

  const obj = {
    prius: {
      data: priusData,
      months: priusMonths,
      total: sumTollPrice(prius),
    },
    lexus: {
      data: lexusData,
      months: lexusMonths,
      total: sumTollPrice(lexus),
    },
    bmw: {
      data: bmwData,
      months: bmwMonths,
      total: sumTollPrice(bmw),
    },
    highlander: {
      data: highData,
      months: highMonths,
      total: sumTollPrice(highlander),
    },
  };

  return obj;
};

function sumTollPrice(data) {
  return data.reduce((total, el) => total + Number(el.toll_price.replace("$", "")), 0);
}

export const monthlyFilter = (data) => {
  const dateObjects = data.map((item) => {
    return {
      ...item,
      transaction_date: new Date(item.transaction_date),
    };
  });

  const sortedData = dateObjects.sort((a, b) => b.transaction_date - a.transaction_date);
  const months = [];
  const groupByMonth = (data) => {
    return data.reduce((acc, item) => {
      const monthYearKey = item.transaction_date.toLocaleString("default", { month: "long" });

      if (!acc[monthYearKey]) {
        acc[monthYearKey] = {
          items: [],
          total: 0,
        };
      }

      if (!months.includes(monthYearKey)) {
        months.push(monthYearKey);
      }

      const tollPriceAsNumber = parseFloat(item.toll_price.replace("$", ""));

      acc[monthYearKey].items.push({
        ...item,
        transaction_date: item.transaction_date.toLocaleDateString(),
      });
      acc[monthYearKey].total += tollPriceAsNumber;

      return acc;
    }, {});
  };

  const monthlyData = groupByMonth(sortedData);

  return { monthlyData, months };
};
