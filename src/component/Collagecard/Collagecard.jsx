import { useEffect, useState } from 'react';

const Collagecard = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setUsers(data));
    })
    return (
        <div className='my-4'>
            <h2 className='text-center text-2xl my-3'>Collage Section</h2>
           <div className='grid grid-cols-2 gap-2'>
           {
                users.map(user => <div key={user.id}>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={user?.image} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Name: {user?.college_name}</h2>
                            <p>Events: {user?.events[1]}</p>
                            <p>Admission Deta: {user?.admission_dates?.fall}</p>
                            <div className="card-actions">
                                <button className="btn btn-primary">Details</button>
                            </div>
                        </div>
                    </div>
                </div>)
            }
           </div>
        </div>
    );
};

export default Collagecard;