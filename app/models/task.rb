class Task < ActiveRecord::Base
  attr_accessible :title, :details

  belongs_to :user
end
