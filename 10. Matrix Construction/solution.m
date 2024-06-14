function T = trio(n,m);
T = ones(3*n,m);
T(1:n,:) = 1;
T(n+1:2*n,:) = 2;
T(2*n+1:end,:) = 3;
end