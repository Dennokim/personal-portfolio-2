export default function Header() {
  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <h1 className="font-bold text-6xl text-center">My Expertise</h1>

      <div className="container flex justify-evenly items-center">
        <div className="front-end">
          <h1 className="mt-20 font-bold text-4xl">FRONT-END</h1>
          <ul className="mt-3 text-3xl font-medium text-center">
            <li>html5</li>
            <li>css</li>
            <li>javascript</li>
            <li>react</li>
          </ul>
        </div>
        <div className="back-end ">
          <h1 className="mt-20 font-bold text-4xl">BACK-END</h1>
          <ul className="mt-3 text-3xl font-medium text-center">
            <li>node.js</li>
            <li>express.js</li>
            <li>mongoose</li>
            <li>postgreSQL</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
