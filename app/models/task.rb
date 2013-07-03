class Task < ActiveRecord::Base
  attr_accessible :title, :details, :card_id

  belongs_to :card
  
end
