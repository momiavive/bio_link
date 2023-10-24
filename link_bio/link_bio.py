"""Welcome to Reflex! This file outlines the steps to create a basic app."""
from link_bio.components.footer import footer
from link_bio.components.navbar import navbar
from link_bio.views.header.header import header
from link_bio.views.links.links import links
import link_bio.styles.styles as styles


import reflex as rx

class InputState(rx.State):
    text: str = "Hello World!"

def index():
    
    return rx.box(
        navbar(),
        rx.center(
            rx.vstack(
                header(),
                links(),
                links(),
                max_width=styles.MAX_WIDTH,
                width=styles.FULL_WIDTH,
                margin_y=styles.Size.LARGE.value
            ),
        ),
        footer()
    )



app = rx.App(
    style=styles.BASE_STYLE
)
app.add_page(index)
app.compile()