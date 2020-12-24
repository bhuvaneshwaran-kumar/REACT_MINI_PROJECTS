import React,{useEffect,useState} from 'react'
import './App.css'
import Recipes from './Recipes'

const App = ()=>{
  const [querry,setQuerry] = useState('')
  const [search,setSearch] = useState('chicken')
  const APP_ID = '6adf77eb'
  const APP_KEY='e45aa027ac14c91c07710beda5259c11'
  const url = `https://api.edamam.com/search?q=${querry}&app_id=${APP_ID}&app_key=${APP_KEY}`
  const [recipes,setRecipes] = useState([])

  const [nav,setNav] = useState(0)

  
  
  useEffect(() => {
    getRecipes()

    return () => {
      
    }
  }, [search])

  const getRecipes = async()=>{
    const response = await fetch(url)
    const data = await response.json()
    console.log(data.hits)
    setRecipes(data.hits);
  }

  const updateSearch = e => {
    
    setQuerry(e.target.value)
    // console.log(querry)

  } 

  const getSearch = e=>{
    e.preventDefault();
    setSearch(querry)

  }

  useEffect(()=>{
    console.log('hooks',nav)
    if( parseInt( nav ) < 0){
      setNav(0)
    }else if(recipes.length > 0 ){
      if( parseInt( nav ) > (recipes.length-1)){
        console.log("overflow",recipes.length)
        setNav(recipes.length-1)
      }
    }
  },[nav])
  const incrementNav = ()=>{
    setNav( prev =>{
      console.log('###',prev+1)
      console.log(recipes[nav])
      if(prev == recipes.length-1){
        return 0
      }else{
        return prev+1
      }
    } )
  }
  const decrementNav = ()=>{
    setNav( prev => {
      if(prev == 0){
        return recipes.length-1
      }else{
        return prev-1
      }
    } )
  }
  let showdata = {
    label : 'Search any object',
    imgs :'',
    cal :'Search any object'
  }
  if(recipes.length > 0 ){
    showdata = {
      label : recipes[nav].recipe.label,
      imgs : recipes[nav].recipe.image,
      cal : recipes[nav].recipe.calories
    }
  }
 

  return (
    <div className="App">
      <form action="" className='search-form'onSubmit={getSearch} >
        <input type="text" name='Iteam' className='search-bar' value={querry} onChange={updateSearch}/>
        <button type='submit' className='search-btn'>Search</button>
      </form>
      {
        
      }
      <div className="outer">  
      <div className='btn' onClick={()=>{decrementNav();}} ><i class="fa fa-5x fa-arrow-left" aria-hidden="true"></i></div>


      
       
       {

          <Recipes data = {showdata} />
       
       }
       
        
      
      <div className='btn' onClick={()=>{
        incrementNav();
        
      }}> <i class="fa fa-5x fa-arrow-right" aria-hidden="true"></i> </div>
    </div>
  </div>
  )

}

export default App