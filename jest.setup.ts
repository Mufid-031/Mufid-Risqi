import '@testing-library/jest-dom'

jest.mock('gsap', () => ({
  registerPlugin: jest.fn(),
  to: jest.fn(),
  from: jest.fn(),
  fromTo: jest.fn(),
  timeline: jest.fn(() => ({
    to: jest.fn(),
    from: jest.fn(),
    fromTo: jest.fn(),
  })),
}));

jest.mock('gsap/ScrollTrigger', () => ({}));