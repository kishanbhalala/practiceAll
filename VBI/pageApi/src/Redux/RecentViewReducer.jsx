import { ADD_RECENT_VIEW } from "./Constant";

const initialState = JSON.parse(localStorage.getItem('recentViewsState')) || [];


export const RecentViewReducer = (data = initialState, action) => {

    switch (action.type) {

        case ADD_RECENT_VIEW:
            // console.log("rrrr", action)
            return {
                views: [action.data, ...data.views],
            };
        default:
            return data;
    }
};


