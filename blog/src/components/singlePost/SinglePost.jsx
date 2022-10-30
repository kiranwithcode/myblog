import axios from "axios";
import { useContext } from "react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Context } from "../../context/Contex";
import "./singlePost.css";

export default function SinglePost() {
  const location = useLocation();
  const { user } = useContext(Context);
  const path = location.pathname.split("/")[2];
  const PF = "http://localhost:5000/images/";
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("http://localhost:5000/api/posts/" + path);
      setData(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    getPost();
  }, [path]);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/posts/${data._id}`, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (error) {}
  };
  const handelUpdate = async () => {
    try {
      await axios.put(`http://localhost:5000/api/posts/${data._id}`, {
        username: user.username,
        title,
        desc,
      });
      setUpdateMode(false)
    } catch (err) {}
  };
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {data.photo && (
          <img src={PF + data.photo} alt="" className="singlePostImg" />
        )}
        {updateMode ? (
          <input
            type="text"
            value={title}
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
            className="singlePostTitleInput"
          />
        ) : (
          <h1 className="singlePostTitle">
            {title} 
            {data.username === user?.username && (
              <div className="singlePostEdit">
                <i
                  className="singlePostIcon far fa-edit"
                  onClick={() => setUpdateMode(true)}
                ></i>
                <i
                  className="singlePostIcon far fa-trash-alt"
                  onClick={handleDelete}
                ></i>
              </div>
            )}
          </h1>
        )}
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
              <Link className="link" to={`/posts?user=${data.username}`}>
                {data.username}
              </Link>
            </b>
          </span>
         
          <span>{new Date(data.createdAt).toDateString()}</span>

        </div>
        {updateMode ? (
          <textarea cols="30" rows="5" className="singlePostDescInput" value={desc} onChange={(e) => setDesc(e.target.value)} ></textarea>
        ) : (
          <p className="singlePostDesc">{desc}</p>
        )}
          <span>
          {updateMode && (
          <button className="singlePostButton" onClick={handelUpdate}>
            Update
          </button>
        )}
          </span>
      </div>
    </div>
  );
}
