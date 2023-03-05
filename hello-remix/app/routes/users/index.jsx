/** 2023-03-05 
 * [remix-data불러오기] */

import { json } from '@remix-run/node';
import { Link, useLoaderData } from '@remix-run/react'; //[remix-data불러오기]- useLoaderData: 얘로 반환된 데이터 사용, 
import { getUsers } from '../../lib/api';

export const loader = async () => {  //[remix-data불러오기]
  const data = await getUsers();
  return json(data);
};

export default function Users() {
  const users = useLoaderData(); //[remix-data불러오기]

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.username}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}