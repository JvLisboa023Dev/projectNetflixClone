import React from "react";
import './FeaturedMovie.css';

const FeaturedMovie = ({ item }) => {
    let firstDate = new Date(item.release_date)
    let genres = []
    for (let i in item.genres) {
        genres.push(item.genres[i].name);
    }

    let description = item.overview;
    if(description && description.length > 350) {
        description = description.substring(0, 350)+'...';
    }

    return (
        <section className="featured" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <div className="featured--vertical">
                <div className="featured--horizontal">
                    <div className="featured--name">{item.original_title}</div>
                        <div className="featured--info">
                            <div className="featured--points">{item.vote_average ? item.vote_average.toFixed(1) : ''} pontos</div>
                            <div className="featured--year">{firstDate.getFullYear()}</div>
                        </div>
                    <div className="featured--description">{description}</div>
                    <div className="featured--buttons">
                        <a href={`/watch/${item.id}`} className="featured--watchbutton">▶ Assitir </a>
                        <a href={`/list/add/${item.id}`} className="featured--mylistbutton">+ Minha lista</a>
                    </div>
                    <div className="featured--genres"><strong>Gêneros:</strong> {genres.join(', ')}</div>
                    
                </div>
            </div>
        </section>
    )
}

export default FeaturedMovie;