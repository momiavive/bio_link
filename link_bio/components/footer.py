from link_bio.styles.styles import Size
import reflex as rx
import datetime

def footer() -> rx.Component:
    creationYear = 2023
    currentYear = datetime.date.today().year
    yearRange = str(creationYear) if currentYear == creationYear else f"{creationYear} - {currentYear}"

    return rx.vstack(
        rx.image(
            src="favicon.ico"
        ),
        rx.link(
            f"© {yearRange} Beni JS by Carlos Lázaro",
            href="https://www.linkedin.com/in/ffclmauricio/",
            is_external=True,
            font_size=Size.SMALL_MEDIUM.value
        ),
        rx.text(
            "Made with Reflex and ❤️ from Trujillo - Laredo",
            font_size=Size.SMALL_MEDIUM.value
        ),
        margin_bottom=Size.LARGE.value,
        spacing="0"
    )