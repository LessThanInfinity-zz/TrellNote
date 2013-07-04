class Board < ActiveRecord::Base
  attr_accessible :title

	# validates :title, :presence => true
  
  belongs_to :user
  has_many :lists
end
