$(function () {
    "use strict";

    $('.subscribe-form').on("submit", function (event) {
        // Stop form from submitting normally
        event.preventDefault();

        // Get some values from elements on the page:
        var $form = $(this),
            email = $.trim($form.find('input[name="email"]').val()),
           // url = $form.attr("action");
            url =  "//varnalabs.us14.list-manage.com/subscribe/post-json?u=648dc8ad831aa8f85632f25a8&amp;id=cf45e6bb7e&c=?";

        // Send the data using post
        console.log($form);

        //var posting = $.post(url, {"email": $('#subscribe-form').serialize()});

        // Put the results in a div
        // posting.done(function () {
        //     $form.html('<h4 class="subscribe-title" style="margin-bottom: 25px; line-height: 56px;">Thank you for subscription!</h4>').fadeTo(300, 1);
        // });
        console.log($form.serialize());
        $.ajax({
            type: "GET",
             data: $form.serialize(),
            cache: false,
            dataType: "jsonp",
            jsonp: "c", // trigger MailChimp to return a JSONP response
            contentType: "application/json; charset=utf-8",
            url:  url,

            error       : function(err) {
                alert("Could not connect to the registration server. Please try again later.");
            },
            success     : function(data) {
                console.log(data);
                if (data.result != "success") {
                    // Something went wrong, do something to notify the user. maybe alert(data.msg);
                    alert("Could not connect to the registration server. Please try again later.");
                } else {
                    // It worked, carry on...
                    $form.html('<h4 class="subscribe-title" style="margin-bottom: 25px; line-height: 56px;">Thank you for subscription!</h4>').fadeTo(300, 1);

                }
            }
        });

    });




//contact form below

    $('.contact-form').on("submit", function (event) {

        // Stop form from submitting normally
        event.preventDefault();

        // Get some values from elements on the page:
        var $form = $(this),
            name = $.trim($form.find('input[name="name"]').val()),
            email = $.trim($form.find('input[name="email"]').val()),
            permalink = ($form.find('input[name="permalink"]').length) ? $.trim($form.find('input[name="permalink"]').val()) : '',
            subject = ($form.find('input[name="subject"]').length) ? $.trim($form.find('input[name="subject"]').val()) : '',
            phone = ($form.find('input[name="phone"]').length) ? $.trim($form.find('input[name="phone"]').val()) : '',
            company = ($form.find('input[name="company"]').length) ? $.trim($form.find('input[name="company"]').val()) : '',
            message = $.trim($form.find('textarea[name="message"]').val()),
            url = $form.attr("action");

        // Send the data using post
       // var posting = $.post(url, {'name': name, 'email': email, 'subject': subject, 'message': message, 'company': company, 'phone': phone, 'permalink': permalink})

        // Put the results in a div
        // posting.done(function () {
        //     $form.html('<h4>Thank you for subscription!</h4>').fadeTo(300, 1);
        // });
        $.ajax({
            url: '//formspree.io/team@varnalabs.io',
            method: 'POST',
            data: $form.serialize(),
            dataType: 'json',
            beforeSend: function() {
            },
            success: function(data) {
                $form.html('<h4>We have received your email. Thank You. We wll get back to you shortly!</h4>').fadeTo(300, 1);
            },
            error: function(err) {

            }
        });
    });

});

