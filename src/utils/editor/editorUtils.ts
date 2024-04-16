import { BlockProperties, PanelProps } from "grapesjs";

// Define a reusable function for toggling display
export function toggleDisplay(editor: any, selector: string, displayValue: string) {
    const rowEl = editor.getContainer().closest('.editor_row');
    const targetEl = rowEl.querySelector(selector);
    if (targetEl) {
        targetEl.style.display = displayValue;
    }
}

export const commands = [
    {
        name: 'show-layers',
        selector: '.layers'
    },
    {
        name: 'show-style',
        selector: '.styles-container'
    },
    {
        name: 'show-block',
        selector: '.blocks'
    },
    {
        name: 'show-trail',
        selector: '.trails'
    },
];

export const headingBlocks: BlockProperties[] = [
    { 
        id: "header", 
        label: "H1",
        content: "<h1>Header One</h1>",
        category: "Headings"
    },
    { 
        id: "header2", 
        label: "H2",
        content: "<h2>Header Two</h2>",
        category: "Headings"
    },
    { 
        id: "header3", 
        label: "H3",
        content: "<h3>Header Three</h3>",
        category: "Headings"
    },
    { 
        id: "header4", 
        label: "H4",
        content: "<h4>Header Four</h4>",
        category: "Headings"
    },
    { 
        id: "header5", 
        label: "H5",
        content: "<h5>Header Five</h5>",
        category: "Headings"
    },
    { 
        id: "header6", 
        label: "H6",
        content: "<h6>Header Six</h6>",
        category: "Headings"
    }
];


export const editorBlocks:BlockProperties[] = [
    ...headingBlocks,
    { 
        id: "paragraph", 
        label: "Paragraph",
        content: "<p>This is a paragraph.</p>",
        category: "Text",
    },
    { 
        id: "container", 
        label: "Container",
        content: "<div style='width:100%; height: 200px;'></div>",
        category: "Layout",
    },
    { 
        id: "image", 
        label: "Image",
        content: "<img>",
        category: "Media"
    },
    { 
        id: "button", 
        label: "Button",
        content: "<button>Click me</button>",
        category: "Buttons"
    },
    { 
        id: "list", 
        label: "List",
        content: "<ul><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul>",
        category: "Lists"
    },
    { 
        id: "divider", 
        label: "Divider",
        content: "<hr>",
        category: "Layout"
    },
    {
        id: "quote",
        label: "Quote",
        content: "<blockquote>This is a quote.</blockquote>",
        category: "Text"
    },
    {
        id: "link",
        label: "Link",
        content: "<a href='#'>Link</a>",
        category: "Text"
    },
    {
        id: "video",
        label: "Video",
        content: "<iframe width='560' height='315' src='https://www.youtube.com/embed/dQw4w9WgXcQ' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>",
        category: "Media"
    },
    {
        id: "form",
        label: "Form",
        content: "<form><input type='text' placeholder='Enter your name'><button type='submit'>Submit</button></form>",
        category: "Forms"
    },
    {
        id: "table",
        label: "Table",
        content: "<table><tr><th>Header 1</th><th>Header 2</th></tr><tr><td>Data 1</td><td>Data 2</td></tr></table>",
        category: "Tables"
    }
];

export const defaultEditorPanels: PanelProps[] = [
    {
        id: "layers",
        el: ".right_panel"
    },
    {
        id: "navbar",
        el: ".navbar-btns",
        buttons: [
            {
                id: "show-code",
                label: "Export",
                command: "export-template"
            },
            {
                id: "visibility",
                label: "Toggle Borders",
                command: "sw-visibility"
            },
            {
                id: "preview",
                label: "Preview",
                command: "core:preview"
            },
        ]
    },
    {
        id: 'panel-switcher',
        el: '.panel__switcher',
        appendTo: ".right_panel",
        buttons: [{
            id: 'show-layers',
            active: true,
            label: 'Layers',
            command: 'show-layers',
            // Once activated disable the possibility to turn it off
            togglable: false,
        }, {
            id: 'show-style',
            active: true,
            label: 'Styles',
            command: 'show-style',
            // Once activated disable the possibility to turn it off
            togglable: false,
        }, {
            id: 'show-block',
            active: true,
            label: 'Blocks',
            command: 'show-block',
            togglable: false,
        },
        {
            id: 'show-trail',
            active: true,
            label: 'Props',
            command: 'show-trail',
            // Once activated disable the possibility to turn it off
            togglable: false,
        },
        ],
    }
]