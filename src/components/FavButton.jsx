const FavButton = ({ movie, isFav, onClick }) => {

    const handleClick = () => {
        if(isFav === true) {
            onClick(false, movie)
        } else {
            onClick(true, movie)
        }
    }

    return (
        <button onClick={handleClick}>
        {isFav ? 'Remove from' : 'Add to'} Favorites
        </button>
    );
}

export default FavButton;