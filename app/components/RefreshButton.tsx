type ChildProps = {
  saying: string;
};
export default function RefreshButton({ saying }: ChildProps) {
  return (
    <button
      className=" absolute z-50 top-auto lg:bottom-1/4 lg:left-24 md:left-4 bg-gradient-to-bl from-[#996515] to-[#cc7722] drop-shadow-[0_8px_3px_rgba(0,0,0,0.25)] text-white text-base md:text-xl tracking-[1.2px] m-4 p-1 md:p-2 border-2 border-[#272626] border-solid rounded cursor-pointer hover:scale-105"
      onClick={(e) => {
        window.location.reload();
      }}
    >
      {saying}
    </button>
  );
}
