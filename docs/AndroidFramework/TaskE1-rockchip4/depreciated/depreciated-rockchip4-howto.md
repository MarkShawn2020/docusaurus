# depreciated rockchip4 howto

[toc]

## repo rk3399 source code

> repo sync success

![picture 2](https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/rk3399-howto-1643651414228-01c1cfd225a33b34b0eaa079486ea73317ade00371b315b7c562f9015bc37648.png)  

## build kernel

> sample

![picture 3](https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/rk3399-howto-1643651779768-5f0a55a07441c6064879adf059dd61269205a023a16f893eb48c8156acbd2671.png)  

### error: `FAILED: ninja: 'kernel/arch/arm64/boot/Image', needed by 'out/target/product/rk3399_Android10/kernel', missing and no known rule to make it`

> problem

![picture 4](https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/rk3399-howto-1643652274358-dfce8b6c243ef667c631350656fe5cc1e7792fef729a822f9ec1ea33a168b944.png)  

> reason

![picture 5](https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/rk3399-howto-1643653658146-2032e31c5db6624ba9f268845b61c1357ed78a60cf0a56071cd37874780ad6d6.png)  

We need to manually specify the `ARCH`, otherwise it would use the `SUBARCH` which is `x86` in virtual vmware.

However, the only `rockchip_refconfig` we have are under `arm` or `arm64` since the build.

![picture 6](https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/rk3399-howto-1643653783595-b7ca88e97f2b9b706d5aef98786331f70eef3c717903447d644a51579752db9b.png)  

> resolution

```sh
export ARCH=arm
make rockchip_defconfig
make rk3399-rockpi-4b.img
```

> ref

