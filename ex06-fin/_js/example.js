var handleClick;

function initProductShow() {
  // where the product images are stored
  var productsImgFolder = '_prod_img/';

  // the details of each product image
  var productsArray = [
    {
      img: (new Image()),
      file: 'p01-glue.jpg',
      caption: 'ACME Super Fast Glue'
    },
    {
      img: (new Image()),
      file: 'p02-wheeled-rocket.jpg',
      caption: 'ACME Wheeled Rocket'
    },
    {
      img: (new Image()),
      file: 'p03-rocket-sled.jpg',
      caption: 'ACME Rocket Sled'
    },
    {
      img: (new Image()),
      file: 'p04-earthquake-pills.jpg',
      caption: 'ACME Earthquake Pills'
    },
    {
      img: (new Image()),
      file: 'p05-speed-tonic.jpg',
      caption: 'ACME Speed Tonic'
    },
    {
      img: (new Image()),
      file: 'p06-dehydrated-boulders.jpg',
      caption: 'ACME Dehydrated Boulders'
    },
    {
      img: (new Image()),
      file: 'p07-wrong-site.png',
      caption: 'Dude! This is not my \'toon!<br />I\'m on the wrong @#$%&* site!'
    }
  ];

  // for each product image, set the src correctly
  productsArray.forEach(function(obj) {
    obj.img.src = productsImgFolder + obj.file;
  });

  // find the image and caption in the HTML DOM
  var productsShowImg = document.getElementById('productsShowImg');
  var productsShowCaption = document.getElementById('productsShowCaption');

  // start with product "0"...
  var currentDisplayIndex = -1;

  // when user clicks, increment product number (with wraparound)...
  var clickHandler = function() {
    currentDisplayIndex++;
    if (currentDisplayIndex === productsArray.length) {
      currentDisplayIndex = 0;
    }
    productsShowImg.src = productsArray[currentDisplayIndex].img.src;
    productsShowCaption.innerHTML = productsArray[currentDisplayIndex].caption;
  }

  return clickHandler;
}