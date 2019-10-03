import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(mode, replace = false) {
    let newHistory = [...history];
    
    if(replace) { // If replace is true
      newHistory[newHistory.length -1] = mode; // Subtract the last one from the newHistory Array
    } else {
    newHistory.push(mode); // Otherwise, push onto the newHistory Array with mdode
  }

  setMode(mode); // Update and set mode
  setHistory(newHistory); // Update and set new History

  }

  function back() {
  if(history.length === 1) {
    return
  }
    history.pop();
    setMode(history[history.length - 1]);
  }
  return { mode, transition, back }
}