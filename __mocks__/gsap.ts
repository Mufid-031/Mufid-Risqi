export const gsap = {
  registerPlugin: jest.fn(),
  to: jest.fn(),
  from: jest.fn(),
  fromTo: jest.fn(),
  set: jest.fn(),
  timeline: jest.fn(() => ({
    to: jest.fn(),
    from: jest.fn(),
    fromTo: jest.fn(),
  })),
};

export const ScrollTrigger = {
  create: jest.fn(),
  refresh: jest.fn(),
  kill: jest.fn(),
};

export default gsap;
