import React, { useEffect } from 'react'
import './NewsContent.css'
import {useSelector, useDispatch} from 'react-redux'
import {GetNews} from '../Redux/Slices/NewsSlice'
const NewsContent = () => {
    // let userId = JSON.parse(localStorage.getItem('users')).data.register.username;
    const dispatch = useDispatch()
    const news = useSelector((state) => state.news.akhbar)
    console.log(news)
    useEffect(()=>{
        dispatch(GetNews())
    },[])

    return (
        <>
        {
            news.map((item)=>{
                return (
                    <div className="newsCard">
            <img
                  alt={item.title}
                src={`http://localhost:3000/${item.image}`} className="newsImage" />
            <div className="newsText">
                <div>
                    <span className="title">{item.title}</span>
                    <br />
                    <span className="author">
                        <a href='www.google.com' target="__blank">
                            <b>short </b>
                        </a>{" "}
                        <span className="muted">
                            {" "}
                            by {item.writedBy.username} /{" "}
                            {item.timestamp}
                        </span>
                    </span>
                </div>
                <div className="lowerNewsText">
                    <div className="description">{item.description}</div>
                    <span className="readmore">
                        read more at{" "}
                        <a href='www.google.com' target="__blank" className="source">
                            <b>Google</b>
                        </a>
                    </span>
                </div>
            </div>
        </div>
                )
            })
        }
        </>
    )
}

export default NewsContent