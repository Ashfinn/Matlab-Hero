function [mmr,mmm] = minimax(M)
mmr = abs(max(M,[],2)-min(M, [], 2))';
mmm = abs(max(M(:)) - min(M(:)));
end
