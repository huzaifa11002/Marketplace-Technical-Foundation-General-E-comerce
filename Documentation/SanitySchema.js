"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Schema for product
exports.default = {
    name: "product",
    title: "Product",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Product Name",
            type: "string",
            validation: (rule) => rule.required()
        },
        {
            name: "desc",
            title: "Description",
            type: "text",
            validation: (rule) => rule.required()
        },
        {
            name: "image",
            title: "Featured Image",
            type: "image",
            validation: (rule) => rule.required()
        },
        {
            name: "price",
            title: "Price",
            type: "number",
            description: "price default set on $",
            validation: (rule) => rule.required()
        },
        {
            name: "stock",
            title: "SKU",
            type: "number",
            validation: (rule) => rule.required()
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
            hidden: ({ document }) => document.sale === false,
        },
        {
            name: "selectCategory",
            title: "Select Category",
            type: "array",
            of: [{ type: "reference", to: [{ type: "category" }], },],
            validation: (rule) => rule.required()
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 200,
            },
            validation: (rule) => rule.required(),
        },
    ]
};
