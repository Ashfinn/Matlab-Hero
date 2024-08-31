function too_young = under_age(age, limit)
if nargin < 2
    limit = 21;
end
too_young = age < limit;