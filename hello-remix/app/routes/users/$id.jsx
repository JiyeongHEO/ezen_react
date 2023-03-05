/* 2023-03-05 
[remix-사용자정보]
*/
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { getUser } from '../../lib/api';

export const loader = async ({ params }) => {
  const { id } = params; //[remix-사용자정보]
  const user = await getUser(id);
  return json(user);
};

export default function User() {
  const user = useLoaderData();

  return (
    <div>
      <h2>{user.username}</h2>
      <code style={{ whiteSpace: 'pre' }}>{JSON.stringify(user, null, 2)}</code>
    </div>
  );
}