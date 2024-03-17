import { useState, useEffect } from 'react'
import axios from 'axios'
import ItemContent from './ItemContent'

import '../styles/ApiContent.css'

function ApiContent({ search }) {
    const [users, setUsers] = useState([])

    const fetchAPI = async () => {
        try {
            const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
            if (!res.status == 200) {
                throw new Error('Error fetching data');
            }
            setUsers([...users, ...res.data.map((val) => ({ id: val.id, userId: val.userId, title: val.title, body: val.body })), { id: 9999999, userId: "999999999+", title: "Phoompirak KRJ, FulStack Developer", body: "โคตรเก่งมากกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกก"}, { id: 999, userId: "999+", title: "Phat, FulStack Developer", body: "โคตรเก่งมากกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกก"}])
        }
        catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    useEffect(() => {
        fetchAPI();
    }, [])

    console.log(search)

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
                    /* อย่าลืม .map(value => ()) ต้องใช้วงเล็บธรรมดา ไม่มีวงเล็บปีกกา  */
                    users?.filter((item) => {
                        return (
                            search.toLowerCase() === ''
                                ? item
                                : item.title.toLowerCase().includes(search)
                                || item.title.toLowerCase().replace(/\s/g, "").includes(search)
                                || item.body.toLowerCase().includes(search)
                                || item.body.toLowerCase().replace(/\s/g, "").includes(search)
                                || item.userId.toString() == search.toString()
                        )
                    }).map((user, index) => (
                        <ItemContent
                            key={index}
                            id={user.id}
                            userId={user.userId}
                            title={user.title}
                            body={user.body} />
                    ))
                }
            </tbody>
        </table >
    )
}

export default ApiContent