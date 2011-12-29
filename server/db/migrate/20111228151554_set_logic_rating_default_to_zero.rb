class SetLogicRatingDefaultToZero < ActiveRecord::Migration
  def self.up
    change_column :logics, :rating, :integer, :default => 0
  end

  def self.down
    change_column :logics, :rating, :integer, :default => nil
  end
end
