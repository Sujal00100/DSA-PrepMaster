// DSA MASTER — 90-Day Tracker (150 Questions)
// Full Interactive Application with Topic-Free Mode & Hint System

// ---- SVG GRADIENT DEF ----
const svgDefs = `<svg width="0" height="0" style="position:absolute"><defs><linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#7C3AED"/><stop offset="100%" stop-color="#06B6D4"/></linearGradient></defs></svg>`;
document.body.insertAdjacentHTML('afterbegin', svgDefs);

// ---- 150 CURATED QUESTIONS ----
const QUESTIONS = [
  {
    "id": 1,
    "num": 1,
    "name": "Two Sum",
    "difficulty": "easy",
    "topic": "Arrays & Hashing",
    "day": 1,
    "tags": [
      "hash-map"
    ],
    "pattern": "Hash Map / Complements",
    "approach": "Store elements in a hash map as (value -> index). For each num, check if (target - num) exists.",
    "insight": "Transforms an O(n^2) brute search into an O(n) single pass with O(1) hash lookups.",
    "url": "https://leetcode.com/problems/two-sum/"
  },
  {
    "id": 2,
    "num": 2,
    "name": "Contains Duplicate",
    "difficulty": "easy",
    "topic": "Arrays & Hashing",
    "day": 1,
    "tags": [
      "hash-set"
    ],
    "pattern": "Hash Set Lookup",
    "approach": "Traverse array while inserting into a HashSet. If item already exists, duplicate found.",
    "insight": "A set guarantees O(1) membership check, identifying duplicates in linear time.",
    "url": "https://leetcode.com/problems/contains-duplicate/"
  },
  {
    "id": 3,
    "num": 3,
    "name": "Valid Anagram",
    "difficulty": "easy",
    "topic": "Arrays & Hashing",
    "day": 2,
    "tags": [
      "frequency-count"
    ],
    "pattern": "Character Frequency Array",
    "approach": "Count frequency of each char in s (+1) and t (-1) using a size-26 int array. All counts must be 0.",
    "insight": "Fixed-size alphabet (26 chars) gives O(1) auxiliary space instead of sorting in O(n log n).",
    "url": "https://leetcode.com/problems/valid-anagram/"
  },
  {
    "id": 4,
    "num": 4,
    "name": "Group Anagrams",
    "difficulty": "medium",
    "topic": "Arrays & Hashing",
    "day": 2,
    "tags": [
      "hash-map",
      "sorting"
    ],
    "pattern": "Categorization by Canonical Key",
    "approach": "Sort each string or compute char count tuple to use as map key. Group matching words into lists.",
    "insight": "Anagrams share an invariant representation (sorted order or char frequencies).",
    "url": "https://leetcode.com/problems/group-anagrams/"
  },
  {
    "id": 5,
    "num": 5,
    "name": "Top K Frequent Elements",
    "difficulty": "medium",
    "topic": "Arrays & Hashing",
    "day": 3,
    "tags": [
      "bucket-sort",
      "heap"
    ],
    "pattern": "Bucket Sort by Frequency",
    "approach": "Count frequencies, then create array of buckets where index is frequency. Iterate backwards to collect top k.",
    "insight": "Since frequencies are bounded by array length n, bucket sort achieves linear O(n) time.",
    "url": "https://leetcode.com/problems/top-k-frequent-elements/"
  },
  {
    "id": 6,
    "num": 6,
    "name": "Product of Array Except Self",
    "difficulty": "medium",
    "topic": "Arrays & Hashing",
    "day": 3,
    "tags": [
      "prefix-sum"
    ],
    "pattern": "Prefix & Suffix Accumulation",
    "approach": "First pass computes running prefix products into result. Second backwards pass multiplies suffix products.",
    "insight": "Avoid division by splitting each answer into (everything to the left) * (everything to the right).",
    "url": "https://leetcode.com/problems/product-of-array-except-self/"
  },
  {
    "id": 7,
    "num": 7,
    "name": "Encode and Decode Strings",
    "difficulty": "medium",
    "topic": "Arrays & Hashing",
    "day": 4,
    "tags": [
      "design",
      "string"
    ],
    "pattern": "Length-Prefixed Chunking",
    "approach": "Encode each string with its length followed by delimiter like '4#word'. Parser reads length, skips '#', takes slice.",
    "insight": "Prefixing string length eliminates any ambiguity caused by delimiters appearing inside words.",
    "url": "https://leetcode.com/problems/encode-and-decode-strings/"
  },
  {
    "id": 8,
    "num": 8,
    "name": "Longest Consecutive Sequence",
    "difficulty": "medium",
    "topic": "Arrays & Hashing",
    "day": 4,
    "tags": [
      "hash-set"
    ],
    "pattern": "Sequence Boundary Detection",
    "approach": "Put all numbers in a HashSet. Only start counting sequence from x if (x - 1) is NOT in the set.",
    "insight": "Only exploring sequences from their true start guarantees each element is visited at most twice (O(n)).",
    "url": "https://leetcode.com/problems/longest-consecutive-sequence/"
  },
  {
    "id": 9,
    "num": 9,
    "name": "Valid Palindrome",
    "difficulty": "easy",
    "topic": "Two Pointers",
    "day": 5,
    "tags": [
      "two-pointers",
      "string"
    ],
    "pattern": "Inward Two Pointers",
    "approach": "Place pointers at start and end. Skip non-alphanumeric chars, compare case-insensitively, increment/decrement.",
    "insight": "Avoids creating new filtered strings; runs in O(n) time with O(1) memory.",
    "url": "https://leetcode.com/problems/valid-palindrome/"
  },
  {
    "id": 10,
    "num": 10,
    "name": "Two Sum II - Input Array Is Sorted",
    "difficulty": "medium",
    "topic": "Two Pointers",
    "day": 5,
    "tags": [
      "two-pointers"
    ],
    "pattern": "Opposite Direction Pointers",
    "approach": "Pointers at 0 and n-1. If sum < target, left++; if sum > target, right--; else found.",
    "insight": "Monotonicity of sorted array guarantees each pointer movement eliminates candidates safely.",
    "url": "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/"
  },
  {
    "id": 11,
    "num": 11,
    "name": "3Sum",
    "difficulty": "medium",
    "topic": "Two Pointers",
    "day": 6,
    "tags": [
      "two-pointers",
      "sorting"
    ],
    "pattern": "Sort + Fixed Pivot + Two Pointers",
    "approach": "Sort array. Loop index i as pivot; run two pointers on remaining subarray for target -nums[i]. Skip duplicates.",
    "insight": "Sorting takes O(n log n) and enables seamless O(1) duplicate skipping and O(n) pointer scans.",
    "url": "https://leetcode.com/problems/3sum/"
  },
  {
    "id": 12,
    "num": 12,
    "name": "Container With Most Water",
    "difficulty": "medium",
    "topic": "Two Pointers",
    "day": 6,
    "tags": [
      "two-pointers",
      "greedy"
    ],
    "pattern": "Shrinking Window with Greedy Shift",
    "approach": "Pointers at both edges. Calculate area = min(h[l], h[r]) * (r - l). Move pointer with the smaller height inward.",
    "insight": "Moving the taller boundary can never increase area because width shrinks and height is bottlenecked.",
    "url": "https://leetcode.com/problems/container-with-most-water/"
  },
  {
    "id": 13,
    "num": 13,
    "name": "Trapping Rain Water",
    "difficulty": "hard",
    "topic": "Two Pointers",
    "day": 7,
    "tags": [
      "two-pointers",
      "monotonic-stack"
    ],
    "pattern": "Two Pointers with Running Maxes",
    "approach": "Track leftMax and rightMax from both ends. Move pointer with smaller max; trapped water is max - current height.",
    "insight": "Water trapped above a bar is solely determined by min(max_left, max_right) - height.",
    "url": "https://leetcode.com/problems/trapping-rain-water/"
  },
  {
    "id": 14,
    "num": 14,
    "name": "Best Time to Buy and Sell Stock",
    "difficulty": "easy",
    "topic": "Sliding Window",
    "day": 8,
    "tags": [
      "greedy"
    ],
    "pattern": "Running Minimum & Max Profit",
    "approach": "Iterate through prices tracking min_price seen so far. At each day, profit = price - min_price; update max.",
    "insight": "One single pass O(n) time, O(1) space keeping track of historical lowest valley.",
    "url": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/"
  },
  {
    "id": 15,
    "num": 15,
    "name": "Longest Substring Without Repeating Chars",
    "difficulty": "medium",
    "topic": "Sliding Window",
    "day": 8,
    "tags": [
      "sliding-window",
      "hash-map"
    ],
    "pattern": "Dynamic Sliding Window with Last Seen Index",
    "approach": "Expand right pointer. If char was seen within current window, jump left pointer to lastSeen[char] + 1.",
    "insight": "Hash map of indices allows O(1) jumps of left boundary instead of incrementing one step at a time.",
    "url": "https://leetcode.com/problems/longest-substring-without-repeating-characters/"
  },
  {
    "id": 16,
    "num": 16,
    "name": "Longest Repeating Character Replacement",
    "difficulty": "medium",
    "topic": "Sliding Window",
    "day": 9,
    "tags": [
      "sliding-window"
    ],
    "pattern": "Sliding Window with Max Frequency Invariant",
    "approach": "Window length is (r - l + 1). If (window_len - max_freq) > k, shrink from left by incrementing l.",
    "insight": "You don't need to decrement max_freq when shrinking; we only care about discovering larger windows.",
    "url": "https://leetcode.com/problems/longest-repeating-character-replacement/"
  },
  {
    "id": 17,
    "num": 17,
    "name": "Permutation in String",
    "difficulty": "medium",
    "topic": "Sliding Window",
    "day": 9,
    "tags": [
      "sliding-window",
      "hash-map"
    ],
    "pattern": "Fixed-Size Sliding Window Frequency Match",
    "approach": "Window size equals length of s1. Maintain count of matching distinct character frequencies. Shift window right.",
    "insight": "Track the number of matching frequencies (0-26) to check equality in O(1) per step.",
    "url": "https://leetcode.com/problems/permutation-in-string/"
  },
  {
    "id": 18,
    "num": 18,
    "name": "Minimum Window Substring",
    "difficulty": "hard",
    "topic": "Sliding Window",
    "day": 10,
    "tags": [
      "sliding-window",
      "hash-map"
    ],
    "pattern": "Expand to Satisfy, Contract to Minimize",
    "approach": "Expand right until all required characters match count. Then contract left as much as possible while maintaining count.",
    "insight": "Two pointers with a 'have' vs 'need' counter ensures each character is visited at most twice.",
    "url": "https://leetcode.com/problems/minimum-window-substring/"
  },
  {
    "id": 19,
    "num": 19,
    "name": "Sliding Window Maximum",
    "difficulty": "hard",
    "topic": "Sliding Window",
    "day": 10,
    "tags": [
      "deque",
      "monotonic-queue"
    ],
    "pattern": "Monotonic Decreasing Deque",
    "approach": "Maintain deque of indices in decreasing order of value. Pop front if outside window; pop back if smaller than current.",
    "insight": "Front of deque always holds maximum element for current window in amortized O(1) per step.",
    "url": "https://leetcode.com/problems/sliding-window-maximum/"
  },
  {
    "id": 20,
    "num": 20,
    "name": "Valid Parentheses",
    "difficulty": "easy",
    "topic": "Stack",
    "day": 11,
    "tags": [
      "stack"
    ],
    "pattern": "LIFO Matching with Stack",
    "approach": "Push opening brackets onto stack. For closing bracket, pop and ensure it matches expected pair.",
    "insight": "Most recently opened bracket must be the first one closed (Last-In-First-Out).",
    "url": "https://leetcode.com/problems/valid-parentheses/"
  },
  {
    "id": 21,
    "num": 21,
    "name": "Min Stack",
    "difficulty": "medium",
    "topic": "Stack",
    "day": 11,
    "tags": [
      "design",
      "stack"
    ],
    "pattern": "Auxiliary Min Tracking Stack",
    "approach": "Use two stacks or store pairs (val, current_min). When pushing, min is min(val, prev_min).",
    "insight": "Every state of the main stack has a corresponding immutable minimum state.",
    "url": "https://leetcode.com/problems/min-stack/"
  },
  {
    "id": 22,
    "num": 22,
    "name": "Evaluate Reverse Polish Notation",
    "difficulty": "medium",
    "topic": "Stack",
    "day": 12,
    "tags": [
      "stack",
      "math"
    ],
    "pattern": "Postfix Expression Evaluation",
    "approach": "Iterate tokens: push numbers onto stack; when operator seen, pop operand2 then operand1, apply op, push result.",
    "insight": "Operators in postfix apply directly to the two topmost numbers on the stack.",
    "url": "https://leetcode.com/problems/evaluate-reverse-polish-notation/"
  },
  {
    "id": 23,
    "num": 23,
    "name": "Generate Parentheses",
    "difficulty": "medium",
    "topic": "Stack",
    "day": 12,
    "tags": [
      "backtracking",
      "recursion"
    ],
    "pattern": "Constrained Backtracking",
    "approach": "Track open and close count. Add '(' if open < n; add ')' if close < open. Backtrack when string len == 2n.",
    "insight": "Maintaining close < open ensures parentheses prefix is always valid at every branch.",
    "url": "https://leetcode.com/problems/generate-parentheses/"
  },
  {
    "id": 24,
    "num": 24,
    "name": "Daily Temperatures",
    "difficulty": "medium",
    "topic": "Stack",
    "day": 13,
    "tags": [
      "monotonic-stack"
    ],
    "pattern": "Monotonic Decreasing Stack for Next Greater",
    "approach": "Push index onto stack. While current temp > stack top's temp, pop top and record day difference.",
    "insight": "Elements wait in stack until a warmer day resolves them; each element pushed/popped once O(n).",
    "url": "https://leetcode.com/problems/daily-temperatures/"
  },
  {
    "id": 25,
    "num": 25,
    "name": "Car Fleet",
    "difficulty": "medium",
    "topic": "Stack",
    "day": 13,
    "tags": [
      "stack",
      "sorting"
    ],
    "pattern": "Sort by Position + Time-to-Target Stack",
    "approach": "Sort cars descending by starting position. Calculate time = (target - pos) / speed. If car takes <= time of car ahead, it joins fleet.",
    "insight": "Cars behind can never pass cars in front, so reverse positional order determines fleet mergers.",
    "url": "https://leetcode.com/problems/car-fleet/"
  },
  {
    "id": 26,
    "num": 26,
    "name": "Largest Rectangle in Histogram",
    "difficulty": "hard",
    "topic": "Stack",
    "day": 14,
    "tags": [
      "monotonic-stack"
    ],
    "pattern": "Monotonic Increasing Stack with Width Expansion",
    "approach": "Maintain stack of (index, height). When current height < top, pop and calculate area with height of popped bar.",
    "insight": "A bar's rectangle extends left to when it became shorter and right to when it meets a shorter bar.",
    "url": "https://leetcode.com/problems/largest-rectangle-in-histogram/"
  },
  {
    "id": 27,
    "num": 27,
    "name": "Binary Search",
    "difficulty": "easy",
    "topic": "Binary Search",
    "day": 15,
    "tags": [
      "binary-search"
    ],
    "pattern": "Divide & Conquer on Sorted Space",
    "approach": "Set left=0, right=n-1. While left <= right: mid = left + (right-left)//2. Adjust pointers based on comparison.",
    "insight": "Halves search space each iteration, reaching answer in O(log n) steps.",
    "url": "https://leetcode.com/problems/binary-search/"
  },
  {
    "id": 28,
    "num": 28,
    "name": "Search a 2D Matrix",
    "difficulty": "medium",
    "topic": "Binary Search",
    "day": 15,
    "tags": [
      "binary-search",
      "matrix"
    ],
    "pattern": "Virtual 1D Array Mapping",
    "approach": "Treat m x n matrix as 1D array of length m*n. Mid index maps to matrix[mid // n][mid % n].",
    "insight": "Standard binary search applies directly without 2D overhead due to row-major sorted order.",
    "url": "https://leetcode.com/problems/search-a-2d-matrix/"
  },
  {
    "id": 29,
    "num": 29,
    "name": "Koko Eating Bananas",
    "difficulty": "medium",
    "topic": "Binary Search",
    "day": 16,
    "tags": [
      "binary-search-on-answer"
    ],
    "pattern": "Binary Search on Monotonic Answer Range",
    "approach": "Speed k ranges from 1 to max(piles). Binary search k: check if total hours needed <= h.",
    "insight": "Feasibility function is monotonic: if speed k works, any k' > k also works.",
    "url": "https://leetcode.com/problems/koko-eating-bananas/"
  },
  {
    "id": 30,
    "num": 30,
    "name": "Find Minimum in Rotated Sorted Array",
    "difficulty": "medium",
    "topic": "Binary Search",
    "day": 16,
    "tags": [
      "binary-search"
    ],
    "pattern": "Rotated Array Inflection Point",
    "approach": "Compare nums[mid] with nums[right]. If mid > right, min is in right half; else in left half including mid.",
    "insight": "The unsorted half always contains the pivot point where elements wrap around.",
    "url": "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/"
  },
  {
    "id": 31,
    "num": 31,
    "name": "Search in Rotated Sorted Array",
    "difficulty": "medium",
    "topic": "Binary Search",
    "day": 17,
    "tags": [
      "binary-search"
    ],
    "pattern": "Identifying the Normally Sorted Half",
    "approach": "At least one half (left..mid or mid..right) is sorted. Check if target lies within that range; discard other half.",
    "insight": "Even when rotated, cutting array in half always produces at least one cleanly sorted segment.",
    "url": "https://leetcode.com/problems/search-in-rotated-sorted-array/"
  },
  {
    "id": 32,
    "num": 32,
    "name": "Time Based Key-Value Store",
    "difficulty": "medium",
    "topic": "Binary Search",
    "day": 17,
    "tags": [
      "design",
      "binary-search"
    ],
    "pattern": "Hash Map with Binary Search on Timestamps",
    "approach": "Map key to list of (timestamp, value). Since timestamps increase, use binary search (bisect_right) to find largest ts <= target.",
    "insight": "Append-only timestamps naturally form a sorted list ready for logarithmic queries.",
    "url": "https://leetcode.com/problems/time-based-key-value-store/"
  },
  {
    "id": 33,
    "num": 33,
    "name": "Median of Two Sorted Arrays",
    "difficulty": "hard",
    "topic": "Binary Search",
    "day": 18,
    "tags": [
      "binary-search",
      "divide-conquer"
    ],
    "pattern": "Binary Search on Partition Cut",
    "approach": "Binary search partition in smaller array so total elements in left halves equals total in right halves.",
    "insight": "Valid partition satisfies leftA <= rightB and leftB <= rightA in O(log(min(m, n))) time.",
    "url": "https://leetcode.com/problems/median-of-two-sorted-arrays/"
  },
  {
    "id": 34,
    "num": 34,
    "name": "Reverse Linked List",
    "difficulty": "easy",
    "topic": "Linked List",
    "day": 19,
    "tags": [
      "linked-list"
    ],
    "pattern": "In-Place Pointer Reversal",
    "approach": "Maintain prev=null, curr=head. Save next = curr.next, point curr.next = prev, advance prev=curr, curr=next.",
    "insight": "Reversing links iteratively takes O(n) time and O(1) additional memory.",
    "url": "https://leetcode.com/problems/reverse-linked-list/"
  },
  {
    "id": 35,
    "num": 35,
    "name": "Merge Two Sorted Lists",
    "difficulty": "easy",
    "topic": "Linked List",
    "day": 19,
    "tags": [
      "linked-list",
      "two-pointers"
    ],
    "pattern": "Dummy Head Pointer Stitching",
    "approach": "Use dummy node. Compare values of list1 and list2; attach smaller node to tail, advance that pointer.",
    "insight": "Dummy head eliminates special-casing for the first node of the merged list.",
    "url": "https://leetcode.com/problems/merge-two-sorted-lists/"
  },
  {
    "id": 36,
    "num": 36,
    "name": "Linked List Cycle",
    "difficulty": "easy",
    "topic": "Linked List",
    "day": 20,
    "tags": [
      "fast-and-slow"
    ],
    "pattern": "Floyd's Tortoise and Hare",
    "approach": "Slow pointer moves 1 step, fast pointer moves 2 steps. If they ever point to same node, cycle exists.",
    "insight": "Fast pointer gains 1 step per iteration inside cycle, guaranteeing collision in O(n) without extra space.",
    "url": "https://leetcode.com/problems/linked-list-cycle/"
  },
  {
    "id": 37,
    "num": 37,
    "name": "Reorder List",
    "difficulty": "medium",
    "topic": "Linked List",
    "day": 20,
    "tags": [
      "linked-list",
      "two-pointers"
    ],
    "pattern": "Split Mid + Reverse Second Half + Interleave",
    "approach": "Find midpoint with slow/fast pointers. Reverse second half of list. Merge two halves alternating nodes.",
    "insight": "Combines three fundamental linked list operations into one cohesive O(n) time O(1) space solution.",
    "url": "https://leetcode.com/problems/reorder-list/"
  },
  {
    "id": 38,
    "num": 38,
    "name": "Remove Nth Node From End of List",
    "difficulty": "medium",
    "topic": "Linked List",
    "day": 21,
    "tags": [
      "two-pointers"
    ],
    "pattern": "Fixed Gap Two Pointers with Dummy Node",
    "approach": "Advance fast pointer n+1 steps ahead of slow. Move both until fast hits end; slow is right before target.",
    "insight": "Maintaining distance of n between pointers avoids counting total list length first.",
    "url": "https://leetcode.com/problems/remove-nth-node-from-end-of-list/"
  },
  {
    "id": 39,
    "num": 39,
    "name": "Copy List with Random Pointer",
    "difficulty": "medium",
    "topic": "Linked List",
    "day": 21,
    "tags": [
      "linked-list",
      "hash-map"
    ],
    "pattern": "Interleaved Node Duplication or Map",
    "approach": "Map original nodes to new cloned nodes. Second pass wires new.next and new.random using the map.",
    "insight": "Hash map resolves forward and backward references to nodes not yet visited.",
    "url": "https://leetcode.com/problems/copy-list-with-random-pointer/"
  },
  {
    "id": 40,
    "num": 40,
    "name": "Add Two Numbers",
    "difficulty": "medium",
    "topic": "Linked List",
    "day": 22,
    "tags": [
      "linked-list",
      "math"
    ],
    "pattern": "Elementary Math Addition with Carry",
    "approach": "Traverse both lists simultaneously; sum digits + carry. Create node with sum % 10, carry = sum // 10.",
    "insight": "Since digits are stored in reverse order, addition flows naturally from least to most significant.",
    "url": "https://leetcode.com/problems/add-two-numbers/"
  },
  {
    "id": 41,
    "num": 41,
    "name": "Find the Duplicate Number",
    "difficulty": "medium",
    "topic": "Linked List",
    "day": 22,
    "tags": [
      "fast-and-slow"
    ],
    "pattern": "Implicit Linked List Cycle Detection",
    "approach": "Array values act as pointers: next = nums[curr]. Use Floyd's cycle detection to find loop and cycle entrance.",
    "insight": "Since numbers are 1 to n with n+1 elements, index-to-value creates a guaranteed cycle.",
    "url": "https://leetcode.com/problems/find-the-duplicate-number/"
  },
  {
    "id": 42,
    "num": 42,
    "name": "LRU Cache",
    "difficulty": "medium",
    "topic": "Linked List",
    "day": 23,
    "tags": [
      "design",
      "hash-map",
      "doubly-linked-list"
    ],
    "pattern": "Hash Map + Doubly Linked List",
    "approach": "Hash map for O(1) lookup to list node. Doubly linked list for O(1) node removal and moving to head.",
    "insight": "Doubly linked list allows node to delete itself in O(1) without knowing its predecessor.",
    "url": "https://leetcode.com/problems/lru-cache/"
  },
  {
    "id": 43,
    "num": 43,
    "name": "Merge K Sorted Lists",
    "difficulty": "hard",
    "topic": "Linked List",
    "day": 23,
    "tags": [
      "heap",
      "divide-and-conquer"
    ],
    "pattern": "Min-Heap or Divide & Conquer Merge",
    "approach": "Put head node of each k lists into min-heap. Pop smallest, add to result, push popped node's next.",
    "insight": "Min-heap keeps smallest head among k lists ready in O(log k) per element, total O(N log k).",
    "url": "https://leetcode.com/problems/merge-k-sorted-lists/"
  },
  {
    "id": 44,
    "num": 44,
    "name": "Reverse Nodes in k-Group",
    "difficulty": "hard",
    "topic": "Linked List",
    "day": 24,
    "tags": [
      "linked-list",
      "recursion"
    ],
    "pattern": "K-Size Block Verification & Reversal",
    "approach": "Count k nodes. If present, reverse sublist of k nodes and recursively or iteratively link to next group.",
    "insight": "Check k nodes exist ahead before reversing; otherwise leave group untouched as required.",
    "url": "https://leetcode.com/problems/reverse-nodes-in-k-group/"
  },
  {
    "id": 45,
    "num": 45,
    "name": "Invert Binary Tree",
    "difficulty": "easy",
    "topic": "Trees",
    "day": 25,
    "tags": [
      "trees",
      "recursion"
    ],
    "pattern": "Post-Order / Pre-Order Node Swapping",
    "approach": "Swap root.left and root.right. Recursively invert left subtree and right subtree.",
    "insight": "Every subtree is mirrored by swapping left and right references all the way down to leaves.",
    "url": "https://leetcode.com/problems/invert-binary-tree/"
  },
  {
    "id": 46,
    "num": 46,
    "name": "Maximum Depth of Binary Tree",
    "difficulty": "easy",
    "topic": "Trees",
    "day": 25,
    "tags": [
      "trees",
      "dfs"
    ],
    "pattern": "Bottom-Up Tree Height Recursion",
    "approach": "If root is null return 0. Depth = 1 + max(maxDepth(root.left), maxDepth(root.right)).",
    "insight": "The height of any binary tree is 1 plus the maximum height of its children.",
    "url": "https://leetcode.com/problems/maximum-depth-of-binary-tree/"
  },
  {
    "id": 47,
    "num": 47,
    "name": "Diameter of Binary Tree",
    "difficulty": "easy",
    "topic": "Trees",
    "day": 26,
    "tags": [
      "trees",
      "dfs"
    ],
    "pattern": "Global Variable Updated During Depth Calculation",
    "approach": "Helper returns node height. At each node, diameter through it is left_height + right_height; track global max.",
    "insight": "Longest path between any two nodes doesn't necessarily pass through the tree root.",
    "url": "https://leetcode.com/problems/diameter-of-binary-tree/"
  },
  {
    "id": 48,
    "num": 48,
    "name": "Balanced Binary Tree",
    "difficulty": "easy",
    "topic": "Trees",
    "day": 26,
    "tags": [
      "trees",
      "dfs"
    ],
    "pattern": "Bottom-Up Early Exit Height Check",
    "approach": "Recursive helper returns height. If child is unbalanced (|h_l - h_r| > 1), return -1 immediately.",
    "insight": "Returning -1 on imbalance short-circuits recursion, achieving O(n) instead of O(n^2).",
    "url": "https://leetcode.com/problems/balanced-binary-tree/"
  },
  {
    "id": 49,
    "num": 49,
    "name": "Same Tree",
    "difficulty": "easy",
    "topic": "Trees",
    "day": 27,
    "tags": [
      "trees",
      "recursion"
    ],
    "pattern": "Dual Tree Simultaneous Traversal",
    "approach": "Both null -> True; one null or values differ -> False. Return isSame(p.left, q.left) and isSame(p.right, q.right).",
    "insight": "Structural equality requires both current node identity and recursive child equality.",
    "url": "https://leetcode.com/problems/same-tree/"
  },
  {
    "id": 50,
    "num": 50,
    "name": "Subtree of Another Tree",
    "difficulty": "easy",
    "topic": "Trees",
    "day": 27,
    "tags": [
      "trees",
      "recursion"
    ],
    "pattern": "Tree Traversal with Tree Match Sub-routine",
    "approach": "Check if isSame(root, subRoot). If not, recursively check isSubtree(root.left) or isSubtree(root.right).",
    "insight": "Treat each node of main tree as potential root of matching candidate subtree.",
    "url": "https://leetcode.com/problems/subtree-of-another-tree/"
  },
  {
    "id": 51,
    "num": 51,
    "name": "Lowest Common Ancestor of BST",
    "difficulty": "medium",
    "topic": "Trees",
    "day": 28,
    "tags": [
      "bst"
    ],
    "pattern": "BST Value Divergence Property",
    "approach": "If both p, q < root, go left. If both > root, go right. Otherwise, root is the split point (LCA).",
    "insight": "In a BST, the first node where paths to p and q diverge is their Lowest Common Ancestor.",
    "url": "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/"
  },
  {
    "id": 52,
    "num": 52,
    "name": "Binary Tree Level Order Traversal",
    "difficulty": "medium",
    "topic": "Trees",
    "day": 28,
    "tags": [
      "bfs",
      "queue"
    ],
    "pattern": "Queue-Based Breadth-First Search",
    "approach": "Use queue. In each loop iteration, capture queue length to process all nodes of current level together.",
    "insight": "Level size snapshot snapshots all nodes at depth d before depth d+1 nodes are enqueued.",
    "url": "https://leetcode.com/problems/binary-tree-level-order-traversal/"
  },
  {
    "id": 53,
    "num": 53,
    "name": "Binary Tree Right Side View",
    "difficulty": "medium",
    "topic": "Trees",
    "day": 29,
    "tags": [
      "bfs"
    ],
    "pattern": "Level-Order Traversal Last Element",
    "approach": "Perform BFS level-by-level. Add the last node of each level's queue iteration to output list.",
    "insight": "The rightmost visible node at depth d is simply the final node processed at level d.",
    "url": "https://leetcode.com/problems/binary-tree-right-side-view/"
  },
  {
    "id": 54,
    "num": 54,
    "name": "Count Good Nodes in Binary Tree",
    "difficulty": "medium",
    "topic": "Trees",
    "day": 29,
    "tags": [
      "dfs"
    ],
    "pattern": "DFS Path Max Propagation",
    "approach": "DFS passing running max value along path. If node.val >= max_so_far, increment good node count.",
    "insight": "Only need to remember the maximum ancestor value along the current DFS branch.",
    "url": "https://leetcode.com/problems/count-good-nodes-in-binary-tree/"
  },
  {
    "id": 55,
    "num": 55,
    "name": "Validate Binary Search Tree",
    "difficulty": "medium",
    "topic": "Trees",
    "day": 30,
    "tags": [
      "bst",
      "dfs"
    ],
    "pattern": "Valid Value Range Bounds [low, high]",
    "approach": "Pass permissible range (min_val, max_val). For left child upper bound is node.val; for right child lower bound is node.val.",
    "insight": "Checking only child against parent is insufficient; node must respect all ancestor bounds.",
    "url": "https://leetcode.com/problems/validate-binary-search-tree/"
  },
  {
    "id": 56,
    "num": 56,
    "name": "Kth Smallest Element in a BST",
    "difficulty": "medium",
    "topic": "Trees",
    "day": 30,
    "tags": [
      "bst"
    ],
    "pattern": "In-Order Traversal Counter",
    "approach": "In-order traversal visits BST in sorted ascending order. Decrement k at each step; return when k reaches 0.",
    "insight": "In-order (Left, Node, Right) guarantees sorted sequence traversal without sorting.",
    "url": "https://leetcode.com/problems/kth-smallest-element-in-a-bst/"
  },
  {
    "id": 57,
    "num": 57,
    "name": "Construct Binary Tree from Preorder & Inorder",
    "difficulty": "medium",
    "topic": "Trees",
    "day": 31,
    "tags": [
      "trees",
      "divide-and-conquer"
    ],
    "pattern": "Preorder Root & Inorder Subtree Partition",
    "approach": "Preorder first element is root. Find root in inorder array using map; elements left are left subtree, right are right.",
    "insight": "Inorder array defines boundary sizes for left and right subtrees; preorder defines root sequence.",
    "url": "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/"
  },
  {
    "id": 58,
    "num": 58,
    "name": "Binary Tree Maximum Path Sum",
    "difficulty": "hard",
    "topic": "Trees",
    "day": 31,
    "tags": [
      "trees",
      "dfs"
    ],
    "pattern": "DFS Max Contribution with Global Path Hook",
    "approach": "Helper returns max gain node can contribute to parent (max(0, val + max(left, right))). Update global max with left + right + val.",
    "insight": "A path can fork through a node as root, but can only extend one branch upward to its parent.",
    "url": "https://leetcode.com/problems/binary-tree-maximum-path-sum/"
  },
  {
    "id": 59,
    "num": 59,
    "name": "Serialize and Deserialize Binary Tree",
    "difficulty": "hard",
    "topic": "Trees",
    "day": 32,
    "tags": [
      "trees",
      "design"
    ],
    "pattern": "Preorder DFS with Null Delimiters",
    "approach": "Serialize via preorder: nulls as '#'. Deserialize using iterator or queue: pop next token to build root and children.",
    "insight": "Including null sentinels makes preorder representation uniquely reconstructible.",
    "url": "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/"
  },
  {
    "id": 60,
    "num": 60,
    "name": "Implement Trie (Prefix Tree)",
    "difficulty": "medium",
    "topic": "Tries",
    "day": 33,
    "tags": [
      "trie",
      "design"
    ],
    "pattern": "Tree of Character Hash/Arrays",
    "approach": "TrieNode has children map/array and isEndOfWord boolean. Insert, search, and startsWith follow edges char-by-char.",
    "insight": "Common prefixes share branches, enabling O(L) search independent of dictionary size.",
    "url": "https://leetcode.com/problems/implement-trie-prefix-tree/"
  },
  {
    "id": 61,
    "num": 61,
    "name": "Design Add and Search Words Data Structure",
    "difficulty": "medium",
    "topic": "Tries",
    "day": 33,
    "tags": [
      "trie",
      "backtracking"
    ],
    "pattern": "Trie Traversal with Wildcard Branching",
    "approach": "Standard Trie search. When '.' wildcard encountered, recursively branch into all existing child nodes.",
    "insight": "Wildcard '.' turns deterministic lookup into a recursive depth-first branch across children.",
    "url": "https://leetcode.com/problems/design-add-and-search-words-data-structure/"
  },
  {
    "id": 62,
    "num": 62,
    "name": "Word Search II",
    "difficulty": "hard",
    "topic": "Tries",
    "day": 34,
    "tags": [
      "trie",
      "backtracking",
      "matrix"
    ],
    "pattern": "Trie-Guided Backtracking on Grid",
    "approach": "Build Trie from words. DFS from each cell; prune branch if current prefix not in Trie. Mark visited in-place.",
    "insight": "Trie enables simultaneous prefix checking for thousands of words on each grid step.",
    "url": "https://leetcode.com/problems/word-search-ii/"
  },
  {
    "id": 63,
    "num": 63,
    "name": "Kth Largest Element in a Stream",
    "difficulty": "easy",
    "topic": "Heap / Priority Queue",
    "day": 35,
    "tags": [
      "heap"
    ],
    "pattern": "Fixed-Size Min-Heap of Size K",
    "approach": "Maintain min-heap of size k. When adding, push val; if heap size > k, pop min. Heap top is kth largest.",
    "insight": "Min-heap top holds smallest of the k largest elements, which is exactly the kth largest.",
    "url": "https://leetcode.com/problems/kth-largest-element-in-a-stream/"
  },
  {
    "id": 64,
    "num": 64,
    "name": "Last Stone Weight",
    "difficulty": "easy",
    "topic": "Heap / Priority Queue",
    "day": 35,
    "tags": [
      "heap"
    ],
    "pattern": "Max-Heap Smash Simulation",
    "approach": "Insert all weights into max-heap (negative in python). Pop top two, smash: if difference > 0, push difference back.",
    "insight": "Max-heap efficiently extracts the two heaviest stones in O(log n) per smash.",
    "url": "https://leetcode.com/problems/last-stone-weight/"
  },
  {
    "id": 65,
    "num": 65,
    "name": "K Closest Points to Origin",
    "difficulty": "medium",
    "topic": "Heap / Priority Queue",
    "day": 36,
    "tags": [
      "heap"
    ],
    "pattern": "Max-Heap of Size K or Quickselect",
    "approach": "Maintain max-heap of size k sorted by distance. If heap full and new point is closer than top, pop and push.",
    "insight": "A max-heap of size k keeps the k smallest elements overall in O(n log k) time.",
    "url": "https://leetcode.com/problems/k-closest-points-to-origin/"
  },
  {
    "id": 66,
    "num": 66,
    "name": "Kth Largest Element in an Array",
    "difficulty": "medium",
    "topic": "Heap / Priority Queue",
    "day": 36,
    "tags": [
      "heap",
      "quickselect"
    ],
    "pattern": "Min-Heap of Size K / Quickselect",
    "approach": "Keep min-heap of size k. Push elements; if size exceeds k, pop. Top is answer. Alternatively, Quickselect in O(n) avg.",
    "insight": "Retaining only k elements in memory bounds runtime to O(n log k).",
    "url": "https://leetcode.com/problems/kth-largest-element-in-an-array/"
  },
  {
    "id": 67,
    "num": 67,
    "name": "Task Scheduler",
    "difficulty": "medium",
    "topic": "Heap / Priority Queue",
    "day": 37,
    "tags": [
      "greedy",
      "heap"
    ],
    "pattern": "Max Frequency Cooling Formula",
    "approach": "Find max freq task M and count how many tasks share max freq. Formula: max(len(tasks), (M-1)*(n+1) + count_max).",
    "insight": "Most frequent tasks create idle slots that other tasks fill; math formula avoids explicit simulation.",
    "url": "https://leetcode.com/problems/task-scheduler/"
  },
  {
    "id": 68,
    "num": 68,
    "name": "Design Twitter",
    "difficulty": "medium",
    "topic": "Heap / Priority Queue",
    "day": 37,
    "tags": [
      "design",
      "heap"
    ],
    "pattern": "K-Way Merge with Max-Heap",
    "approach": "Track followees with sets. To get feed, merge most recent tweets from each followee using max-heap of size 10.",
    "insight": "Similar to Merge K Sorted Lists: each user's tweet history is already sorted by time.",
    "url": "https://leetcode.com/problems/design-twitter/"
  },
  {
    "id": 69,
    "num": 69,
    "name": "Find Median from Data Stream",
    "difficulty": "hard",
    "topic": "Heap / Priority Queue",
    "day": 38,
    "tags": [
      "heap",
      "design"
    ],
    "pattern": "Dual Heaps (Max-Heap Lower & Min-Heap Upper)",
    "approach": "Max-heap holds smaller half, min-heap holds larger half. Balance sizes (differ by <= 1). Median is top(s).",
    "insight": "Splits stream right down the middle; insertion is O(log n) and median query is O(1).",
    "url": "https://leetcode.com/problems/find-median-from-data-stream/"
  },
  {
    "id": 70,
    "num": 70,
    "name": "Subsets",
    "difficulty": "medium",
    "topic": "Backtracking",
    "day": 39,
    "tags": [
      "backtracking"
    ],
    "pattern": "Decision Tree (Include / Exclude)",
    "approach": "For each index, branch: either include nums[i] in subset and recurse, or skip nums[i] and recurse.",
    "insight": "Generates all 2^n combinations cleanly without duplicating elements.",
    "url": "https://leetcode.com/problems/subsets/"
  },
  {
    "id": 71,
    "num": 71,
    "name": "Combination Sum",
    "difficulty": "medium",
    "topic": "Backtracking",
    "day": 39,
    "tags": [
      "backtracking"
    ],
    "pattern": "DFS with Unlimited Element Re-use",
    "approach": "Sort candidates. DFS(start_idx, current_combo, remaining_target). Include candidates[i] and don't advance start.",
    "insight": "Passing start_idx prevents generating duplicate permutations like [2,3] and [3,2].",
    "url": "https://leetcode.com/problems/combination-sum/"
  },
  {
    "id": 72,
    "num": 72,
    "name": "Permutations",
    "difficulty": "medium",
    "topic": "Backtracking",
    "day": 40,
    "tags": [
      "backtracking"
    ],
    "pattern": "State Space Tree with Used Flags",
    "approach": "Track used elements with boolean array or set. Loop all elements; if not used, add, recurse, backtrack.",
    "insight": "Permutations consider order, so every unused element can be the next candidate at any depth.",
    "url": "https://leetcode.com/problems/permutations/"
  },
  {
    "id": 73,
    "num": 73,
    "name": "Subsets II",
    "difficulty": "medium",
    "topic": "Backtracking",
    "day": 40,
    "tags": [
      "backtracking"
    ],
    "pattern": "Sort + Skip Duplicate Siblings",
    "approach": "Sort array. When iterating candidates at same tree level, if i > start and nums[i] == nums[i-1], skip.",
    "insight": "Skipping identical elements at the same tree level prevents duplicate subsets.",
    "url": "https://leetcode.com/problems/subsets-ii/"
  },
  {
    "id": 74,
    "num": 74,
    "name": "Combination Sum II",
    "difficulty": "medium",
    "topic": "Backtracking",
    "day": 41,
    "tags": [
      "backtracking"
    ],
    "pattern": "Sort + Advance Pointer + Skip Sibling Duplicates",
    "approach": "Sort candidates. Each element used at most once (pass i+1). Skip duplicate siblings: if i > start and nums[i] == nums[i-1] continue.",
    "insight": "Combines Combination Sum with duplicate pruning at same recursion level.",
    "url": "https://leetcode.com/problems/combination-sum-ii/"
  },
  {
    "id": 75,
    "num": 75,
    "name": "Word Search",
    "difficulty": "medium",
    "topic": "Backtracking",
    "day": 41,
    "tags": [
      "backtracking",
      "matrix"
    ],
    "pattern": "Grid DFS with In-Place Visited Masking",
    "approach": "From each cell, DFS 4 directions matching word[k]. Temporarily replace board[r][c] with '#' to avoid revisiting.",
    "insight": "In-place character modification eliminates auxiliary space for visited set.",
    "url": "https://leetcode.com/problems/word-search/"
  },
  {
    "id": 76,
    "num": 76,
    "name": "Palindrome Partitioning",
    "difficulty": "medium",
    "topic": "Backtracking",
    "day": 42,
    "tags": [
      "backtracking"
    ],
    "pattern": "Prefix Palindrome Verification & Suffix Recurse",
    "approach": "From start index, check if prefix s[start:i+1] is palindrome. If yes, add to partition and recurse on i+1.",
    "insight": "Only branch into subproblems when current prefix is guaranteed to be a valid palindrome.",
    "url": "https://leetcode.com/problems/palindrome-partitioning/"
  },
  {
    "id": 77,
    "num": 77,
    "name": "Letter Combinations of a Phone Number",
    "difficulty": "medium",
    "topic": "Backtracking",
    "day": 42,
    "tags": [
      "backtracking"
    ],
    "pattern": "Cartesian Product via Backtracking",
    "approach": "Map digits to letters. Recurse depth by depth: for each letter corresponding to current digit, append and recurse.",
    "insight": "Depth equals input string length; branching factor is 3 or 4 choices per digit.",
    "url": "https://leetcode.com/problems/letter-combinations-of-a-phone-number/"
  },
  {
    "id": 78,
    "num": 78,
    "name": "N-Queens",
    "difficulty": "hard",
    "topic": "Backtracking",
    "day": 43,
    "tags": [
      "backtracking"
    ],
    "pattern": "Row-by-Row Placement with Diagonal Sets",
    "approach": "Place one queen per row. Maintain sets for cols, diag1 (r - c), and diag2 (r + c). Backtrack on dead ends.",
    "insight": "Diagonals are constant along (r - c) and (r + c), giving O(1) conflict validation.",
    "url": "https://leetcode.com/problems/n-queens/"
  },
  {
    "id": 79,
    "num": 79,
    "name": "Number of Islands",
    "difficulty": "medium",
    "topic": "Graphs",
    "day": 44,
    "tags": [
      "graphs",
      "bfs",
      "dfs"
    ],
    "pattern": "Grid Connected Components DFS/BFS",
    "approach": "Loop all cells. When '1' seen, increment count and sink entire connected island by converting '1's to '0's via DFS.",
    "insight": "Modifying grid in-place turns visited tracking into O(1) extra space.",
    "url": "https://leetcode.com/problems/number-of-islands/"
  },
  {
    "id": 80,
    "num": 80,
    "name": "Max Area of Island",
    "difficulty": "medium",
    "topic": "Graphs",
    "day": 44,
    "tags": [
      "graphs",
      "dfs"
    ],
    "pattern": "Flood Fill with Component Size Accumulation",
    "approach": "DFS returns 1 + sum(DFS of 4 neighbors). Mark visited cells as 0. Track global max area.",
    "insight": "Recursive DFS naturally tallies area from the leaves back to the initial cell.",
    "url": "https://leetcode.com/problems/max-area-of-island/"
  },
  {
    "id": 81,
    "num": 81,
    "name": "Clone Graph",
    "difficulty": "medium",
    "topic": "Graphs",
    "day": 45,
    "tags": [
      "graphs",
      "hash-map",
      "dfs"
    ],
    "pattern": "DFS/BFS with Cloned Node Lookup Map",
    "approach": "Map original nodes to new clones. When traversing neighbor, return existing clone from map or recurse to create it.",
    "insight": "Hash map prevents infinite loops in cyclic graphs and ensures each node is cloned once.",
    "url": "https://leetcode.com/problems/clone-graph/"
  },
  {
    "id": 82,
    "num": 82,
    "name": "Pacific Atlantic Water Flow",
    "difficulty": "medium",
    "topic": "Graphs",
    "day": 45,
    "tags": [
      "graphs",
      "dfs"
    ],
    "pattern": "Reverse Flow BFS/DFS from Ocean Borders",
    "approach": "Instead of flowing down from every cell, flow water uphill from Pacific and Atlantic borders. Find intersection.",
    "insight": "Searching inward from ocean edges reduces complexity from O((mn)^2) to O(mn).",
    "url": "https://leetcode.com/problems/pacific-atlantic-water-flow/"
  },
  {
    "id": 83,
    "num": 83,
    "name": "Surrounded Regions",
    "difficulty": "medium",
    "topic": "Graphs",
    "day": 46,
    "tags": [
      "graphs",
      "dfs"
    ],
    "pattern": "Border Flood Fill Preservation",
    "approach": "Run DFS from all border 'O's, marking reachable 'O's as safe ('T'). Afterwards, flip remaining 'O's to 'X', and 'T's to 'O'.",
    "insight": "Any 'O' connected to the boundary cannot be captured; boundary-first eliminates complex capture logic.",
    "url": "https://leetcode.com/problems/surrounded-regions/"
  },
  {
    "id": 84,
    "num": 84,
    "name": "Rotting Oranges",
    "difficulty": "medium",
    "topic": "Graphs",
    "day": 46,
    "tags": [
      "graphs",
      "bfs"
    ],
    "pattern": "Multi-Source Breadth-First Search",
    "approach": "Enqueue all initially rotten oranges. BFS level-by-level, rotting adjacent fresh oranges. Return minutes elapsed.",
    "insight": "Simultaneous infection propagation must be simulated with multi-source BFS, not DFS.",
    "url": "https://leetcode.com/problems/rotting-oranges/"
  },
  {
    "id": 85,
    "num": 85,
    "name": "Walls and Gates",
    "difficulty": "medium",
    "topic": "Graphs",
    "day": 47,
    "tags": [
      "graphs",
      "bfs"
    ],
    "pattern": "Multi-Source BFS Distance Propagation",
    "approach": "Enqueue all gates (0). BFS outward: for each empty room INF, set its distance = curr_dist + 1 and enqueue.",
    "insight": "Starting BFS from all destinations (gates) guarantees first arrival at any room is its shortest path.",
    "url": "https://leetcode.com/problems/walls-and-gates/"
  },
  {
    "id": 86,
    "num": 86,
    "name": "Course Schedule",
    "difficulty": "medium",
    "topic": "Graphs",
    "day": 47,
    "tags": [
      "graphs",
      "topological-sort"
    ],
    "pattern": "Cycle Detection / Kahn's Topological Sort",
    "approach": "Compute in-degrees. Enqueue nodes with in-degree 0. While queue not empty, pop node, decrement neighbors' in-degree.",
    "insight": "If processed node count == total courses, graph is a DAG (no deadlock cycle).",
    "url": "https://leetcode.com/problems/course-schedule/"
  },
  {
    "id": 87,
    "num": 87,
    "name": "Course Schedule II",
    "difficulty": "medium",
    "topic": "Graphs",
    "day": 48,
    "tags": [
      "graphs",
      "topological-sort"
    ],
    "pattern": "Kahn's Algorithm for Order Output",
    "approach": "Same as Course Schedule I: track in-degrees, queue 0-indegree courses, record the popping order into result list.",
    "insight": "Popping order directly yields valid prerequisite-respecting topological order.",
    "url": "https://leetcode.com/problems/course-schedule-ii/"
  },
  {
    "id": 88,
    "num": 88,
    "name": "Redundant Connection",
    "difficulty": "medium",
    "topic": "Graphs",
    "day": 48,
    "tags": [
      "graphs",
      "union-find"
    ],
    "pattern": "Disjoint Set Union (Union-Find)",
    "approach": "Initialize parent array. For each edge (u, v), find roots. If find(u) == find(v), edge creates cycle! Otherwise union.",
    "insight": "Adding an edge between two already-connected vertices introduces the redundant cycle.",
    "url": "https://leetcode.com/problems/redundant-connection/"
  },
  {
    "id": 89,
    "num": 89,
    "name": "Number of Connected Components in Graph",
    "difficulty": "medium",
    "topic": "Graphs",
    "day": 49,
    "tags": [
      "graphs",
      "union-find"
    ],
    "pattern": "Union-Find Component Decrement",
    "approach": "Start with count = n components. For each edge, if union(u, v) succeeds (different roots), decrement count.",
    "insight": "Each successful union merges two distinct components into one.",
    "url": "https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/"
  },
  {
    "id": 90,
    "num": 90,
    "name": "Graph Valid Tree",
    "difficulty": "medium",
    "topic": "Graphs",
    "day": 49,
    "tags": [
      "graphs",
      "union-find"
    ],
    "pattern": "Tree Invariant (N-1 Edges + Fully Connected)",
    "approach": "Check len(edges) == n - 1. Then use Union-Find or BFS to ensure all vertices belong to a single connected component.",
    "insight": "A graph is a valid tree if and only if it has exactly n-1 edges and contains no cycles.",
    "url": "https://leetcode.com/problems/graph-valid-tree/"
  },
  {
    "id": 91,
    "num": 91,
    "name": "Word Ladder",
    "difficulty": "hard",
    "topic": "Graphs",
    "day": 50,
    "tags": [
      "graphs",
      "bfs"
    ],
    "pattern": "Shortest Path BFS over Intermediate Patterns",
    "approach": "Map wildcard patterns like 'h*t' -> [hit, hot]. BFS from beginWord level-by-level to endWord.",
    "insight": "Transforming words into shared wildcard buckets allows finding 1-letter neighbors in O(26*L) instead of O(N*L).",
    "url": "https://leetcode.com/problems/word-ladder/"
  },
  {
    "id": 92,
    "num": 92,
    "name": "Climbing Stairs",
    "difficulty": "easy",
    "topic": "1-D Dynamic Programming",
    "day": 51,
    "tags": [
      "dp"
    ],
    "pattern": "Fibonacci Recurrence",
    "approach": "Ways to reach step i = ways(i-1) + ways(i-2). Maintain two variables for previous two steps.",
    "insight": "Each step is reachable only from the immediate step below or two steps below.",
    "url": "https://leetcode.com/problems/climbing-stairs/"
  },
  {
    "id": 93,
    "num": 93,
    "name": "Min Cost Climbing Stairs",
    "difficulty": "easy",
    "topic": "1-D Dynamic Programming",
    "day": 51,
    "tags": [
      "dp"
    ],
    "pattern": "Running Minimum Cost Transition",
    "approach": "dp[i] = cost[i] + min(dp[i-1], dp[i-2]). Maintain two running cost variables.",
    "insight": "Cost to step i depends strictly on the cheaper of the previous two landing points.",
    "url": "https://leetcode.com/problems/min-cost-climbing-stairs/"
  },
  {
    "id": 94,
    "num": 94,
    "name": "House Robber",
    "difficulty": "medium",
    "topic": "1-D Dynamic Programming",
    "day": 52,
    "tags": [
      "dp"
    ],
    "pattern": "Choice DP (Rob Current vs Skip Current)",
    "approach": "rob = max(rob_prev, prev_prev + nums[i]). Track two previous values rob1 and rob2.",
    "insight": "Cannot rob adjacent houses, so at each house choice is: rob it (+2 steps back) or skip it (1 step back).",
    "url": "https://leetcode.com/problems/house-robber/"
  },
  {
    "id": 95,
    "num": 95,
    "name": "House Robber II",
    "difficulty": "medium",
    "topic": "1-D Dynamic Programming",
    "day": 52,
    "tags": [
      "dp"
    ],
    "pattern": "Circular DP Reduction to Linear Subproblems",
    "approach": "Houses form a circle: cannot rob both first and last house. Run House Robber I on nums[1:] and nums[:-1]; take max.",
    "insight": "Breaking the circular dependency into two linear scenarios covers all valid optimal cases.",
    "url": "https://leetcode.com/problems/house-robber-ii/"
  },
  {
    "id": 96,
    "num": 96,
    "name": "Longest Palindromic Substring",
    "difficulty": "medium",
    "topic": "1-D Dynamic Programming",
    "day": 53,
    "tags": [
      "dp",
      "two-pointers"
    ],
    "pattern": "Expand Around Center",
    "approach": "For each index i, expand outward for odd center (i, i) and even center (i, i+1). Track longest valid palindrome.",
    "insight": "There are only 2n - 1 possible centers; expanding around each runs in O(n^2) time and O(1) space.",
    "url": "https://leetcode.com/problems/longest-palindromic-substring/"
  },
  {
    "id": 97,
    "num": 97,
    "name": "Palindromic Substrings",
    "difficulty": "medium",
    "topic": "1-D Dynamic Programming",
    "day": 53,
    "tags": [
      "dp",
      "two-pointers"
    ],
    "pattern": "Expand Around Center with Total Counter",
    "approach": "Expand outward from each center (i, i) and (i, i+1). Increment answer count for every matching expansion step.",
    "insight": "Every valid expansion step identifies one unique palindromic substring in O(1) space.",
    "url": "https://leetcode.com/problems/palindromic-substrings/"
  },
  {
    "id": 98,
    "num": 98,
    "name": "Decode Ways",
    "difficulty": "medium",
    "topic": "1-D Dynamic Programming",
    "day": 54,
    "tags": [
      "dp"
    ],
    "pattern": "1-Digit & 2-Digit Valid Transition",
    "approach": "dp[i] = (dp[i-1] if s[i-1] != '0') + (dp[i-2] if '10' <= s[i-2:i] <= '26').",
    "insight": "Similar to Fibonacci, but transitions are conditionally gated by numerical character validity.",
    "url": "https://leetcode.com/problems/decode-ways/"
  },
  {
    "id": 99,
    "num": 99,
    "name": "Coin Change",
    "difficulty": "medium",
    "topic": "1-D Dynamic Programming",
    "day": 54,
    "tags": [
      "dp"
    ],
    "pattern": "Unbounded Knapsack Min Cost",
    "approach": "dp[a] = min(dp[a], 1 + dp[a - coin]) for every coin. Initialize dp array with infinity; dp[0] = 0.",
    "insight": "Optimal coins for amount a builds upon previously computed optimal solutions for smaller amounts.",
    "url": "https://leetcode.com/problems/coin-change/"
  },
  {
    "id": 100,
    "num": 100,
    "name": "Maximum Product Subarray",
    "difficulty": "medium",
    "topic": "1-D Dynamic Programming",
    "day": 55,
    "tags": [
      "dp"
    ],
    "pattern": "Dual Min/Max Tracking for Negative Flips",
    "approach": "Track current_max and current_min. If num is negative, swap max and min. Multiply num and compare with num itself.",
    "insight": "Multiplying by a negative flips minimum into maximum; tracking both captures the highest product.",
    "url": "https://leetcode.com/problems/maximum-product-subarray/"
  },
  {
    "id": 101,
    "num": 101,
    "name": "Word Break",
    "difficulty": "medium",
    "topic": "1-D Dynamic Programming",
    "day": 55,
    "tags": [
      "dp"
    ],
    "pattern": "Prefix Segmentability Boolean DP",
    "approach": "dp[i] = True if any j < i has dp[j] == True and s[j:i] in wordDict. dp[0] = True.",
    "insight": "Problem decomposes into: is prefix s[0:j] breakable AND is the remainder s[j:i] a dictionary word?",
    "url": "https://leetcode.com/problems/word-break/"
  },
  {
    "id": 102,
    "num": 102,
    "name": "Longest Increasing Subsequence",
    "difficulty": "medium",
    "topic": "1-D Dynamic Programming",
    "day": 56,
    "tags": [
      "dp",
      "binary-search"
    ],
    "pattern": "Patience Sorting with Binary Search",
    "approach": "Maintain tails array. For each num, binary search its insertion point. If greater than all, append; else replace.",
    "insight": "Tails array maintains smallest tail for all increasing subsequences of length i in O(n log n).",
    "url": "https://leetcode.com/problems/longest-increasing-subsequence/"
  },
  {
    "id": 103,
    "num": 103,
    "name": "Partition Equal Subset Sum",
    "difficulty": "medium",
    "topic": "1-D Dynamic Programming",
    "day": 56,
    "tags": [
      "dp"
    ],
    "pattern": "0/1 Knapsack Target Sum",
    "approach": "Target is total_sum // 2. If total is odd, return False. Maintain boolean set of reachable sums: new_sum = s + num.",
    "insight": "Can we choose a subset of numbers that sums exactly to half of the total sum?",
    "url": "https://leetcode.com/problems/partition-equal-subset-sum/"
  },
  {
    "id": 104,
    "num": 104,
    "name": "Insert Interval",
    "difficulty": "medium",
    "topic": "Intervals",
    "day": 57,
    "tags": [
      "intervals"
    ],
    "pattern": "Three-Phase Linear Scan",
    "approach": "Add intervals ending before newInterval. Merge overlapping intervals into newInterval. Add remaining intervals.",
    "insight": "Non-overlapping intervals before and after can be added directly; only the middle overlaps need merging.",
    "url": "https://leetcode.com/problems/insert-interval/"
  },
  {
    "id": 105,
    "num": 105,
    "name": "Merge Intervals",
    "difficulty": "medium",
    "topic": "Intervals",
    "day": 57,
    "tags": [
      "intervals",
      "sorting"
    ],
    "pattern": "Sort by Start + Merge Overlaps",
    "approach": "Sort intervals by start time. If current start <= prev end, merge: prev.end = max(prev.end, curr.end). Else append.",
    "insight": "Sorting guarantees that any interval that could overlap with the current one must be adjacent in list.",
    "url": "https://leetcode.com/problems/merge-intervals/"
  },
  {
    "id": 106,
    "num": 106,
    "name": "Non-overlapping Intervals",
    "difficulty": "medium",
    "topic": "Intervals",
    "day": 58,
    "tags": [
      "intervals",
      "greedy"
    ],
    "pattern": "Greedy Interval Scheduling by End Time",
    "approach": "Sort by end time. If next interval starts before current ends, increment removal count. Otherwise update end.",
    "insight": "Always choosing interval with earliest finish time leaves maximal room for remaining intervals.",
    "url": "https://leetcode.com/problems/non-overlapping-intervals/"
  },
  {
    "id": 107,
    "num": 107,
    "name": "Meeting Rooms",
    "difficulty": "easy",
    "topic": "Intervals",
    "day": 58,
    "tags": [
      "intervals",
      "sorting"
    ],
    "pattern": "Sort by Start + Adjacent Collision Check",
    "approach": "Sort meetings by start time. Check if any intervals[i].start < intervals[i-1].end.",
    "insight": "One person can only attend all meetings if no two consecutive meetings overlap.",
    "url": "https://leetcode.com/problems/meeting-rooms/"
  },
  {
    "id": 108,
    "num": 108,
    "name": "Meeting Rooms II",
    "difficulty": "medium",
    "topic": "Intervals",
    "day": 59,
    "tags": [
      "intervals",
      "heap",
      "two-pointers"
    ],
    "pattern": "Chronological Event Sweep / Min-Heap",
    "approach": "Separate starts and ends, sort both. If start < end, need new room; else reuse room and advance end pointer.",
    "insight": "Peak concurrent overlapping meetings equals the maximum number of conference rooms required.",
    "url": "https://leetcode.com/problems/meeting-rooms-ii/"
  },
  {
    "id": 109,
    "num": 109,
    "name": "Minimum Interval to Include Each Query",
    "difficulty": "hard",
    "topic": "Intervals",
    "day": 59,
    "tags": [
      "intervals",
      "heap"
    ],
    "pattern": "Sorted Queries with Min-Heap of Active Intervals",
    "approach": "Sort intervals by start and queries by value. Add matching intervals to min-heap (size, end). Pop expired intervals.",
    "insight": "Processing queries in sorted order allows sweeping intervals once and popping dead intervals lazily.",
    "url": "https://leetcode.com/problems/minimum-interval-to-include-each-query/"
  },
  {
    "id": 110,
    "num": 110,
    "name": "Meeting Rooms III",
    "difficulty": "hard",
    "topic": "Intervals",
    "day": 60,
    "tags": [
      "intervals",
      "heap"
    ],
    "pattern": "Dual Heaps (Available Rooms + Busy Rooms)",
    "approach": "Min-heap for available room IDs; min-heap for busy rooms (endTime, roomId). Advance time and assign smallest ID.",
    "insight": "Tracking idle rooms and busy rooms with two priority queues simulates schedule dispatch in O(M log N).",
    "url": "https://leetcode.com/problems/meeting-rooms-iii/"
  },
  {
    "id": 111,
    "num": 111,
    "name": "Unique Paths",
    "difficulty": "medium",
    "topic": "2-D Dynamic Programming",
    "day": 61,
    "tags": [
      "dp",
      "math"
    ],
    "pattern": "Grid Path Combinatorics / Row DP",
    "approach": "dp[c] = dp[c] + dp[c-1]. Initialize single row of 1s. Alternatively, math: (m+n-2) choose (m-1).",
    "insight": "Robot can only arrive from top or left; single row array O(n) space suffices.",
    "url": "https://leetcode.com/problems/unique-paths/"
  },
  {
    "id": 112,
    "num": 112,
    "name": "Longest Common Subsequence",
    "difficulty": "medium",
    "topic": "2-D Dynamic Programming",
    "day": 61,
    "tags": [
      "dp"
    ],
    "pattern": "2D Grid Match/Mismatch Recurrence",
    "approach": "If text1[i] == text2[j], dp[i][j] = 1 + dp[i+1][j+1]. Else dp[i][j] = max(dp[i+1][j], dp[i][j+1]).",
    "insight": "Classic 2D alignment matrix: matching characters advance both pointers; non-matching branch max.",
    "url": "https://leetcode.com/problems/longest-common-subsequence/"
  },
  {
    "id": 113,
    "num": 113,
    "name": "Best Time to Buy and Sell Stock with Cooldown",
    "difficulty": "medium",
    "topic": "2-D Dynamic Programming",
    "day": 62,
    "tags": [
      "dp",
      "state-machine"
    ],
    "pattern": "State Machine DP (Held, Sold, Reset)",
    "approach": "3 states: held = max(held, reset - price); sold = held + price; reset = max(reset, prev_sold).",
    "insight": "Explicit finite-state machine models transitions and 1-day cooldown without complexity.",
    "url": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/"
  },
  {
    "id": 114,
    "num": 114,
    "name": "Coin Change II",
    "difficulty": "medium",
    "topic": "2-D Dynamic Programming",
    "day": 62,
    "tags": [
      "dp"
    ],
    "pattern": "Unbounded Knapsack Ways Combination",
    "approach": "For each coin: for amount from coin to target: dp[a] += dp[a - coin]. dp[0] = 1.",
    "insight": "Outer loop over coins guarantees combinations are counted without permutation duplicates.",
    "url": "https://leetcode.com/problems/coin-change-ii/"
  },
  {
    "id": 115,
    "num": 115,
    "name": "Target Sum",
    "difficulty": "medium",
    "topic": "2-D Dynamic Programming",
    "day": 63,
    "tags": [
      "dp"
    ],
    "pattern": "Subset Sum Algebraic Transformation",
    "approach": "P - N = target and P + N = sum => 2P = sum + target => P = (sum + target) / 2. Solve 0/1 knapsack for P.",
    "insight": "Algebraic reduction transforms +/- sign assignment into standard positive subset sum DP.",
    "url": "https://leetcode.com/problems/target-sum/"
  },
  {
    "id": 116,
    "num": 116,
    "name": "Interleaving String",
    "difficulty": "medium",
    "topic": "2-D Dynamic Programming",
    "day": 63,
    "tags": [
      "dp"
    ],
    "pattern": "2D Matrix Character Matching Grid",
    "approach": "dp[i][j] is True if s1[:i] and s2[:j] interleave s3[:i+j]. Check match with s1[i-1] or s2[j-1].",
    "insight": "Grid navigation: right step consumes from s2, down step consumes from s1.",
    "url": "https://leetcode.com/problems/interleaving-string/"
  },
  {
    "id": 117,
    "num": 117,
    "name": "Longest Increasing Path in a Matrix",
    "difficulty": "hard",
    "topic": "2-D Dynamic Programming",
    "day": 64,
    "tags": [
      "dp",
      "dfs",
      "memoization"
    ],
    "pattern": "DFS + Memoization on DAG",
    "approach": "Matrix strictly increases, so graph is naturally a DAG. DFS with memoization table dp[r][c] = 1 + max(neighbors).",
    "insight": "Strict inequality guarantees no cycles can exist; memoization ensures each cell computed once in O(mn).",
    "url": "https://leetcode.com/problems/longest-increasing-path-in-a-matrix/"
  },
  {
    "id": 118,
    "num": 118,
    "name": "Distinct Subsequences",
    "difficulty": "hard",
    "topic": "2-D Dynamic Programming",
    "day": 64,
    "tags": [
      "dp"
    ],
    "pattern": "String Alignment Combinations DP",
    "approach": "If s[i-1] == t[j-1], dp[i][j] = dp[i-1][j-1] + dp[i-1][j]. Else dp[i][j] = dp[i-1][j].",
    "insight": "When characters match, you can either match it (use both) or delete it from s (keep looking in s).",
    "url": "https://leetcode.com/problems/distinct-subsequences/"
  },
  {
    "id": 119,
    "num": 119,
    "name": "Edit Distance",
    "difficulty": "medium",
    "topic": "2-D Dynamic Programming",
    "day": 65,
    "tags": [
      "dp"
    ],
    "pattern": "Levenshtein Distance Matrix",
    "approach": "If word1[i] == word2[j] dp[i][j] = dp[i-1][j-1]. Else 1 + min(insert: dp[i][j-1], delete: dp[i-1][j], replace: dp[i-1][j-1]).",
    "insight": "Standard 3-operation recurrence solves string transformation in O(m * n).",
    "url": "https://leetcode.com/problems/edit-distance/"
  },
  {
    "id": 120,
    "num": 120,
    "name": "Burst Balloons",
    "difficulty": "hard",
    "topic": "2-D Dynamic Programming",
    "day": 65,
    "tags": [
      "dp"
    ],
    "pattern": "Reverse Thinking / Last Balloon Burst DP",
    "approach": "Pad with 1s. Think about which balloon is burst LAST in subarray (l, r). Coins = nums[l]*nums[k]*nums[r] + dp[l][k] + dp[k][r].",
    "insight": "Thinking backwards (which balloon bursts last) makes subproblems independent.",
    "url": "https://leetcode.com/problems/burst-balloons/"
  },
  {
    "id": 121,
    "num": 121,
    "name": "Regular Expression Matching",
    "difficulty": "hard",
    "topic": "2-D Dynamic Programming",
    "day": 66,
    "tags": [
      "dp",
      "recursion"
    ],
    "pattern": "Regex 2D State Table with Asterisk Lookahead",
    "approach": "If p[j+1] == '*', two options: use zero occurrences of char (dp[i][j+2]), or use one occurrence if chars match (dp[i+1][j]).",
    "insight": "'*' operator lookahead requires handling zero occurrences (skip 2 tokens in pattern) or consuming 1 char from string.",
    "url": "https://leetcode.com/problems/regular-expression-matching/"
  },
  {
    "id": 122,
    "num": 122,
    "name": "Maximum Subarray",
    "difficulty": "easy",
    "topic": "Greedy",
    "day": 67,
    "tags": [
      "greedy",
      "kadane"
    ],
    "pattern": "Kadane's Algorithm",
    "approach": "Running sum: curr_sum = max(num, curr_sum + num). Update max_sum.",
    "insight": "If running sum drops below 0, it can only hurt subsequent subarrays, so reset it.",
    "url": "https://leetcode.com/problems/maximum-subarray/"
  },
  {
    "id": 123,
    "num": 123,
    "name": "Jump Game",
    "difficulty": "medium",
    "topic": "Greedy",
    "day": 67,
    "tags": [
      "greedy"
    ],
    "pattern": "Greedy Reachable Horizon",
    "approach": "Track max_reach. For each index i, if i > max_reach return False. max_reach = max(max_reach, i + nums[i]).",
    "insight": "You don't care how you reach index i; you only care about extending the furthest reachable index.",
    "url": "https://leetcode.com/problems/jump-game/"
  },
  {
    "id": 124,
    "num": 124,
    "name": "Jump Game II",
    "difficulty": "medium",
    "topic": "Greedy",
    "day": 68,
    "tags": [
      "greedy",
      "bfs"
    ],
    "pattern": "BFS Range Horizons via Greedy Jumps",
    "approach": "Maintain current jump range [left, right]. Next range is [right + 1, furthest reachable from current range]. Increment jumps.",
    "insight": "Implicit BFS where each level represents positions reachable with one additional jump.",
    "url": "https://leetcode.com/problems/jump-game-ii/"
  },
  {
    "id": 125,
    "num": 125,
    "name": "Gas Station",
    "difficulty": "medium",
    "topic": "Greedy",
    "day": 68,
    "tags": [
      "greedy"
    ],
    "pattern": "Running Deficit Reset",
    "approach": "If total gas < total cost, return -1. Otherwise, iterate: tank += gas[i] - cost[i]. If tank < 0, reset tank = 0, start = i + 1.",
    "insight": "If station A cannot reach station B, no station between A and B can reach B either.",
    "url": "https://leetcode.com/problems/gas-station/"
  },
  {
    "id": 126,
    "num": 126,
    "name": "Hand of Straights",
    "difficulty": "medium",
    "topic": "Greedy",
    "day": 69,
    "tags": [
      "greedy",
      "hash-map"
    ],
    "pattern": "Min Element Greedy Grouping",
    "approach": "Count card frequencies. Sort unique cards or use min-heap. For smallest card c with count > 0, decrement c to c + groupSize - 1.",
    "insight": "The smallest card must be the start of a consecutive group; no other group can include it as an internal element.",
    "url": "https://leetcode.com/problems/hand-of-straights/"
  },
  {
    "id": 127,
    "num": 127,
    "name": "Merge Triplets to Form Target",
    "difficulty": "medium",
    "topic": "Greedy",
    "day": 69,
    "tags": [
      "greedy"
    ],
    "pattern": "Filter Incompatible Candidates",
    "approach": "Discard any triplet where any value > target. For remaining, verify if target components are covered.",
    "insight": "Any triplet exceeding the target in any index is poisonous; all others can be merged safely.",
    "url": "https://leetcode.com/problems/merge-triplets-to-form-target-triplet/"
  },
  {
    "id": 128,
    "num": 128,
    "name": "Partition Labels",
    "difficulty": "medium",
    "topic": "Greedy",
    "day": 70,
    "tags": [
      "greedy",
      "two-pointers"
    ],
    "pattern": "Last Occurrence Boundary Stretching",
    "approach": "Record last index of each character. Iterate string, updating end = max(end, last[c]). When i == end, cut partition.",
    "insight": "A partition can only close when all characters seen so far have reached their final appearance.",
    "url": "https://leetcode.com/problems/partition-labels/"
  },
  {
    "id": 129,
    "num": 129,
    "name": "Valid Parenthesis String",
    "difficulty": "medium",
    "topic": "Greedy",
    "day": 70,
    "tags": [
      "greedy"
    ],
    "pattern": "Range of Open Parentheses [cmin, cmax]",
    "approach": "Track min and max possible open parenthesis counts. '(' increases both; ')' decreases both; '*' expands range.",
    "insight": "Tracking the possible interval of open counts handles '*' branching in linear time without recursion.",
    "url": "https://leetcode.com/problems/valid-parenthesis-string/"
  },
  {
    "id": 130,
    "num": 130,
    "name": "Reconstruct Itinerary",
    "difficulty": "hard",
    "topic": "Advanced Graphs",
    "day": 71,
    "tags": [
      "graphs",
      "eulerian-path"
    ],
    "pattern": "Hierholzer's Algorithm (Eulerian Path)",
    "approach": "Build adjacency list sorted alphabetically. Post-order DFS: traverse edges, append airport to route upon backtrack, reverse at end.",
    "insight": "DFS that pops edges when leaving guarantees visits to dead-end loops are placed in correct order.",
    "url": "https://leetcode.com/problems/reconstruct-itinerary/"
  },
  {
    "id": 131,
    "num": 131,
    "name": "Min Cost to Connect All Points",
    "difficulty": "medium",
    "topic": "Advanced Graphs",
    "day": 71,
    "tags": [
      "graphs",
      "mst",
      "prims"
    ],
    "pattern": "Prim's Algorithm for Minimum Spanning Tree",
    "approach": "Maintain min-heap of (cost, point). Start at point 0. While visited < n, pop min cost edge to unvisited point, add its edges to heap.",
    "insight": "Greedily grows MST by picking closest unvisited point in O(E log V).",
    "url": "https://leetcode.com/problems/min-cost-to-connect-all-points/"
  },
  {
    "id": 132,
    "num": 132,
    "name": "Network Delay Time",
    "difficulty": "medium",
    "topic": "Advanced Graphs",
    "day": 72,
    "tags": [
      "graphs",
      "dijkstra"
    ],
    "pattern": "Dijkstra's Shortest Path Algorithm",
    "approach": "Min-heap of (time, node). Pop smallest, if visited continue. Update neighbor distances: push (time + weight, neighbor).",
    "insight": "Non-negative weights allow Dijkstra to settle shortest paths to all nodes in O(E log V).",
    "url": "https://leetcode.com/problems/network-delay-time/"
  },
  {
    "id": 133,
    "num": 133,
    "name": "Swim in Rising Water",
    "difficulty": "hard",
    "topic": "Advanced Graphs",
    "day": 72,
    "tags": [
      "graphs",
      "dijkstra",
      "binary-search"
    ],
    "pattern": "Modified Dijkstra (Minimax Path)",
    "approach": "Min-heap stores (max_elevation_so_far, r, c). Expand 4 directions. Weight of next cell is max(curr_time, grid[nr][nc]).",
    "insight": "Min-heap naturally explores paths with the lowest required water level first.",
    "url": "https://leetcode.com/problems/swim-in-rising-water/"
  },
  {
    "id": 134,
    "num": 134,
    "name": "Alien Dictionary",
    "difficulty": "hard",
    "topic": "Advanced Graphs",
    "day": 73,
    "tags": [
      "graphs",
      "topological-sort"
    ],
    "pattern": "Pairwise Lexicographical Prefix Graph",
    "approach": "Compare adjacent words in list to deduce directed edges (char1 -> char2). Run Kahn's algorithm for topological order.",
    "insight": "First differing character between adjacent words defines directed ordering constraint.",
    "url": "https://leetcode.com/problems/alien-dictionary/"
  },
  {
    "id": 135,
    "num": 135,
    "name": "Cheapest Flights Within K Stops",
    "difficulty": "medium",
    "topic": "Advanced Graphs",
    "day": 73,
    "tags": [
      "graphs",
      "bellman-ford"
    ],
    "pattern": "Bellman-Ford / BFS with Relaxations",
    "approach": "Run Bellman-Ford for at most k + 1 iterations. Use snapshot of previous distances to avoid using multiple edges in one step.",
    "insight": "Bellman-Ford relaxation depth directly bounds the number of flight stops.",
    "url": "https://leetcode.com/problems/cheapest-flights-within-k-stops/"
  },
  {
    "id": 136,
    "num": 136,
    "name": "Rotate Image",
    "difficulty": "medium",
    "topic": "Math & Geometry",
    "day": 74,
    "tags": [
      "matrix",
      "math"
    ],
    "pattern": "Transpose + Reverse Rows",
    "approach": "Transpose the matrix in-place (swap matrix[i][j] with matrix[j][i]). Then reverse each row.",
    "insight": "A 90-degree clockwise rotation is mathematically identical to a diagonal transpose followed by horizontal reflection.",
    "url": "https://leetcode.com/problems/rotate-image/"
  },
  {
    "id": 137,
    "num": 137,
    "name": "Spiral Matrix",
    "difficulty": "medium",
    "topic": "Math & Geometry",
    "day": 74,
    "tags": [
      "matrix",
      "simulation"
    ],
    "pattern": "Boundary Contraction Simulation",
    "approach": "Maintain 4 boundaries: top, bottom, left, right. Traverse right, top++; down, right--; left, bottom--; up, left++.",
    "insight": "Systematically shrink boundary rectangle after traversing each outer edge.",
    "url": "https://leetcode.com/problems/spiral-matrix/"
  },
  {
    "id": 138,
    "num": 138,
    "name": "Set Matrix Zeroes",
    "difficulty": "medium",
    "topic": "Math & Geometry",
    "day": 75,
    "tags": [
      "matrix"
    ],
    "pattern": "First Row & Column as In-Place Markers",
    "approach": "Use matrix[0][col] and matrix[row][0] to record zeroes. Use separate boolean flags for the first row and column.",
    "insight": "Reusing the matrix's own first row and column achieves true O(1) space complexity.",
    "url": "https://leetcode.com/problems/set-matrix-zeroes/"
  },
  {
    "id": 139,
    "num": 139,
    "name": "Happy Number",
    "difficulty": "easy",
    "topic": "Math & Geometry",
    "day": 75,
    "tags": [
      "math",
      "fast-and-slow"
    ],
    "pattern": "Floyd's Cycle Detection on Digit Sums",
    "approach": "Treat digit sum transformation as next pointer in linked list. Use slow and fast pointers to detect loop.",
    "insight": "Values are strictly bounded, so process must either reach 1 or cycle endlessly.",
    "url": "https://leetcode.com/problems/happy-number/"
  },
  {
    "id": 140,
    "num": 140,
    "name": "Plus One",
    "difficulty": "easy",
    "topic": "Math & Geometry",
    "day": 76,
    "tags": [
      "math"
    ],
    "pattern": "Right-to-Left Carry Propagation",
    "approach": "Iterate backwards: if digit < 9, increment and return digits immediately. Else set to 0. If all 9s, prepend [1].",
    "insight": "Early exit upon first non-9 digit minimizes operations; handles all 9s in O(n).",
    "url": "https://leetcode.com/problems/plus-one/"
  },
  {
    "id": 141,
    "num": 141,
    "name": "Pow(x, n)",
    "difficulty": "medium",
    "topic": "Math & Geometry",
    "day": 76,
    "tags": [
      "math",
      "recursion"
    ],
    "pattern": "Binary Exponentiation (Fast Power)",
    "approach": "If n == 0 return 1. If n is even, pow(x*x, n//2). If odd, x * pow(x, n-1). Handle negative n by inverting x.",
    "insight": "Doubling the base and halving the exponent reduces operations from O(n) to O(log n).",
    "url": "https://leetcode.com/problems/powx-n/"
  },
  {
    "id": 142,
    "num": 142,
    "name": "Multiply Strings",
    "difficulty": "medium",
    "topic": "Math & Geometry",
    "day": 77,
    "tags": [
      "math",
      "string"
    ],
    "pattern": "Positional Multiplication Array",
    "approach": "Result length <= len(num1) + len(num2). Multiply num1[i] * num2[j]; add product to res[i + j + 1] and carry to res[i + j].",
    "insight": "Multiplication of digits at index i and j maps deterministically into indices i+j and i+j+1.",
    "url": "https://leetcode.com/problems/multiply-strings/"
  },
  {
    "id": 143,
    "num": 143,
    "name": "Detect Squares",
    "difficulty": "medium",
    "topic": "Math & Geometry",
    "day": 77,
    "tags": [
      "design",
      "hash-map",
      "geometry"
    ],
    "pattern": "Diagonal Point Pair Detection",
    "approach": "For query point (x1, y1), iterate all stored points (x2, y2) on same diagonal (|x1-x2| == |y1-y2| > 0). Count points at (x1, y2) and (x2, y1).",
    "insight": "Two opposite diagonal vertices uniquely determine the other two required square vertices.",
    "url": "https://leetcode.com/problems/detect-squares/"
  },
  {
    "id": 144,
    "num": 144,
    "name": "Single Number",
    "difficulty": "easy",
    "topic": "Bit Manipulation",
    "day": 78,
    "tags": [
      "bit-manipulation"
    ],
    "pattern": "XOR Cancellation Property",
    "approach": "XOR all numbers in array together. Since a ^ a = 0 and a ^ 0 = a, duplicates cancel leaving single number.",
    "insight": "XOR is commutative and self-inverting, finding the unique number in O(n) time and O(1) space.",
    "url": "https://leetcode.com/problems/single-number/"
  },
  {
    "id": 145,
    "num": 145,
    "name": "Number of 1 Bits",
    "difficulty": "easy",
    "topic": "Bit Manipulation",
    "day": 78,
    "tags": [
      "bit-manipulation"
    ],
    "pattern": "Brian Kernighan's Algorithm",
    "approach": "While n > 0: n = n & (n - 1); increment count. Return count.",
    "insight": "n & (n - 1) flips the lowest set bit to 0, running in time proportional only to number of 1-bits.",
    "url": "https://leetcode.com/problems/number-of-1-bits/"
  },
  {
    "id": 146,
    "num": 146,
    "name": "Counting Bits",
    "difficulty": "easy",
    "topic": "Bit Manipulation",
    "day": 79,
    "tags": [
      "dp",
      "bit-manipulation"
    ],
    "pattern": "Bit Shift Dynamic Programming",
    "approach": "dp[i] = dp[i >> 1] + (i & 1). Bit shifting right halves number; LSB indicates odd/even.",
    "insight": "Number of bits in i is bits in (i // 2) plus 1 if i is odd.",
    "url": "https://leetcode.com/problems/counting-bits/"
  },
  {
    "id": 147,
    "num": 147,
    "name": "Reverse Bits",
    "difficulty": "easy",
    "topic": "Bit Manipulation",
    "day": 79,
    "tags": [
      "bit-manipulation"
    ],
    "pattern": "Bitwise Shift & Assembly",
    "approach": "For 32 iterations: bit = (n >> i) & 1; result |= (bit << (31 - i)). Return result.",
    "insight": "Extract least significant bits one by one and shift them into their mirrored 32-bit position.",
    "url": "https://leetcode.com/problems/reverse-bits/"
  },
  {
    "id": 148,
    "num": 148,
    "name": "Missing Number",
    "difficulty": "easy",
    "topic": "Bit Manipulation",
    "day": 80,
    "tags": [
      "bit-manipulation",
      "math"
    ],
    "pattern": "XOR Index and Value Cancellation",
    "approach": "XOR all array indices (0 to n) and array values. All matching elements cancel out, leaving the missing number.",
    "insight": "Avoids potential integer overflow from Gauss summation formula n*(n+1)//2.",
    "url": "https://leetcode.com/problems/missing-number/"
  },
  {
    "id": 149,
    "num": 149,
    "name": "Sum of Two Integers",
    "difficulty": "medium",
    "topic": "Bit Manipulation",
    "day": 80,
    "tags": [
      "bit-manipulation"
    ],
    "pattern": "Half-Adder Simulation with XOR and Carry",
    "approach": "Sum without carry is a ^ b; carry is (a & b) << 1. Repeat until carry is 0 (mask with 0xFFFFFFFF for 32-bit).",
    "insight": "XOR computes addition without carry; AND computes carry bits to be shifted.",
    "url": "https://leetcode.com/problems/sum-of-two-integers/"
  },
  {
    "id": 150,
    "num": 150,
    "name": "Reverse Integer",
    "difficulty": "medium",
    "topic": "Bit Manipulation",
    "day": 81,
    "tags": [
      "math"
    ],
    "pattern": "Modulo Extraction with 32-Bit Overflow Clamp",
    "approach": "Extract digit = x % 10, rev = rev * 10 + digit. If rev exceeds 32-bit signed limits [-2^31, 2^31 - 1], return 0.",
    "insight": "Check integer bounds before or after multiplication to safely handle 32-bit integer overflow.",
    "url": "https://leetcode.com/problems/reverse-integer/"
  }
];

