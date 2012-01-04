Server::Application.routes.draw do
  match "/logics/create" => "logics#create"
  match "/logics/:id/vote" => "logics#vote"
  match "/logics/:id/destroy" => "logics#destroy"
  match "/logics/:id" => "logics#logic"
  match "/logics" => "logics#index"
end
