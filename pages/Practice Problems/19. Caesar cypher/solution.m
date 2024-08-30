function coded = caesar(inputText, shift)
    % Convert the input text to ASCII values
    asciiValues = double(inputText);
    
    % Apply the shift
    shiftedValues = asciiValues + shift;
    
    % Wrap around any values that fall outside the 32-126 range
    % First, handle values greater than 126
    overFlow = shiftedValues > 126;
    shiftedValues(overFlow) = mod(shiftedValues(overFlow) - 32, 95) + 32;
    
    % Then, handle values less than 32
    underFlow = shiftedValues < 32;
    shiftedValues(underFlow) = mod(shiftedValues(underFlow) - 32, 95) + 32;
    
    % Convert back to characters
    coded = char(shiftedValues);
end
