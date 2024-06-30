function distance = get_distance(place1, place2)
    [num,txt,~] = xlsread('Distances.xlsx');
    rowName = txt(2:end, 1);
    colName = txt(1, 2:end);
    
    distances = num;
    rowidx = find(strcmpi(rowName, place1));
    colidx = find(strcmpi(colName, place2));
    if isempty(rowidx) || isempty(colidx)
        distance = -1;
    else
        distance = distances(rowidx, colidx);
    
end