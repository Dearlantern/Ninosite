class Query < ActiveRecord::Base
  attr_accessible :comment, :email, :name, :phone

  validates :name, :phone, presence: true

  validates :email,
            :length => {:minimum => 3, :maximum => 254},
            :format => {:with => /^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i}

end
