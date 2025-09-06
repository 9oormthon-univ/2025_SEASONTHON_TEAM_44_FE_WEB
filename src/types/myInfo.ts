import ImgExampleInfo from "@img/img-example-info.png";
import ImgExampleProfile from "@img/img-example-profile.png";

export interface MyInfo {
  profile: {
    name: string;
    profileImage: string | undefined;
    address: string;
  };
  storeInfo: {
    name: string;
    storeImage: string | undefined;
    description: string;
    phoneNumber: string;
    openingHours: string;
    address: string;
  };
}

export const myInfo: MyInfo = {
  profile: {
    name: "다시온님",
    profileImage: ImgExampleProfile,
    address: "분당구 판교동",
  },
  storeInfo: {
    name: "다시온 분식",
    storeImage: ImgExampleInfo,
    description: "저희집 해물라면이 정말 일품입니다.",
    phoneNumber: "010-1234-5678",
    openingHours: "평일 09:00~20:00",
    address: "경기 성남시 분당구 다시온로177번길 25 2층 220호",
  },
};
