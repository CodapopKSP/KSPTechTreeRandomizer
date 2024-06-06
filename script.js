


class RDNode {
    constructor(id, title, description, cost, hideEmpty,
        nodeName, anyToUnlock, icon, pos, scale, Parent1=None, Parent2=None) {
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
        const rdNodes = parseTechTree(fileContent);
        output.textContent = JSON.stringify(rdNodes, null, 2);
    };

    reader.readAsText(file);
});

function parseTechTree(content) {
    const nodes = [];
    const rdNodeRegex = /RDNode\s*(?:([^]*?))(?=RDNode|$)/g;

    let match;
    while (match = rdNodeRegex.exec(content)) {
        const nodeContent = match[1];
        const nodeObject = parseRDNode(nodeContent);
        nodes.push(nodeObject);
    }
    return nodes;
}

function parseRDNode(content) {
    const node = {};
    let parents = 0;
    const lines = content.trim().split('\n');
    lines.forEach(line => {
        const [key, value] = line.split('=').map(part => part.trim());
        if (key === 'Parent') {
            parentSectionFound = true;
            if (!node.Parent) {
                node.Parent = [];
            }
            node.Parent[parents] = {};
            parents++;
        } else if (key && key !== 'Parent') {
            if (key === 'parentID' || key === 'lineFrom' || key === 'lineTo') {
                node.Parent[parents-1][key] = value;
            } else {
                node[key] = value;
            }
        }
    });
    return node;
}








