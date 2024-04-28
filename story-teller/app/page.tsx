import Image from "next/image";
import Link from 'next/link'
import Dashboard from "./dashboard/dashboard";
import Navbar from "./components/navbar";
import CardDashboard from "./components/cards-dashboard";
export default function Home() {
  return (
    <div>
    <Navbar/>
    <Dashboard/>
    {/* <CardDashboard/> */}
    </div>
  
  );
}
