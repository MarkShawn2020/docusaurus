# install cmake
sudo apt install cmake

# install pip
sudo apt install python3-pip

# set pip mirror, ref: - [pypi | 镜像站使用帮助 | 清华大学开源软件镜像站 | Tsinghua Open Source Mirror](https://mirrors.tuna.tsinghua.edu.cn/help/pypi/)
pip3 install -i https://pypi.tuna.tsinghua.edu.cn/simple pip -U
pip3 config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple

# install meson/ninga, ref: - [mesonbuild/meson: The Meson Build System](https://github.com/mesonbuild/meson)

echo "export PATH=\$PATH:~/.local/bin" >> ~/.bash_profile
source ~/.bash_profile

# install pkg-config for meson
sudo apt install pkg-config

# install libdrm for meson, ref: https://github.com/rockchip-linux/libdrm-rockchip
git clone https://github.com/rockchip-linux/libdrm-rockchip
cd libdrm-rockchip

# install all the dependencies for `./autogen.sh`
sudo apt install -y autoconf    # for executing `./autogen.sh`, ref: https://blog.csdn.net/x356982611/article/details/70856470
sudo apt install -y xutils-dev  # for using `xorg-macros`, via `sudo apt search xorg-macros`
sudo apt install -y libtool     # for using `LIB_TOOL`, ref: https://stackoverflow.com/questions/18978252/error-libtool-library-used-but-libtool-is-undefined
sudo apt install -y libpciaccess0 libpciaccess-dev  # for using `pciaccess`

./autogen.sh
./configure
make 
sudo make install 

# then there would be `libdrm` under `/usr/local/include/`

pip3 install meson  # ref: https://mesonbuild.com/Quick-guide.html

# download rga
git clone https://github.com/rockchip-linux/linux-rga.git
meson linux-rga