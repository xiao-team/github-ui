const shell = require('shelljs')
const path = require('path')
const fs = require('fs-extra')
const ora = require('ora')
const { readText } = require('./utils/tools')
const components = path.resolve(__dirname, '../src/components')
const indexPath = path.resolve(__dirname, '../src/components/index.js')
const templates = path.resolve(
    __dirname,
    `./templates/components/componentsIndex.js`
)

const componentsIndexFileUpdate = function () {
    const updateOra = ora('引入组件到项目中...').start()
    const files = fs.readdirSync(components)
    let comps = []
    files.map((file) => {
        if (file !== 'index.js') {
            comps.push(file)
        }
    })
    let import_componentsText = comps
        .map((name) => {
            return `import ${name} from './${name}';`
        })
        .join('\n')
    let componentsText =
        '{\n' +
        comps
            .map((name) => {
                return `    ${name},`
            })
            .join('\n') +
        '\n}'
    let idxContent = readText(templates)

    idxContent = idxContent
        .replace('%%import_components%%', import_componentsText)
        .replace('%%components%%', componentsText)

    fs.writeFileSync(indexPath, idxContent)
    shell.exec(`prettier --write ${indexPath}`, {
        silent: true,
    })
    updateOra.succeed('更新完成!')
}

module.exports = componentsIndexFileUpdate
