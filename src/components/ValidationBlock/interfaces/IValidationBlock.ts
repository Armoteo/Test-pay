export default interface IValidationBlock {
  classesForValidation: (text: string) => string;
  styleType?: string;
}