// ---- TOPIC METADATA ----
const TOPIC_META = {
  "Arrays & Hashing":        { emoji: "🗂️", color: "#8B5CF6" },
  "Two Pointers":             { emoji: "👉", color: "#06B6D4" },
  "Sliding Window":           { emoji: "🪟", color: "#10B981" },
  "Stack":                    { emoji: "🥞", color: "#F59E0B" },
  "Binary Search":            { emoji: "🔍", color: "#EC4899" },
  "Linked List":              { emoji: "🔗", color: "#3B82F6" },
  "Trees":                    { emoji: "🌳", color: "#10B981" },
  "Tries":                    { emoji: "🌲", color: "#8B5CF6" },
  "Heap / Priority Queue":    { emoji: "⛰️", color: "#F97316" },
  "Backtracking":             { emoji: "↩️", color: "#EF4444" },
  "Graphs":                   { emoji: "🕸️", color: "#6366F1" },
  "Advanced Graphs":          { emoji: "🌐", color: "#8B5CF6" },
  "1-D Dynamic Programming":  { emoji: "🪜", color: "#F59E0B" },
  "2-D Dynamic Programming":  { emoji: "📐", color: "#EC4899" },
  "Greedy":                   { emoji: "💰", color: "#10B981" },
  "Intervals":                { emoji: "⏱️", color: "#3B82F6" },
  "Math & Geometry":          { emoji: "📐", color: "#F97316" },
  "Bit Manipulation":         { emoji: "⚡", color: "#06B6D4" }
};

