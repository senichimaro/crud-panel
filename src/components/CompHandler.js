
function CompHandler({
    items,
    resourceName,
    compItem: ComponentItem
}) {
    return (
        <>
            {items.map((item, i) => (
                <ComponentItem {...{ [resourceName]: item }} key={i} />
            ))}
        </>
    )

}
export default CompHandler