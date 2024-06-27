require_relative 'app'  # Adding the relative path of question1

RSpec.describe 'return_first_integer' do
  it 'returns the input integer if input is already an integer' do
    expect(return_first_integer(2)).to eq(2)
  end

  it 'extracts and returns the first integer from a string containing an integer' do
    expect(return_first_integer("3")).to eq(3)
  end

  it 'extracts and returns the first integer from a string with an integer embedded' do
    expect(return_first_integer("Score: 4")).to eq(4)
  end

  it 'extracts and returns the first integer from a sentence containing an integer' do
    expect(return_first_integer("I would rate it a 5.")).to eq(5)
  end

