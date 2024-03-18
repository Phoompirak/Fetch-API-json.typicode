import { useState, useEffect } from 'react'
import axios from 'axios'
import ItemContent from './ItemContent'

import '../styles/ApiContent.css'

function ApiContent({ search }) {
    const [users, setUsers] = useState([])
    const urlFetch = "https://jsonplaceholder.typicode.com/posts"

    // function ไว้ดึงข้อมูลจาก API
    const fetchAPI = async (urlFetch) => {
        try {
            const res = await axios.get(urlFetch)
            if (!res.status == 200) {
                throw new Error('Error fetching data');
            }
                setUsers([...users, ...res.data.map((val) => ({ id: val.id, userId: val.userId, title: val.title, body: val.body })), { id: 9999999, userId: "999999999+", title: "Phoompirak KRJ, FulStack Developer", body: "โคตรเก่งมากกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกก"}, { id: 999, userId: "999+", title: "Phat, FulStack Developer", body: "โคตรเก่งมากกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกก"}])
        }
        catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    // ดึงข้อมูลจาก API ตอนโหลดหน้าเว็บครั้งเเรก
    useEffect(() => {
        fetchAPI(urlFetch);
    }, [])

    return (
        <table>
            <thead>
                <tr>
                    <th>User ID</th>
                    <th>Title</th>
                    <th>More</th>
                </tr>
            </thead>
            <tbody>
                {
                    /* !!เตือนตัวเอง!! อย่าลืม .map(value => ()) ต้องใช้วงเล็บธรรมดา ไม่มีวงเล็บปีกกา (ติดบัคนี้นานเป็นชม.) */
                    /* เช็คว่าข้อมูล users มาจริงไหม */
                    users ? users?.filter((item) => {
                        /* โชว์แค่ item ที่ตรงกับที่User search */
                        return (
                            search.toLowerCase() === ''
                                ? item
                                : item.title.toLowerCase().includes(search)
                                || item.title.toLowerCase().replace(/\s/g, "").includes(search)
                                || item.body.toLowerCase().includes(search)
                                || item.body.toLowerCase().replace(/\s/g, "").includes(search)
                                || item.userId.toString() == search.toString()
                        )
                    })
                    /* ใช้ component อีกอันสร้างItemUserแต่ละแถว */
                    .map((user, index) => (
                        <ItemContent
                            key={index}
                            id={user.id}
                            userId={user.userId}
                            title={user.title}
                            body={user.body} />
                    ))
                    /* ข้อมูลUsersไม่มาก็โชว์หน้าโหลดข้อมูล */
                    : <p id='loading-users'>Loading users...</p>
                }
            </tbody>
        </table >
    )
}

export default ApiContent