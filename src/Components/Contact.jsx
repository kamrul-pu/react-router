import React from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h2>Contact Page</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam nisi exercitationem molestias consectetur ipsum dicta animi temporibus nulla incidunt aperiam dolorum iure perspiciatis deserunt, dignissimos suscipit natus facere ad, labore a. Dicta laborum error porro ipsa amet at iure vero laudantium alias harum, magni minus id officia sint aliquam architecto!</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, qui porro perferendis nulla voluptas veritatis, dolore reiciendis eius hic, corrupti ratione eaque asperiores nostrum! Sequi at nulla facilis sunt vel?</p>
            <button onClick={() => navigate("/")}>Got To HomePage</button>
        </div>
    )
}

export default Contact