workflow "Install and Build" {
  on = "push"
  resolves = ["Build"]
}

action "Install" {
  uses = "Borales/actions-yarn@master"
  args = "install"
}

action "Build" {
  needs = "Install"
  uses = "Borales/actions-yarn@master"
  args = "build"
}
