from link_bio.components.info_text import info_text
from link_bio.components.link_icon import link_icon
from link_bio.styles.colors import TextColor, Color
import reflex as rx
import link_bio.constants as const
import link_bio.styles.styles as styles

def header() -> rx.Component:
    return rx.vstack(
        rx.hstack(
            rx.avatar(
                name="Carlos Lázaro", 
                size="xl",
                src="avatar.jpg",
                color=TextColor.BODY.value,
                bg=Color.CONTENT.value,
                border="2px",
                border_color=Color.PRIMARY.value
            ),
            rx.vstack(
                rx.heading(
                    "Carlos Lázaro",
                    size="lg"
                ),
                rx.text(
                    "@momiavive",
                    color=TextColor.BODY.value
                ),
                rx.hstack(
                    link_icon(const.TWITTER_URL),
                    link_icon(const.LINKEDIN_URL),
                    link_icon(const.GITHUB_URL),
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
        rx.text(
            """
            Soy un apasionado de la tecnología y me encanta el desarrollo web.
            """,
            color=TextColor.BODY.value,
            font_size=styles.Size.MEDIUM.value
        ),
        align_items="start",
        width=styles.FULL_WIDTH,
        spacing=styles.Size.LARGE.value
    )
    