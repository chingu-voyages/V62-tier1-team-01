import { GoogleGenerativeAI } from "@google/generative-ai";
import { useState } from "react";

/**
 * Get a JSON value from localStorage
 * @param {string} key - key to get localStorage item parsed to JSON format
 * @returns a JSON object if it exists, else a empty string
 */
export function getJSON(key) {
  const jsonObj = JSON.parse(localStorage.getItem(key));
  if (jsonObj !== null) {
    return jsonObj;
  }
  return "";
}

/**
 * Get an item from localStorage
 * @param {string} key - key to get localStorage item
 * @returns a string if it exists, else a empty string
 */
export function saveItem(key, value) {
  const valueString = typeof value !== "string" ? JSON.stringify(value) : value;
  localStorage.setItem(key, valueString);
}

/**
 * Check that an item exists in localStorage
 * @param {string} key - key of localStorage item
 * @returns a boolean showing whether the item exists or not
 */
export function checkItemExists(key) {
  const item = localStorage.getItem(key);
  return item !== null;
}

/**
 * Delete an item from localStorage
 * @param {string} key - key to remove localStorage item
 */
export function removeItem(key) {
  localStorage.removeItem(key);
}

/**
 * Send contextInfo with userPrompt to Google Gemini AI API
 * @param {string} contextInfo - prompt with user custom data
 */
export async function sendRequestToApi(contextInfo) {
  const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({
    model: "gemini-3.1-flash-lite",
  });
  const result = await model.generateContent(contextInfo);
  return result;
}

/**
 * Concatenate userPrompt string with the default prompt
 * @param {string} userPrompt - user custom data
 */
export function getUserPrompt(userPrompt) {
  const contextInfo = `
    You are an AI Career Path Generator.

    1. Your role is to transform a user's career goal into a clear, personalized, step-by-step learning journey.

    2. This is a web application that helps users understand what to learn next, removing guesswork by providing a tailored path based on their current skill level and desired career.

    3. The user's career goal is: ${userPrompt.career}
        The user's background and existing skills are: ${userPrompt.skills}
        The user's current skill level is: ${userPrompt.experienceLevel}
        The user time commitment is: ${userPrompt.timeCommitment} per week

    4. Generate a structured learning path that:
      - Is practical and actionable
      - Progresses step by step from the user's current level and based on his weekly commitment
      - Includes relevant skills, tools, and technologies
      - Is aligned with real-world job requirements

    5. If the user input is not a valid career goal, ask the user to reformulate the request.

    6. Output format:
      - Return a list of JSON objects with title, description, and time estimate in hours (to complete the task)
      - If the user's listed skills are incomplete, irrelevant, contradictory, or do not make sense for the career goal, do not blindly follow them
      - Do not return any other text except the JSON
  `;
  return contextInfo;
}
