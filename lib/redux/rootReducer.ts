/* Instruments */

import { categorySlice, productSlice } from "./slices";
import { userSlice } from "./slices/userSlice/userSlice";

export const reducer = {
  user: userSlice.reducer,
  porduct:productSlice.reducer,
  category:categorySlice.reducer

};
