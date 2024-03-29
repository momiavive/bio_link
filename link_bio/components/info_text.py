from link_bio.styles.styles import Size
from link_bio.styles.colors import TextColor, Color
import reflex as rx

def info_text(title: str, body: str) -> rx.Component:
    return rx.box(
        rx.span(
            title, 
            font_weight="bold", 
            color=Color.PRIMARY.value
        ),
        f" {body}",
        font_size=Size.MEDIUM.value,
        color=TextColor.BODY.value
    )