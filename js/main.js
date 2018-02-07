var methods = {
  scroll: function (itemid) {
    document.querySelector('#' + itemid).scrollIntoView({
      behavior: 'smooth'
    });
  }
};
