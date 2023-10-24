import reflex as rx
from link_bio.styles.styles import Size

def navbar() -> rx.Component:
    return rx.hstack(
        rx.text(
            "benijs",
        ),
        position="sticky",
        bg="lightgray",
        padding_x=Size.MEDIUM.value,
        padding_y=Size.SMALL.value,
        z_index="999",
        top="0",
    )