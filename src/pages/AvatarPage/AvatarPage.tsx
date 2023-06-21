import React from "react"
import avatar from "./avatar.jpg"
import "./AvatarPage.scss"
import { ETypographyVariant, Typography } from "ui"

export const AvatarPage: React.FC = () => {
  return (
    <section className="AvatarPage">
      <Typography as="h1" variant={ETypographyVariant.TextH1Bold}>
        Avatar
      </Typography>
      <Typography as="h2" variant={ETypographyVariant.TextH2Medium}>
        Avatar with image
      </Typography>
      <hr />
      <Typography as="h2" variant={ETypographyVariant.TextH2Medium}>
        Avatar with initials
      </Typography>
    </section>
  )
}