// ---- PHASES DEFINITION ----
const PHASES = [
  {
    id: 1,
    emoji: "🌱",
    name: "Foundation Phase",
    desc: "Days 1–30 • Questions 1–50 • Core Data Structures, Two Pointers, Stacks & Binary Search",
    filter: q => q.num >= 1 && q.num <= 50
  },
  {
    id: 2,
    emoji: "🔥",
    name: "Intermediate Phase",
    desc: "Days 31–70 • Questions 51–110 • Trees, Heaps, Backtracking, Graphs & 1-D DP",
    filter: q => q.num >= 51 && q.num <= 110
  },
  {
    id: 3,
    emoji: "⚡",
    name: "Mastery Phase",
    desc: "Days 71–90 • Questions 111–150 • 2-D DP, Advanced Graphs, Greedy & Hard Problems",
    filter: q => q.num >= 111 && q.num <= 150
  }
];

// ---- APPLICATION STATE ----
const STORAGE_KEY = 'dsa_master_150_solved';
const START_DATE_KEY = 'dsa_master_start_date';

let solvedSet = new Set();
let activeFilter = 'all';
let searchQuery = '';
let activeHintId = null;

// Load persisted state
function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const arr = JSON.parse(raw);
      solvedSet = new Set(arr);
    }
  } catch (e) {
    console.error('Failed to load state', e);
  }

  if (!localStorage.getItem(START_DATE_KEY)) {
    localStorage.setItem(START_DATE_KEY, new Date().toISOString());
  }
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...solvedSet]));
  } catch (e) {
    console.error('Failed to save state', e);
  }
}

