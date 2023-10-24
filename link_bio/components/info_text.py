from link_bio.styles.styles import Size
import reflex as rx

def info_text(title: str, body: str) -> rx.Component:
    return rx.box(
        rx.span(title, font_weight="bold", color="blue"),
        f" {body}",
        font_size=Size.MEDIUM.value
    )