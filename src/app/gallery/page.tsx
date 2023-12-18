// "use client"

// import React from 'react';
// import Photo from '@/components/Photo';
// const inputText: string = 'href="https://parkistra.com/wp-content/uploads/2020/09/Volunteer-center-1024x768.jpg",href="https://parkistra.com/wp-content/uploads/2020/09/Slika_prostovoljci-1024x686.jpg",href="https://parkistra.com/wp-content/uploads/2020/09/IMG-20200321-WA0017-768x1024.jpg",href="https://parkistra.com/wp-content/uploads/2020/09/Play-1024x768.jpg",href="https://parkistra.com/wp-content/uploads/2020/09/Room-for-6-1024x768.jpg",href="https://parkistra.com/wp-content/uploads/2020/09/Bathroom.jpg",href="https://parkistra.com/wp-content/uploads/2020/09/94397319_1587217051438203_8053533450637934592_o-1024x1024.jpg",href="https://parkistra.com/wp-content/uploads/2020/09/94574506_1587217211438187_5037862450544771072_o-1024x1024.jpg",href="https://parkistra.com/wp-content/uploads/2020/09/106487116_1645347112291863_6625284197401622239_o-1-819x1024.jpg",href="https://parkistra.com/wp-content/uploads/2020/09/20200227_113344-1024x576.jpg",href="https://parkistra.com/wp-content/uploads/2020/09/20200319_102226-1024x576.jpg",href="https://parkistra.com/wp-content/uploads/2020/09/IMG-20200301-WA0007-768x1024.jpg",href="https://parkistra.com/wp-content/uploads/2020/09/IMG-20200226-WA0017-1024x768.jpg",href="https://parkistra.com/wp-content/uploads/2020/09/73297029_1645347245625183_529604464360977824_o-819x1024.jpg",href="https://parkistra.com/wp-content/uploads/2020/09/84282892_1652051504954757_1874988780378222634_o-1024x768.jpg",href="https://parkistra.com/wp-content/uploads/2020/09/99131866_133604678318462_6639009392156999680_o-768x1024.jpg",href="https://parkistra.com/wp-content/uploads/2020/09/101029083_1619057851587456_8563958290491375616_o-768x1024.jpg",href="https://parkistra.com/wp-content/uploads/2020/09/106457990_1645347148958526_7485960113867806758_o-819x1024.jpg",href="https://parkistra.com/wp-content/uploads/2020/09/106772969_1652052091621365_3192019564857968870_o-1024x768.jpg",href="https://parkistra.com/wp-content/uploads/2020/09/107495430_1658264937666747_1949403284592769772_n.jpg",href="https://parkistra.com/wp-content/uploads/2020/09/109388838_1667072516785989_6637916445814413742_o-1024x1024.jpg",href="https://parkistra.com/wp-content/uploads/2020/09/109748626_1667072393452668_2199607309626833772_o-1024x1024.jpg",href="https://parkistra.com/wp-content/uploads/2020/09/109777606_1667072556785985_2153191509802597135_o-1024x1024.jpg",href="https://parkistra.com/wp-content/uploads/2020/09/Living-room-1024x768.jpg",href="https://parkistra.com/wp-content/uploads/2020/09/116586917_1545641895597242_1374707945500940954_o-1024x768.jpg",href="https://parkistra.com/wp-content/uploads/2020/09/117103550_1679584532201454_4257489837759857864_n.jpg",href="https://parkistra.com/wp-content/uploads/2020/09/117386099_1687644268062147_3982345472609266464_o-1024x485.jpg",href="https://parkistra.com/wp-content/uploads/2020/09/117444765_1694171964076044_8701583498821275673_o-1024x768.jpg",href="https://parkistra.com/wp-content/uploads/2020/09/117583985_1693441567482417_1538118315789897809_o-1024x1024.jpg",href="https://parkistra.com/wp-content/uploads/2020/09/117646429_1690472247779349_6723884510989305698_o-1.jpg",href="https://parkistra.com/wp-content/uploads/2020/09/117767311_1693441010815806_5515926374972606297_o-1024x1024.jpg",href="https://parkistra.com/wp-content/uploads/2020/09/117840567_1693441517482422_4774556927240592101_o-1024x1024.jpg",href="https://parkistra.com/wp-content/uploads/2020/09/117897743_1690472314446009_6300730917639919605_o.jpg",href="https://parkistra.com/wp-content/uploads/2020/09/119239432_1718319921661248_8666848974921291160_n.jpg",href="https://parkistra.com/wp-content/uploads/2017/10/20150721_070622-1024x576.jpg",href="https://parkistra.com/wp-content/uploads/2017/10/20160804_192542.jpg",href="https://parkistra.com/wp-content/uploads/2017/10/20170221_113727.jpg",href="https://parkistra.com/wp-content/uploads/2017/10/20170521_131740.jpg",href="https://parkistra.com/wp-content/uploads/2017/10/20170615_105022.jpg",href="https://parkistra.com/wp-content/uploads/2017/10/20170707_092313.jpg",href="https://parkistra.com/wp-content/uploads/2017/10/20170815_113831.jpg",href="https://parkistra.com/wp-content/uploads/2017/10/Brez-naslova5.jpg",href="https://parkistra.com/wp-content/uploads/2017/10/Brez-naslova11-1024x576.png",href="https://parkistra.com/wp-content/uploads/2017/10/Hrvoji-69.jpg",href="https://parkistra.com/wp-content/uploads/2017/10/Hrvoji-83.jpg",href="https://parkistra.com/wp-content/uploads/2017/10/Hrvoji-91.jpg",href="https://parkistra.com/wp-content/uploads/2017/10/Hrvoji-92.jpg",href="https://parkistra.com/wp-content/uploads/2017/10/IMG_0102.jpg",href="https://parkistra.com/wp-content/uploads/2017/10/IMG_1254.jpg",href="https://parkistra.com/wp-content/uploads/2017/10/IMG_3429.jpg",href="https://parkistra.com/wp-content/uploads/2017/10/IMG_3488.jpg",href="https://parkistra.com/wp-content/uploads/2017/10/IMG_3500.jpg",href="https://parkistra.com/wp-content/uploads/2017/10/IMG_3701.jpg",href="https://parkistra.com/wp-content/uploads/2017/10/IMG_4494.jpg",href="https://parkistra.com/wp-content/uploads/2017/10/IMG_4632.jpg",href="https://parkistra.com/wp-content/uploads/2017/10/IMG_7602-1024x684.jpg",href="https://parkistra.com/wp-content/uploads/2017/10/IMG_9451.jpg",href="https://parkistra.com/wp-content/uploads/2017/10/IMG_9502.jpg",href="https://parkistra.com/wp-content/uploads/2017/10/PB010005-1024x683.jpg",href="https://parkistra.com/wp-content/uploads/2017/10/received_1134020786633287.jpeg",href="https://parkistra.com/wp-content/uploads/2017/10/14285258_1099164220164558_1233291081_o.jpg",href="https://parkistra.com/wp-content/uploads/2017/10/17017164_1381937475202305_8176634206947429195_o.jpg",href="https://parkistra.com/wp-content/uploads/2017/10/18814109_785809001579016_2489081688568493157_n.jpg",href="https://parkistra.com/wp-content/uploads/2017/10/17426020_740577032768880_520617747242585571_n.jpg",href="https://parkistra.com/wp-content/uploads/2017/10/17457529_740576716102245_1505703292203674401_n.jpg",href="https://parkistra.com/wp-content/uploads/2017/10/18839232_785808484912401_7539561668190057244_n.jpg",href="https://parkistra.com/wp-content/uploads/2017/10/20170221_113727-1.jpg",href="https://parkistra.com/wp-content/uploads/2017/10/IMG_1739.jpg",href="https://parkistra.com/wp-content/uploads/2017/10/IMG_9383-Copia.jpg",href="https://parkistra.com/wp-content/uploads/2017/10/20842100_837450489748200_8160550198833638026_n.jpg",href="https://parkistra.com/wp-content/uploads/2017/10/18268464_766915353468381_7189289155343232838_n.jpg",href="https://parkistra.com/wp-content/uploads/2017/10/20170507_121033.jpg",href="https://parkistra.com/wp-content/uploads/2017/10/20170819_130000.jpg",href="https://parkistra.com/wp-content/uploads/2017/10/20161214_152518.jpg",href="https://parkistra.com/wp-content/uploads/2017/10/19990317_820420088117907_6864035928337107236_n.jpg",href="https://parkistra.com/wp-content/uploads/2017/10/20161213_144853.jpg",href="https://parkistra.com/wp-content/uploads/2017/10/IMG_0619.jpg",href="https://parkistra.com/wp-content/uploads/2017/10/Hrvoji-69-1.jpg",href="https://parkistra.com/wp-content/uploads/2017/10/18893166_785916144901635_5501681339530421996_n.jpg",href="https://parkistra.com/wp-content/uploads/2017/10/20170707_091452.jpg",href="https://parkistra.com/wp-content/uploads/2017/10/20170825_183832.jpg",href="https://parkistra.com/wp-content/uploads/2017/10/IMG_3532.jpg",href="https://parkistra.com/wp-content/uploads/2017/01/20161029_172202.jpg",href="https://parkistra.com/wp-content/uploads/2017/01/DSC_0864-1024x680.jpg",href="https://parkistra.com/wp-content/uploads/2017/01/DSC_0762-1-1024x680.jpg",href="https://parkistra.com/wp-content/uploads/2015/09/20150724_103337-1024x576-1024x576.jpg",href="https://parkistra.com/wp-content/uploads/2015/09/20150730_091921-1024x576-1024x576.jpg",href="https://parkistra.com/wp-content/uploads/2015/09/P1030406-1024x768-1024x768.jpg",href="https://parkistra.com/wp-content/uploads/2015/09/20150701_101408-1024x576.jpg",href="https://parkistra.com/wp-content/uploads/2015/09/20150701_193713-1024x576.jpg",href="https://parkistra.com/wp-content/uploads/2015/09/20150718_075252-576x1024-1024x576.jpg",href="https://parkistra.com/wp-content/uploads/2015/09/20150730_101300-1024x576-1024x576.jpg",href="https://parkistra.com/wp-content/uploads/2015/09/20150730_125708-1024x576-1024x576.jpg",href="https://parkistra.com/wp-content/uploads/2015/09/20150731_120127-1024x576.jpg",href="https://parkistra.com/wp-content/uploads/2017/01/IMG_2821a.jpg",href="https://parkistra.com/wp-content/uploads/2017/01/IMG_2929a.jpg",href="https://parkistra.com/wp-content/uploads/2017/01/IMG_2922a.jpg",href="https://parkistra.com/wp-content/uploads/2017/01/IMG_2912a.jpg",href="https://parkistra.com/wp-content/uploads/2015/09/20150609_183646-1024x576.jpg",href="https://parkistra.com/wp-content/uploads/2015/09/20150619_120249-1024x576-1024x576.jpg",href="https://parkistra.com/wp-content/uploads/2015/09/DSC_9618-1024x680-1024x680.jpg",href="https://parkistra.com/wp-content/uploads/2015/09/DSC_9659-1024x680-1024x680.jpg",href="https://parkistra.com/wp-content/uploads/2015/09/P1030479-1024x768.jpg",href="https://parkistra.com/wp-content/uploads/2015/08/20150807_LiterVecer7.jpg",href="https://parkistra.com/wp-content/uploads/2015/08/20150801_091053-1024x576.jpg",href="https://parkistra.com/wp-content/uploads/2015/04/08ProstovoljciNaStrehi.jpg",href="https://parkistra.com/wp-content/uploads/2017/01/IMG_2904a.jpg",href="https://parkistra.com/wp-content/uploads/2017/01/IMG_2894a.jpg",href="https://parkistra.com/wp-content/uploads/2015/04/04HiskaNastaja.jpg",href="https://parkistra.com/wp-content/uploads/2014/12/15_SeOmeti.jpg",href="https://parkistra.com/wp-content/uploads/2015/10/12074856_510292952463957_6381691699495613357_n.jpg",href="https://parkistra.com/wp-content/uploads/2015/10/12087984_509728922520360_3679158523009940206_n.jpg",href="https://parkistra.com/wp-content/uploads/2015/10/12091301_10153234689323869_374538981096838023_o-1024x346.jpg",href="https://parkistra.com/wp-content/uploads/2015/10/12107281_509728175853768_7149932322596225140_n.jpg",href="https://parkistra.com/wp-content/uploads/2015/10/12108279_509729095853676_6041166563706473884_n.jpg",href="https://parkistra.com/wp-content/uploads/2015/10/12122446_509291459230773_2747560996871897513_n.jpg",href="https://parkistra.com/wp-content/uploads/2015/10/12143155_510290815797504_5497550543232349107_n.jpg",href="https://parkistra.com/wp-content/uploads/2015/10/20061231-Park-Istra-Hrvoji-8-800x600.jpg",href="https://parkistra.com/wp-content/uploads/2015/10/20150825-Park-Istra-Hrvoji-24-800x533.jpg",href="https://parkistra.com/wp-content/uploads/2015/10/20150825-Park-Istra-Hrvoji-174-800x533.jpg",href="https://parkistra.com/wp-content/uploads/2015/10/20150826-Park-Istra-Hrvoji-238-533x800.jpg",href="https://parkistra.com/wp-content/uploads/2015/10/20150827-Park-Istra-Hrvoji-460-800x533.jpg",href="https://parkistra.com/wp-content/uploads/2015/10/20150828-Park-Istra-Hrvoji-515-533x800.jpg",href="https://parkistra.com/wp-content/uploads/2015/10/20150828-Park-Istra-Hrvoji-604-800x533.jpg",href="https://parkistra.com/wp-content/uploads/2015/10/20150828-Park-Istra-Hrvoji-612-533x800.jpg",href="https://parkistra.com/wp-content/uploads/2015/10/20150828-Park-Istra-Hrvoji-616-533x800.jpg",href="https://parkistra.com/wp-content/uploads/2015/10/20150829-Park-Istra-Hrvoji-651-533x800.jpg",href="https://parkistra.com/wp-content/uploads/2015/10/20150829-Park-Istra-Hrvoji-661-800x533.jpg",href="https://parkistra.com/wp-content/uploads/2015/10/20150829-Park-Istra-Hrvoji-675-533x800.jpg",href="https://parkistra.com/wp-content/uploads/2015/10/10445917_931419320261672_8834214590463533329_n.jpg",href="https://parkistra.com/wp-content/uploads/2015/10/10734159_10153234689513869_4879049056656762192_n.jpg",href="https://parkistra.com/wp-content/uploads/2015/10/11221571_10206735566683985_4949488965000850393_n.jpg",href="https://parkistra.com/wp-content/uploads/2015/10/11907172_931419540261650_6061534276950963959_n.jpg",href="https://parkistra.com/wp-content/uploads/2015/10/11951799_10206735566483980_1086303739093157256_n.jpg",href="https://parkistra.com/wp-content/uploads/2015/10/11953221_931419280261676_194244612689372548_n.jpg",href="https://parkistra.com/wp-content/uploads/2015/10/11953240_931419916928279_2378461716960368050_n.jpg",href="https://parkistra.com/wp-content/uploads/2015/10/11954568_935942093142728_4241151790624481882_n.jpg",href="https://parkistra.com/wp-content/uploads/2015/10/11986536_935942096476061_5902108412814197685_n.jpg",href="https://parkistra.com/wp-content/uploads/2015/10/11987143_935942026476068_1517270051056661696_n.jpg",href="https://parkistra.com/wp-content/uploads/2015/10/12036498_510293445797241_3625030767377700181_n.jpg",href="https://parkistra.com/wp-content/uploads/2015/10/12039526_10207439186515707_5241178309619868683_n.jpg",href="https://parkistra.com/wp-content/uploads/2015/10/12074603_10207439180075546_9011497070263817962_n.jpg",href="https://parkistra.com/wp-content/uploads/2014/12/14_SolataNaVrtu.jpg",href="https://parkistra.com/wp-content/uploads/2014/12/12_PridniProstovoljci.jpg",href="https://parkistra.com/wp-content/uploads/2014/12/10_Pasjak.jpg",href="https://parkistra.com/wp-content/uploads/2014/12/09_SuhozidarjaNaDelu.jpg",href="https://parkistra.com/wp-content/uploads/2014/05/Hrvoji1-x-1024x768.jpg",href="https://parkistra.com/wp-content/uploads/2014/05/Roke-zoom-1024x768.jpg",href="https://parkistra.com/wp-content/uploads/2014/05/DSC07830c-x-1024x768.jpg",href="https://parkistra.com/wp-content/uploads/2014/05/DSCN5045a-x-1024x767.jpg",href="https://parkistra.com/wp-content/uploads/2014/05/DSC_2884_resize1.jpg",href="https://parkistra.com/wp-content/uploads/2014/05/100_9578-x-1024x373.jpg",href="https://parkistra.com/wp-content/uploads/2014/04/IMG_7899-x-1024x768.jpg",href="https://parkistra.com/wp-content/uploads/2014/05/Fontana-x-1024x768.jpg",href="https://parkistra.com/wp-content/uploads/2014/05/JBPerma1-e1399057210787-1024x488.jpg",href="https://parkistra.com/wp-content/uploads/2014/05/Hrvoji2-1024x680.jpg",href="https://parkistra.com/wp-content/uploads/2014/05/DSC07854c-x-1024x279.jpg",href="https://parkistra.com/wp-content/uploads/2014/05/015_OdklopCestaLjudje-x1-1024x767.jpg",href="https://parkistra.com/wp-content/uploads/2014/04/217_OdklopIzletNaLaborGasilska-X-1024x767.jpg",href="https://parkistra.com/wp-content/uploads/2014/04/DSCI5080-x-1024x768.jpg",href="https://parkistra.com/wp-content/uploads/2014/05/100_3152-x-1024x768.jpg",href="https://parkistra.com/wp-content/uploads/2014/04/DSCI5063-x-1024x768.jpg",href="https://parkistra.com/wp-content/uploads/2014/05/Slap-1024x456.jpg",href="https://parkistra.com/wp-content/uploads/2014/05/01_VrtSpiralnaGreda.jpg",href="https://parkistra.com/wp-content/uploads/2014/05/Kip-x.jpg",href="https://parkistra.com/wp-content/uploads/2014/04/Panorama-6-1024x152.jpg",href="https://parkistra.com/wp-content/uploads/2014/10/IMG-20141008-01904-768x1024.jpg",href="https://parkistra.com/wp-content/uploads/2014/10/IMG-20141008-01909-768x1024.jpg",href="https://parkistra.com/wp-content/uploads/2014/10/DSC_0629-1024x680.jpg",href="https://parkistra.com/wp-content/uploads/2014/10/DSC_0138-1024x707.jpg",href="https://parkistra.com/wp-content/uploads/2014/09/DeloNaStrehi.jpg",href="https://parkistra.com/wp-content/uploads/2014/08/P8130606.jpg",href="https://parkistra.com/wp-content/uploads/2014/08/P8090404-1024x768.jpg",href="https://parkistra.com/wp-content/uploads/2014/08/100_7985.jpg",href="https://parkistra.com/wp-content/uploads/2014/08/DSCN7489-768x1024.jpg",href="https://parkistra.com/wp-content/uploads/2014/08/DSC0078541.jpg",href="https://parkistra.com/wp-content/uploads/2014/07/permakultura3-1024x768.jpg",href="https://parkistra.com/wp-content/uploads/2014/07/trajnostni_poligon.jpg",href="https://parkistra.com/wp-content/uploads/2014/05/inovativni_turizem.jpg",href="https://parkistra.com/wp-content/uploads/2014/08/DSC0078514.jpg",href="https://parkistra.com/wp-content/uploads/2014/08/1622266_10203535397818817_2274638826560746285_n.jpg",href="https://parkistra.com/wp-content/uploads/2014/09/Skupnost.jpg",href="https://parkistra.com/wp-content/uploads/2014/12/100_7526_th.jpg",href="https://parkistra.com/wp-content/uploads/2015/01/DSC_0428-1024x685.jpg",href="https://parkistra.com/wp-content/uploads/2015/04/03_CesenJagode.jpg",href="https://parkistra.com/wp-content/uploads/2014/09/P9050779.jpg",href="https://parkistra.com/wp-content/uploads/2014/08/P8160671.jpg",href="https://parkistra.com/wp-content/uploads/2014/09/DSC_0967.jpg"'