// Calculate days streak & days left
function calculateDays() {
  const startStr = localStorage.getItem(START_DATE_KEY) || new Date().toISOString();
  const start = new Date(startStr);
  const now = new Date();
  const diffDays = Math.max(1, Math.floor((now - start) / (1000 * 60 * 60 * 24)) + 1);
  const daysLeft = Math.max(0, 90 - diffDays + 1);
  
  const streakEl = document.getElementById('streakDays');
  if (streakEl) streakEl.textContent = solvedSet.size > 0 ? String(diffDays) : '0';

  const daysLeftEl = document.getElementById('daysLeft');
  if (daysLeftEl) daysLeftEl.textContent = String(daysLeft);

  const goalEl = document.getElementById('todayGoal');
  if (goalEl) {
    const remainingQuestions = Math.max(0, 150 - solvedSet.size);
    const dailyTarget = daysLeft > 0 ? Math.ceil(remainingQuestions / daysLeft) : remainingQuestions;
    goalEl.textContent = String(Math.max(1, dailyTarget));
  }
}

// Toast notification
function showToast(msg) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3200);
}

// Check milestone
function checkMilestones(newCount) {
  const milestones = [25, 50, 75, 100, 125, 150];
  if (milestones.includes(newCount)) {
    if (newCount === 150) {
      const modal = document.getElementById('congratsModal');
      if (modal) modal.classList.add('open');
    } else {
      showToast(`🏆 Milestone Reached: ${newCount} questions solved! Keep going!`);
    }
  }
}

