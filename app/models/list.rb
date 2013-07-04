class List < ActiveRecord::Base
  attr_accessible :title, :board_id

  # validates :title, :board_id, :presence => true

  belongs_to :board
  has_many :cards
  
end
