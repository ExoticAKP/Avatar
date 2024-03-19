import React, {useEffect, useRef, useState} from "react";
import Logo from "../../assets/Logo.svg";
import "./Navbar.sass";
import useOverflowDetector from "../../hooks/useOverflowDetector.tsx";

const Navbar: React.FC = () => {
    const navbarRef = useRef<HTMLDivElement>(null);
    const overflowingItems: string[] = useOverflowDetector(navbarRef);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const NavItems: string[] = ["HOME", "ELECTRONICS", "BOOKS", "MUSIC", "MOVIES", "CLOTHING", "GAMES", "FURNITURE", "ELECTRONICS", "TRAVEL", "BOTANICAL", "CATEGORY NAME"];

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    useEffect(() => {
        console.log("overflowingItems", overflowingItems);
    }, [overflowingItems]);
    return (
        <div className="Navbar">
            <div className="Logo">
                <img src={Logo}/>
                <h1 className={"LogoText"}>E-COMM</h1>
            </div>
                <div className={"NavItems"} style={{minWidth: "100px"}}>
                    <div ref={navbarRef} className="NavItems">
                        {NavItems.map((item: string, index: number) => (
                            <span className={"NavItem"}
                                  key={index}>
                        {item}
                    </span>
                        ))}
                    </div>
                    <span className="NavItem More" style={{minWidth: "100px", margin:"0 20px 0 20px" ,gap:"10px", display:"flex"}} onClick={toggleDropdown}>
                       <span>MORE</span>
                        <img width="12" height="12"
                             src="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/24/FFFFFF/external-chevron-arrows-tanah-basah-basic-outline-tanah-basah-4.png"
                             alt="external-chevron-arrows-tanah-basah-basic-outline-tanah-basah-4"/>
                    </span>
                </div>
                {overflowingItems.length > 0 && (
                    <div className="DropDown">
                        {isDropdownOpen && (
                            <div className="DropDownItems">
                                {overflowingItems.map((item, index) => (
                                    //skip if index 0 or 1
                                    index > 1 && <span className="dropdownItem" key={index}>
                                        {item}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>
                )}
                <div className="Search">
                    <img width="12" height="12" src="https://img.icons8.com/ios/50/FFFFFF/search--v1.png"
                         alt="search--v1"/>
                    <input type="text" placeholder="Search"/>
                </div>
            </div>
            );
            }

            export default Navbar;
