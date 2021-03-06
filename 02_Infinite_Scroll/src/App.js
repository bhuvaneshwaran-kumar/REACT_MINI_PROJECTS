import { useState, useEffect, useRef } from "react"
import './App.css';
import Image from './Image'

function App() {
  const imageCount = 5		// no of images which will be retrived everytime a request is made to Unsplash API
  const [images, setImages] = useState([])
  const [count, setCount] = useState(0)
  const [loading, setLoading] = useState(true)          // for loading spinner
  const io_Element = useRef()

  useEffect(() => {
    const getApiURL = () => {
      const API_KEY = `👉//### REPLACE API KEY FROM UNSPLASH HERE! ###`
      return `https://api.unsplash.com/photos/random/?client_id=${API_KEY}&count=${imageCount}`;
    }

    const fetchImages = async () => {
      const response = await fetch(getApiURL())
      const data = await response.json()
      setImages([
        ...images, ...data.map((image) => (
          {
            id: image.id,
            alt_description: image.alt_description,
            downloads: image.downloads,
            country: image.location.country,
            city: image.location.city,
            username: image.user.username,
            url: image.urls.regular
          }
        ))  // end of map()
      ])    // end of  setImage()
    }       // end of fetchImages()

    setLoading(false)
    fetchImages()
    setLoading(true)

    console.log('image fetched:', count)
    // eslint-disable-next-line
  }, [count])

  // Start Intersection Observer while the component starts
  useEffect(() => {
    const iO = new IntersectionObserver(entires => {
      let ratio = entires[0].intersectionRatio;
      if (ratio > 0) {
        console.log('in the bottom!!')
        setCount(prev => prev + 1)
      }
    })
    iO.observe(io_Element.current)
  }, [])


  return (
    <div className="app">
      <h1 className="font-weight-normal mt-2">Hello React 💙</h1>
      <div className="images__container">

        {
          images.map(image => (
            <Image key={image.id} data={image} />
          ))
        }

        {loading ? (
          <div className="d-flex justify-content-center mb-5">
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>) : (<> </>)
        }

        <div ref={io_Element} className="intersection__observer">

        </div>

      </div>
    </div>
  );
}

export default App;
