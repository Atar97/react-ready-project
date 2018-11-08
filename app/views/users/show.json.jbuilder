json.users do
  json.set! @user.id do
    json.partial! 'users/user', user: @user
  end
end

json.session do
  json.id @user.id
end
