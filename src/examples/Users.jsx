const PostItems = ({ fetchPosts }) => {

  return (
    <ul>
      {fetchPosts.slice(0, 3).map((user) => (
        <div key={user.id} className="bg-blue-900 shadow-md p-4 my-6 rounded-lg">
          <h2 className="text-xl font-bold">{user.name}</h2>
          <p>{user.email}</p>
        </div>
      ))}
    </ul>
  );
};


export default PostItems;
