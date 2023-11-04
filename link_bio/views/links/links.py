import reflex as rx
import link_bio.constants as const
from link_bio.components.link_button import link_button
from link_bio.components.title import title
from link_bio.styles.styles import FULL_WIDTH, Size

def links() -> rx.Component:
    return rx.vstack(
        title("Comunidad"),
        link_button(
            title="Twitter", 
            body="Un poco de mi espacio personal (está casi vacio 😅).",
            url=const.TWITTER_URL
        ),
        link_button(
            title="LinkedIn",
            body="Mi perfil profesional, un poco mas a detalle sobre mi trayectoria profesional.",
            url=const.LINKEDIN_URL
        ),
        link_button(
            title="Github",
            body="Mi repositorio personal con proyectos de diferentes tecnologias.",
            url=const.GITHUB_URL
        ),
        title("Contacto"),
        link_button(
            title="Email",
            body=const.EMAIL,
            url=f"mailto:{const.EMAIL}"
        ),
        width=FULL_WIDTH,
        spacing=Size.SMALL_MEDIUM.value
    )