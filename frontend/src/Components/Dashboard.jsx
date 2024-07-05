import React, { useEffect } from 'react'
import './Dashboard.css'
import { useSelector, useDispatch } from 'react-redux'
import { GetNews, DeleteNews } from '../Redux/Slices/NewsSlice'
import { Link } from 'react-router-dom'
const Dashboard = () => {
  const dispatch = useDispatch()
  const news = useSelector((state) => state.news.akhbar)

  const deleteJan = (index)=>{
    dispatch(DeleteNews(index))
    dispatch(GetNews())
  }


  useEffect(() => {
    dispatch(GetNews())
  }, [])


  return (
    <div>
      <div className="container">
        <div className="header">
          <div className="nav">
            <div className="user">
              <a href="/post" className="btn">Add New</a>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="cards">
          </div>
          <div className="content-2">
            <div className="recent-payments">
              <div className="title">
                <h2 className='font-bold'>Post News</h2>
              </div>
              <table>
                <tr>
                  <th>post ID</th>
                  <th>Post Title</th>
                  <th>Image</th>
                  <th>PostedBy</th>
                  <th>CreateAt</th>
                  <th>Actions</th>
                </tr>
              
                  {news.map((item, index) => {
                    return (
                      <>
                      <tr key={index}>
                        <td>{item._id}</td>
                        <td>{item.title}</td>
                        <td><img src={`http://localhost:3000/${item.image}`} className='w-[4rem]'/></td>
                        <td>{item.writedBy.username}</td>
                        <td>{item.timestamp}</td>
                        <td><button onClick={()=> deleteJan(item._id)}>🗑</button> <Link to={`/update/${item._id}`}>📑</Link></td>
                        </tr>
                      </>
                    )
                  })}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard