import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    categoryID:0,
    sort: {
        name: 'популярності',
        sortProperty: 'rating',
    }
}

 const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setCategoryID: (state, action) => {
            state.categoryID = action.payload;
        },
        setSort: (state, action) => {
            state.sort = action.payload;
        }
    }
});

export const { setCategoryID, setSort } = filterSlice.actions;

export default filterSlice.reducer;