// const imageLinks: string[] = inputText.replaceAll('href="', '').replaceAll('"', '').split(",");
// const photos = imageLinks.map((src, index) => ({ src, width: 1, height: 1 }));
// const photos = [
//   {
//     src: '/carousel1.jpeg',
//     width: 15,
//     height: 10,
//   },
//   {
//     src: '/carousel3.jpeg',
//     width: 15,
//     height: 10,
//   },
//   {
//     src: '/project1ParkIstra.jpeg',
//     width: 15,
//     height: 10,
//   },
//   {
//     src: '/project2ParkIstra.jpeg',
//     width: 15,
//     height: 10,
//   },
//   {
//     src: '/project3ParkIstra.jpeg',
//     width: 15,
//     height: 10,
//   },
//   {
//     src: '/carousel2.jpeg',
//     width: 15,
//     height: 10,
//   },
//   {
//     src: '/project2ParkIstra.jpeg',
//     width: 15,
//     height: 10,
//   },
//   {
//     src: '/project3ParkIstra.jpeg',
//     width: 15,
//     height: 10,
//   },
//   {
//     src: '/carousel2.jpeg',
//     width: 15,
//     height: 10,
//   },
//   {
//     src: '/project3ParkIstra.jpeg',
//     width: 15,
//     height: 10,
//   },

