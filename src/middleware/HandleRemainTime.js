const cron = require('node-cron');
const { Op } = require('sequelize');
const Order = require('../app/models/Order');

cron.schedule('0 0 * * *', async () => { // '0 0 * * *' means everyday at 00:00
  try {
    const now = new Date();
    // Find all orders that its days > 0
    const orders = await Order.findAll({
      where: {
        days: {
          [Op.gt]: 0
        }
      }
    });
    for (let order of orders) {
      //Decrease 1 day if days > 0
      let newDays = order.days - 1;
      if (newDays < 0) newDays = 0;
      // Update orders with new days value
      await order.update({ days: newDays});
    }
    console.log('Cron job executed successfully. Days updated for all orders.');
  } catch (error) {
    console.error('Error executing cron job:', error);
  }
});
