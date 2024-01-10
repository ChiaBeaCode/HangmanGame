export function Win() {
  return (
    <div className="win absolute left-[35vw] top-[40vh] rotate-[-25deg] text-green-700 text-4xl md:left-[20vw] md:text-5xl md:top-[30vh] lg:top-[33vh] lg:left-[28vw] lg:text-[50px] font-mono font-bold px-3 py-2 lg:rotate-[-30deg] z-10 border-4 border-solid border-green-700">
      You Won!
    </div>
  );
}
export function Lose() {
  return (
    <div className="lose absolute left-[35vw] top-[40vh] rotate-[-25deg] text-red-600 text-4xl md:left-[20vw] md:text-5xl md:top-[30vh] lg:top-[33vh] lg:left-[28vw] lg:text-[50px] font-mono font-bold px-3 py-2 lg:rotate-[-30deg] z-10 border-4 border-solid border-red-600">
      You Lost!
    </div>
  );
}
