export const addOrder = async (order) => window._firebase_helpers.addOrder(order);
export const sendChatMessage = async (userId, message) => window._firebase_helpers.sendChatMessage(userId, message);
export const uploadImageAndGetUrl = async (file) => window._firebase_helpers.uploadImageAndGetUrl(file);
export const listenOrders = (onUpdate) => window._firebase_helpers.listenOrders(onUpdate);
export const listenUserChatsList = (onUpdate) => window._firebase_helpers.listenUserChatsList(onUpdate);
export const listenChatMessages = (userId, onUpdate) => window._firebase_helpers.listenChatMessages(userId, onUpdate);
