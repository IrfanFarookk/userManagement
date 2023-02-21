module.exports = {
    roots : ['<rootDir>'],
    transform: {
        '^.+\\.tsx?$' : 'ts-jest'
    },
    testRegex: '(/tests/.*)',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
}