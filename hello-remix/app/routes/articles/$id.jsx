/*23-03-05 
[remix-param적용]*/
import { useParams } from '@remix-run/react';

export default function Article() {
  const params = useParams();
  return <div>게시글 ID: {params.id}</div>;
}