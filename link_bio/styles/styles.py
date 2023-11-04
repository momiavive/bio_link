import reflex as rx
from enum import Enum
from .colors import Color, TextColor
from .fonts import Font

# Constants
MAX_WIDTH="650px"
FULL_WIDTH="100%"
FULL_HEIGHT="100%"

# Sizes
class Size(Enum):
    ZERO = "0"
    SMALL = ".5em"
    SMALL_MEDIUM = ".8em"
    MEDIUM = "1em"
    MEDIUM_LARGE = "1.5em"
    LARGE = "2em"

# Styles
## Global
BASE_STYLE = {
    "font_family": Font.DEFAULT.value,
    "background_color": Color.BACKGROUND.value,
    rx.Heading: {
        "size": "lg",
        "color": TextColor.HEADER.value,
        "font_family": Font.TITLE.value
    },
    rx.Button: {
        "width": FULL_WIDTH,
        "height": FULL_HEIGHT,
        "display": "block",
        "padding": Size.SMALL.value,
        "border_radius": Size.MEDIUM.value,
        "background_color": Color.CONTENT.value,
        "color": TextColor.HEADER.value,
        "_hover": {
            "background_color": Color.SECONDARY.value
        }
    },
    rx.Link: {
        "text_decoration": "none",
        "_hover": {}
    }
}

## Specific
navbar_title_style = {
    "font_family": Font.LOGO.value,
    "font_size": Size.MEDIUM_LARGE.value,
}

title_style = {
    "width": FULL_WIDTH,
    "padding_top": Size.MEDIUM.value,
}

button_title_style = {
    "font_family": Font.TITLE.value,
    "font_size": Size.MEDIUM.value,
    "color": TextColor.HEADER.value
}

button_body_style = {
    "font_size": Size.SMALL_MEDIUM.value,
    "color": TextColor.BODY.value
}