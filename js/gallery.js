$(document).ready(function() {
  $('.card').on('mouseenter', function() {
         $('.overlay',this).addClass('open');
      });

  $('.card').on('mouseleave', function() {
         $('.overlay',this).removeClass('open');
      });
  
  $('.card').on('click', function(event) {
        var text = $(event.target).attr('id');
        $('body').addClass('no-scroll');
        $('.body-overlay').addClass('show');
        if (text === "ny") {
            
           $('.body-overlay #image').attr('src','./img/ny.jpg');
           $('.body-overlay #caption').text("New York");
        }
        else if (text === "chicago") {
            $('.body-overlay #image').attr('src','./img/chicago.jpg');
            $('.body-overlay #caption').text("Chicago");
        }
        else if (text === "la") {
            $('.body-overlay #image').attr('src','./img/la.jpg');
            $('.body-overlay #caption').text("Los Angeles");
        }
        else if (text === "seattle") {
            $('.body-overlay #image').attr('src','./img/seattle.jpg');
            $('.body-overlay #caption').text("Seattle");
        }
        else if (text === "london") {
            $('.body-overlay #image').attr('src','./img/london.jpg');
            $('.body-overlay #caption').text("London");
        }
        else if (text === "paris") {
            $('.body-overlay #image').attr('src','./img/paris.jpg');
            $('.body-overlay #caption').text("Paris");
        }
     });

  $('#close').on('click', function() {
      $('.body-overlay').removeClass('show');
      $('.body-overlay #image').attr('src','');
      $('body').removeClass('no-scroll');
   });


   $('.inp').on('focus', function() {
        $('.inp').addClass('index');
        $('.search-overlay').addClass('reveal');
        $('.custom-btn').addClass('index');
    });

    $('#cross').on('click', function() {
        $('.search-overlay').removeClass('reveal');
        $('.custom-btn').removeClass('index');
        $('.inp').removeClass('index');
        $('.search-overlay #search-result').attr('src','');
        $('.inp').val('');
        keyword = "";
        $('.search-overlay #error').text("");
     });

     $('.inp').keyup(function() {
         console.log(this.value);
         keyword = this.value;
         $('.custom-btn').click(function() {
            if (keyword === "New York" || keyword === "new york" || keyword === "New york" || keyword === "new York" || keyword === "NEW YORK" || keyword === "NY" || keyword === "ny") {
                $('.search-overlay #error').text("");
                $('.search-overlay #search-result').attr('src','./img/ny.jpg');
            }
            else if (keyword === "Chicago" || keyword === "chicago" || keyword === "CHICAGO") {
                $('.search-overlay #error').text("");
                $('.search-overlay #search-result').attr('src','./img/chicago.jpg');
            }
            else if (keyword === "Seattle" || keyword === "seattle" || keyword === "SEATTLE") {
                $('.search-overlay #error').text("");
                $('.search-overlay #search-result').attr('src','./img/seattle.jpg');
            }
            else if (keyword === "Los Angeles" || keyword === "los angeles" || keyword === "Los angeles" || keyword === "los Angeles" || keyword === "LOS ANGELES" || keyword === "la" || keyword === "LA") {
                $('.search-overlay #error').text("");
                $('.search-overlay #search-result').attr('src','./img/la.jpg');
            }
            else if (keyword === "London" || keyword === "london" || keyword === "LONDON") {
                $('.search-overlay #error').text("");
                $('.search-overlay #search-result').attr('src','./img/london.jpg');
            }
            else if (keyword === "Paris" || keyword === "paris" || keyword === "PARIS") {
                $('.search-overlay #error').text("");
                $('.search-overlay #search-result').attr('src','./img/paris.jpg');
            }
            else {
                $('.search-overlay #search-result').attr('src','');
                $('.inp').val('');
                keyword = "";
                $('.search-overlay #error').text("Not Found");
            }
         });
     });

     $('.inp').keypress(function(event) {
         if (event.which === 13) {
            if (keyword === "New York" || keyword === "new york" || keyword === "New york" || keyword === "new York" || keyword === "NEW YORK" || keyword === "NY" || keyword === "ny") {
                $('.search-overlay #error').text("");
                $('.search-overlay #search-result').attr('src','./img/ny.jpg');
            }
            else if (keyword === "Chicago" || keyword === "chicago" || keyword === "CHICAGO") {
                $('.search-overlay #error').text("");
                $('.search-overlay #search-result').attr('src','./img/chicago.jpg');
            }
            else if (keyword === "Seattle" || keyword === "seattle" || keyword === "SEATTLE") {
                $('.search-overlay #error').text("");
                $('.search-overlay #search-result').attr('src','./img/seattle.jpg');
            }
            else if (keyword === "Los Angeles" || keyword === "los angeles" || keyword === "Los angeles" || keyword === "los Angeles" || keyword === "LOS ANGELES" || keyword === "la" || keyword === "LA") {
                $('.search-overlay #error').text("");
                $('.search-overlay #search-result').attr('src','./img/la.jpg');
            }
            else if (keyword === "London" || keyword === "london" || keyword === "LONDON") {
                $('.search-overlay #error').text("");
                $('.search-overlay #search-result').attr('src','./img/london.jpg');
            }
            else if (keyword === "Paris" || keyword === "paris" || keyword === "PARIS") {
                $('.search-overlay #error').text("");
                $('.search-overlay #search-result').attr('src','./img/paris.jpg');
            }
            else {
                $('.search-overlay #search-result').attr('src','');
                $('.inp').val('');
                keyword = "";
                $('.search-overlay #error').text("Not Found");
            }
         }
     });
});
