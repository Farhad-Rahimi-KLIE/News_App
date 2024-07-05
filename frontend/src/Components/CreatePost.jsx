import React,{useState} from 'react'
import {PostNews} from '../Redux/Slices/NewsSlice'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
const CreatePost = () => {
  const [input, setInput] = useState({
    title : "",
    description : "",
  })
  const [image, setImage] = useState();
const dispatch = useDispatch()
const navigate = useNavigate()
let userId = JSON.parse(localStorage.getItem('users')).data.register._id;

  const HandleCahnge = ()=>{
    const data = new FormData()
    data.append("title", input.title)
    data.append("description", input.description)
    data.append("writedBy", userId);
    data.append("image", image)
    dispatch(PostNews(data))
    navigate("/dashboard")
  }

  return (
    <div className='product'>
            <h1>Add a New News</h1>
            <input type="text" placeholder='Title' className='inputBox'
            name='title'
            value={input.title}
            onChange={(e)=> setInput({...input, [e.target.name] : e.target.value})}
            />
           <textarea id="" cols="38" rows="6" placeholder='Description'
            name='description'
            value={input.description}
            onChange={(e)=> setInput({...input, [e.target.name] : e.target.value})}
           ></textarea>

            <input type="file" placeholder='Image' name='image' className='inputBox'
            onChange={(e)=> setImage(e.target.files[0])}
            />


            <button className='appButton' onClick={HandleCahnge}>Add Blog</button>
        </div>
  )
}

export default CreatePost