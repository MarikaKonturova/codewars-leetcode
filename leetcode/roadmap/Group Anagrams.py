from collections import defaultdict
from typing import List


class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        res = defaultdict(list)
        if strs.length < 1:
            return []
        for word in strs:
            count = [0] * 26

            for c in word:
                count[ord(c) - ord('a')] += 1

            res[tuple(count)].append(word)
            
        return res.values()
