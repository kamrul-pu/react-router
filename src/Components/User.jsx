import React, { useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

const User = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    // const { id } = useParams();
    // console.log("search Params", searchParams.get("id"));
    const [name, setName] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchParams({ name: name, age: 28 });
    }
    return (
        <div>
            <h1>User</h1>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" name="" id="" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="submit" value="Enter" />
            </form>

            {/* <h2>ID: {searchParams.get("id")}</h2>
            <h3>{searchParams.get("name")}</h3>
            <h4>{searchParams.get("age")}</h4> */}
        </div>
    )
}

export default User