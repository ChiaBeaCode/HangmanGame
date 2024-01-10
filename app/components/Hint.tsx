type ChildProp = {
  hint: string;
};
export function Hint({ hint }: ChildProp) {
  return (
    <div>
      <p className=" text-center text-black font-mono text-2xl md:text-3xl font-bold uppercase mt-0 mx-auto mb-2.5">
        {hint}
      </p>
    </div>
  );
}
