import globals from 'globals';
import tseslint from 'typescript-eslint';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all
});

export default [
	{
		ignores: ['dist']
	},
	...tseslint.configs.recommended,
	{
		rules: {
			'@typescript-eslint/no-explicit-any': 'warn',
			'@typescript-eslint/no-unused-vars': 'warn'
		}
	},
	{
		languageOptions: {
			ecmaVersion: 5,
			sourceType: 'script',

			parserOptions: {
				project: './tsconfig.eslint.json'
			}
		}
	},
	{
		files: ['**/*.test.ts'],

		languageOptions: {
			globals: {
				...globals.mocha
			}
		},

		rules: {
			'@typescript-eslint/no-unused-expressions': 'off',
			'import/no-relative-packages': 'off'
		}
	}
];
