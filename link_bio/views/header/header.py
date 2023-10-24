from link_bio.components.info_text import info_text
from link_bio.components.link_icon import link_icon
import reflex as rx
import link_bio.styles.styles as styles

def header() -> rx.Component:
    return rx.vstack(
        rx.hstack(
            rx.avatar(name="Carlos Lázaro", size="xl"),
            rx.vstack(
                rx.heading(
                    "Carlos Lázaro", 
                    size="lg"
                ),
                rx.text(
                    "@momiavive"
                ),
                rx.hstack(
                    link_icon("https://twitter.com/ffclmauricio"),
                    link_icon("https://twitter.com/ffclmauricio"),
                    link_icon("https://twitter.com/ffclmauricio"),
                ),
                align_items="start"
            ),
            spacing=styles.Size.MEDIUM.value
        ),
        rx.flex(
            info_text("+4", "años de experiencia"),
            rx.spacer(),
            info_text("+4", "años de experiencia"),
            rx.spacer(),
            info_text("+4", "años de experiencia"),
            width=styles.FULL_WIDTH
        ),
        rx.text("""Soy un apasionado de la tecnología y me encanta el desarrollo web."""),
        align_items="start",
        width=styles.FULL_WIDTH,
        spacing=styles.Size.LARGE.value
    )
    