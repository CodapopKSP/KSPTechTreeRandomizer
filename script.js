

class TechNode {
    constructor(id, title, description, cost, hideEmpty,
        nodeName, anyToUnlock, icon, pos, scale, Parent1, Parent2) {
            this.id=id
            this.title=title
            this.description=description
            this.cost=cost
            this.hideEmpty=hideEmpty
            this.nodeName=nodeName
            this.anyToUnlock=anyToUnlock
            this.icon=icon
            this.pos=pos
            this.scale=scale
            this.Parent1=Parent1
            this.Parent2=Parent2
    }
}

class Parent {
    constructor(parentID, lineFrom, lineTo) {
        this.parentID=parentID
		this.lineFrom=lineFrom
		this.lineTo=lineTo
    }
}



document.getElementById('parseButton').addEventListener('click', function() {
    const fileInput = document.getElementById('fileInput');
    const output = document.getElementById('output');

    if (fileInput.files.length === 0) {
        alert('Please select a file!');
        return;
    }

    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = function(event) {
        const fileContent = event.target.result;
        const lines = fileContent.split('\n');

        const randomized = parseNodes(lines);

    };

    reader.readAsText(file);
});

function parseNodes(Lines) {
    let StartlessNodeList = []
    let StartNode;
    for (let l = 0; l < Lines.length; l++) {
        let parent1;
		let parent2;
		if (Lines[l].includes('RDNode')) {
			if (Lines[l + 1].includes('{')) {
				let id = Lines[l + 2].substring(7).trim();
                let title = Lines[l + 3].substring(10).trim();
                let description = Lines[l + 4].substring(16).trim();
                let cost = Lines[l + 5].substring(9).trim();
                let hideEmpty = Lines[l + 6].substring(14).trim();
                let nodeName = Lines[l + 7].substring(13).trim();
                let anyToUnlock = Lines[l + 8].substring(16).trim();
                let icon = Lines[l + 9].substring(9).trim();
                let pos = Lines[l + 10].substring(8).trim();
                let scale = Lines[l + 11].substring(10).trim();

                let parent1, parent2;

                if (Lines[l + 12].includes('Parent')) {
                    let parent1_parentID = Lines[l + 14].substring(14).trim();
                    let parent1_lineFrom = Lines[l + 15].substring(14).trim();
                    let parent1_lineTo = Lines[l + 16].substring(12).trim();
                    parent1 = new Parent(parent1_parentID, parent1_lineFrom, parent1_lineTo);
                }

                if (Lines[l + 18].includes('Parent')) {
                    let parent2_parentID = Lines[l + 20].substring(14).trim();
                    let parent2_lineFrom = Lines[l + 21].substring(14).trim();
                    let parent2_lineTo = Lines[l + 22].substring(12).trim();
                    parent2 = new Parent(parent2_parentID, parent2_lineFrom, parent2_lineTo);
                }

                if (!id.includes('start')) {
                    StartlessNodeList.push(new TechNode(id, title, description, cost, hideEmpty,
                        nodeName, anyToUnlock, icon, pos, scale, parent1, parent2));
                } else {
                    StartNode = new TechNode(id, title, description, cost, hideEmpty,
                        nodeName, anyToUnlock, icon, pos, scale, parent1, parent2);
                }
            }
        }
        let parent1NodeList = {};
        let parent2NodeList = {};

        for (let n = 0; n < StartlessNodeList.length; n++) {
            if (StartlessNodeList[n].Parent1 !== undefined && StartlessNodeList[n].Parent1 !== null) {
                for (let p = 0; p < StartlessNodeList.length; p++) {
                    if (StartlessNodeList[p].id === StartlessNodeList[n].Parent1.parentID) {
                        parent1NodeList[n] = [p];
                    }
                    if (StartlessNodeList[n].Parent1.parentID === 'start') {
                        parent1NodeList[n] = 'start';
                    }
                }
            }
            if (StartlessNodeList[n].Parent2 !== undefined && StartlessNodeList[n].Parent2 !== null) {
                for (let p = 0; p < StartlessNodeList.length; p++) {
                    if (StartlessNodeList[p].id === StartlessNodeList[n].Parent2.parentID) {
                        parent2NodeList[n] = [p];
                    }
                    if (StartlessNodeList[n].Parent2.parentID === 'start') {
                        parent2NodeList[n] = 'start';
                    }
                }
            }
        }

        let nodeShuffleList = {};
        for (let n = 0; n < StartlessNodeList.length; n++) {
            nodeShuffleList[n] = { id: StartlessNodeList[n].id };
            nodeShuffleList[n].title = StartlessNodeList[n].title;
            nodeShuffleList[n].description = StartlessNodeList[n].description;
            nodeShuffleList[n].icon = StartlessNodeList[n].icon;
            nodeShuffleList[n].nodeName = StartlessNodeList[n].nodeName;
        }
        Object.keys(nodeShuffleList).forEach(function(n) {
            let randomIndex = Math.floor(Math.random() * StartlessNodeList.length);
            [nodeShuffleList[n], nodeShuffleList[randomIndex]] = [nodeShuffleList[randomIndex], nodeShuffleList[n]];
        });
        for (let n = 0; n < StartlessNodeList.length; n++) {
            StartlessNodeList[n].id = nodeShuffleList[n].id;
            StartlessNodeList[n].title = nodeShuffleList[n].title;
            StartlessNodeList[n].description = nodeShuffleList[n].description;
            StartlessNodeList[n].icon = nodeShuffleList[n].icon;
            StartlessNodeList[n].nodeName = nodeShuffleList[n].nodeName;
        }

        for (let n = 0; n < StartlessNodeList.length; n++) {
            for (let p in parent1NodeList) {
                if (n === parseInt(p)) {
                    let x = parent1NodeList[n].toString();
                    if (x === 'start') {
                        StartlessNodeList[n].Parent1.parentID = 'start';
                    } else {
                        x = x.replace('[', '').replace(']', '');
                        StartlessNodeList[n].Parent1.parentID = StartlessNodeList[parseInt(x)].id;
                    }
                }
            }
            for (let p in parent2NodeList) {
                if (n === parseInt(p)) {
                    let x = parent2NodeList[n].toString();
                    if (x === 'start') {
                        StartlessNodeList[n].Parent2.parentID = 'start';
                    } else {
                        x = x.replace('[', '').replace(']', '');
                        StartlessNodeList[n].Parent2.parentID = StartlessNodeList[parseInt(x)].id;
                    }
                }
            }
        }
    }
        
    let NodeList = [StartNode];
    for (let n = 0; n < StartlessNodeList.length; n++) {
        NodeList.push(StartlessNodeList[n]);
    }

    let fileContent = 'TechTree\n{\n';
    for (let node of NodeList) {
        fileContent += '    RDNode\n' +
            '    {\n' +
            '        id = ' + node.id + '\n' +
            '        title = ' + node.title + '\n' +
            '        description = ' + node.description + '\n' +
            '        cost = ' + node.cost + '\n' +
            '        hideEmpty = ' + node.hideEmpty + '\n' +
            '        nodeName = ' + node.nodeName + '\n' +
            '        anyToUnlock = ' + node.anyToUnlock + '\n' +
            '        icon = ' + node.icon + '\n' +
            '        pos = ' + node.pos + '\n' +
            '        scale = ' + node.scale + '\n';

        if (node.Parent1 !== undefined) {
            fileContent += '        Parent\n' +
                '        {\n' +
                '            parentID = ' + node.Parent1.parentID + '\n' +
                '            lineFrom = ' + node.Parent1.lineFrom + '\n' +
                '            lineTo = ' + node.Parent1.lineTo + '\n' +
                '        }\n';
        }

        if (node.Parent2 !== undefined) {
            fileContent += '        Parent\n' +
                '        {\n' +
                '            parentID = ' + node.Parent2.parentID + '\n' +
                '            lineFrom = ' + node.Parent2.lineFrom + '\n' +
                '            lineTo = ' + node.Parent2.lineTo + '\n' +
                '        }\n';
        }

        fileContent += '    }\n';
    }
    fileContent += '}';

    // Create a Blob with the file content
    const blob = new Blob([fileContent], { type: 'text/plain' });

    // Create a link element
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'TechTree.cfg';

    // Append the link to the body and trigger the click event
    document.body.appendChild(link);
    link.click();

    // Clean up
    document.body.removeChild(link);
    window.URL.revokeObjectURL(link.href);
}








