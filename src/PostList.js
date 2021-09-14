// import React from "react";
// import Post from "./DeletePosts";
// /**
//  * Diplays a list of either text or image posts.
//  *
//  */
// function PostList({ posts, deletePost }) {
//   // TODO: Diplay the list of posts.
//   // TODO: Create at least one additional component that is used by this component.
//   // TODO: Each post must have className="post" for the tests to work.
//   // TODO: Each post must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked

//   // return <div className="post-list"></div>;
//   return (
//     <div>
//       {posts.map((post, index) => (
//         <Post deletePost={() => deletePost(index)} key={index} post={post} />
//       ))}
//     </div>
//   );
// }

// export default PostList;

import React from "react";
import Post from "./Post";

function PostList({ posts, handleDeletePost }) {
  const postList = posts.map((post, index) => {
    const postType = post.type;
    const postContent = post.content;
    return (
      <Post
        // key is only here to clear console error from react - but postIndex is still necessary because I also can't access key as a prop in the child component.
        key={index}
        postIndex={index}
        postContent={postContent}
        deletePost={handleDeletePost}
        postType={postType}
      />
    );
  });

  return <div className="post-list">{postList}</div>;
}

export default PostList;