// Update dashboard metrics
function updateDashboard() {
  const total = QUESTIONS.length;
  const solved = solvedSet.size;
  const percent = total > 0 ? Math.round((solved / total) * 100) : 0;

  // Nav
  const navComp = document.getElementById('navCompleted');
  if (navComp) navComp.textContent = String(solved);

  // Ring
  const ringFill = document.getElementById('progressRing');
  const ringPercent = document.getElementById('ringPercent');
  if (ringPercent) ringPercent.textContent = percent + '%';
  if (ringFill) {
    const circumference = 314;
    const offset = circumference - (percent / 100) * circumference;
    ringFill.style.strokeDashoffset = offset;
  }

  // Difficulty breakdowns
  let easySolved = 0, medSolved = 0, hardSolved = 0;
  let easyTotal = 0, medTotal = 0, hardTotal = 0;

  QUESTIONS.forEach(q => {
    if (q.difficulty === 'easy') {
      easyTotal++;
      if (solvedSet.has(q.id)) easySolved++;
    } else if (q.difficulty === 'medium') {
      medTotal++;
      if (solvedSet.has(q.id)) medSolved++;
    } else if (q.difficulty === 'hard') {
      hardTotal++;
      if (solvedSet.has(q.id)) hardSolved++;
    }
  });

  const easyEl = document.getElementById('easyCount');
  if (easyEl) easyEl.textContent = `${easySolved}/${easyTotal}`;

  const medEl = document.getElementById('mediumCount');
  if (medEl) medEl.textContent = `${medSolved}/${medTotal}`;

  const hardEl = document.getElementById('hardCount');
  if (hardEl) hardEl.textContent = `${hardSolved}/${hardTotal}`;

  // Update tab counts
  const easyTab = document.querySelector('.tab-count.easy-c');
  if (easyTab) easyTab.textContent = String(easyTotal);
  const medTab = document.querySelector('.tab-count.medium-c');
  if (medTab) medTab.textContent = String(medTotal);
  const hardTab = document.querySelector('.tab-count.hard-c');
  if (hardTab) hardTab.textContent = String(hardTotal);
  const allTab = document.querySelector('.filter-tab[data-filter="all"] .tab-count');
  if (allTab) allTab.textContent = String(total);

  calculateDays();
}

