if @new_message.present?
  json.array! @new_message do |message|
    json.id message.id
    json.user_name  message.user.name
    json.created_at message.created_at.strftime("%Y/%m/%d/%H:%M")
    json.content message.content
  end
end
