declare module 'react-xml-parser' {
    interface XMLElement {
        name: string;
        attributes: {
            [name: string]: string;
        };
        value: string;
        children: XMLElement[];

        parseFromString(string: string): XMLElement;

        toString(xml: XMLElement): string;

        getElementsByTagName(tagName: string): XMLElement[];
    }

    export default class XMLParser {
        parseFromString(string: string): XMLElement;

        toString(xml: XMLElement): string;

        getElementsByTagName(tagName: string): XMLElement[];

        constructor();
    }
}