//   {
//     src: '/carousel1.jpeg',
//     width: 15,
//     height: 10,
//   },
//   {
//     src: '/carousel2.jpeg',
//     width: 15,
//     height: 10,
//   },
//   {
//     src: '/project3ParkIstra.jpeg',
//     width: 15,
//     height: 10,
//   },
//   {
//     src: '/carousel3.jpeg',
//     width: 15,
//     height: 10,
//   },
//   {
//     src: '/project1ParkIstra.jpeg',
//     width: 15,
//     height: 10,
//   },
//   {
//     src: '/project2ParkIstra.jpeg',
//     width: 15,
//     height: 10,
//   },
//   {
//     src: '/project3ParkIstra.jpeg',
//     width: 15,
//     height: 10,
//   },
//   {
//     src: '/project1ParkIstra.jpeg',
//     width: 15,
//     height: 10,
//   },
//   {
//     src: '/project2ParkIstra.jpeg',
//     width: 15,
//     height: 10,
//   },
//   {
//     src: '/project3ParkIstra.jpeg',
//     width: 15,
//     height: 10,
//   },
//   {
//     src: '/project1ParkIstra.jpeg',
//     width: 15,
//     height: 10,
//   },
//   {
//     src: '/project2ParkIstra.jpeg',
//     width: 15,
//     height: 10,
//   },
//   {
//     src: '/project3ParkIstra.jpeg',
//     width: 15,
//     height: 10,
//   },
//   {
//     src: '/project1ParkIstra.jpeg',
//     width: 15,
//     height: 10,
//   },
//   {
//     src: '/carousel3.jpeg',
//     width: 15,
//     height: 10,
//   },
//   {
//     src: '/project1ParkIstra.jpeg',
//     width: 15,
//     height: 10,
//   },
//   {
//     src: '/project2ParkIstra.jpeg',
//     width: 15,
//     height: 10,
//   },
//   {
//     src: '/project2ParkIstra.jpeg',
//     width: 15,
//     height: 10,
//   },
//   {
//     src: '/project3ParkIstra.jpeg',
//     width: 15,
//     height: 10,
//   },
//   {
//     src: '/project1ParkIstra.jpeg',
//     width: 15,
//     height: 10,
//   },
//   {
//     src: '/project2ParkIstra.jpeg',
//     width: 15,
//     height: 10,
//   },
//   {
//     src: '/project3ParkIstra.jpeg',
//     width: 15,
//     height: 10,
//   },
//   // Add more photos as needed
//   {
//     src: '/carousel1.jpeg',
//     width: 15,
//     height: 10,
//   },
//   {
//     src: '/carousel3.jpeg',
//     width: 15,
//     height: 10,
//   },
//   {
//     src: '/project1ParkIstra.jpeg',
//     width: 15,
//     height: 10,
//   },
//   {
//     src: '/project2ParkIstra.jpeg',
//     width: 15,
//     height: 10,
//   },
//   {
//     src: '/project3ParkIstra.jpeg',
//     width: 15,
//     height: 10,
//   },
//   {
//     src: '/carousel2.jpeg',
//     width: 15,
//     height: 10,
//   },
//   {
//     src: '/project2ParkIstra.jpeg',
//     width: 15,
//     height: 10,
//   },
//   {
//     src: '/project3ParkIstra.jpeg',
//     width: 15,
//     height: 10,
//   },
//   {
//     src: '/carousel2.jpeg',
//     width: 15,
//     height: 10,
//   },
//   {
//     src: '/project3ParkIstra.jpeg',
//     width: 15,
//     height: 10,
//   },

