import reflex as rx
from link_bio.styles.styles import Size, navbar_title_style
from link_bio.styles.colors import Color

def navbar() -> rx.Component:
    return rx.hstack(
        rx.box(
            rx.span("beni", color=Color.PRIMARY.value),
            rx.span("js", color=Color.SECONDARY.value),
            style=navbar_title_style
        ),
        # rx.text(
        #     "benijs",
        # ),
        position="sticky",
        bg=Color.CONTENT.value,
        padding_x=Size.LARGE.value,
        padding_y=Size.MEDIUM.value,
        z_index="999",
        top="0",
    )