// Filter questions
function getFilteredQuestions() {
  return QUESTIONS.filter(q => {
    // Tab filter
    if (activeFilter === 'easy' && q.difficulty !== 'easy') return false;
    if (activeFilter === 'medium' && q.difficulty !== 'medium') return false;
    if (activeFilter === 'hard' && q.difficulty !== 'hard') return false;
    if (activeFilter === 'done' && !solvedSet.has(q.id)) return false;
    if (activeFilter === 'pending' && solvedSet.has(q.id)) return false;

    // Search query (search name, pattern, tags, or question number)
    if (searchQuery) {
      const qNum = String(q.num);
      const name = q.name.toLowerCase();
      const tags = (q.tags || []).join(' ').toLowerCase();
      if (!name.includes(searchQuery) && !qNum.includes(searchQuery) && !tags.includes(searchQuery)) {
        return false;
      }
    }

    return true;
  });
}

// Render question table rows
function renderQuestionRow(q) {
  const isDone = solvedSet.has(q.id);
  const isHintOpen = activeHintId === q.id;
  const meta = TOPIC_META[q.topic] || { emoji: "💡" };

  return `
    <div class="q-row ${isDone ? 'done' : ''}" id="q-row-${q.id}">
      <div class="q-checkbox-wrap">
        <input type="checkbox" class="q-checkbox" data-id="${q.id}" ${isDone ? 'checked' : ''} aria-label="Mark ${q.name} as done" />
      </div>
      <div class="q-num">#${q.num}</div>
      <div class="q-name-wrap">
        <span class="q-name" title="${q.name}">${q.name}</span>
      </div>
      <div>
        <span class="q-difficulty diff-${q.difficulty}">
          <span class="pb-dot" style="background: currentColor;"></span>
          ${q.difficulty.charAt(0).toUpperCase() + q.difficulty.slice(1)}
        </span>
      </div>
      <div class="q-day">Day ${q.day}</div>
      <div class="hint-wrap">
        <button class="hint-btn ${isHintOpen ? 'active' : ''}" onclick="toggleHint(event, ${q.id})" title="View pattern hint & topic">
          💡 Hint
        </button>
        <div class="hint-popup ${isHintOpen ? 'open' : ''}" id="hint-popup-${q.id}">
          <div class="hint-popup-header">
            <span class="hint-topic-emoji">${meta.emoji}</span>
            <span style="font-weight:700; color:#fff; font-size:13px;">Topic: <span style="color:#C4B5FD;">${q.topic}</span></span>
            <button class="hint-close" onclick="closeHint(event, ${q.id})" aria-label="Close Hint">✕</button>
          </div>
          <div class="hint-pattern">
            <span class="hint-label-tag">🟣 Core Pattern</span>
            ${q.pattern || 'Standard DSA pattern'}
          </div>
          <div class="hint-approach">
            <span class="hint-label-tag">🔵 Recommended Approach</span>
            ${q.approach || 'Break into subproblems, solve iteratively or recursively.'}
          </div>
          <div class="hint-insight">
            <span class="hint-label-tag">🟡 Key Insight</span>
            ${q.insight || 'Analyze constraints and identify trade-offs.'}
          </div>
        </div>
      </div>
      <div class="q-link-wrap">
        <a href="${q.url}" target="_blank" rel="noopener noreferrer" class="q-link" title="Open ${q.name} on LeetCode">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
            <polyline points="15 3 21 3 21 9"/>
            <line x1="10" y1="14" x2="21" y2="3"/>
          </svg>
        </a>
      </div>
    </div>
  `;
}

