class Card < ActiveRecord::Base
  attr_accessible :title, :list_id, :list_position
	
	# validates :title, :list_id, :presence => true

	default_scope :order => 'list_position ASC'

  belongs_to :list
  has_many :tasks
end
