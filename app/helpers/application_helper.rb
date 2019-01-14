module ApplicationHelper
  def simple_time(message)
    message.created_at.to_s(:default)
  end
end
