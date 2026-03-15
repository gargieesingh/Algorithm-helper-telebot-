const {Telegraf} = require('telegraf');
require('dotenv').config();

const bot = new Telegraf('process.env.BOT_TOKEN');


//ALGORITHMS LOGIC
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
};


//BOT COMMANDS

bot.start((ctx) => {
    ctx.reply(
        `Welcome to the Algorithm Bot!\n\n
        You can ask me about different algorithms and I'll provide you with their implementation and complexities.\n\n` +
        `Available algorithms:\n
        - Binary Search\n
        - Linear Search\n\n
        Just type the name of the algorithm you want to learn about! `
    );
});

bot.command('help', (ctx)=>{
    ctx.reply(
        `How to use this bot:\n\n` +
        `1. Start the bot by typing /start\n` +
        `2. Ask about an algorithm by typing its name (e.g. "binary search")`
    )
});

bot.on('text', (ctx) => {
    const input = ctx.message.text.toLowerCase().trim();
    const result = algorithms[input];
    if (result) {
        ctx.reply(result);
    } else {
        ctx.reply("Sorry, I don't know that algorithm. Please try another one!");
    }
});

bot.launch();
console.log('Bot is running...');

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
