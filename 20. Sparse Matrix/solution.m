function matrix = sparse2matrix(cellVec)
    dim = cellVec{1};
    rows = dim(1);
    col = dim(2);
    
    defaultValue = cellVec{2};

    matrix = defaultValue * ones(rows, col);
    
    for i = 3:length(cellVec)
        elem = cellVec{i};
        rowIndex = elem(1);
        colIndex = elem(2);
        value = elem(3);
        matrix(rowIndex, colIndex) = value;
    end    
end