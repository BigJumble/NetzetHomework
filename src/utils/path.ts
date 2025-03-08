/**
 * Adds the base path to the source URL if it exists
 * @param src The source URL of the image/asset
 * @returns The source URL with base path if it exists
 */
export const getBasePath = (src: string): string => {
  return process.env.ROUTE
    ? `/${process.env.ROUTE}${src}` 
    : src;
};
