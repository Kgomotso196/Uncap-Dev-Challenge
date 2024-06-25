def return_first_integer(input)
    
    # This is basically the base case, it checks if the input is already an integer and returns it if true.
    return input if input.is_a?(Integer)
  
    # Use a regular expression to find the first integer in the string.
    match_data = input.match(/(\d+)/)
  
    # If a match is found, convert it to an integer and return...
    if match_data
      return match_data[1].to_i
    else
      # If no match is found, return nil.
      return nil
    end
  end

puts return_first_integer(2)            # -> 2
puts return_first_integer("3")          # -> 3
puts return_first_integer("Score: 4")   # -> 4
puts return_first_integer("I would rate it a 5.") # -> 5