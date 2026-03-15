const {Telegraf} = require('telegraf');
require('dotenv').config();

const bot = new Telegraf('process.env.BOT_TOKEN');

const algorithms = {
    "binary search" : `
    Binary Seach (cpp):
    
    int binarySearch(int arr[], int l, int r, int x){
        if (r >= l) {
            int mid = l + (r - l) / 2;
            if (arr[mid] == x) return mid;
            if (arr[mid] > x) return binarySearch(arr, l, mid - 1, x);
            return binarySearch(arr, mid + 1, r, x);
        }
        return -1;
    }
        
    Time Complexity: O(log n)
    Space Complexity: O(1)
    `,
    "linear search": `
    Linear Search (cpp):
    
    int linearSearch(int arr[], int n, int x) {
        for (int i = 0; i < n; i++) {
            if (arr[i] == x) return i;
        }
            return -1;
    }
    
    Time Complexity: O(n)
    Space Complexity: O(1)`
}

