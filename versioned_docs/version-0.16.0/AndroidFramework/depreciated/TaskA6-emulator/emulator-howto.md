# emulator howto

1. [prepare 1. `emulator`](#prepare-1-emulator)
    1. [general steps](#general-steps)
    2. [extent steps](#extent-steps)
2. [prepare 2. `kvm`](#prepare-2-kvm)
    1. [how to check `kvm`](#how-to-check-kvm)
    2. [how to enable `kvm`](#how-to-enable-kvm)
3. [config emulator](#config-emulator)
    1. [how to know emulator config path ?](#how-to-know-emulator-config-path-)
    2. [adjust vm heap size](#adjust-vm-heap-size)

## prepare 1. `emulator`

### general steps

1. download AOSP source code
2. `source build/envsetup.sh && lunch XXX`
3. `make` or `m` to build product
4. then the `emulator` command may work

### extent steps

If restarted terminal, then the commands enabled via step 2 in [general steps](#general-steps) may turn to be invalid.

Then there are two approaches.

The first one is to re-run step 2. (but not step 3/4 need)

And the second one is to directly use the full commands.

```sh
➜  generic_x86_64 git:(74a2364e7f) ✗ which emulator
/home/mark/work@luci/android/android-10.0.0_r1/prebuilts/android-emulator/linux-x86_64/emulator
```

We can know the real `emulator` path is at `prebuilts/android-emulator/linux-x86_64/emulator`, since we just built a `aosp_x86_64-eng` product. If you didn't build this one, the path would be a slight difference.

So you can use `cd prebuilts/android-emulator/linux-x86_64/emulator && ./emulator` to start the emulator.

## prepare 2. `kvm`

### how to check `kvm`

```sh
egrep -c '(vmx|svm)' /proc/cpuinfo
```

ref:

- [(23条消息) Android源代码编译完成之后运行模拟器_pcsxk的专栏-CSDN博客_android 源码编译后启动模拟器](https://blog.csdn.net/pcsxk/article/details/52016739)

### how to enable `kvm`

```sh
# install and enable kvm
sudo apt install qemu-kvm
sudo adduser $USER kvm
sudo chown $USER /dev/kvm

sudo pkill -u $USER # re-login to make it work
```

ref:

- [64 bit - Android Studio: /dev/kvm device permission denied - Stack Overflow](https://stackoverflow.com/questions/37300811/android-studio-dev-kvm-device-permission-denied)

## config emulator

### how to know emulator config path ?

The easiest way is to use `emulator -verbose` to have a look at what the config files are.

For example:

![picture 4](https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/emulator-howto-1643522738572-e8309510cbafd8b3252714a6406e5d3b02fdce3b4d7609684638479371a408e0.png)  

Maybe you can use `emulator -verbose | grep ini` to see exactly those config files.

### adjust vm heap size

The default vm heap size is zero.

And you can have a check via:

```sh
➜  android-10.0.0_r1 git:(74a2364e7f) ✗ ge=out/target/product/generic_x86_64 
➜  android-10.0.0_r1 git:(74a2364e7f) ✗ grep heap $ge/config.ini 
vm.heapSize=192
➜  android-10.0.0_r1 git:(74a2364e7f) ✗ grep heap $ge/hardware-qemu.ini 
vm.heapSize = 192
```

The `vm.heapSize=192` is set manually by myself in the `config.ini` and the second one in `hardware-qemu.ini` is the default.

After adding/change the default `vm.heapSize` in `config.ini` according to the `hardware-qemu.ini`, the the `emulator` error relative to `heapSize` may have gone.

![picture 5](https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/emulator-howto-1643522823918-edcb7eb474ff65c0ef00fda233ad8c9600dfd11166ce5d4639964c8ec82965cb.png)  
