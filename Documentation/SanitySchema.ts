//Schema for product
export default {
    name: "product",
    title: "Product",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Product Name",
            type: "string",
            validation: (rule: any) => rule.required()
        },
        {
            name: "desc",
            title: "Description",
            type: "text",
            validation: (rule: any) => rule.required()
        },
        {
            name: "image",
            title: "Featured Image",
            type: "image",
            validation: (rule: any) => rule.required()
        },
        {
            name: "price",
            title: "Price",
            type: "number",
            description: "price default set on $",
            validation: (rule: any) => rule.required()
        },
        {
            name: "stock",
            title: "SKU",
            type: "number",
            validation: (rule: any) => rule.required()
        },
        {
            name: "sale",
            title: "Sale",
            type: "boolean",
            initialValue: false,
            options: {
                layout: "checkbox"
            }
        },
        {
            name: "salePercentage",
            title: "Sale %",
            type: "number",
            hidden: ({ document }: any) => document.sale === false,
        },
        {
            name: "selectCategory",
            title: "Select Category",
            type: "array",
            of: [{ type: "reference", to: [{ type: "category" }], },],
            validation: (rule: any) => rule.required()
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 200,
            },
            validation: (rule: any) => rule.required(),
        },
    ]
}