- [Kernel won't compile when using jobs paramter (-j$(nproc)) · Issue #1 · radxa/rockpi4-android-tv-7.1](https://github.com/radxa/rockpi4-android-tv-7.1/issues/1)

### error: `/bin/sh: 1: lz4c: not found`

> problem

![picture 7](https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/rk3399-howto-1643655677468-425cdfca8351f3ee1fcf39dd525fedcc66035041e09d0a174924096903a66588.png)  

> resolution

```sh
sudo apt-get update -y
sudo apt-get install -y openjdk-8-jdk python git-core gnupg flex bison gperf build-essential \
       zip curl liblz4-tool zlib1g-dev gcc-multilib g++-multilib libc6-dev-i386 \
       lib32ncurses5-dev x11proto-core-dev libx11-dev lib32z-dev ccache \
       libgl1-mesa-dev libxml2-utils xsltproc unzip mtools u-boot-tools \
       htop iotop sysstat iftop pigz bc device-tree-compiler lunzip \
       dosfstools vim-common parted udev libssl-dev python3 python-pip lzop swig

```

### build kernel success

![picture 8](https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/rk3399-howto-1643656070544-d4a348827d0eb591c39f67c6364e7255b810b1b3380e2b6261c1d940b33537be.png)  

## build AOSP

### error: `FAILED: ninja: 'out/commit_id.xml', needed by 'out/target/product/rk3399_Android10/vendor/commit_id.xml', missing and no known rule to make it`

> problem

![picture 9](https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/rk3399-howto-1643656909533-6da255ceae4171276238672592e8ef2ff8f636249098fe93440d11894449ee46.png)  

> analysis

There are no `commit_id.xml` under `out`, and it showed the reason, that is the `python3.6` command is disallowed.

> resolution

We generate it manally by running:

```py
python3.6 .repo/repo/repo manifest -r -o out/commit_id.xml
```

then ok!

### error: `Not compatible: For config CONFIG_DEVMEM, value = y but required n`

> problem

![picture 10](https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/rk3399-howto-1643684901209-04dabd1432be441fa0000cf6a85825ab6da721cab296ff7ff34426f53fb312a2.png)  

> analysis

查了查，好像是虚拟化的东西，感觉跟我虚拟机有关，kernel里默认的是n，aosp需要是y，所以我把kernel里的n强行改成y了

> resolution

```sh
perl -i -0pe "s|(CONFIG_DEVMEM.*?>)[ny]<|\1y<|gms" out/target/product/rk3399_Android10/obj/ETC/verified_assembled_system_matrix.xml_intermediates/verified_assembled_system_matrix.xm
```

change the `n` to `y` in `out/target/product/rk3399_Android10/obj/ETC/verified_assembled_system_matrix.xml_intermediates/verified_assembled_system_matrix.xml`

![picture 12](https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/rk3399-howto-1643686268752-ba09a97819772992e9aee1514c28474bd22124715182540250bf85b6b3e7a2ef.png)  

> verification

```sh
cat out/target/product/rk3399_Android10/obj/ETC/verified_assembled_system_matrix.xml_intermediates/verified_assembled_system_matrix.xml | grep CONFIG_DEVMEM --context 3
```

![picture 19](https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/rk3399-howto-1643783886051-0e946aa29d7c1f77e3b7af186c73ed5d308ccc1ea86c85cad8b65fa083b3eda0.png)

> ref

- 关于该类配置的android官方定义与解释：[匹配规则  |  Android 开源项目  |  Android Open Source Project](https://source.android.com/devices/architecture/vintf/match-rules)
- 关于`CONFIG_DEVMEM`是否该启用的一个讨论：[arm64: defconfig: disable CONFIG_DEVMEM - Patchwork](https://patchwork.kernel.org/project/linux-arm-kernel/patch/20170113113734.16524-1-leif.lindholm@linaro.org/)
- 关于抑制该问题的一个思路（不是方案，因为失败了）：[Android 10或Android 10 Go](https://tinkerboarding.co.uk/forum/thread-3191-page-2.html)
- 关于抑制该问题的一个思路（不是方案，因为不匹配）：[OTA 升级测试的一些错误 · 大专栏](https://www.dazhuanlan.com/supernovais/topics/1003940)

### error: `//frameworks/base:test-api-stubs-docs Metalava Check API [common]`

> problem

![picture 13](https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/rk3399-howto-1643691322893-322c94fd9170550f889da9459b191ea962d97844ae40ca7ae8ee3782be47cb0e.png)  

> resolution

1. update api first

```sh
# make update-api
# make test-api-stubs-docs-update-current-api
make api-stubs-docs-update-current-api
make system-api-stubs-docs-update-current-api
```

2. rebuild

```sh
make -j5
```

## flash

### (optional) download `IO Registry Explorer` on MacOS

> result

no `rockchip` in the result list:

![picture 14](https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/rk3399-howto-1643710823391-2b413d6d13f92a2f28151ec6032d49253b304e0299d620d62df30fd825222df5.png)  

> ref

- download `IO Registry Explorer`: [More - Downloads - Apple Developer](https://developer.apple.com/download/all/?q=io%20registry%20explorer)
- enlightened from: [swift - IOCreatePlugInInterfaceForService returns mysterious error - Stack Overflow](https://stackoverflow.com/questions/48832072/iocreateplugininterfaceforservice-returns-mysterious-error)

### install flashing tool on mac/win/linux

1. install `rkdeveloptool`

```sh
git clone https://github.com/rockchip-linux/rkdeveloptool
cd rkdeveloptool
autoreconf -i
./configure
make

sudo cp rkdeveloptool /usr/local/bin/
```

2. test devices 

```sh
rkdeveloptool ld
# output: DevNo=1	Vid=0x2207,Pid=0x330c,LocationID=1404	Maskrom

rkdeveloptool -v
# output: rkdeveloptool ver 1.32
```

> ref

- [Rockpi4/install/rockchip-flash-tools - Radxa Wiki](https://wiki.radxa.com/Rockpi4/install/rockchip-flash-tools#Part_three:_rkdeveloptool_on_macOS.28Intel_.26_Apple_Silicon.29)
- IMPORTANT: why the typeC-A not supported: [OTG Flashing not working - Development and Programming - Radxa Forum](https://forum.radxa.com/t/otg-flashing-not-working/717)

### flash into SD card

> flash progress

1. compile basic images (e.g. `update.img`) followed by android-10 manual: [Rockpi4/rockpi-android10 - Radxa Wiki](https://wiki.radxa.com/Rockpi4/rockpi-android10)

2. generate `gpt.img` followed by android-7 manual: [Rockpi4/rockpi-android7 - Radxa Wiki](https://wiki.radxa.com/Rockpi4/rockpi-android7)

> flash success

![picture 20](https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/rk3399-howto-1643797899360-65ace0a8efa8345b933384007f986eb53fd53d565024eedf60eeb62dffad09ee.png)  

> ref

- flash android image into sd card: [Rockpi4/install/microSD - Radxa Wiki](https://wiki.radxa.com/Rockpi4/install/microSD)
- windows适用： [Rock pi 4B+ windows下刷机教程 - Rock开发板 - 深圳风火轮科技 - Powered by Discuz!](https://smartfire.cn/thread-5458-1-1.html)
- stack of how I know the approach to generating gpt.img when the android10 documentation not mentioned:
    - [Rock pi 4A 自编译android7.1.2 table 系统，无法启动 - Using ROCK Pi 4 / Beginners - Radxa Forum](https://forum.radxa.com/t/rock-pi-4a-android7-1-2-table/2246)
    ![picture 21](https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/rk3399-howto-1643798049438-c290f6452a79a9a30e4103cd7bb2ae18282a396cc2005c16933bfc3782ef015d.png)  

### install system from SD card into rockpi4

see: [Rockpi4/dev/usb-install/zh cn - Radxa Wiki](https://wiki.radxa.com/Rockpi4/dev/usb-install/zh_cn#MacOS)

## 刷机

### mac install `adb`

```sh
brew install android-platform-tools
```

> ref

- [android - Installing ADB on macOS - Stack Overflow](https://stackoverflow.com/questions/31374085/installing-adb-on-macos)

### adb connect

after `rkdeveloptool db rk3399_loader_vxxxx.bin`:

![picture 4](https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/rockchip4-howto-1644226778826-47b8692889cdfe50caedf58125be08a222f8c1841cd85b282e9a2df02ba49d0e.png)  

### `rkdeveloptool`

我修改了一下脚本，方便刷镜像

```sh
LOADER="~/Downloads/rk3399_loader_v1.20.119.bin"

# function
export f() {rkdeveloptool db $LOADER  && rkdeveloptool wl 0 $1 && rkdeveloptool rd}

# burn image of `gpt.img`
f gpt.img

# clear image
f zero.img
```

> explanation

```yaml
rd: "restart device"
```

### test flash

> 重新刷了官方的10，刚刷完，还没拔，它就直接先进入recovery模式（adb devices 显示recovery），然后过了一会蓝灯闪烁，adb连上显示某个设备，然后`scrcpy`显示了装机界面！整个过程十分流畅！

| item                                               | expect          | result                         | analysis      |
| -------------------------------------------------- | --------------- | ------------------------------ | ------------- |
| 在原有基础之上重新update并gpt rk3399，然后烧进机器 | 能启动,蓝灯闪烁 | 未能启动，蓝灯亮了三秒然后熄灭 | 尝试rk3399pro |

### test the rc adb reaction on plug in/out

```sh
# h | tail -n 100 | less

echo "before plug in rc"
lsusb 2>/dev/null
echo after plug in rc
lsusb 2>/dev/null
echo then plug in power
lsusb 2>/dev/null
echo then plug out power
lsusb 2>/dev/null
echo then holding maskrom and plug in power
lsusb 2>/dev/null
echo then release maskrom
lsusb 2>/dev/null
rkdeveloptool ld
rkdeveloptool db Downloads/rk3399_loader_v1.20.119.bin
echo after bootloader succeeded, mac alerts whether to connect the 'Fuzhou Rockchip USB-MSC'
rkdeveloptool wl 0 gpt.img
```

![picture 5](https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/rockchip4-howto-1644229327731-18c980cfebe6bbf18bf3cce5aa006424403f921a775ad1eb7fa23d2a786decb2.png)  
