function Price({
  amount,
  isOriginal,
}: {
  amount: string;
  isOriginal: boolean;
}) {
  const formattedPrice = new Intl.NumberFormat("ko-KR").format(Number(amount));

  if (isOriginal)
    return (
      <span className="text-red-600 line-through mr-2 font-semibold">
        ￦{formattedPrice}
      </span>
    );
  else return <span className="font-semibold">￦{formattedPrice}</span>;
}

export default Price;
