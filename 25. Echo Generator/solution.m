function output = echo_gen(input, fs, delay, amp)
    delay_samples = round(delay * fs);
    
    echo = [zeros(delay_samples, 1); amp* input];
    input_padded = [input; zeros(length(echo) - length(input), 1)];
    
    output = input_padded + echo;
    
    max_val = max(abs(output));
    if max_val > 1
        output = output / max_val;
    end
    
    output = output(:);
end