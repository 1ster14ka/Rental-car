export const selectBrands = (state) => state.filters.brandsList;
export const selectBrand = (state) => state.filters.brand;
export const selectPrice = (state) => state.filters.rentalPrice;
export const selectMileageFrom = (state) => state.filters.minMileage;
export const selectMileageTo = (state) => state.filters.maxMileage;
export const selectFilters = (state) => state.filters;
