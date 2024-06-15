function output = blur(img, w)
    img = double(img);
    [rows, cols] = size(img);
    
    output = zeros(rows, cols);
    
    for i = 1:rows
        for j = 1:cols
            i_min = max(i-w,1);
            i_max = min(i+w, rows);
            j_min = max(j-w, 1);
            j_max = min(j+w, cols);
            
            submatrix = img(i_min:i_max, j_min:j_max);
            
            output(i,j) = mean(submatrix(:));
        end
    end
    
    output = uint8(output)
            
end