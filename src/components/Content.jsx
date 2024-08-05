import { usePrevious } from "react-customs";

function Content() {
  const [prevCount, count, setCount] = usePrevious(0);

  const handleSetCount = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <main className="w-full p-4 md:p-6 flex justify-center">
      <div className="w-full max-w-[800px] bg-zinc-950 text-zinc-50 rounded-lg p-6">
        <div className="w-full my-6 flex flex-col items-center">
          <div className="w-full flex flex-col gap-2">
            <h2 className=" bg-zinc-900 p-2 text-zinc-400">Previous Count: {prevCount}</h2>
            <h2 className="bg-zinc-900 p-2 text-zinc-400">Current Count: {count}</h2>
          </div>
          <button
            onClick={handleSetCount}
            className="mt-8 py-2.5 px-5 rounded-lg bg-indigo-400 text-black font-semibold transition hover:opacity-90 active:translate-y-[1px]"
          >
            Increment
          </button>
        </div>
      </div>
    </main>
  );
}

export default Content;
