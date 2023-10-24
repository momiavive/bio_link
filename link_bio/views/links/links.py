import reflex as rx
from link_bio.components.link_button import link_button
from link_bio.components.title import title
from link_bio.styles.styles import FULL_WIDTH, Size

def links() -> rx.Component:
    return rx.vstack(
        title("Comunidad"),
        link_button(
            title="Twitter", 
            body="Un poco de mi espacio personal (está casi vacio 😅).",
            url="https://twitter.com/ffclmauricio"
        ),
        link_button(
            title="LinkedIn",
            body="Mi perfil profesional, un poco mas a detalle sobre mi trayectoria profesional.",
            url="https://www.linkedin.com/in/ffclmauricio/"
        ),
        link_button(
            title="Github",
            body="Mi repositorio personal con proyectos de diferentes tecnologias.",
            url="https://github.com/momiavive"
        ),
        width=FULL_WIDTH,
        spacing=Size.SMALL_MEDIUM.value
    )