const foods = [
  {
    id: 1000,
    name: '백반',
    description: '',
    category: '한식',
    image: 'https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F24309A3E54F8FB300A',
    dishes: [],
  },
  {
    id: 1001,
    name: '김치찌개',
    description: '',
    category: '한식',
    image: 'https://image.auction.co.kr/itemimage/1b/f3/94/1bf39477a6.jpg',
    dishes: [],
  },
  {
    id: 1002,
    name: '된장찌개',
    description: '',
    category: '한식',
    image: 'https://lh3.googleusercontent.com/proxy/g4_lNK5DNVBVNjvNasE7EZUbX3DGFWEvAjOBSgnGE56bNt3KSOuSYF9Ki9p5Cj0KPZAYIWwhBgorO-62T13m9rDJOTnNpImCr7VwKumrMp_4Q5kY4IJxnLYS5VeKLehLqLId_bO1bM_sLfD8JWs',
    dishes: [],
  },
  {
    id: 1003,
    name: '뚝배기불고기',
    description: '',
    category: '한식',
    image: 'https://cdn.shopify.com/s/files/1/0367/0533/7388/products/image_eb3398ab-499e-4bff-a2f7-fe5ad4ff302a_2400x.jpg?v=1585294977',
    dishes: [],
  },
  {
    id: 1004,
    name: '해장국',
    description: '',
    category: '한식',
    image: '',
    dishes: [],
  },
  {
    id: 1005,
    name: '순대국',
    description: '',
    category: '한식',
    image: '',
    dishes: [],
  },
  {
    id: 1006,
    name: '설렁탕',
    description: '',
    category: '한식',
    image: '',
    dishes: [],
  },
  {
    id: 1007,
    name: '순두부찌개',
    description: '',
    category: '한식',
    image: '',
    dishes: [],
  },
  {
    id: 1008,
    name: '부대찌개',
    description: '',
    category: '한식',
    image: '',
    dishes: [],
  },
  {
    id: 1009,
    name: '삼계탕',
    description: '',
    category: '한식',
    image: '',
    dishes: [],
  },
  {
    id: 1010,
    name: '감자탕',
    description: '',
    category: '한식',
    image: '',
    dishes: [],
  },
  {
    id: 1011,
    name: '추어탕',
    description: '',
    category: '한식',
    image: '',
    dishes: [],
  },
  {
    id: 1012,
    name: '제육볶음',
    description: '',
    category: '한식',
    image: '',
    dishes: [],
  },
  {
    id: 1013,
    name: '보쌈정식',
    description: '',
    category: '한식',
    image: '',
    dishes: [],
  },
  {
    id: 1014,
    name: '낚지볶음',
    description: '',
    category: '한식',
    image: '',
    dishes: [],
  },
  {
    id: 1015,
    name: '수제비',
    description: '',
    category: '한식',
    image: '',
    dishes: [],
  },
  {
    id: 1016,
    name: '전',
    description: '',
    category: '한식',
    image: '',
    dishes: [],
  },
  {
    id: 1017,
    name: '전',
    description: '',
    category: '한식',
    image: '',
    dishes: [],
  },
  {
    id: 1018,
    name: '닭갈비',
    description: '',
    category: '한식',
    image: '',
    dishes: [],
  },
  {
    id: 1019,
    name: '육개장',
    description: '',
    category: '한식',
    image: '',
    dishes: [],
  },
  {
    id: 1020,
    name: '김치볶음밥',
    description: '',
    category: '한식',
    image: '',
    dishes: [],
  },
  {
    id: 1021,
    name: '짜장면',
    description: '',
    category: '중식',
    image: '',
    dishes: [],
  },
  {
    id: 1022,
    name: '짬뽕',
    description: '',
    category: '중식',
    image: '',
    dishes: [],
  },
  {
    id: 1023,
    name: '잡채밥',
    description: '',
    category: '중식',
    image: '',
    dishes: [],
  },
  {
    id: 1024,
    name: '새우볶음밥',
    description: '',
    category: '중식',
    image: '',
    dishes: [],
  },
  {
    id: 1025,
    name: '게살볶음밥',
    description: '',
    category: '중식',
    image: '',
    dishes: [],
  },
  {
    id: 1026,
    name: '유산슬밥',
    description: '',
    category: '중식',
    image: '',
    dishes: [],
  },
  {
    id: 1027,
    name: '마파두부밥',
    description: '',
    category: '중식',
    image: '',
    dishes: [],
  },
  {
    id: 1028,
    name: '송이밥',
    description: '',
    category: '중식',
    image: '',
    dishes: [],
  },
  {
    id: 1029,
    name: '탕수육',
    description: '',
    category: '중식',
    image: '',
    dishes: [],
  },
  {
    id: 1030,
    name: '깐풍기',
    description: '',
    category: '중식',
    image: '',
    dishes: [],
  },
  {
    id: 1031,
    name: '파스타',
    description: '',
    category: '양식',
    image: 'https://image.freepik.com/free-photo/_1220-5179.jpg',
    dishes: [],
  },
  {
    id: 1032,
    name: '화덕피자',
    description: '',
    category: '양식',
    image: 'https://lh3.googleusercontent.com/proxy/AFgi7vlryg5-l93b4rrnFLwm7VyOezux05c_bxCGq06_PoWTaZb6N9hDSHv2S7hXzJCEsf8IkMhFQmOk5Nt773jL_qJZYJCJGkK9pPty3Tc',
    dishes: [],
  },
  {
    id: 1033,
    name: '리조또',
    description: '',
    category: '양식',
    image: 'https://image.freepik.com/free-photo/risotto-with-mushrooms-on-a-black-plate_78677-7445.jpg',
    dishes: [],
  },
  {
    id: 1034,
    name: '샐러드',
    description: '',
    category: '양식',
    image: 'https://image.freepik.com/free-photo/salad-rocket-with-fresh-strawberries-and-ricotta-cheese_114941-229.jpg',
    dishes: [],
  },
  {
    id: 1035,
    name: '필라프',
    description: '',
    category: '양식',
    image: 'https://image.freepik.com/free-photo/_89816-12470.jpg',
    dishes: [],
  },
  {
    id: 1036,
    name: '빠에야',
    description: '',
    category: '양식',
    image: 'https://image.freepik.com/free-photo/traditional-spanish-paella-with-seafood_124437-953.jpg',
    dishes: [],
  },
  {
    id: 1037,
    name: '감바스',
    description: '',
    category: '양식',
    image: 'https://funshop.akamaized.net/products/0000074638/vs_image800.jpg',
    dishes: [],
  },
  {
    id: 1038,
    name: '똠얌꿍',
    description: '',
    category: '태국식',
    image: 'https://t1.daumcdn.net/cfile/blog/99FC5F4A5AA6704F15',
    dishes: [],
  },
  {
    id: 1039,
    name: '팟타이',
    description: '',
    category: '태국식',
    image: 'https://media.istockphoto.com/photos/pad-thai-stirfried-rice-noodles-with-shrimp-picture-id672007896?k=6&m=672007896&s=170667a&w=0&h=f1IRhzZN_5ZJPpdrcqd9hjfcnw5IHO4RFTAapVJRAPI=',
    dishes: [],
  },
  {
    id: 1040,
    name: '카오팟',
    description: '',
    category: '태국식',
    image: 'https://image.freepik.com/free-photo/fried-rice-with-shrimp_42942-623.jpg',
    dishes: [],
  },
  {
    id: 1041,
    name: '팟크라파오무',
    description: '',
    category: '태국식',
    image: 'https://th1.tmon.kr/thumbs/image/46e/1b3/a9d/827cd1532_700x700_95_FIT.jpg',
    dishes: [],
  },
  {
    id: 1042,
    name: '깽케우완카이',
    description: '',
    category: '태국식',
    image: 'https://a.cdn-hotels.com/gdcs/production82/d1450/4ac81c9d-082d-4159-8d7b-bac058b57ae7.jpg',
    dishes: [],
  },
  {
    id: 1043,
    name: '쌀국수 포(Pho)',
    description: '베트남의 대표 음식으로 담백하고 든든해서 한끼 식사로 손색이 없다.',
    category: '베트남식',
    image: 'https://www.fusioncraftiness.com/wp-content/uploads/2018/03/HeroPho2-720x720.jpg',
    dishes: [],
  },
  {
    id: 1044,
    name: '월남쌈(고이꾸온)',
    description: '라이스페이퍼에 각종 채소를 넣어 다양한 소스에 찍어먹자. 보기에도 좋고 맛도 좋다.',
    category: '베트남식',
    image: 'https://image.freepik.com/free-photo/shrimp-rice-paper-rolls-with-peanut-sauce_165536-9480.jpg',
    dishes: [],
  },
  {
    id: 1045,
    name: '분짜',
    description: '쌀국수의 한 종류로 쌀국수면에 숯불에 구운 돼지고기와 야채를 기호대로 넣어서 함께 먹는 음식이다.',
    category: '베트남식',
    image: 'https://live.staticflickr.com/800/41389636921_4aff5b9db8_b.jpg',
    dishes: [],
  },
  {
    id: 1046,
    name: '퍼 가(닭국수)',
    description: '쌀국수의 한 종류로 닭고기 국물에 말아낸 쌀국수로 토핑된 닭의 쫄깃한 식감을 느낄 수 있다.',
    category: '베트남식',
    image: 'https://image.freepik.com/free-photo/_1205-7361.jpg',
    dishes: [],
  },
  {
    id: 1047,
    name: '껌승(돼지갈비덮밥)',
    description: '돼지갈비를 얹은 덮밥으로 한국인의 입맛에 아주 잘 맞는 베트남 음식이다.',
    category: '베트남식',
    image: 'https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile6.uf.tistory.com%2Fimage%2F996CF23F5CD2298E104099',
    dishes: [],
  },
  {
    id: 1048,
    name: '햄버거',
    description: '',
    category: '패스트푸드',
    image: 'https://img.freepik.com/free-photo/cutboard_23-2148273000.jpg?size=626&ext=jpg&ga=GA1.2.1095944680.1594425600',
    dishes: [],
  },
  {
    id: 1049,
    name: '샌드위치',
    description: '',
    category: '패스트푸드',
    image: 'https://image.freepik.com/free-photo/club-sandwich-with-meat-ham-lettuce-cheese-sandwiches-toasted-bread-snack-or-lunch-food_4740-3063.jpg',
    dishes: [],
  },
  {
    id: 1050,
    name: '편의점도시락',
    description: '',
    category: '패스트푸드',
    image: 'https://img.insight.co.kr/static/2020/02/03/700/4lp8u98ww712yy0l5c4u.jpg',
    dishes: [],
  },
  {
    id: 1051,
    name: '김밥',
    description: '',
    category: '분식',
    image: 'https://dimg.donga.com/ugc/CDB/WOMAN/Article/5e/dd/c1/1a/5eddc11a003fd2738de6.jpg',
    dishes: [],
  },
  {
    id: 1052,
    name: '라면',
    description: '',
    category: '분식',
    image: 'https://lh3.googleusercontent.com/proxy/yq0eNK8s2KNxJj12Gq8P7GKCJkR3raSSjuAJ7BiEJsCX_DrH6NSm6dDD_sU2uFsObvCCfRB1OgHKGRbLCX_VJb-E7v9ZwZnDl1QDCNdFV09yZY5LhLiPWD5cWabO0jYAQleo8uq8PjfUHX4YKiesQnkjoRmD6-RC9VkdXF-r3L6DMfRJyak65oWpdhjCWlW3qYrjysbX6uJuNnkjITD4L4g6gJgW8uUphw',
    dishes: [],
  },
  {
    id: 1053,
    name: '우동',
    description: '',
    category: '분식',
    image: 'https://www.noodlelovers.com/upload_data/m_product_recipe_set/%EC%8D%B8%EB%84%A4%EC%9D%BC_1.JPG',
    dishes: [],
  },
  {
    id: 1054,
    name: '쫄면',
    description: '',
    category: '분식',
    image: 'https://lh3.googleusercontent.com/proxy/8hRBibri2FFvHsBPNvFltGOKeR_eKjAUmW2evQ2TaKx2OCvib2gj3rrxqy93Dz7UGyoV2iEN7l5BXgve3GwMxBzUN2rzWpYc0yKx2RJoVWHij31iFeiMFiIeWVIeJxWotMJravJCYae5wKjsrQhkkpX-kdpkoDlNMvVDiNUWqULr2juLQ6F6nWCP9XNB23ciQC6A98CfrfQAsA_WPLTjvX7BS2nkSoEYfA',
    dishes: [],
  },
  {
    id: 1055,
    name: '떡볶이',
    description: '',
    category: '분식',
    image: 'https://media.istockphoto.com/photos/spicy-rice-cakes-picture-id1152570620?k=6&m=1152570620&s=612x612&w=0&h=cw_3cPUysYYTteUa-EmTaGePtA0OmUNKX5KqEseu91s=',
    dishes: [],
  },
  {
    id: 1056,
    name: '순대',
    description: '',
    category: '분식',
    image: 'https://image.g9.co.kr/g/1366279016/n?ts=1572419221000',
    dishes: [],
  },
];

export default foods;
