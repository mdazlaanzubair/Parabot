import axios from "axios";

// model configurations
const url =
  "https://api-inference.huggingface.co/models/facebook/bart-large-cnn";
const API_TOKEN = import.meta.env.VITE_SUMMARY_TOKEN;

// function to hit api to get summarized response
export const summarizeIt = async (text, min = null, max = null) => {
  const payload = {
    inputs: text,
    parameter: {
      min_length: min,
      max_length: max,
      repetition_penalty: 25,
    },
    options: {
      use_cache: true,
      wait_for_model: true,
    },
  };

  const response = await axios.post(url, payload, {
    header: {
      Authorization: `Bearer ${API_TOKEN}`,
      "content-type": "application/json",
    },
  });
  return response.data[0].summary_text;
};

// function to perform text analysis
export const textAnalyzer = (text) => {
  // const analyzedResults = {
  //   counts: {
  //     chars: "",
  //     words: "",
  //     sentences: "",
  //   },
  //   wordFrequencies: {
  //     frequent: [],
  //     notFrequent: [],
  //   },
  //   readTime: 0,
  // };
  const analyzedResults = {
    counts: wordCounter(text),
    wordFrequencies: wordFrequency(text),
    readTime: calculateReadTime(text),
  };

  return analyzedResults;
};

// function that counts characters, words & sentences
const wordCounter = (text) => {
  // Get the number of words in the text
  const words = text.trim().split(/\s+/);
  const wordCount = words.length;

  // Get the number of characters in the text
  const chars = text.length;

  // Get the number of sentences in the text
  const sentences = text.split(/[.!?]/);
  const sentenceCount = sentences.length - 1;

  // Return the results as an object
  return {
    words: wordCount,
    chars,
    sentences: sentenceCount,
  };
};

// function to calculate word frequency
const wordFrequency = (text) => {
  const words = text.trim().split(/\s+/);
  const frequencies = {};
  const singleWords = [];
  const multipleWords = [];

  for (let word of words) {
    if (frequencies[word]) {
      frequencies[word]++;
    } else {
      frequencies[word] = 1;
    }
  }

  for (let word in frequencies) {
    if (frequencies[word] === 1) {
      singleWords.push(word);
    } else {
      multipleWords.push({ word: word, frequency: frequencies[word] });
    }
  }

  return { notFrequent: singleWords, frequent: multipleWords };
};

// function to calculate read time
const calculateReadTime = (text, wordsPerMinute = 150) => {
  const words = text.trim().split(/\s+/);
  const numWords = words.length;
  const minutes = numWords / wordsPerMinute;
  const readTime = Math.ceil(minutes);
  return readTime;
};
