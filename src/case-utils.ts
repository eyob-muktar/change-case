export type CaseType = 'UPPERCASE' | 'lowercase' | 'camelCase' | 'PascalCase' | 'snake_case' | 'dash-case';

export function convertCase(str: string, caseType: CaseType): string {
  switch (caseType) {
    case 'UPPERCASE':
      return str.toUpperCase();
    case 'lowercase':
      return str.toLowerCase();
    case 'camelCase':
      return toCamelCase(str);
    case 'PascalCase':
      return toPascalCase(str);
    case 'snake_case':
      return toSnakeCase(str);
    case 'dash-case':
      return toDashCase(str);
    default:
      throw new Error('Invalid case type');
  }
}

// Helper Functions

function toCamelCase(str: string): string {
  return str
    .replace(/[^a-zA-Z0-9]+(.)/g, (_, char) => char.toUpperCase())
    .replace(/^./, (char) => char.toLowerCase());
}

function toPascalCase(str: string): string {
  return str
    .replace(/[^a-zA-Z0-9]+(.)/g, (_, char) => char.toUpperCase())
    .replace(/^./, (char) => char.toUpperCase());
}

function toSnakeCase(str: string): string {
  return str
    .replace(/([a-z])([A-Z])/g, '$1_$2')
    .replace(/[^a-zA-Z0-9]+/g, '_')
    .toLowerCase();
}

function toDashCase(str: string): string {
  return str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[^a-zA-Z0-9]+/g, '-')
    .toLowerCase();
}
