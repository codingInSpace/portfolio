FactoryGirl.define do
  factory :tags do
    label { Faker::Lorem.word }
    hexcolor { Faker::Color.hex_color }
  end
end

