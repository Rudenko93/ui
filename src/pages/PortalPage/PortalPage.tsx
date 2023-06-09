import type { FC } from "react"
import { ETypographyVariant, Portal, Typography } from "ui"
import "./PortalPage.scss"

export const PortalPage: FC = () => {
  return (
    <section className="PortalPage">
      <Typography as="h1" variant={ETypographyVariant.TextH1Bold}>
        Rating
      </Typography>
      <Portal
        className="MyPortal"
        element="span"
        elementFindById="react-modals">
        <h3>This is portal container</h3>
      </Portal>
    </section>
  )
}
