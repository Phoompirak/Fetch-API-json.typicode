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
            <div>
                <input type="search" onChange={handleSearchChange}></input>
                <label htmlFor="search"><FaSearch /></label>
            </div>
            <ApiContent search={search.toLowerCase()}/>
        </>
    )
}