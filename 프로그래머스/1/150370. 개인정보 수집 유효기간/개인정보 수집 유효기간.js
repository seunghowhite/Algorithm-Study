function solution(today, terms, privacies) {
  const answer = [];

  const todatDate = new Date(today);

  const termType = {};
  terms.forEach((item) => {
    const [type, term] = item.split(" ");
    termType[type] = Number(term);
  });

  privacies.forEach((item, idx) => {
    const [date, type] = item.split(" ");
    const tableDate = new Date(date);
    tableDate.setMonth(tableDate.getMonth() + termType[type]);
    if (tableDate <= todatDate) answer.push(idx + 1);
  });

  return answer;
}