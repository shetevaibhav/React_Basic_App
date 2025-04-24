import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
        setPost(res.data);
        console.log(res.data, "%%%%");
      } catch (err) {
        console.error("Error fetching posts:", err);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Fetched Posts</h1>
      {post.slice(0, 5).map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
