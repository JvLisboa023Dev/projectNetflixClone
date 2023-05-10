import React, {useState} from "react";
import './MovieRow.css';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const MovieRow = ({ title, items }) => {
    const [scrollX, setScrollX] = useState(0);

    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);
        if(x > 0) {
            x = 0
        }
        setScrollX(x) 
    }
    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listW = items.results.length * 150;
        if ((window.innerWidth - listW) > x){
            x = (window.innerWidth - listW) - 60;
        }
        setScrollX(x)
    }

    return (
        <div className="MovieRow">
            <h2>
                {title}
            </h2>
            <div className="MovieRow--left" onClick={handleLeftArrow}>
                <NavigateBeforeIcon style={{fontSize: 50}}/>
            </div>
            <div className="MovieRow--right" onClick={handleRightArrow}>
                <NavigateNextIcon style={{fontSize: 50}}/>
            </div>
            <div className="MovieRow--listarea">
                <div className="MovieRow--list" style={{
                    marginLeft: scrollX,
                    width: items.results.length * 150
                }}>
                    {items && items.results && items.results.length > 0 && items.results.map((item, index) => (
                        <div key={index} className="MovieRow--item">
                            <img key={index} src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} /> 
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MovieRow;