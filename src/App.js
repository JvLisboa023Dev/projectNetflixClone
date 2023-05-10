import React, {useEffect, useState} from "react";
import './App.css';
import tmdb from "./tmdb";
import MovieRow from "./components/MovieRow";
import FeaturedMovie from "./components/featuredMovie";
import HeaderJS from "./components/Header/index";


function App() {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState([]);
  const [blackHeader, setBlackHeader] = useState(false);
  
  useEffect(() => {
    //  pegando a lista TOTAL

  const loadAll = async () => {
    let list =  await tmdb.getHomeList();
    setMovieList(list);

    //pegando o featured

    let latest = list.filter(i=> i.slug === 'now_playing');
    let randomChosen = Math.floor(Math.random() * (latest[0].items.results.length -1));
    let chosen = latest[0].items.results[randomChosen]
    let chosenInfo = await tmdb.getMovieInfo(chosen.id, 'movie');
    setFeaturedData(chosenInfo);

  }
  loadAll();
  }, []);

  useEffect(()=> {
    const scrollListener = () => {
      if(window.scrollY > 10) {
        setBlackHeader(true)
      } else {
        setBlackHeader(false)
      }
    }

    window.addEventListener('scroll', scrollListener);
    
    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  })

  return (
    <div className="page">

      

      <HeaderJS black={blackHeader}/>

      {featuredData &&
        <FeaturedMovie item={featuredData} />
      }

      <section className="lists">
      {movieList.map((item, index) => {
      return (
        <MovieRow key={index} title={item.title} items={item.items}/>
        )
      })}
      </section>

      <footer>
        Projeto feito por João Lisboa, baseado no curso B7Web <br/>
        Direitos de imagem para Netflix <br/>
        Dados usados da API do site Themoviedb.org
      </footer>

      {movieList.length <= 0 &&
        <div className="loading">
          <img src="images/Netflix_LoadTime (1).gif" alt="Carregando..."></img>
        </div>
      }
    </div>
  );
};


export default App;