import { formatDate, slugify, truncateText, calculateReadingTime } from './utils';

describe('Utils', () => {
  describe('formatDate', () => {
    it('formats dates correctly', () => {
      expect(formatDate('2023-01-15')).toBe('January 15, 2023');
      expect(formatDate('2022-12-31')).toBe('December 31, 2022');
    });
    
    it('handles invalid dates', () => {
      expect(formatDate('invalid-date')).toBe('Invalid date');
    });
  });
  
  describe('slugify', () => {
    it('converts strings to slugs', () => {
      expect(slugify('Hello World')).toBe('hello-world');
      expect(slugify('Web Development & Design')).toBe('web-development-design');
      expect(slugify('NextJS 2023!')).toBe('nextjs-2023');
    });
  });
  
  describe('truncateText', () => {
    it('truncates text to specified length', () => {
      expect(truncateText('Hello world', 5)).toBe('Hello...');
      expect(truncateText('Short', 10)).toBe('Short'); // No truncation needed
    });
  });
  
  describe('calculateReadingTime', () => {
    it('calculates reading time based on words', () => {
      // 200 words should be 1 minute
      const text200Words = Array(200).fill('word').join(' ');
      expect(calculateReadingTime(text200Words)).toBe('1 min read');
      
      // 300 words should be 2 minutes
      const text300Words = Array(300).fill('word').join(' ');
      expect(calculateReadingTime(text300Words)).toBe('2 min read');
    });
  });
});