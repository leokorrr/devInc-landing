type IHamburgerMenuItem = {
  title: string
  link: string
}

export default interface IHamburgerMenu {
  items: IHamburgerMenuItem[]
  onMenuClose: () => void
}
