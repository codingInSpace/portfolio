FactoryGirl.define do
  factory :tags do
    label { Faker::Lorem.word }
  end
end

