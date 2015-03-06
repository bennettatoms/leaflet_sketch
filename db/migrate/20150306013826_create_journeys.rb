class CreateJourneys < ActiveRecord::Migration
  def change
    create_table :journeys do |t|
      t.string :name
      t.timestamp :date

      t.timestamps null: false
    end
  end
end
