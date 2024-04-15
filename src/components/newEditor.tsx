"use client"

import grapesjs from "grapesjs";
import { useEffect } from "react";
import "grapesjs/dist/css/grapes.min.css";
import "./new.css";
import  '../../public/tailwind-grapes'
import Navbar from "./navbar";
import { commands, defaultEditorPanels, editorBlocks, toggleDisplay } from "@/utils/editor/editorUtils";

export default function NewEditor() {
    let firsttime = false;
    useEffect(() => {
        if (!firsttime) {
            firsttime = true
            const editor = grapesjs.init({
                storageManager: false,
                container: '.left_panel',
                height: '85 vh',
                traitManager: {
                    appendTo: ".trails"
                },
                customUI: true,
                layerManager: {
                    appendTo: ".right_panel",
                },
                styleManager: {
                    appendTo: '.styles'
                },
                blockManager: {
                    appendTo: ".blocks",
                    blocks: editorBlocks
                },
                panels: {
                    defaults: defaultEditorPanels,
                },
                plugins: [
                    'grapesjs-tailwind'
                ],
            })

            // Dynamically generate commands
            commands.forEach(command => {
                editor.Commands.add(command.name, {
                    run(editor) {
                        toggleDisplay(editor, command.selector, '');
                    },
                    stop(editor) {
                        toggleDisplay(editor, command.selector, 'none');
                    },
                });
            });

            setTimeout(() => {
                document.querySelector(".loading")!.remove()
            }, 500);
        }
    }, [])


    return (
        <main className="w-full h-full text-white px-5 py-2">
            <Navbar />
            <div className="loading fixed w-screen h-screen bg-black-900 left-0 bottom-0 z-10"></div>
            <div className="editor_row flex h-[90vh] gap-2 w-full">
                {/* <div className="navigation w-20 h-full bg-white-500 rounded"></div> */}
                <div className="left_panel overflow-hidden bg-white-500 rounded-lg w-full h-full" id="canvas"></div>
                <div className="bg-dark sidebar border-2 border-white-900 rounded-lg w-80 overflow-hidden flex flex-col ">
                    <div className="panel__switcher"></div>
                    <div className="right_panel overflow-hidden layers h-full"></div>
                    <div className="blocks rounded overflow-scroll overflow-x-hidden h-full"></div>
                    <div className="styles overflow-hidden rounded h-full"></div>
                    <div className="trails overflow-sc rounded h-full"></div>
                </div>
            </div>
        </main>
    );
}