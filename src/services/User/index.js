import { getAll, getSearchItems } from "./User.service.search.js";
import {
  emailVerification,
  forgotPassword
} from "./User.service.verification.js";
import {
  getSomeFollowings,
  getSomeFollowers,
  getAllFollowings,
  getAllFollowers,
  updateProfile,
  getWishlistByUserId,
  getMyOrders
} from "./User.service.profile.js";

module.exports = {
  getAll,
  getSearchItems,
  emailVerification,
  forgotPassword,
  getSomeFollowings,
  getSomeFollowers,
  getAllFollowings,
  getAllFollowers,
  updateProfile,
  getWishlistByUserId,
  getMyOrders
};
