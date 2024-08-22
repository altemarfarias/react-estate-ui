import { useState } from "react";
import "./searchBar.scss";

const types = ["comprar","Alugar"];
 
function SearchBar() {
    const [query, setQuery] = useState({
        type: "comprar", 
        location: "",
        minPrice: 0,
        maxPrice: 0,
    });

    const switchType = (val) => {
        setQuery((prev) => ({ ...prev, type: val }));
    };

    return (
        <div className="searchBar">
            <div className="type">
                {types.map((type) => (
                    <button 
                        key={type} 
                        onClick={() => switchType(type)}
                        className={query.type === type ? "active" : ""}
                    >
                        {type}
                    </button>
                ))}                
            </div>
            <form>
                <input type="text" name="location" placeholder="Localização"/>
                <input
                  type="number"
                  name="minPrice"
                  min={0}
                  max={10000000}
                  placeholder="Preço Mínimo" 
                />
                <input
                  type="number"
                  name="maxPrice"
                  min={0}
                  max={10000000}
                  placeholder="Preço Máximo" 
                />
            </form>
        </div>
    )
}

export default SearchBar;