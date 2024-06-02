const Options = ( {handleClick} ) => {

    const options = [
        {name: 'Popular', value: 'popular'},
        {name: 'Top Rated', value: 'top_rated'},
        {name: 'Upcoming', value: 'upcoming'},
        {name: 'Now Playing', value: 'now_playing'},
    ]
    return (
        <nav className="nav-options">
            <ul className="nav-options">
            {
                options.map((option) => (
                    <li className="nav-options" key={option.value}>
                    <button className="nav-options" key={option.value} data-value={option.value} onClick={(event) => handleClick(event.target.dataset.value)}>{option.name}</button>
                    </li>
                ))
            }
            </ul>
        </nav>
    );
}

export default Options;