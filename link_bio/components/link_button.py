import reflex as rx
import link_bio.styles.styles as styles

def link_button(title: str, body: str, url: str) -> rx.Component:
    return rx.link(
        rx.button(
            rx.hstack(
                rx.icon(
                    tag="arrow_forward",
                    width=styles.Size.LARGE.value,
                    height=styles.Size.LARGE.value
                ),
                rx.vstack(
                    rx.text(title, style=styles.button_title_style),
                    rx.text(body, style=styles.button_body_style),
                    align_items="start"
                )
            ),
        ),
        href=url,
        is_external=True,
        width=styles.FULL_WIDTH
    )