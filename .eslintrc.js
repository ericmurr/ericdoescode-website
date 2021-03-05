module.exports = {
    'env': {
        'browser': true,
        'es2021': true,
        'node': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:testing-library/react',
        'prettier',
        'eslint-config-prettier' 
    ],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 12,
        'sourceType': 'module'
    },
    'plugins': [
        'react',
        'import',
        '@typescript-eslint'
    ],
    'rules': {
        /** Formatting Rules - disabled in favor of Prettier */
        // 'array-bracket-spacing': ['warn', 'never'],
        // 'block-spacing': ['warn', 'always'],
        // 'brace-style': ['error', 'stroustrup'],
        // 'jsx-quotes': 'error',
        // 'indent': ['warn', 4],
        // 'key-spacing': ['warn', { beforeColon: false, afterColon: true }],
        // 'keyword-spacing': ['warn', { before: true, after: true }],
        // 'new-cap': ['error', { newIsCap: true }],
        // 'no-array-constructor': 'error',
        // 'no-bitwise': 'error',
        // 'no-mixed-spaces-and-tabs': 'off',
        // 'no-new-object': 'error',
        // 'template-curly-spacing': ['warn', 'never'],
        // 'quote-props': ['warn', 'as-needed', { keywords: true }],
        // 'arrow-parens': ['warn', 'as-needed', { requireForBlockBody: false }],
        // 'arrow-spacing': 'warn',
        // 'comma-dangle': ['warn', 'always-multiline'],
        // 'implicit-arrow-linebreak': ['warn', 'beside'],
        // 'no-multi-spaces': 'warn',
        // 'nonblock-statement-body-position': ['error', 'beside'],
        // 'react/jsx-equals-spacing': ['warn', 'never'],
        // 'react/jsx-one-expression-per-line': ['error', { allow: 'single-child' }],

        /**
         * JavaScript
         *
         * EcmaScript syntax/structure and `import` rules.
         */

        /** Disable requirement of switch default cases. */
        'default-case': 'off',
        /** If a default import is requested, this rule will report if there is no default export in the imported module. */
        'import/default': 'warn',
        /** Reports funny business with exports, like repeated exports of names or defaults. */
        'import/export': 'error',
        // Enforces names exist at the time they are dereferenced, when imported as a full namespace (i.e. import * as foo from './foo'; foo.bar(); will report if bar is not exported by ./foo.).
        'import/namespace': 'error',
        /** Forbids the use of mutable exports with var or let. */
        'import/no-mutable-exports': 'error',

        /**
         * Reports:
            modules without any exports
            individual exports not being statically imported or requireed from other modules in the same project
         */
        'import/no-unused-modules': 'error',
        /** Use this rule to prevent unnecessary path segments in import and require statements. */
        'import/no-useless-path-segments': 'warn',
        /** This rule is aimed at catching debugging code that should be removed and popup UI elements that should be replaced with less obtrusive, custom UIs. */
        'no-alert': 'error',
        /** This rule disallows calls to methods of the console object. */
        'no-console': 'off',
        /** This rule requires that all imports from a single module exists in a single import statement. */
        'no-duplicate-imports': 'warn',
        /** This rule aims to eliminate assignments from return statements. As such, it will warn whenever an assignment is found as part of return. */
        'no-return-assign': 'error',
        /** This rule is aimed at eliminating unused variables, functions, and function parameters. */
        'no-unused-vars': [
            'error',
            {
                args: 'after-used',
                ignoreRestSiblings: true,
                varsIgnorePattern: 'jsx|React',
            },
        ],
        /** This rule flags escapes that can be safely removed without changing behavior. */
        'no-useless-escape': 'warn',
        /** This rule is aimed at discouraging the use of var and encouraging the use of const or let instead. */
        'no-var': 'warn',
        /** ECMAScript 6 provides a concise form for defining object literal methods and properties. This syntax can make defining complex object literals much cleaner */
        'object-shorthand': [
            'warn',
            'always',
            { avoidExplicitReturnArrows: true },
        ],
        /** This rule enforces variables to be declared either together or separately per function ( for var) or block (for let and const) scope. */
        'one-var': ['error', { let: 'never', const: 'never' }],
        /** This rule is aimed at flagging variables that are declared using let keyword, but never reassigned after the initial assignment. */
        'prefer-const': [
            'warn',
            {
                destructuring: 'any',
                ignoreReadBeforeAssign: false,
            },
        ],
        /** This rule is aimed to flag usage of arguments variables. */
        'prefer-rest-params': 'error',

        /**
         * Fixable Rules `eslint --fix`
         */

        /** This rule is aimed to flag usage of + operators with strings. */
        'prefer-template': 'error',
        /** Prefer dot notation whenever possible. */
        'dot-notation': 'warn',
        /** Enforce a convention in the order of require() / import statements. */
        'import/order': [
            'warn',
            { alphabetize: { order: 'asc', caseInsensitive: true } },
        ],
        /**
         * React
         *
         * Additional rules for `react` and overrides for rules from `react-app`
         */
        /** Enforce the `type` attribute exists on <button> */
        'react/button-has-type': 'error',
        /** Default props must be listed in prop types. */
        'react/default-props-match-prop-types': 'error',

        /**
         * Fixable Rules `eslint --fix`
         */

        /** Enforce shorthand for passing props explicitly defined as `true` */
        'react/jsx-boolean-value': 'error',
        /** Enforce shorthand syntax for React.Fragment */
        'react/jsx-fragments': 'warn',
        /** Disallow passing duplicate props to components */
        'react/jsx-no-duplicate-props': 'error',
        'react/jsx-no-undef': 'error',
        'react/jsx-uses-react': 'warn',
        'react/jsx-uses-vars': 'warn',
        'react/no-access-state-in-setstate': 'error',
        'react/no-array-index-key': 'error',
        'react/no-direct-mutation-state': 'error',
        'react/no-render-return-value': 'error',
        'react/no-this-in-sfc': 'error',
        'react/no-typos': 'error',
        'react/prop-types': 'warn',
        'react/react-in-jsx-scope': 'warn',
        'react/no-danger': 'error',
        // Forbid className and style
        'react/forbid-component-props': 'warn',
        'react/jsx-filename-extension': [
            'error',
            { extensions: ['.tsx', '.jsx'] },
        ],
        'react/boolean-prop-naming': [
            'error',
            {
                rule: '^(is|has|should)[A-Z]([A-Za-z0-9]?)+',
                validateNested: true,
            },
        ],
        'react/jsx-handler-names': 'error',
        'react/jsx-pascal-case': 'error',
        'react/jsx-no-useless-fragment': 'error',
        /**
         * React Testing Library
         *
         * Additional RTL linting rules that are not included in `plugin:testing-library/react`
         */
        /** Re-enable when upgraded to new RTL */
        // 'testing-library/prefer-screen-queries': 'warn',
        'testing-library/no-wait-for-empty-callback': 'error',
        'testing-library/no-manual-cleanup': 'warn',
        'testing-library/prefer-explicit-assert': 'error',
        // 'testing-library/prefer-presence-queries': 'error',
        'testing-library/consistent-data-testid': [
            'warn',
            {
                // kebab-case, letters and numbers
                testIdPattern: '^[a-z0-9-]*$',
            },
        ],
        /** Fixable Rules `eslint --fix` */
        'testing-library/prefer-wait-for': 'error',

        /** disable the rule for all files */ 
        '@typescript-eslint/explicit-module-boundary-types': 'off'
    },
    'overrides': [
        {
            /** enable the rule specifically for TypeScript files */
            'files': ['*.ts', '*.tsx'],
            'rules': {
                '@typescript-eslint/explicit-module-boundary-types': ['error']
            }
        }
    ]
};
