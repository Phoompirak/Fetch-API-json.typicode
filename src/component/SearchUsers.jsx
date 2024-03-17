import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import '../styles/SearchUsers.css'
import ApiContent from "./ApiContent";

export default function SearchUsers() {
    const [search, setSearch] = useState('');

    const handleSearchChange = (event) => {
        setSearch(event.target.value);
    };

    return (
        <>
            <div className="search-users">
                <input id="search" type="search" onChange={handleSearchChange} placeholder="Search Users"></input>
                <label htmlFor="search"><FaSearch /></label>
            </div>
            <ApiContent search={search.toLowerCase()}/>
        </>
    )
}