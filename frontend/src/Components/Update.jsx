import React ,{useEffect, useState} from 'react'
import {GetOneNews, UpdateNews} from '../Redux/Slices/NewsSlice'
import {useDispatch, useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'
const Update = () => {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState();


  const dispatch = useDispatch()
  const params = useParams()
  const news = useSelector((state) => state.news.jan)
  console.log(news)
  useEffect(()=>{
    getOneNews()
  },[])

  const getOneNews = ()=>{
    dispatch(GetOneNews(params.id))
    setTitle(news.title)
    setDescription(news.description)
    setImage(news.image)
  }

  const updateKaro = ()=>{
    dispatch(UpdateNews(params.id))
  }

  return (
    <div className='product'>
    <h1>Add a New News</h1>
    <input type="text" placeholder='Title' className='inputBox'
    name='title'
    value={title}
    onChange={(e)=> setTitle(e.target.value)}
    />
   <textarea id="" cols="38" rows="6" placeholder='Description'
    name='description'
    value={description}
    onChange={(e)=> setDescription(e.target.value)}
   ></textarea>

    <input type="file" placeholder='Image' name='image' className='inputBox'
    onChange={(e)=> setImage(e.target.files[0])}
    />


    <button className='appButton' onClick={updateKaro}>Update News</button>
</div>
  )
}

export default Update