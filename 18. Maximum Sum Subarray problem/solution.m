function [summa, index] = max_sum(v, n)
    % Check if n is larger than the number of elements in v
    if n > numel(v)
        summa = 0;
        index = -1;
        return;
    end

    % Initialize variables
    maxSum = -inf;
    maxIndex = 0;

    % Iterate through the vector to find the maximum sum
    for i = 1:(numel(v) - n + 1)
        currentSum = sum(v(i:i + n - 1));
        if currentSum > maxSum
            maxSum = currentSum;
            maxIndex = i;
        end
    end

    % Output results
    summa = maxSum;
    index = maxIndex;
end