import express from 'express';
import userCtrl from './controllers/Users.controller.js';
import listingCtrl from './controllers/Listings.controller.js';
import categoryCtrl from './controllers/Categories.controller.js';
import verifyCtrl from './controllers/Verification.controller.js';
import serviceCtrl from './controllers/Service.controller.js';
import chatCtrl from './controllers/Chat.controller.js';
import auctionCtrl from './controllers/Auction.controller.js';
import wantedCtrl from './controllers/Wanted.controller.js';
import notifyCtrl from './controllers/Notification.controller.js';
import paymentCtrl from './controllers/Payment.controller.js';
import auth from "../src/auth/middleware";

/*
	File cointaining all routes to the controllers of the platform
*/

var router = express.Router();

router.post('/login', userCtrl.login);
router.post('/signup', userCtrl.register);
router.get('/authenticate', auth.authorization, userCtrl.authenticate);

router.get('/users/:UserId/listings/:ListingId', auth.authorization, userCtrl.getSomeListingsExceptOne);
router.get('/users/:UserId/listings/', auth.authorization, userCtrl.getAllListings);
router.get('/users/:UserId', auth.authorization, userCtrl.profile);
router.get('/users', auth.authorization, userCtrl.list);
router.get('/users/search/some', auth.authorization, userCtrl.getSearchItems);
router.post('/users/:UserId/profile', auth.authorization, userCtrl.updateProfile);
router.post('/users/:UserId/profile/avatar', auth.authorization, userCtrl.updateAvatar);

router.get('/users/:UserId/followings/some', auth.authorization, userCtrl.getSomeFollowings);
router.get('/users/:UserId/followers/some', auth.authorization, userCtrl.getSomeFollowers);
router.get('/users/:UserId/change-follow-status', auth.authorization, userCtrl.changeFollowStatus);
router.get('/users/:UserId/followings/all', auth.authorization, userCtrl.getAllFollowings);
router.get('/users/:UserId/followers/all', auth.authorization, userCtrl.getAllFollowers);

router.get('/listings/properties', auth.authorization, listingCtrl.listingProperties);
router.get('/listings/:ListingId', auth.authorization, listingCtrl.getDetails);
router.post('/listings', auth.authorization, listingCtrl.addListing);
router.post('/listings/getListings', auth.authorization, listingCtrl.getListings);
router.post('/listings/:ListingId', auth.authorization, listingCtrl.updateListing);
router.get('/listings/search/all', auth.authorization, listingCtrl.getAllSearchResult);
router.get('/listings/search/some', auth.authorization, listingCtrl.getSearchResult);

router.get('/categories/:CategoryId/listings/:ListingId', auth.authorization, categoryCtrl.getSomeListingsExceptOne);
router.get('/categories/:CategoryId/listings', auth.authorization, categoryCtrl.getAllListings);

router.get('/currencies', listingCtrl.getAllCurrencies);
router.get('/units', listingCtrl.getAllUnits);

router.get('/send-verification-mail/:UserId', verifyCtrl.sendVerificationMail);

router.get('/confirm-account/:token', verifyCtrl.verifyEmail);
router.post('/forgot-password', verifyCtrl.forgotPassword);
router.post('/reset-password', verifyCtrl.resetPassword);

router.get('/businesstypes', serviceCtrl.getBusinessTypes);

router.post('/auction/:ListingId', auth.authorization, auctionCtrl.bid);
router.get('/auction/:ListingId/info', auth.authorization, auctionCtrl.getListingInfo);

router.post('/wishlist/:ListingId', auth.authorization, listingCtrl.wishlist);
router.get('/wishlist', auth.authorization, userCtrl.wishlist);

router.get('/myorders', auth.authorization, userCtrl.getMyOrders);

router.get('/wanted/:wantedId/delete', auth.authorization, wantedCtrl.deleteWanted);
router.get('/wanted', auth.authorization, wantedCtrl.getAll);
router.get('/wanted/:wantedId', auth.authorization, wantedCtrl.getDetail);
router.post('/wanted/:wantedId', auth.authorization, wantedCtrl.updateWanted);
router.post('/wanted', auth.authorization, wantedCtrl.addWanted);
router.get('/wanted-properties/', wantedCtrl.getProperties);

router.post('/preregister/users/:UserId/wanted', wantedCtrl.preregister);

router.get('/countries', serviceCtrl.getCountries);

/**
 *  chat route
 */

router.get('/getContactList', auth.authorization, chatCtrl.getContactList);
router.post('/getMessages', auth.authorization, chatCtrl.getMessages);
router.post('/addContact', auth.authorization, chatCtrl.addContact);
router.get('/getUnreadMessages', auth.authorization, chatCtrl.getUnreadMessages);

/**
 *  notifications route
 */

router.get('/notifications/:id/mark-read', auth.authorization, notifyCtrl.markAsRead);
router.delete('/notifications/:id', auth.authorization, notifyCtrl.deleteNotification);
router.get('/notifications/some', auth.authorization, notifyCtrl.getSomeNotifications);
router.get('/notifications/all', auth.authorization, notifyCtrl.getAllNotifications);

/**
 *  payment 
 */

router.get('/getPaymentSettings', auth.authorization, paymentCtrl.getSettings);
router.get('/getPaymentMethods', auth.authorization, paymentCtrl.getPaymentMethods);

router.post('/addACHTransfer', auth.authorization, paymentCtrl.addACHTransfer);
router.post('/addCard', auth.authorization, paymentCtrl.addCard);
router.post('/addSEPA', auth.authorization, paymentCtrl.addSEPA);

router.post("/create-setup-intent", auth.authorization, paymentCtrl.createSetupIntent);
router.post("/create-sepa-setup-intent", auth.authorization, paymentCtrl.createSEPASetupIntent);
router.post("/confirm-card-order", auth.authorization, paymentCtrl.confirmCardOrder);

router.post("/order", auth.authorization, paymentCtrl.order);

module.exports = router;