AOSP=~/android-8.1.0_r33
COMBO=aosp_arm64-eng

cd AOSP
source build/envsetup.sh
lunch $COMBO

ROCKCHIP_DIR=hardware/rockchip
mkdir -p $ROCKCHIP_DIR
cd $ROCKCHIP_DIR
