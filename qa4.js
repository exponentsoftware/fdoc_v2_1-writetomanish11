function longestIncreasingSubsequence(arr) {
    const n = arr.length;
    const dp = new Array(n).fill(1);
    for (let i = 1; i < n; i++) {
      for (let j = 0; j < i; j++) {
        if (arr[j] < arr[i]) {
          dp[i] = Math.max(dp[i], dp[j] + 1);
        }
      }
    }
    return Math.max(...dp);
  }

  const arr = [1, 4, 2, 5, 3];
  console.log(longestIncreasingSubsequence(arr)); // 3

