
function CompHandler({
    items,
    resourceName,
    compItem:  CompHand
}) {
    return (
        <>
            {items.map((item, i) => (
                    <CompHand {...{ [resourceName]: item }} key={i} />
                ))
            }
        </>
    )
}
export default CompHandler;