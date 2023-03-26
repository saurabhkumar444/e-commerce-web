export const getProductTotalAmount = (value) => {
  let totalValue = 0;
  const data = value?.map((data) => {
    totalValue = totalValue + parseFloat(data.price * data?.qty);
  });
  return totalValue.toFixed(2);
};
