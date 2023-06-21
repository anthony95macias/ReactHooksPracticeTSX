import { ReactNode } from "react";

export interface HeadingProps { 
    title: string 
};

export function Heading({ title }: HeadingProps) {
    return (
        <div>
            <h3>{title}</h3>
        </div>
    )
}

export interface ListItem {
    title: string;
    // other properties as per your requirements
}

export function List({items, render}: {items: ListItem[]; render: (item: ListItem) => ReactNode}) {
    return (
        <ul>
            {items.map((item, index) => (
                <li key={index}>
                    {render(item)}
                </li>
            ))}
        </ul>
    );
}

function EvenMoreReactComponents() {
    const items: ListItem[] = [
        { title: 'Item 1' },
        { title: 'Item 2' },
        { title: 'Item 3' },
    ];

    return (
        <div>
            <Heading title="Hello World" />
            <List items={items} render={(item) => item.title} />
        </div>
    )
}

export default EvenMoreReactComponents;
