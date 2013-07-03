class Card < ActiveRecord::Base
  attr_accessible :title, :list_id

  belongs_to :list

  has_many :tasks
end