//   {
//     src: '/carousel1.jpeg',
//     width: 15,
//     height: 10,
//   },
//   {
//     src: '/carousel2.jpeg',
//     width: 15,
//     height: 10,
//   },
//   {
//     src: '/project3ParkIstra.jpeg',
//     width: 15,
//     height: 10,
//   },
//   {
//     src: '/carousel3.jpeg',
//     width: 15,
//     height: 10,
//   },
//   {
//     src: '/project1ParkIstra.jpeg',
//     width: 15,
//     height: 10,
//   },
//   {
//     src: '/project2ParkIstra.jpeg',
//     width: 15,
//     height: 10,
//   },
//   {
//     src: '/project3ParkIstra.jpeg',
//     width: 15,
//     height: 10,
//   },
//   {
//     src: '/project1ParkIstra.jpeg',
//     width: 15,
//     height: 10,
//   },
//   {
//     src: '/project2ParkIstra.jpeg',
//     width: 15,
//     height: 10,
//   },
//   {
//     src: '/project3ParkIstra.jpeg',
//     width: 15,
//     height: 10,
//   },
//   {
//     src: '/project1ParkIstra.jpeg',
//     width: 15,
//     height: 10,
//   },
//   {
//     src: '/project2ParkIstra.jpeg',
//     width: 15,
//     height: 10,
//   },
//   {
//     src: '/project3ParkIstra.jpeg',
//     width: 15,
//     height: 10,
//   },
//   {
//     src: '/project1ParkIstra.jpeg',
//     width: 15,
//     height: 10,
//   },
//   {
//     src: '/carousel3.jpeg',
//     width: 15,
//     height: 10,
//   },
//   {
//     src: '/project1ParkIstra.jpeg',
//     width: 15,
//     height: 10,
//   },
//   {
//     src: '/project2ParkIstra.jpeg',
//     width: 15,
//     height: 10,
//   },
//   {
//     src: '/project2ParkIstra.jpeg',
//     width: 15,
//     height: 10,
//   },
//   {
//     src: '/project3ParkIstra.jpeg',
//     width: 15,
//     height: 10,
//   },
//   {
//     src: '/project1ParkIstra.jpeg',
//     width: 15,
//     height: 10,
//   },
//   {
//     src: '/project2ParkIstra.jpeg',
//     width: 15,
//     height: 10,
//   },
//   {
//     src: '/project3ParkIstra.jpeg',
//     width: 15,
//     height: 10,
//   },
//   {
//     src: '/carousel1.jpeg',
//     width: 15,
//     height: 10,
//   },
//   {
//     src: '/carousel3.jpeg',
//     width: 15,
//     height: 10,
//   },
//   {
//     src: '/project1ParkIstra.jpeg',
//     width: 15,
//     height: 10,
//   },
//   {
//     src: '/project2ParkIstra.jpeg',
//     width: 15,
//     height: 10,
//   },
//   {
//     src: '/project3ParkIstra.jpeg',
//     width: 15,
//     height: 10,
//   },
//   {
//     src: '/carousel2.jpeg',
//     width: 15,
//     height: 10,
//   },
//   {
//     src: '/project2ParkIstra.jpeg',
//     width: 15,
//     height: 10,
//   },
//   {
//     src: '/project3ParkIstra.jpeg',
//     width: 15,
//     height: 10,
//   },
//   {
//     src: '/carousel2.jpeg',
//     width: 15,
//     height: 10,
//   },
//   {
//     src: '/project3ParkIstra.jpeg',
//     width: 15,
//     height: 10,
//   },

