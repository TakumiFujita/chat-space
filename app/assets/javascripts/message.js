$(function(){
  function buildHTML(message){
    if (message.image) {
    var html = `
    <div class = "main-content_body_list-message" data-message-id = "${message.id}">
      <div class = "main-content_body_list-message-name">
      ${message.user_name}
      </div>
      <div class = "main-content_body_list-message-time">
      ${message.created_at}
      </div>
      <div class = "main-content_body_list-message-text">
      <p>${message.content}</p>
      <img src="${message.image}">
      </div>
    </div>`
    return html;
  }

    else {
    var html = `<div class = "main-content_body_list-message" data-message-id="${message.id}">
                  <div class = "main-content_body_list-message-name">
                  ${message.user_name}
                  </div>
                  <div class = "main-content_body_list-message-time">
                  ${message.created_at}
                  </div>
                  <div class = "main-content_body_list-message-text">
                  <p>${message.content}</p>
                  </div>
                  </div>`
    return html;
  }
}
  $('.new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
            url: url,
            type: 'POST',
            data: formData,
            dataType: 'json',
            processData: false,
            contentType: false
        })
    .done(function(data){
      var html = buildHTML(data);
      $('.main-content_body_list').append(html);
      $('.main-content_footer_body_message-area').val('')
      $('#upload-icon').val('');
      $(".main-content_footer_body_submit-btn-area").prop("disabled", false);
      $('.main-content_body_list').animate({scrollTop: $('.main-content_body_list')[0].scrollHeight}, 'fast');
    })
    .fail(function(){
      alert('error');
      $(".main-content_footer_body_submit-btn-area").prop("disabled", false);
    })
  });

    $(function(){
      if(location.pathname.match(/\/groups\/\d+\/messages/)){
        setInterval(update, 5000);
      }
    });

    function update(){
      if ($('.main-content_body_list-message')[0]){
        var message_id = $('.main-content_body_list-message:last').data('message-id');

      } else {
       var message_id = 0
      }
      $.ajax({
        url: location.href,
        type: 'GET',
        data: {
          message: {id: message_id}
        },
        dataType: 'json'
      })

      .always(function(data){
        $.each(data, function(i,data){
          var html = buildHTML(data);
        $('.main-content_body_list').append(html);
          });
      });
    }
});
