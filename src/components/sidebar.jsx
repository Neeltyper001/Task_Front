import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faPencil } from "@fortawesome/free-solid-svg-icons/faPencil";
import { NavLink } from "react-router-dom";
const SideBar = ({handleToggleSideBar,isMobile}) => {
  return (
    isMobile && 
    <div className={`absolute right-0 z-10`}>
            <div className="flex h-screen w-16 flex-col justify-between border-e bg-white">
      <div>
        <div className="inline-flex size-16 items-center justify-center">
          <button className="grid size-10 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600" onClick={handleToggleSideBar}>
            X
          </button>
        </div>

        <div className="border-t border-gray-100">
          <div className="px-2">
            <div className="py-4">   
                <NavLink to="/"><FontAwesomeIcon icon={faHouse} /></NavLink>                                     
            </div>

            <ul className="space-y-1 border-t border-gray-100 pt-4">
              <li>
                <NavLink to="/create"><FontAwesomeIcon icon={faPencil} /></NavLink>                
              </li>            
            </ul>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default SideBar;
