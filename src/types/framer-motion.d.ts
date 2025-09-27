declare module 'framer-motion' {
  export interface Variant {
    [key: string]: any;
  }
  
  export const motion: any;
  
  // Add other common framer-motion exports that you use
  export const AnimatePresence: any;
  export const useAnimation: () => any;
  export const useMotionValue: (initialValue: any) => any;
  export const useTransform: (value: any, inputRange: any[], outputRange: any[]) => any;
}