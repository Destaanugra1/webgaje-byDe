import Link from "next/link";

const Navitems = () => {
  return (
    <nav className="static">
      <h3 className="text-2xl font-bold">
        <Link href="/">Home</Link>
      </h3>
      <div className="font-bold">
        <a href="" className="hover:text-blue-white p-2">
          Home
        </a>
        <a href="" className="hover:text-blue-white p-2">
          Service
        </a>
        <a href="" className="hover:text-blue-white p2">
          Footer
        </a>
      </div>
    </nav>
  );
};

export default Navitems;
