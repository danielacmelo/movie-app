const Options = ( {handleClick} ) => {

    const options = [
        {name: 'Popular', value: 'popular'},
        {name: 'Top Rated', value: 'top_rated'},
        {name: 'Upcoming', value: 'upcoming'},
        {name: 'Now Playing', value: 'now_playing'},
    ]
    return (
        <nav>
            {
                options.map((option) => (
                    <button key={option.value} data-value={option.value} onClick={(event) => handleClick(event.target.dataset.value)}>{option.name}</button>
                ))
            }
        </nav>
    );
}

export default Options;
