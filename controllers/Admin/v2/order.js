const {
  parsePaginationFromRequest,
  toOffsetBasedPagination,
  toPageCount,
} = require("../../../helpers/paginate");
const { parseSortFromRequest } = require("../../../helpers/sort");

const { Order, User, Car } = require("../../../models");

class OrderV2 {
  static async getOrders(req, res) {
    try {
      const sort = parseSortFromRequest(req);
      const { page, pageSize } = parsePaginationFromRequest(req);
      const { limit, offset } = toOffsetBasedPagination({ page, pageSize });
      const queryArgs = {
        limit,
        offset,
      };

      if (!!sort) {
        queryArgs.order = [sort.column, sort.direction];
      }

      const orders = await Order.findAll(queryArgs, {
        include: [
          {
            model: User,
            attributes: {
              exclude: ["id", "password", "createdAt", "updatedAt"],
            },
          },
          {
            model: Car,
            attributes: {
              exclude: ["id", "createdAt", "updatedAt"],
            },
          },
        ],
      });

      const count = await Order.count();

      const pageCount = toPageCount({ pageSize, count });

      res.status(200).json({
        page,
        pageSize,
        pageCount,
        count,
        orders,
      });
    } catch (err) {
      res.status(500).json({
        name: "Internal server error",
        message: err.message,
      });
    }
  }
}

module.exports = OrderV2;
