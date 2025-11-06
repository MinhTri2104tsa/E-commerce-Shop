const Product = require("../models/ProductModel");
 
const createProduct = (newProduct) => {
  return new Promise(async (resolve, reject) => {
    const { name, image, type, countInStock, price, rating, description } =newProduct;

    try {
      const checkProduct = await Product.findOne({
        name: name,
      });
      if (checkProduct !== null) {
        return resolve({
          status: "OK",
          message: "The name of product is already",
        });
      }
      const createProduct = await Product.create({
        name,
        image,
        type,
        countInStock,
        price,
        rating,
        description,
      });
      if (createProduct) {
        resolve({
          status: "OK",
          message: "SUCCESS",
          data: createProduct,
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};

const updateProduct = (id,data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const checkProduct = await Product.findOne({
        _id: id
      })
      if (checkProduct == null) {
        return resolve({
          status: "OK",
          message: "The product is not define",
        });
      }
      const updateProduct = await Product.findByIdAndUpdate(id,data, {new: true})
      return resolve({
        status: "OK",
        message: "SUCCESS",
        data: updateProduct
      });
    } catch (e) {
      reject(e);
    }
  });
};

const deleteProduct = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const checkProduct = await Product.findOne({
        _id: id
      })
      if(checkProduct === null){
        return resolve({
          status: 'OK',
          message: 'The product is not defined'
        })
      }
      await Product.findByIdAndDelete(id)
      return resolve({
        status: "OK",
        message: "Delete product success",
      });
    } catch (e) {
      reject(e);
    }
  });
};

const getAllProduct = (limit, page, sort,filter) => {
  return new Promise(async (resolve, reject) => {
    try {
      // Normalize and build filter object
      let queryFilter = {};
      if (filter) {
        // allow filter as JSON string, array [field, value], or "field:value"
        if (typeof filter === 'string') {
          try {
            const parsed = JSON.parse(filter);
            filter = parsed;
          } catch (e) {
            // not JSON, leave as string
          }
        }
        if (Array.isArray(filter) && filter.length >= 2) {
          queryFilter[filter[0]] = { $regex: filter[1] };
        } else if (typeof filter === 'object' && filter !== null) {
          queryFilter = { ...filter };
        } else if (typeof filter === 'string' && filter.includes(':')) {
          const parts = filter.split(':');
          queryFilter[parts[0]] = { $regex: parts[1] };
        }
      }

      // Compute total with filter applied
      const totalProduct = await Product.countDocuments(queryFilter);

      // Build sort object safely from various formats
      let sortObj = null;
      if (sort) {
        if (typeof sort === 'string') {
          try {
            const parsed = JSON.parse(sort);
            sort = parsed;
          } catch (e) {
            // try field:direction format
            if (sort.includes(':')) {
              const parts = sort.split(':');
              let dir = parts[1];
              if (dir === 'asc') dir = 1;
              else if (dir === 'desc') dir = -1;
              else dir = Number(dir) || dir;
              sortObj = { [parts[0]]: dir };
            } else {
              // treat string as field name, default ascending
              sortObj = { [sort]: 1 };
            }
          }
        }

        if (!sortObj) {
          if (Array.isArray(sort) && sort.length >= 2) {
            sortObj = { [sort[1]]: sort[0] };
          } else if (typeof sort === 'object' && sort !== null) {
            // if object has a single key, use it; otherwise try field/order shape
            const keys = Object.keys(sort);
            if (keys.length === 1) {
              sortObj = sort;
            } else if (keys.includes('field') && keys.includes('order')) {
              sortObj = { [sort.field]: sort.order };
            }
          }
        }
      }

      // Build the mongoose query with pagination and optional sort
      let query = Product.find(queryFilter).limit(limit).skip(page * limit);
      if (sortObj) query = query.sort(sortObj);

      const allProduct = await query;
      return resolve({
        status: "OK",
        message: "success",
        data: allProduct,
        total: totalProduct,
        pageCurrent: Number(page + 1),
        totalPage: Math.ceil(totalProduct / limit),
      });
    } catch (e) {
      reject(e);
    }
  });
};

const getDetailsProduct = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const product = await Product.findOne({
        _id: id
      })
      if(product === null){
        resolve({
          status: 'OK',
          message: 'The product is not defined'
        })
      }
      resolve({
        status: "OK",
        message: "success",
        data: product
      });
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  createProduct,
  updateProduct,
  getDetailsProduct,
  deleteProduct,
  getAllProduct
};
