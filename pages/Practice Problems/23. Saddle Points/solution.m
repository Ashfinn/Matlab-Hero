function indices = saddle(M)
    [num_rows, num_cols] = size(M);
    
    indices = [];
    
    for i = 1:num_rows
        row_max = max(M(i,:));
        col_indices = find(M(i, :) == row_max);
        
        for j = col_indices
            if M(i,j) == row_max && M(i, j) == min(M(:, j))
                indices = [indices; i, j];
            end
        end
        
    end
end