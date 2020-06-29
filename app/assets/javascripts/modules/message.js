$(function(){
  function buildHTML(message){
    if ( message.image ) {
      let html =
        `<div class="message_block" data-message-id=${message.id}>
          <div class="message_data">
            <div class="message_data__name">
              ${message.user_name}
            </div>
            <div class="message_data__timestamp">
              ${message.created_at}
            </div>
          </div>
          <div class="message_block__text">
            <p class="Message__content">
              ${message.content}
            </p>
            <img class="Message__image" src="${message.image}">
          </div>
        </div>`
      return html;
    } else {
      let html =
      `<div class="message_block" data-message-id=${message.id}>
      <div class="message_data">
        <div class="message_data__name">
          ${message.user_name}
        </div>
        <div class="message_data__timestamp">
          ${message.created_at}
        </div>
      </div>
      <div class="message_block__text">
        <p class="Message__content">
          ${message.content}
        </p>
      </div>
    </div>`
      return html;
    };
  }

  $('.Form').on('submit', function(e){
    e.preventDefault();
    console.log(this);
    let formData = new FormData(this);
    let url = $(this).attr('action');

    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
  })
  .done(function(data){
    console.log("aa");
    let html = buildHTML(data);
    $('.Form__submit').prop( 'disabled', false );
    $('.main_chat__message_list').append(html); 
    $('.Form')[0].reset();
    $('.main_chat__message_list').animate({ scrollTop: $('.main_chat__message_list')[0].scrollHeight});    
  })
  .fail(function() {
    alert("メッセージ送信に失敗しました");
});
});
});