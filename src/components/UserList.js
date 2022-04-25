import React, { useEffect } from 'react';
import {fetchAllUsers} from '../store/slices/users/users';
import { useDispatch, useSelector } from 'react-redux';

const UserList = () => {

    const {list: users} =useSelector(state=>state.users)

    const dispatch =useDispatch();


    useEffect(()=>{
        dispatch(fetchAllUsers());
    },[dispatch]);

  return (
		<div className='container mt-4'>
			<div className='row row-cols-auto d-flex justify-content-center '>
				{users.map((user) => (
					<div key={user.id} className=' mb-4 '>
						<div
							className='card border border-5 bg-secondary'
							style={{ width: '16rem', height: '22rem' }}
						>
							<img
								src={user.avatar}
								alt='avatar'
								className='rounded  border-4 border-bottom'
							/>
							<div className='card-body  text-white'>
								<h5 className='card-title'>
									{`${user.first_name} ${user.last_name}`}{' '}
								</h5>
								<p className='card-text'>
									{user.email}
								</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
  );
}

export default UserList