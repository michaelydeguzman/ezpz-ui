export default function Home() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <p className="mr-40 text-center text-7xl text-gray-400">
        Hi, I'm <span className="text-blue-500">Michael</span>
      </p>
      <p className="flex flex-col rounded-lg text-center text-8xl opacity-95">
        <span className="uppercase">Full-stack</span>
        <span className="mr-40 uppercase">Software </span>
        <span className="ml-40 uppercase">Developer</span>
      </p>
      <div className="cursor-pointer rounded-full bg-slate-300 bg-opacity-20 px-2 text-sm">
        scroll
      </div>
    </div>
  );
}
