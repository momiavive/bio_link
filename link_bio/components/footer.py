from link_bio.styles.styles import Size
from link_bio.styles.colors import TextColor
import link_bio.constants as const
import reflex as rx
import datetime

def getYearRange() -> str:
    creationYear = 2023
    currentYear = datetime.date.today().year
    yearRange = str(creationYear) if currentYear == creationYear else f"{creationYear} - {currentYear}"
    return yearRange

def footer() -> rx.Component:
    yearRange = getYearRange()

    return rx.vstack(
        rx.image(
            src="code.png"
        ),
        rx.link(
            f"© {yearRange} Beni JS by Carlos Lázaro",
            href=const.LINKEDIN_URL,
            is_external=True,
            font_size=Size.SMALL_MEDIUM.value
        ),
        # rx.text(
        #     "Made with Reflex and ❤️ from Trujillo - Laredo",
        #     font_size=Size.SMALL_MEDIUM.value
        # ),
        rx.box(
            "Made with ",
            rx.link(
                "Reflex", 
                href=const.REFLEX_DOCS_URL,
                is_external=True
            ),
            " and ❤️ from Trujillo - Laredo",
            font_size=Size.SMALL_MEDIUM.value
        ),
        margin_bottom=Size.LARGE.value,
        padding_bottom=Size.LARGE.value,
        spacing=Size.ZERO.value,
        color=TextColor.FOOTER.value
    )