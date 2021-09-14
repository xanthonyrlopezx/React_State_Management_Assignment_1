// import React from "react";

// function Post({ post, deletePost }) {
//   console.log(`posts value:  ${post}`);
//   console.log(typeof post);
//   const pStyle = {
//     padding: "20px",
//     border: "2px solid black",
//   };
//   if (post.includes("http")) {
//     return (
//       <div style={pStyle} className="post">
//         <img src={post} />
//         <br />
//         <button name="delete" onClick={deletePost}>
//           delete
//         </button>
//       </div>
//     );
//   } else {
//     return (
//       <div style={pStyle} className="post">
//         <p>{post}</p>

//         <button name="delete" onClick={deletePost}>
//           delete
//         </button>
//       </div>
//     );
//   }
// }

// export default Post;



import React from "react";

function Post({ postIndex, postType, postContent, deletePost }) {
  if (postType === "Text") {
    return (
      <div className="post" key={postIndex}>
        <p>{postContent}</p>
        <button name="delete" onClick={() => deletePost(postIndex)}>
          Delete
        </button>
      </div>
    );
  }
  if (postType === "Image") {
    return (
      <div className="post" key={postIndex}>
        <img src={postContent} alt="" />
        <br />
        <button name="delete" onClick={() => deletePost(postIndex)}>
          Delete
        </button>
      </div>
    );
  }
  return null;
}

export default Post;