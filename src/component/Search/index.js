import './Search.scss';
//import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import HeadlessTippy from '@tippyjs/react/headless';
import { useEffect, useState } from 'react';
import { Wrapper as PopperWrapper } from '../Popper';
import SearchItem from '../SearchItem';
import { useDebounce } from '../../hook';
function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showResult, setShowResult] = useState(true);
    const debounced = useDebounce(searchValue, 300);
    useEffect(() => {
        fetch(`http://localhost:8080/api/products/search?search=${debounced}&page=0&numOfProduct=10`)
            .then((res) => res.json())
            .then((res) => {
                setSearchResult(res);
                localStorage.setItem('searchResult', JSON.stringify(res));
            });
    }, [debounced]);
    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
    };
    const handleHideResult = () => {
        setShowResult(false);
    };
    return (
        <div className="search-wrapper">
            <HeadlessTippy
                placement="bottom"
                interactive
                visible={searchResult.length > 0 && showResult}
                onClickOutside={handleHideResult}
                render={(attrs) => (
                    <div className="box" tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            {searchResult.map((result) => (
                                <SearchItem key={result.id} data={result} />
                            ))}
                        </PopperWrapper>
                    </div>
                )}
            >
                <form action="/search" className="search-form">
                    <div className="autocomplete">
                        <input
                            type="text"
                            name="search"
                            placeholder="Tìm kiếm"
                            onChange={(e) => {
                                setSearchValue(e.target.value);
                            }}
                            onFocus={(e) => {
                                setShowResult(true);
                            }}
                        />

                        <button type="submit">
                            <i className="material-icons">search</i>
                        </button>
                    </div>
                </form>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
