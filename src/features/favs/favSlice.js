import { createSlice } from '@reduxjs/toolkit';
import { appStorageName } from '../../globals/globalVariables';

function getLocalStorageFavs(){
    const favs = localStorage.getItem(appStorageName);
    return favs !== null ? JSON.parse(favs) : [];
}
   
const localStorageFavs = getLocalStorageFavs();

const initialState = {
    items: localStorageFavs
}

function getIndex(item, arr){
    return arr.findIndex(arrItem => arrItem.id === item.id);
}

export const favSlice = createSlice({
    name: 'favs',
    initialState,
    reducers: {
        addFav: (state, action) => {
            if(getIndex(action.payload, state.items) === -1){
                const newFavs = [...state.items, action.payload];
                localStorage.setItem(appStorageName, JSON.stringify(newFavs));
                state.items = newFavs;
            }
        },
        removeFav: (state, action) => {
            const index = getIndex(action.payload, state.items);
            if(index !== -1){
                const itemsCopy = state.items;
                itemsCopy.splice( index, 1);
                localStorage.setItem(appStorageName, JSON.stringify(itemsCopy))
                state.items = itemsCopy;
            }
        }
    }
});

export const { addFav, removeFav } = favSlice.actions;

export default favSlice.reducer;