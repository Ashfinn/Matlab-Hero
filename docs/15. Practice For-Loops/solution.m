function summa = halfsum(A)
    summa = 0;
    for i = 1:size(A,1)
        for j = 1:size(A,2)
            if i <= j 
                summa = summa + A(i,j);
        end
    end
end