const Product = require('../../features/product/product.model');
const utils = require('../../common/util');

const mockProducts = [
    {
      name: 'Tai nghe True Wireless Sony WF-C500',
      price: '1798.60',
      discount: 10,
      available: true,
      imgUrl:
        'https://tainghe.com.vn/media/product/250_4174_tai_nghe_true_wireless_sony_wf_c500_chinh_hang_gia_re_3.jpg',
    },
    {
      name: 'Tai nghe Campfire Ara',
      price: '899.80',
      discount: 0,
      available: false,
      imgUrl: 'https://tainghe.com.vn/media/product/250_2984_ara_1_ws.jpg',
    },
    {
      name: 'Tai nghe Campfire Andromeda 2020',
      price: '1620.10',
      discount: 16,
      available: true,
      imgUrl:
        'https://tainghe.com.vn/media/product/250_2982_andromeda_2020_01_webpage_image_1400x1400.jpg',
    },
    {
      name: 'Tai nghe không dây Apple Airpods Pro 2 (2022)',
      price: '399.00',
      discount: 15,
      available: false,
      imgUrl:
        'https://tainghe.com.vn/media/product/250_3529_tai_nghe_apple_airpod_pro_2_xuan_vu_4.jpg',
    },
    {
      name: 'Tai nghe Sennheiser Momentum True Wireless 3',
      price: '2100.00',
      discount: 5,
      available: false,
      imgUrl:
        'https://tainghe.com.vn/media/product/250_3660_tai_nghe_sennheiser_momentum_true_wireless_3_xuan_vu_chinh_hang.jpg',
    },
    {
      name: '64 Audio A12t',
      price: '1450.00',
      discount: 6,
      available: true,
      imgUrl:
        'https://tainghe.com.vn/media/product/250_1828-1964ears-1528325169-a12t_landing_page_lros.jpg',
    },
    {
      name: 'Tai nghe Blon BL03 có Mic',
      price: '1299.20',
      discount: 7,
      available: true,
      imgUrl: 'https://tainghe.com.vn/media/product/250_2679_1.JPG',
    },
    {
      name: '64 Audio A4t Custom IEM',
      price: '1499.00',
      discount: 9,
      available: true,
      imgUrl:
        'https://tainghe.com.vn/media/product/250_1837-1964ears-1528351296-a4t.jpg',
    },
  ];

let index = 0;

const fakeProducts = async function() {
    // await Product.deleteMany({});
    mockProducts.forEach(async (item, index) => {
        const dbProduct = await Product.find({name: item.name});
        const productModel = {
          id: index++,
          ...item
        };

        if (!dbProduct || utils.isObjectEmpty(dbProduct)) {
            Product.create(productModel, (err, product) => {
                if (err) {
                    console.log(`Alan - insert initial data failed: ${err}`);
                }
            });
        }
    });
};

module.exports = fakeProducts;
