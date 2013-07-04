class Task < ActiveRecord::Base
  attr_accessible :title, :details, :card_id

	# validates :title, :list_id, :presence => true
  belongs_to :card
  
end
