const getMoneyFormAnAtm = (sum) => {
  if (sum <= 0) {
    return "enter sum";
  }

  const result = [];
  const banknotes = [1, 5, 10, 20, 50, 100, 500];

  for (let i = banknotes.length - 1; i >= 0; i--) {
    const largestBanknot = banknotes[i];

    while (sum >= largestBanknot) {
      sum -= largestBanknot;

      result.push(largestBanknot);
    }
  }

  return result;
};
console.log(getMoneyFormAnAtm(777));
