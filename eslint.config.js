import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import jsxA11y from 'eslint-plugin-jsx-a11y';

export default [
	{ ignores: [ 'dist' ]
	},
	{
		files: [ '**/*.{js,jsx}' ],
		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.browser,
			parserOptions: {
				ecmaVersion: 'latest',
				ecmaFeatures: { jsx: true },
				sourceType: 'module',
			},
		},
		settings: {
			react: {
				version: '18.3'
			}
		},
		plugins: {
			react,
			'react-hooks': reactHooks,
			'react-refresh': reactRefresh,
			'jsx-a11y': jsxA11y
		},
		rules: {
			...js.configs.recommended.rules,
			...react.configs.recommended.rules,
			...react.configs['jsx-runtime'].rules,
			...reactHooks.configs.recommended.rules,
			'react/jsx-no-target-blank': 'off',
			'react-refresh/only-export-components': [
				'warn',
				{ allowConstantExport: true },
			],
			'semi': [ 'error', 'always' ],
			'indent': [ 'error', 'tab' ],
			'no-mixed-spaces-and-tabs': 'error',
			'eol-last': [ 'error', 'always' ],
			'newline-per-chained-call': [ 'error', { ignoreChainWithDepth: 2 } ],
			'space-in-parens': [ 'error', 'always' ],
			'array-bracket-spacing': [ 'error', 'always' ],
			'object-curly-spacing': [ 'error', 'always' ],

			// Accessibility rules
			'jsx-a11y/alt-text': 'warn',
			'jsx-a11y/anchor-has-content': 'warn',
			'jsx-a11y/aria-role': 'warn',
			'jsx-a11y/no-static-element-interactions': 'warn'
		},
	},
];
