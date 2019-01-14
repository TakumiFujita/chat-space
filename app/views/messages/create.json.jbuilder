  json.content  @message.content
  json.image  @message.image.url
  json.user_name @message.user.name
  json.created_at simple_format(@message.created_at.to_s)
