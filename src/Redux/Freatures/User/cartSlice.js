import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    cookingInstruction: '',
    grandTotal: null,
    paymentMethod: '',
    table: null,
    branch_id: null,
    name: null,
    phone: null,
    order_id: null
};

const cartReducer = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProduct: (state, action) => {
            const existingProduct = state.products.find(product => product.id === action.payload.id);
            if (existingProduct) {
                if (existingProduct.quantity < 20) {
                    existingProduct.quantity += 1;
                }
            } else {
                state.products.push({ ...action.payload, quantity: 1 });
            }
        },
        incrementProduct: (state, action) => {
            const product = state.products.find(product => product.id === action.payload.id);
            if (product && product.quantity < 20) {
                if (action.payload.type === "Product") {
                    product.quantity += 1;
                    product?.addonExtras.map((item) => item.quantity += 1)
                } else {
                    if (action.payload.choice) {
                        product.quantity += 1;
                        product?.addonExtras.map((item) => item.quantity += 1)
                    } else {
                        product.quantity += 1;
                    }
                }
            }
        },
        decrementProduct: (state, action) => {
            const product = state.products.find(product => product.id === action.payload.id);
            if (product && product.quantity > 1) {
                if (action.payload.type === 'Product') {
                    product.quantity -= 1;
                    product?.addonExtras.map((item) => item.quantity -= 1)
                } else {
                    if (action.payload.choice) {
                        product.quantity -= 1;
                        product?.addonExtras.map((item) => item.quantity -= 1)
                    } else {
                        product.quantity -= 1;
                    }
                }
            } else if (product && product.quantity === 1) {
                state.products = state.products.filter(product => product.id !== action.payload.id);
            }
        },
        addonIncrement: (state, action) => {

            const product = state.products.find((product) => product.id === action.payload.productId)
            const item = product?.addonExtras.find((item) => item.id === action.payload.itemId)

            if (item && item.quantity < 20) {
                item.quantity += 1
            }

        },
        addonDecrement: (state, action) => {
            const product = state.products.find((product) => product.id === action.payload.productId)
            const item = product?.addonExtras.find((item) => item.id === action.payload.itemId)

            if (item && item.quantity > 1) {
                item.quantity -= 1
            } else if (item && item.quantity === 1) {
                product.addonExtras = product.addonExtras.filter((addon) => addon.id !== item.id);

            }
        },

        addCookingInstruction: (state, action) => {
            state.cookingInstruction = action.payload
        },

        addPaymentMethod: (state, action) => {
            state.paymentMethod = action.payload
        },

        addTableAndBranch: (state, action) => {
            state.table = action.payload.table
            state.branch_id = action.payload.branchId
        },

        addCustomerDetail: (state, action) => {
            state.name = action.payload.name,
                state.phone = action.payload.phone
        },

        addTotalAmount: (state, action) => {
            state.grandTotal = action.payload
        },

        addOrderId: (state, action) => {
            state.order_id = action.payload.order_id
            state.branch_id = action.payload.branch_id
            state.table = action.payload.table_id
        },

        emptyCart: (state) => {
            return initialState;
        }
    }
});

export const { addProduct, incrementProduct, decrementProduct, emptyCart, addCookingInstruction, addOrderId, addTotalAmount, addPaymentMethod, addTableAndBranch, addonDecrement, addonIncrement, addCustomerDetail } = cartReducer.actions;

export const selectTotalPrice = state => {
    const productPrice = state.cart.products.reduce((total, product) => total + (product.price * product.quantity), 0);
    const addonExtrasPrice = state.cart.products.map((product) => {
        return product?.addonExtras.reduce((total, product) => total + (product.price * product.quantity), 0)
    })
    return parseFloat(productPrice) + parseFloat(addonExtrasPrice[0])
};

export const selectTotalItemCount = state => {
    return state.cart.products.reduce((total, product) => total + product.quantity, 0);
};

export default cartReducer.reducer;
