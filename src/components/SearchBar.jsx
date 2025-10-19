import React, {useState} from "react";

export function SearchBar({onSearch}) {
     const [query, setQuery] = useState("");

    const handleChange = (e) => {
        const newQuery = e.target.value;
        setQuery(newQuery);
        onSearch(newQuery);
    }

    return (
        <div className="searchbar-cont">
            <form className="searchbar-form" action="#" htmlFor="Search" h={(e) => e.preventDefault()}>
                <input
                    type="text"
                    placeholder="Search..."
                    name="search"
                    value={query}
                    onChange={handleChange}
                />

                <button type="submit">
                    <i className="fa fa-search"></i>
                </button>
            </form>
        </div>
    )
}