//   {
//     src: '/carousel1.jpeg',
//     width: 15,
//     height: 10,
//   },
//   {
//     src: '/carousel2.jpeg',
//     width: 15,
//     height: 10,
//   },
//   {
//     src: '/project3ParkIstra.jpeg',
//     width: 15,
//     height: 10,
//   },
//   {
//     src: '/carousel3.jpeg',
//     width: 15,
//     height: 10,
//   },
//   {
//     src: '/project1ParkIstra.jpeg',
//     width: 15,
//     height: 10,
//   },
//   {
//     src: '/project2ParkIstra.jpeg',
//     width: 15,
//     height: 10,
//   },
//   {
//     src: '/project3ParkIstra.jpeg',
//     width: 15,
//     height: 10,
//   },
//   {
//     src: '/project1ParkIstra.jpeg',
//     width: 15,
//     height: 10,
//   },
//   {
//     src: '/project2ParkIstra.jpeg',
//     width: 15,
//     height: 10,
//   },
//   {
//     src: '/project3ParkIstra.jpeg',
//     width: 15,
//     height: 10,
//   },
//   {
//     src: '/project1ParkIstra.jpeg',
//     width: 15,
//     height: 10,
//   },
//   {
//     src: '/project2ParkIstra.jpeg',
//     width: 15,
//     height: 10,
//   },
//   {
//     src: '/project3ParkIstra.jpeg',
//     width: 15,
//     height: 10,
//   },
//   {
//     src: '/project1ParkIstra.jpeg',
//     width: 15,
//     height: 10,
//   },
//   {
//     src: '/carousel3.jpeg',
//     width: 15,
//     height: 10,
//   },
//   {
//     src: '/project1ParkIstra.jpeg',
//     width: 15,
//     height: 10,
//   },
//   {
//     src: '/project2ParkIstra.jpeg',
//     width: 15,
//     height: 10,
//   },
//   {
//     src: '/project2ParkIstra.jpeg',
//     width: 15,
//     height: 10,
//   },
//   {
//     src: '/project3ParkIstra.jpeg',
//     width: 15,
//     height: 10,
//   },
//   {
//     src: '/project1ParkIstra.jpeg',
//     width: 15,
//     height: 10,
//   },
//   {
//     src: '/project2ParkIstra.jpeg',
//     width: 15,
//     height: 10,
//   },
//   {
//     src: '/project3ParkIstra.jpeg',
//     width: 15,
//     height: 10,
//   },
// ];

// const GalleryPage: React.FC = () => {
//   return (
//     <div  className = "bg-[#ECE3CE] p-2">
//         <Photo photos={photos}/>
//     </div>
//   );
// };

// export default GalleryPage;

export default async function Instagram() {
    const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink&access_token=IGQWRQWVVjY1F6WmdXZAHNOdk03aEhQVUhnVWdCQUl2VzRMaDgwdkRHZA3NlQS1zOGJUVnZAoZAG5BZAS05ZAWRwMmtDX1FiLWhsUU9tTVY0N0UtZAFB4V19TT3J1aDRLOUFBMnNCTWJIcU1aWDhBUmZAfVnh5NUFKc0VOQWsZD`; //${process.env.INSTAGRAM_KEY}
    const data = await fetch(url);
    const feed = await data.json();
    console.log(feed);

    const images = feed.data;
    return (
        <div className="bg-[#ECE3CE]">
            <div className="gap-4 grid grid-cols-1 md:grid-cols-4">
                {images &&
                    images.map((image: any) => (
                        <div key={image.id}>
                            <img src={image.media_url} alt={image.caption} />
                        </div>
                    ))}
            </div>
        </div>
    );
}
