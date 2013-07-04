class Card < ActiveRecord::Base
  attr_accessible :title, :list_id
	
	# validates :title, :list_id, :presence => true

  belongs_to :list
  has_many :tasks
end
