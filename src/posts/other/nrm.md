# nrm 的安装与使用

- 简介：npm 包的源管理器 - `npm registry management`（名字看起来就和 `nvm` 相似）

- 安装：`npm install -g nrm`
  
- 检测版本：`nrm -V`

- 使用：初次使用可用 `nrm --help` 来查看可用的命令

- 常用命令：
  - `nrm ls`：查看所有的 registries
  - `nrm current`：查看当前使用的源
  - `nrm use xxx`: 切换到对应的源
  - `nrm add <registry> <url> [home]`：添加一个源
