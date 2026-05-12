import EzHeader from "./_components/EzHeader/EzHeader"

export default function EzLayout({
  children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <EzHeader />
            <main>{children}</main>
        </>
    )
}