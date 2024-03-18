import { FaSearch } from "react-icons/fa";
import { useState, useEffect } from "react";
import '../styles/SearchUsers.css'
import ApiContent from "./ApiContent";

export default function SearchUsers() {
    const [search, setSearch] = useState('');

    // ใช้เก็บค่าตอนดีเลย์เสร็จเพื่อให้ตอน user search เซิฟเวอร์จะได้ไม่รันทุกครั้งที่พิมพ์
    const [dbValue, setDbValue] = useState('');

    useEffect(() => {
        const timerId = setTimeout(() => {
            console.log("Send " + search)
            setDbValue(search);
        }, 500); // ดีเลย์500ms

        return () => {
            // cleanUp function
            clearTimeout(timerId);
        };
    }, [search])

    // เปลี่ยนค่าตามที่ user กรอกมาตลอด
    function handleSearchChange(event) {
        setSearch(event.target.value);
    };

    return (
        <>
            <div className="search-users">
                <input id="search" type="search" onChange={handleSearchChange} placeholder="Search Users"></input>
                <label htmlFor="search"><FaSearch /></label>
            </div>

            {/* // ส่งไปให้ component ที่จัดเรียงข้อมูลเป็นตาราง */}
            <ApiContent search={dbValue.toLowerCase()}/>
        </>
    )
}