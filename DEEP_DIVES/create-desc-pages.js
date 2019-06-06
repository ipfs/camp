const Fs = require('fs')

Fs.readFileSync('./README.md', 'utf8')
  .split('### Topics')[1]
  .split('**Note**:')[0]
  .trim()
  .split('\n') // get rows
  .slice(2) // remove header
  .map(line => line.split('|'))
  .forEach(([ _, num, title, desc ], i) => {
    if (!title) return

    title = title.trim()
    desc = desc.trim()

    const filePath = './' + (i + 1).toString().padStart(2, '0') + '-' + title
      .trim()
      .toLowerCase()
      .replace(' 📦', '')
      .replace(/ |\//g, '-')
      .replace(/,|\(|\)|:|!|\?/g, '')
      .replace(/-+/g, '-') + '.md'

    Fs.writeFileSync(filePath, `# ${title.replace(' 📦', '')}

${desc || '<Short summary of topic including Open Problem(s) to solve>'}

## Goal

<Define what we would get if the Open Problem(s) are solved for this Deep Dive>

## Requirements to consider

<Do we have requirements (i.e. work with 1MM nodes)?>

## Where to learn about it

<List of talks, links to github issues, code, notes and so on>
`)

    // Output the table with the title linked to the file
    console.log(`| ${i + 1} | [${title}](${filePath}) | ${desc} |`)
  })
