const filterReducer = (state, action) => {
    switch (action.type) {
        case "LOAD_FILTER_PRODUCTS":

            let priceArr = action.payload.map((curEle) => curEle.price);
            console.log(priceArr);

            let maxPrice=Math.max(...priceArr);
            let minPrice=Math.min(...priceArr);
            // let maxPrice = priceArr.reduce((initialVal, curval) => {
            //     Math.max(initialVal, curval)
            // })
            // console.log(maxPrice);
            return {
                ...state,
                filter_products: [...action.payload],
                all_products: [...action.payload],
                filters:{
                    ...state.filters,
                    maxPrice,
                    price:maxPrice,
                    minPrice
                }
            }
        case "SET_GRIDVIEW":
            return {
                ...state,
                grid_view: true,
            }
        case "SET_LISTVIEW":
            return {
                ...state,
                grid_view: false,
            }
        case "GET_SORT_VALUE":
            // let userSortValue=document.getElementById("sort");
            // let sort_value=userSortValue.options[userSortValue.selectedIndex].value;
            return {
                ...state,
                sorting_value: action.payload,
            }
        case "SORTING_PRODUCTS":
            let newSortData;
            // let tempSortProduct=[...action.payload];

            const { filter_products, sorting_value } = state;
            let tempSortProduct = [...filter_products];

            const sortingProducts = (a, b) => {
                if (sorting_value === 'lowest') {
                    return a.price - b.price;
                }
                if (sorting_value === 'highest') {
                    return b.price - a.price;
                }
                if (sorting_value === "a-z") {
                    return a.name.localeCompare(b.name);
                }
                if (sorting_value === "z-a") {
                    return b.name.localeCompare(a.name)
                }
            }

            newSortData = tempSortProduct.sort(sortingProducts);
            return {
                ...state,
                filter_products: newSortData,
            }
        case "UPDATE_FILTER_VALUES":
            const { name, value } = action.payload;
            return {
                ...state,
                filters: {
                    ...state.filters,
                    [name]: value,
                }
            }
        case "FILTER_PRODUCTS":

            let { all_products } = state;
            let tempFilterProduct = [...all_products]

            const { text, category, company, price } = state.filters;

            if (text) {
                tempFilterProduct = tempFilterProduct.filter((curEle) => {
                    return curEle.name.toLowerCase().includes(text);
                })
            }

            if (category !== "all") {
                tempFilterProduct = tempFilterProduct.filter((curEle) => {
                    return curEle.category === category;
                })
            }

            if (company !== "all") {
                tempFilterProduct = tempFilterProduct.filter((curEle) => {
                    return curEle.company === company.toLowerCase();
                })
            }
            if (price){
                tempFilterProduct=tempFilterProduct.filter((curEle)=>curEle.price <= price)
            }
            return {
                ...state,
                filter_products: tempFilterProduct,
            }
        case "CLEAR_FILTERS":
            return{
                ...state,
                filters:{
                    text:"",
                    category:"all",
                    company:"all",
                    price:0,
                    maxprice:state.filters.maxPrice,
                    minPrice:state.filters.maxPrice
                },
            }
        default:
            return state;
    }
}
export default filterReducer;