function charnum = char_counter(fname, character)
    fid = fopen(fname, 'r')
    
    if ~ischar(character) || length(character) ~= 1
        charnum = -1;
        return;
    end
    
    if fid == -1
        charnum = -1;
        return;
    end
    
    charnum = 0;
    
    while ~feof(fid);
        line = fgetl(fid);
        if ischar(line)
            charnum = charnum + sum(line == character);
        end
    end
    
    fclose(fid);
end