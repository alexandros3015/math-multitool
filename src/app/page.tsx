export default function Home() {

  return (
    <div className="flex flex-col items-center justify-center bg-gray-900 text-white gap-4 h-screen"> 
      <div className="text-8xl">Math Multitool</div>
      <div className="text-4xl">A calculator that can do anything!</div> 
      <ul className="underline text-blue-600 text-2xl">
        <li><a href="/calculator">Calculator</a></li>
      </ul>
    </div>
  );
}