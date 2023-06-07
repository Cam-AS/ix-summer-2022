import React from 'react';

export default function PostTable(props) {
  return (
    <table className="table mt-5">
      <thead>
        <tr>
          <th>ID</th>
          <th>UserId</th>
          <th>Title</th>
          <th>Body</th>
        </tr>
      </thead>
      <tbody id="table-body">
        {props.posts.map((post) => {
          return (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.userId}</td>
              <td>{post.title}</td>
              <td>{post.body}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
