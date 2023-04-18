/* Documentation sample */
function loadPage(page) {
  var img = $("<img />");
  img.load(function () {
    var container = $(".sample-docs .p" + page);
    img.css({ width: container.width(), height: container.height() });
    img.appendTo($(".sample-docs .p" + page));
    container.find(".loader").remove();
  });

  img.attr("src", "../assets/pages/" + (page - 2) + ".jpg");
}

function addPage(page, book) {
  var id,
    pages = book.turn("pages");

  var element = $("<div />", {});

  if (book.turn("addPage", element, page)) {
    if (page < 102) {
      element.html('<div class="gradient"></div><div class="loader"></div>');
      loadPage(page);
    }
  }
}

function updateTabs() {
  var tabs = {
      1: "01 ",
      6: "05 ",
      18: "17 ",
      20: "19 ",
      22: "21 ",
      26: "25 ",
      28: "27 ",
      30: "29 ",
      50: "49 ",
      51: "50 ",
      52: "51 ",
      55: "54 ",
      62: "61 ",
      83: "82 ",
      85: "84 ",
      88: "87 ",
    },
    left = [],
    right = [],
    book = $(".sample-docs"),
    actualPage = book.turn("page"),
    view = book.turn("view");

  for (var page in tabs) {
    var isHere = $.inArray(parseInt(page, 102), view) != -1;

    if (page > actualPage && !isHere)
      right.push('<a href="#page/' + page + '">' + tabs[page] + "</a>");
    else if (isHere) {
      if (page % 2 === 0)
        left.push(
          '<a href="#page/' + page + '" class="on">' + tabs[page] + "</a>"
        );
      else
        right.push(
          '<a href="#page/' + page + '" class="on">' + tabs[page] + "</a>"
        );
    } else left.push('<a href="#page/' + page + '">' + tabs[page] + "</a>");
  }

  $(".sample-docs .tabs .left").html(left.join(" "));
  $(".sample-docs .tabs .right").html(right.join(" "));
}

function numberOfViews(book) {
  return book.turn("pages") / 2 + 1;
}

function getViewNumber(book, page) {
  return parseInt((page || book.turn("page")) / 2 + 1, 10);
}

function moveBar(yes) {
  if (Modernizr && Modernizr.csstransforms) {
    $("#slider .ui-slider-handle").css({ zIndex: yes ? -1 : 10000 });
  }
}

function setPreview(view) {
  var previewWidth = 115,
    previewHeight = 73,
    previewSrc = "pics/preview.jpg",
    preview = $(_thumbPreview.children(":first")),
    numPages =
      view == 1 || view == $("#slider").slider("option", "max") ? 1 : 2,
    width = numPages == 1 ? previewWidth / 2 : previewWidth;

  _thumbPreview.addClass("no-transition").css({
    width: width + 15,
    height: previewHeight + 15,
    top: -previewHeight - 30,
    left: ($($("#slider").children(":first")).width() - width - 15) / 2,
  });

  preview.css({
    width: width,
    height: previewHeight,
  });

  if (
    preview.css("background-image") === "" ||
    preview.css("background-image") == "none"
  ) {
    preview.css({ backgroundImage: "url(" + previewSrc + ")" });

    setTimeout(function () {
      _thumbPreview.removeClass("no-transition");
    }, 0);
  }

  preview.css({
    backgroundPosition: "0px -" + (view - 1) * previewHeight + "px",
  });
}
function zoomTo(event) {
  setTimeout(function () {
    if ($("#main").data().regionClicked) {
      $("#main").data().regionClicked = false;
    } else {
      if ($("#main").zoom("value") == 1) {
        $("#main").zoom("zoomIn", event);
      } else {
        $("#main").zoom("zoomOut");
      }
    }
  }, 1);
}
