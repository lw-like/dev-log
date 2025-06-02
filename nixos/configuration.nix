{ config, lib, pkgs, ... }:

{
  imports = [
    # include NixOS-WSL modules
    <nixos-wsl/modules>
  ];

  wsl.enable = true;
  wsl.defaultUser = "nixos";
  wsl.useWindowsDriver = true;

  # This value determines the NixOS release from which the default
  # settings for stateful data, like file locations and database versions
  # on your system were taken. It's perfectly fine and recommended to leave
  # this value at the release version of the first install of this system.
  # Before changing this value read the documentation for this option
  # (e.g. man configuration.nix or on https://nixos.org/nixos/options.html).
  system.stateVersion = "24.11"; # Did you read the comment?

#  programs.bash.shellAliases = {
  environment.shellAliases = {
    nce = "sudo nvim /etc/nixos/configuration.nix";
    ncp = "cat /etc/nixos/configuration.nix";
    ncr = "sudo nixos-rebuild switch";
    hg = "history | grep $1";
  };

  environment.systemPackages = with pkgs; [
    neovim
  ];
}