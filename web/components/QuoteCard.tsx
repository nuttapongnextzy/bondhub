function QuoteCard() {
  return (
    <div className="p-6 max-w-xl mx-auto bg-white rounded-2xl shadow-lg">
      <h1 className="text-3xl font-bold text-center text-gray-800">
        ✨ Quote for Today ✨
      </h1>
      <div className="mt-6 text-center">
        <p className="text-lg italic text-gray-700">
          “Life is like riding a bicycle. To keep your balance, you must keep
          moving.”
        </p>
        <p className="mt-2 text-gray-500">- Albert Einstein</p>{" "}
      </div>
      <div className="mt-6 text-center border-t border-gray-200 pt-6">
        <p className="text-lg italic text-gray-700">
          “ชีวิตก็เหมือนการขี่จักรยาน หากอยากรักษาสมดุลไว้ได้
          คุณต้องก้าวต่อไปเรื่อยๆ”
        </p>
        <p className="mt-2 text-gray-500">- อัลเบิร์ต ไอน์สไตน์</p>{" "}
      </div>
    </div>
  );
}

export default QuoteCard;