// Render questions grouped by Phase
function renderQuestions() {
  const container = document.getElementById('questionsContainer');
  if (!container) return;

  const filtered = getFilteredQuestions();

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="empty-state" style="text-align:center; padding:60px 20px;">
        <div style="font-size:48px; margin-bottom:12px;">🔍</div>
        <h3 style="font-size:18px; color:var(--text); margin-bottom:6px;">No questions found</h3>
        <p style="color:var(--text-muted); font-size:14px;">Try clearing your search or switching filter tabs.</p>
      </div>
    `;
    return;
  }

  let html = '';

  PHASES.forEach(phase => {
    const phaseQuestions = filtered.filter(phase.filter);
    if (phaseQuestions.length === 0) return;

    // Phase progress
    const allInPhase = QUESTIONS.filter(phase.filter);
    const solvedInPhase = allInPhase.filter(q => solvedSet.has(q.id)).length;
    const phasePercent = Math.round((solvedInPhase / allInPhase.length) * 100);

    html += `
      <section class="phase-group">
        <div class="phase-header">
          <span class="phase-emoji">${phase.emoji}</span>
          <div class="phase-info">
            <span class="phase-label">${phase.name}</span>
            <span class="phase-desc">${phase.desc}</span>
          </div>
          <div class="phase-progress">
            <div class="phase-bar-wrap">
              <div class="phase-bar" style="width: ${phasePercent}%"></div>
            </div>
            <span class="phase-count">${solvedInPhase}/${allInPhase.length}</span>
          </div>
        </div>

        <div class="q-table">
          <div class="q-table-head">
            <div class="q-th">Done</div>
            <div class="q-th">#</div>
            <div class="q-th">Problem Name</div>
            <div class="q-th">Difficulty</div>
            <div class="q-th">Day</div>
            <div class="q-th">Hint</div>
            <div class="q-th" style="justify-content:center;">Solve</div>
          </div>
          ${phaseQuestions.map(renderQuestionRow).join('')}
        </div>
      </section>
    `;
  });

  container.innerHTML = html;
  attachCheckboxListeners();
}

// Toggle hint popup
window.toggleHint = function(e, id) {
  e.stopPropagation();
  if (activeHintId === id) {
    activeHintId = null;
  } else {
    activeHintId = id;
  }
  
  // Fast DOM toggle without full re-render
  document.querySelectorAll('.hint-popup').forEach(p => p.classList.remove('open'));
  document.querySelectorAll('.hint-btn').forEach(b => b.classList.remove('active'));

  if (activeHintId !== null) {
    const popup = document.getElementById(`hint-popup-${activeHintId}`);
    const btn = popup ? popup.previousElementSibling : null;
    if (popup) popup.classList.add('open');
    if (btn) btn.classList.add('active');
  }
};

window.closeHint = function(e, id) {
  e.stopPropagation();
  activeHintId = null;
  const popup = document.getElementById(`hint-popup-${id}`);
  const btn = popup ? popup.previousElementSibling : null;
  if (popup) popup.classList.remove('open');
  if (btn) btn.classList.remove('active');
};

// Close hints when clicking outside
document.addEventListener('click', (e) => {
  if (activeHintId !== null && !e.target.closest('.hint-wrap')) {
    activeHintId = null;
    document.querySelectorAll('.hint-popup').forEach(p => p.classList.remove('open'));
    document.querySelectorAll('.hint-btn').forEach(b => b.classList.remove('active'));
  }
});

// Attach checkbox event listeners
function attachCheckboxListeners() {
  document.querySelectorAll('.q-checkbox').forEach(cb => {
    cb.addEventListener('change', (e) => {
      const qId = parseInt(e.target.getAttribute('data-id'), 10);
      const row = document.getElementById(`q-row-${qId}`);
      if (e.target.checked) {
        solvedSet.add(qId);
        if (row) row.classList.add('done');
        showToast(`🎉 Marked #${qId} as completed!`);
        checkMilestones(solvedSet.size);
      } else {
        solvedSet.delete(qId);
        if (row) row.classList.remove('done');
      }
      saveState();
      updateDashboard();

      // Update phase counters and bars dynamically
      updatePhaseHeaders();
    });
  });
}

