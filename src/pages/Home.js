import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Item from '../components/Item'
import './home.css'

const categories = document.getElementsByClassName("items");
const tablinks = document.getElementsByClassName("tablink");

const Home = () => {
  const [data, setData] = useState()
  const [error, setError] = useState('')

  useEffect(()=> {
    fetch("https://my-json-server.typicode.com/Amir-Mohebali/shop-api/products")
      .then((res) => {return res.json()})
      .then((resp) => setData(resp))
      .catch((err) => setError(err))
  }, [])

  const openProductCategory = (event, category) => {
      for (let i = 0; i < categories.length; i++) {
          categories[i].style.display = "none";
      }
      for (let i = 0; i < categories.length; i++) {
          tablinks[i].classList.remove("active");
      }
  
      document.getElementById(category).style.display = "flex";
      event.target.classList.add("active");
  }

  return (
    <div className='container'>
        <div className="heroBanner">
            <div className="content">
                <div className="offer-box">
                    <h2 className='large-text'>
                        Super Summer Sale
                    </h2>
                    <span className='medium-text'>For Smart TV</span>
                    <div className='small-text'>
                        <span>up to</span>
                        <br/>
                        <span className='off'>40%</span> 
                        <br/> 
                        <span>off</span>
                    </div>
                </div>
                <Link to='/products/tv' className='primary-btn'>Shop Now</Link>
            </div>
            <div className="image">
                <img src='https://i.postimg.cc/LXjdW7x3/tv01.png' alt="tv01-img" />
            </div>
            <div className="hero-divider">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                </svg>
            </div>
        </div>
        <div className="products">
            <h2 className="title">Our Products</h2>
            <div className="products-container">
                <div className="bar">
                    <button className="tablink active" onClick={(e)=> openProductCategory(e,'Phones')}>Phones</button>
                    <button className="tablink" onClick={(e)=> openProductCategory(e,'Laptops')}>Laptops</button>
                    <button className="tablink" onClick={(e)=> openProductCategory(e,'TVs')}>TVs</button>
                </div>
                <div id="Phones" className="items active">
                    {data && console.log(data)}
                    {data 
                        ? data
                            .filter(item => item.Cat === 'phone')
                            .map(item => <Item data={item} />)
                        : <h3>{error}</h3>
                    }
                </div>

                <div id="Laptops" className="items">
                    {data 
                        ? data
                            .filter(item => item.Cat === 'laptop')
                            .map(item => <Item data={item} />)
                        : <h3>{error}</h3>
                    }
                </div>
                
                <div id="TVs" className="items">
                    {data 
                        ? data
                            .filter(item => item.Cat === 'tv')
                            .map(item => <Item data={item} />)
                        : <h3>{error}</h3>
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home