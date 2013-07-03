class Board < ActiveRecord::Base
  attr_accessible :title

  belongs_to :user

  has_many :lists
end
