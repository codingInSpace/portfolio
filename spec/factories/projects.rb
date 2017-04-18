FactoryGirl.define do
  factory :project do
    title { Faker::Pokemon.name }
    short_desc { Faker::Lorem.words(10) }
    long_desc { Faker::Lorem.words(100) }
    src_url { Faker::Internet.url }
    app_url { Faker::Internet.url }
    app_link_label "Try it"
    projectteam "Team of five"
  end
end
