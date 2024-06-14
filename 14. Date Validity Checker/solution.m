function valid = valid_date(year, month, date)
    valid = true;
    
    % Function to check if a year is a leap year
    function leap = is_leap_year(y)
        leap = (mod(y, 4) == 0 && (mod(y, 100) ~= 0 || mod(y, 400) == 0));
    end

    % Check if inputs are scalar
    if ~isscalar(year) || ~isscalar(month) || ~isscalar(date)
        valid = false;
        return;
    end
    
    % Check if inputs are within valid ranges
    if date < 1 || month > 12 || year < 1 || date > 31 || month < 1
        valid = false;
        return;
    end
    
    % Define days in each month
    days_in_month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    
    % Check for February and leap years
    if month == 2
        if date > 28 && ~(is_leap_year(year) && date == 29)
            valid = false;
        end
    elseif date > days_in_month(month)
        valid = false;
    end
end
