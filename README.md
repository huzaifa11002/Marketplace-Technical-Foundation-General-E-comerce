"# Marketplace-Technical-Foundation-General-E-comerce" 


//Customer Schema

export default{
    name:"customerInfo",
    type:"document",
    title:"Customer Info"
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string",
            validation: (rule: any) => rule.required()
        },
        {
            name: "email",
            title: "Email",
            type: "string",
            validation: (rule: any) => rule.required()
        },
        {
            name: "phone",
            title: "Phone",
            type: "number",
            validation: (rule: any) => rule.required()
        },
        {
            name: "address",
            title: "Address",
            type: "string",
            validation: (rule: any) => rule.required()
        },
        {
            name: "zipcode",
            title: "Zipcode",
            type: "number",
            validation: (rule: any) => rule.required()
        },
        {
            name: "orderId",
            title: "Order ID",
            type: "number",
            readOnly: true,
            initialValue: () => uuidv4(),
        },
    ]
}

//Order Schema

export default{
    name:"order",
    type:"document",
    title:"order Info"
    fields: [
        {
            name: "orderId",
            title: "Order ID",
            type: "number",
            readOnly: true,
            initialValue: () => uuidv4(),
        },
        {
            name: "productId",
            title: "Product ID",
            type: "string",
            validation: (rule: any) => rule.required()
        },
        {
            name: "phone",
            title: "Phone",
            type: "number",
            validation: (rule: any) => rule.required()
        },
        {
            name: "address",
            title: "Address",
            type: "string",
            validation: (rule: any) => rule.required()
        },
        {
            name: "zipcode",
            title: "Zipcode",
            type: "number",
            validation: (rule: any) => rule.required()
        },
    ]
}