import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import '../styling/home_style.css';

function Search() {
    const [open, setOpen] = useState({
        Category: false,
        Date: false,
        Type: false,
        Exp: false,
    });

    const categories = ["Software Developer", "Data Analyst", "Cloud Engineer"];
    const types = ["Full Time", "Contract", "C2C"];
    const dates = ["Last 24 Hours", "Last Week", "Last Month"];
    const experiences = ["1-2 Years", "3-5 Years", "5+ Years"];

    const handleToggle = (field) => {
        setOpen(prevState => ({
            ...Object.keys(prevState).reduce((acc, key) => ({ ...acc, [key]: key === field ? !prevState[key] : false }), {})
        }));
    };

    return (
        <form onSubmit={(e) => e.preventDefault()} className="submitSearch">
            <div className="search">
                <input type="text" placeholder="Search......" />
                <button type="submit">
                    <FontAwesomeIcon icon={faMagnifyingGlass} /> Search
                </button>
            </div>
            <div className="subSearch">
                <div className="liStyle">
                    {Object.keys(open).map((key) => (
                        <div className={`liPadding ${open[key] ? 'active' : ''}`} key={key}>
                            <li onClick={() => handleToggle(key)}>
                                {key} <FontAwesomeIcon icon={faCaretDown} />
                            </li>
                            {open[key] && (
                                <div className={`${key}Menu active`}>
                                    {key === "Category" && categories.map((category) => (
                                        <li key={category}><input type="checkbox" className="checkmark" /> {category}</li>
                                    ))}
                                    {key === "Type" && types.map((type) => (
                                        <li key={type}><input type="checkbox" className="checkmark" /> {type}</li>
                                    ))}
                                    {key === "Date" && dates.map((date) => (
                                        <li key={date}><input type="checkbox" className="checkmark" /> {date}</li>
                                    ))}
                                    {key === "Exp" && experiences.map((exp) => (
                                        <li key={exp}><input type="checkbox" className="checkmark" /> {exp}</li>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </form>
    );
}

export default Search;
