const FunkyText = ({ text }) => {
  return (
    <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-primary relative inline-block">
      <span className="relative text-primary-content font-bold">{text}</span>
    </span>
  );
};

export default FunkyText;
