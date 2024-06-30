function [top_left, top_right, bottom_left, bottom_right] = corners(matrix)
[row,col] = size(matrix);
top_left=matrix(1,1)
top_right=matrix(1,col)
bottom_left=matrix(row,1)
bottom_right=matrix(row,col)
end