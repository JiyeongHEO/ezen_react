/* 23-03-05 
[remix]
*/

import { Link, Outlet } from '@remix-run/react'; //[remix] Outlet: 공통layout라우트, 메뉴같은거

export default function Articles() {
  return (
    <div>
      <Outlet />
      <hr />
      <ul>
        <li>
          <Link to="/articles/1">게시글 1</Link>
        </li>
        <li>
          <Link to="/articles/2">게시글 2</Link>
        </li>
        <li>
          <Link to="/articles/3">게시글 3</Link>
        </li>
      </ul>
    </div>
  );
}