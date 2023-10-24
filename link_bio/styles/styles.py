import reflex as rx
from enum import Enum

# Constants
MAX_WIDTH="600px"
FULL_WIDTH="100%"

# Sizes
class Size(Enum):
    SMALL = ".5em"
    SMALL_MEDIUM = ".8em"
    MEDIUM = "1em"
    LARGE = "2em"

# Styles
## Global
BASE_STYLE = {
    rx.Button: {
        "width": "100%",
        "height": "100%",
        "display": "block",
        "padding": Size.SMALL.value,
        "border_radius": Size.MEDIUM.value
    },
    rx.Link: {
        "text_decoration": "none",
        "_hover": {}
    }
}

## Specific
title_style = {
    "width": "100%",
    "padding_top": Size.MEDIUM.value
}

button_title_style = {
    "font_size": Size.MEDIUM.value
}

button_body_style = {
    "font_size": Size.SMALL_MEDIUM.value
}