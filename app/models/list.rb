class List < ActiveRecord::Base
  attr_accessible :title, :board_id

  belongs_to :board
  has_many :cards
  
end
