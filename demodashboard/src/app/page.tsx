import Image from "next/image";
import Navbar from "./NavBar/Navbar";
import Dashboard from "./dashboard/[view]";

export default function Home() {
  return (
    <div className="flex flex-col overflow-x-hidden w-[100vw] h-[100vh]">
      <Navbar/>
      <Dashboard/>

    </div>
  );
}
