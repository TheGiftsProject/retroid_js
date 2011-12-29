class CreateLogics < ActiveRecord::Migration
  def self.up
    create_table :logics do |t|
      t.string :author
      t.string :name
      t.string :code
      t.integer :rating

      t.timestamps
    end
  end

  def self.down
    drop_table :logics
  end
end
