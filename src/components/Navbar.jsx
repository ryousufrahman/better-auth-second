import { useSession } from "@/lib/auth-client";
import Link from "next/link";

const Navbar = () => {
    const {} =useSession()
  return (
    <div className="shadow p-5  flex justify-between mb-8 px-10">
        <div>
            <p>hello</p>
        </div>
        <div>
            <p>hi</p>
        </div>




    </div>
  
  );
};

export default Navbar;
