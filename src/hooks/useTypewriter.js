import { useState, useEffect } from 'react'

/**
 * Typewriter effect — cycles through an array of strings
 */
export function useTypewriter(words = [], { typeSpeed = 80, deleteSpeed = 50, pauseTime = 2000 } = {}) {
  const [display, setDisplay] = useState('')
  const [wordIdx, setWordIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (words.length === 0) return

    const word = words[wordIdx]

    const timer = setTimeout(() => {
      if (!deleting) {
        setCharIdx((c) => c + 1)
        setDisplay(word.slice(0, charIdx + 1))
        if (charIdx + 1 >= word.length) {
          setTimeout(() => setDeleting(true), pauseTime)
        }
      } else {
        setCharIdx((c) => c - 1)
        setDisplay(word.slice(0, charIdx - 1))
        if (charIdx - 1 <= 0) {
          setDeleting(false)
          setWordIdx((i) => (i + 1) % words.length)
          setCharIdx(0)
          setDisplay('')
        }
      }
    }, deleting ? deleteSpeed : typeSpeed + Math.random() * 40)

    return () => clearTimeout(timer)
  }, [charIdx, deleting, wordIdx, words, typeSpeed, deleteSpeed, pauseTime])

  return display
}
