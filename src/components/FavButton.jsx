const FavButton = ({ movie, isFav, onClick }) => {

    const handleClick = () => {
        if(isFav === true) {
            onClick(false, movie)
        } else {
            onClick(true, movie)
        }
    }

    return (
        <button className="" onClick={handleClick}>
        {isFav ? 'Remove from' : 'Add to'} Favourites
        </button>
    );
}

export default FavButton;