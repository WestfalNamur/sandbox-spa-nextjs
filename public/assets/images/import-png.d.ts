// Need to use img imports with Typescript
declare module "*.png" {
  const value: any;
  export default value;
}
