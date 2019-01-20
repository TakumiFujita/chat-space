$(document).on("turbolinks:load", function() {
// document.addEventListner("turbolinks:load", function() {

  var search_list = $("#user-search-result");

  function appendUser(user) {
    var html = `
      <div class="chat-group-user clearfix">
        <p class="chat-group-user__name">${user.name}</p>
        <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加</a>
      </div>`
     search_list.append(html);
    }

   function appendNoUser(message) {
      var html = `<li>
                    <div class='listview__element--right-icon'>${ user }</div>
                  </li>`
      search_list.append(html);
    }

  function appendAddUser(id, name) {
     var html = `
     <div class='chat-group-user clearfix js-chat-member'>
     <input name='group[user_ids][]' type='hidden' value='${id}'>
     <p class='chat-group-user__name'>${name}</p>
     <a class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</a>
     </div>`
     $("#add_list").append(html);
    }

    $("#user-search-result").on("click",".user-search-add", function() {
      $(this).parent().remove();
      var id = $(this).attr('data-user-id');
      var name = $(this).attr('data-user-name');
      appendAddUser(id, name);
    });

    $("#add_list").on("click",".user-search-remove", function() {
      $(this).parent().remove();
       });

    $("#user-search-field").on("keyup", function() {
      var input = $("#user-search-field").val();
      $.ajax({
        type: 'GET',
        url: '/users',
        data: { keyword: input },
        dataType: 'json'
      })

      .done(function(data) {
        $("#user-search-result").empty();
        if (data.length !== 0) {
         data.forEach(function(user){
           appendUser(user);
         });

        }
        else {
         appendNoUser("一致するユーザーはいません");
        }
        })
      .fail(function() {
        alert('ユーザー検索に失敗しました');
      })
    });
  });