function updatePhaseHeaders() {
  PHASES.forEach(phase => {
    const allInPhase = QUESTIONS.filter(phase.filter);
    const solvedInPhase = allInPhase.filter(q => solvedSet.has(q.id)).length;
    const phasePercent = Math.round((solvedInPhase / allInPhase.length) * 100);
    
    // Find phase group container
    document.querySelectorAll('.phase-group').forEach(group => {
      const label = group.querySelector('.phase-label');
      if (label && label.textContent.includes(phase.name)) {
        const bar = group.querySelector('.phase-bar');
        const count = group.querySelector('.phase-count');
        if (bar) bar.style.width = phasePercent + '%';
        if (count) count.textContent = `${solvedInPhase}/${allInPhase.length}`;
      }
    });
  });
}

// Filter tabs listener
function initFilterTabs() {
  const tabs = document.querySelectorAll('.filter-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      activeFilter = tab.getAttribute('data-filter');
      renderQuestions();
    });
  });
}

// Search input listener
function initSearch() {
  const input = document.getElementById('searchInput');
  if (!input) return;
  let timer;
  input.addEventListener('input', (e) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      searchQuery = e.target.value.trim().toLowerCase();
      renderQuestions();
    }, 180);
  });
}

// Reset button listener
function initReset() {
  const btn = document.getElementById('btnReset');
  if (!btn) return;
  btn.addEventListener('click', () => {
    const confirmed = confirm('Are you sure you want to reset all your progress? This cannot be undone.');
    if (confirmed) {
      solvedSet.clear();
      saveState();
      updateDashboard();
      renderQuestions();
      showToast('Progress has been reset.');
    }
  });
}

// Modal close
function initModal() {
  const modal = document.getElementById('congratsModal');
  const closeBtn = document.getElementById('modalClose');
  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('open');
    });
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('open');
    });
  }
}

// ---- INITIALIZATION ----
function boot() {
  loadState();
  updateDashboard();
  initFilterTabs();
  initSearch();
  initReset();
  initModal();
  renderQuestions();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot);
} else {
  boot();
}
