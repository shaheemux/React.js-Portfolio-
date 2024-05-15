// rafce
import { useState } from "react";
 const NavigationBar = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    }
    
  return (
    <nav className="bg-gray-800">
        <ul className="flex p-5 text-white text-justify justify-between">
            <li>navitems</li>
        </ul>
    </nav>
  )
}

export default NavigationBar;