class Logic < ActiveRecord::Base
  validates_presence_of :author
  validates_presence_of :name
  validates_presence_of :code

  def vote!(value)
    self.rating += value
    save!
  end
end
