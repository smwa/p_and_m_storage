/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at
 http://www.apache.org/licenses/LICENSE-2.0
 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */

// Names of the two caches used in this version of the service worker.
// Change to v2, etc. when you update any of the local resources, which will
// in turn trigger the install event again.
const PRECACHE = "precache-20260115024153+0000";
const RUNTIME = "runtime-20260115024153+0000";

// A list of local resources we always want to be cached.
const PRECACHE_URLS = [
  
  
    './assets/css/custom.css',
  
    './assets/img/apple-mask-icon.svg',
  
    './assets/img/logo.png',
  
    './assets/img/themed-mask-icon.png',
  
    './assets/js/index.js',
  
    './assets/photos/metalBuildings/20240320_075203.jpeg',
  
    './assets/photos/metalBuildings/IMG_0861.jpeg',
  
    './assets/photos/metalBuildings/IMG_2150.jpeg',
  
    './assets/photos/metalBuildings/IMG_2157.jpeg',
  
    './assets/photos/metalBuildings/IMG_2522.jpeg',
  
    './assets/photos/metalBuildings/IMG_3906.jpeg',
  
    './assets/photos/metalBuildings/IMG_3907.jpeg',
  
    './assets/photos/metalBuildings/IMG_3908.jpeg',
  
    './assets/photos/metalBuildings/IMG_3909.jpeg',
  
    './assets/photos/metalBuildings/IMG_3910.jpeg',
  
    './assets/photos/metalBuildings/IMG_3911.jpeg',
  
    './assets/photos/metalBuildings/IMG_3912.jpeg',
  
    './assets/photos/metalBuildings/IMG_5221.jpeg',
  
    './assets/photos/metalBuildings/IMG_5234.jpeg',
  
    './assets/photos/metalBuildings/IMG_5235.jpeg',
  
    './assets/photos/metalBuildings/IMG_5236.jpeg',
  
    './assets/photos/metalBuildings/IMG_5237.jpeg',
  
    './assets/photos/tinyHomes/IMG_0381.jpeg',
  
    './assets/photos/tinyHomes/IMG_0382.jpeg',
  
    './assets/photos/tinyHomes/IMG_0383.jpeg',
  
    './assets/photos/tinyHomes/IMG_0384.jpeg',
  
    './assets/photos/tinyHomes/IMG_2395.jpeg',
  
    './assets/photos/tinyHomes/IMG_2396.jpeg',
  
    './assets/photos/tinyHomes/IMG_2397.jpeg',
  
    './assets/photos/tinyHomes/IMG_2398.jpeg',
  
    './assets/photos/tinyHomes/IMG_2399.jpeg',
  
    './assets/photos/tinyHomes/IMG_2400.jpeg',
  
    './assets/photos/tinyHomes/IMG_2401.jpeg',
  
    './assets/photos/woodBuildingsExteriors/IMG_0379.jpeg',
  
    './assets/photos/woodBuildingsExteriors/IMG_0380.jpeg',
  
    './assets/photos/woodBuildingsExteriors/IMG_0388.jpeg',
  
    './assets/photos/woodBuildingsExteriors/IMG_0390.jpeg',
  
    './assets/photos/woodBuildingsExteriors/IMG_0860.jpeg',
  
    './assets/photos/woodBuildingsExteriors/IMG_0937.jpeg',
  
    './assets/photos/woodBuildingsExteriors/IMG_1254.jpeg',
  
    './assets/photos/woodBuildingsExteriors/IMG_1260.jpeg',
  
    './assets/photos/woodBuildingsExteriors/IMG_1261.jpeg',
  
    './assets/photos/woodBuildingsExteriors/IMG_1262.jpeg',
  
    './assets/photos/woodBuildingsExteriors/IMG_1369.jpeg',
  
    './assets/photos/woodBuildingsExteriors/IMG_1847.jpeg',
  
    './assets/photos/woodBuildingsExteriors/IMG_1849.jpeg',
  
    './assets/photos/woodBuildingsExteriors/IMG_1850.jpeg',
  
    './assets/photos/woodBuildingsExteriors/IMG_1851.jpeg',
  
    './assets/photos/woodBuildingsExteriors/IMG_1856.jpeg',
  
    './assets/photos/woodBuildingsExteriors/IMG_1858.jpeg',
  
    './assets/photos/woodBuildingsExteriors/IMG_2011.jpeg',
  
    './assets/photos/woodBuildingsExteriors/IMG_2062.jpeg',
  
    './assets/photos/woodBuildingsExteriors/IMG_2065.jpeg',
  
    './assets/photos/woodBuildingsExteriors/IMG_2066.jpeg',
  
    './assets/photos/woodBuildingsExteriors/IMG_2067.jpeg',
  
    './assets/photos/woodBuildingsExteriors/IMG_2134.jpeg',
  
    './assets/photos/woodBuildingsExteriors/IMG_2146.jpeg',
  
    './assets/photos/woodBuildingsExteriors/IMG_2147.jpeg',
  
    './assets/photos/woodBuildingsExteriors/IMG_2281.jpeg',
  
    './assets/photos/woodBuildingsExteriors/IMG_2287.jpeg',
  
    './assets/photos/woodBuildingsExteriors/IMG_2290.jpeg',
  
    './assets/photos/woodBuildingsExteriors/IMG_2293.jpeg',
  
    './assets/photos/woodBuildingsExteriors/IMG_2296.jpeg',
  
    './assets/photos/woodBuildingsExteriors/IMG_2299.jpeg',
  
    './assets/photos/woodBuildingsExteriors/IMG_2302.jpeg',
  
    './assets/photos/woodBuildingsExteriors/IMG_2305.jpeg',
  
    './assets/photos/woodBuildingsExteriors/IMG_2349.jpeg',
  
    './assets/photos/woodBuildingsExteriors/IMG_2354.jpeg',
  
    './assets/photos/woodBuildingsExteriors/IMG_2361.jpeg',
  
    './assets/photos/woodBuildingsExteriors/IMG_2365.jpeg',
  
    './assets/photos/woodBuildingsExteriors/IMG_2501.jpeg',
  
    './assets/photos/woodBuildingsExteriors/IMG_3503.jpeg',
  
    './assets/photos/woodBuildingsExteriors/IMG_3504.jpeg',
  
    './assets/photos/woodBuildingsExteriors/IMG_3972.jpeg',
  
    './assets/photos/woodBuildingsExteriors/IMG_4585.jpeg',
  
    './assets/photos/woodBuildingsExteriors/IMG_8597.jpeg',
  
    './assets/photos/woodBuildingsExteriors/IMG_8603.jpeg',
  
    './assets/photos/woodBuildingsExteriors/IMG_8606.jpeg',
  
    './assets/photos/woodBuildingsExteriors/IMG_8622.jpeg',
  
    './cache/resize/013dfd85c9ac021c7db84ed52679e245_4x4.jpeg',
  
    './cache/resize/05088339476738e64ed9d336aff9dec8_4x4.jpeg',
  
    './cache/resize/07e49c6482e14d4ae35d69eedfe953d3_4x4.jpeg',
  
    './cache/resize/0956dcbc43429b657076220a22b4a5fb_4x4.jpeg',
  
    './cache/resize/0ca8999c42fe4c70f4f0832fbe0cb7d4_4x4.jpeg',
  
    './cache/resize/0d28b278b5954554c35155978e339c5b_4x4.jpeg',
  
    './cache/resize/0ed97593649b8af4f93a4230babc9f31_4x4.jpeg',
  
    './cache/resize/0f3cc9009dc562f86565325416cd4c34_4x4.jpeg',
  
    './cache/resize/0ff31f670d7d77a3edc893eae16d47d8_4x4.jpeg',
  
    './cache/resize/10a4bb388d504775fa865ee91cef6b8d_4x4.jpeg',
  
    './cache/resize/1268df13cf1627f2b0f336d3b509423f_4x4.jpeg',
  
    './cache/resize/148e8a2cfa0fbba65de0331bd6f6b0c1_4x4.jpeg',
  
    './cache/resize/15bbb29ed548fa1dbf6b7254dbe6feeb_4x4.jpeg',
  
    './cache/resize/19a1d2ab8592ed733d564dfbccd2e1cd_4x4.jpeg',
  
    './cache/resize/1b0a84889f76142c30bcbca4c1c5cf91_4x4.jpeg',
  
    './cache/resize/1d7184b3d60efa65269a08532489eb5f_4x4.jpeg',
  
    './cache/resize/1fad0f81ec6bde5c5c9559487ce89fb2_4x4.jpeg',
  
    './cache/resize/22fe103b1864ffca11ee288ee77581a7_4x4.jpeg',
  
    './cache/resize/2599b23aeb5a393b1054fb16014ca68e_4x4.jpeg',
  
    './cache/resize/265e5eabb65251c649fc631899464538_4x4.jpeg',
  
    './cache/resize/27ce166127c525d04533b19048ff3e31_4x4.jpeg',
  
    './cache/resize/2b04dadbdefce4f7a74b86f25b1ed0a5_4x4.jpeg',
  
    './cache/resize/2b68ff148512b256a62fc2196970ff31_4x4.jpeg',
  
    './cache/resize/2b6acc8dfe396b4bd28ac95e3b6f22c3_4x4.jpeg',
  
    './cache/resize/2cbd6f0b5673799baa5b286cfd513657_4x4.jpeg',
  
    './cache/resize/2dcf5f3483c0ca47271f88ae95fe38a2_4x4.jpeg',
  
    './cache/resize/2df83d062ec6970acdd1865e0d88796c_4x4.jpeg',
  
    './cache/resize/2e4ccc11b4a5cb19e1d07a4b4307cbf2_4x4.jpeg',
  
    './cache/resize/2e9edd29fdb2d0662b8ad97594492183_4x4.jpeg',
  
    './cache/resize/2ea47d44c64cc4d917b4d4601160d1f2_4x4.jpeg',
  
    './cache/resize/2f6f8fbd0ed79ca09adb37f93fa1840c_4x4.jpeg',
  
    './cache/resize/305fe9fcec43df76040b214a452dfc95_4x4.jpeg',
  
    './cache/resize/307691afbbf9502e735ddd18f2460a3b_4x4.jpeg',
  
    './cache/resize/364ccfcf6516b0d7128f90c03b2807fb_4x4.jpeg',
  
    './cache/resize/3abe06a1e558eda2d49ae7b163ae9c8b_4x4.jpeg',
  
    './cache/resize/3b691019dc3af4cc143e67731d6700d7_4x4.jpeg',
  
    './cache/resize/3c80204a1463ae96267e361299bb7fd0_4x4.jpeg',
  
    './cache/resize/3cf3811ebe3821fde61a53cc8c7e99cd_4x4.jpeg',
  
    './cache/resize/3df28e7b10af4fca08a3c4a2e5a53ece_4x4.jpeg',
  
    './cache/resize/3e9464cdfe04a5c151f1345d961fa860_4x4.jpeg',
  
    './cache/resize/405f7bc609afeee660a401d91bfa6afa_4x4.jpeg',
  
    './cache/resize/40b01709be663702f1ad9a02eaa21afe_4x4.jpeg',
  
    './cache/resize/40cf1b6eb84c37364713482c0ae4683b_4x4.jpeg',
  
    './cache/resize/4455a4ab0c8f176266df262c07326c1a_4x4.jpeg',
  
    './cache/resize/466a375840ddcb55054c392c03e8e204_4x4.jpeg',
  
    './cache/resize/4b666215a915c6ffee06a5ca0c59d354_4x4.jpeg',
  
    './cache/resize/5067a102a590678eb15e04b3257e1d50_4x4.jpeg',
  
    './cache/resize/51d708971a101ca847c2680d71b7c8f7_4x4.jpeg',
  
    './cache/resize/52ce11e7fd157cc617172f99cdaa9c4a_4x4.jpeg',
  
    './cache/resize/53833ffd75943dcd5de5a33645b172ed_4x4.jpeg',
  
    './cache/resize/54684d2fb9519f0dc287f5c3efb33296_4x4.jpeg',
  
    './cache/resize/54eb6a342a344705324ee5997ee358af_4x4.jpeg',
  
    './cache/resize/57d43d08ac3bb7b16a16c89376121da7_4x4.jpeg',
  
    './cache/resize/589e569e26a0a319fb6ade1222ad9e43_4x4.jpeg',
  
    './cache/resize/5a0c80119afd188f1b87b527bdd3e84c_4x4.jpeg',
  
    './cache/resize/5d09a56a38b941c504cd1160805a50eb_4x4.jpeg',
  
    './cache/resize/5d42083b6e7910b76f3386f6c0409ed9_4x4.jpeg',
  
    './cache/resize/5e3a9597c38baf35f92e5d0a722e72f7_4x4.jpeg',
  
    './cache/resize/5f2e8ef9480d30387e102c36de0c4c48_4x4.jpeg',
  
    './cache/resize/60717e0e5094c700451a24d83838e286_4x4.jpeg',
  
    './cache/resize/61bf1e5e30d41b61166948dc75ea12e6_4x4.jpeg',
  
    './cache/resize/61c9b08d87452c7288d17489707d387f_4x4.jpeg',
  
    './cache/resize/65c983630a320265edd2d1aad9195f27_4x4.jpeg',
  
    './cache/resize/6729674dbd17cc416fd0de6d7b77c46f_4x4.jpeg',
  
    './cache/resize/698d8efe145ab56b9b6df251c9c8f052_4x4.jpeg',
  
    './cache/resize/6a0376adba41b7292942e2e41fe5d6ba_4x4.jpeg',
  
    './cache/resize/6bda28d3f07a3a842afc19621fce515c_4x4.jpeg',
  
    './cache/resize/6e7643ad00725bdb8fb0957afed7dfe2_4x4.jpeg',
  
    './cache/resize/6f188a3513384bd91560130eafe7f6e7_4x4.jpeg',
  
    './cache/resize/710848a25a3e7574d808969d894d9753_4x4.jpeg',
  
    './cache/resize/75040c64b046124433acea6cc60fb19c_4x4.jpeg',
  
    './cache/resize/75b148388da8dce3be1585943c477a69_4x4.jpeg',
  
    './cache/resize/76dd3072a7b9f4308b31a18bb2caba65_4x4.jpeg',
  
    './cache/resize/78614ca91b4007d35bf0ac551095458c_4x4.jpeg',
  
    './cache/resize/79bf6b992319e89946237269cbb099c2_4x4.jpeg',
  
    './cache/resize/79f998ed84431e92f5519fba09a159ee_4x4.jpeg',
  
    './cache/resize/7accba40666e257ec4482987b9547b5d_4x4.jpeg',
  
    './cache/resize/7e19c4a2b80febe50875c28d844387c1_4x4.jpeg',
  
    './cache/resize/7fd98e6c375116aa657f2092a7eff931_4x4.jpeg',
  
    './cache/resize/8039f4c0b6463092f9eb2015eb0e4f0c_4x4.jpeg',
  
    './cache/resize/835ba49417f632784f8ba834c772e47a_4x4.jpeg',
  
    './cache/resize/88df0a13540c9f929978aaec42def4e0_4x4.jpeg',
  
    './cache/resize/8aeaca053ea0c60ee26e4f338a062eff_4x4.jpeg',
  
    './cache/resize/8dcb0688c952b7db5094ca16dd45f323_4x4.jpeg',
  
    './cache/resize/8fcf02a260e2b78918f0872122ff13f2_4x4.jpeg',
  
    './cache/resize/941d28f9a2ee1dcda4c0082de93061ff_4x4.jpeg',
  
    './cache/resize/9e5f889fbf837cea3acb115e6c3c2e7b_4x4.jpeg',
  
    './cache/resize/9f34606848aeba52af2e5995dd8e242f_4x4.jpeg',
  
    './cache/resize/a1e4fed64ef2dae3d177ee0ce0aaf561_4x4.jpeg',
  
    './cache/resize/a1ff50f8ac78ea6a0f85adffc529e98a_4x4.jpeg',
  
    './cache/resize/a24c16b2945607abf41b5d158a0b7ea1_4x4.jpeg',
  
    './cache/resize/a7b048540c95126e228234bda294f447_4x4.jpeg',
  
    './cache/resize/a90d95f80945baba765a8bec8d4203ee_4x4.jpeg',
  
    './cache/resize/a9167a8f3e2cb8a26727de6a43184558_4x4.jpeg',
  
    './cache/resize/afd61cf705b7301fdd8deae403ad7655_4x4.jpeg',
  
    './cache/resize/b108828c1251b532d15fdeee7d396133_4x4.jpeg',
  
    './cache/resize/b23dcc9385583187bd6dffa93b704a87_4x4.jpeg',
  
    './cache/resize/b4985f04292468174ad913e41052b9d7_4x4.jpeg',
  
    './cache/resize/b53fa98da6d37e3989050ba2fce52c16_4x4.jpeg',
  
    './cache/resize/b6b696bbfeb46fd95d2c5879cabc52d9_4x4.jpeg',
  
    './cache/resize/ba2cdea0952e16cae5dd5e8fdd6bfec9_4x4.jpeg',
  
    './cache/resize/be765e115d24c6db120341a21045f1f4_4x4.jpeg',
  
    './cache/resize/bed5d2d67bb846d8598c110a84fdfae0_4x4.jpeg',
  
    './cache/resize/bf6202aad301f4b5a7829ac62f4c9f5d_4x4.jpeg',
  
    './cache/resize/c0869a85dc57a5d31adedcb2c89d67a7_4x4.jpeg',
  
    './cache/resize/c460dfb965a1e23eb591aa9201f9a82f_4x4.jpeg',
  
    './cache/resize/c57e55d22a3a6dd77a6669a974383981_4x4.jpeg',
  
    './cache/resize/c627fd237bfbc09574ee31ec43741ba9_4x4.jpeg',
  
    './cache/resize/c8f704a129c4cc3f2212aaa2954d89a5_4x4.jpeg',
  
    './cache/resize/c9c2e028e1675688c630236ab13836a3_4x4.jpeg',
  
    './cache/resize/cce4c42b3a139fbcbe69d75504b193ef_4x4.jpeg',
  
    './cache/resize/cd24160fcd89a1e8093d5b581d2f64fb_4x4.jpeg',
  
    './cache/resize/d6855b049941e89229e0b0fcfdb39799_4x4.jpeg',
  
    './cache/resize/daae27ba1921b942b24c86de468f4006_4x4.jpeg',
  
    './cache/resize/dd21c43155ec337a8c9fbfc004fb5b2d_4x4.jpeg',
  
    './cache/resize/df51548daba87f9065806608effc2409_4x4.jpeg',
  
    './cache/resize/df5b50df4ab9491d4c798922ccffd0a2_4x4.jpeg',
  
    './cache/resize/dfebfb98da8b1ccd100ff91e6bf20163_4x4.jpeg',
  
    './cache/resize/e2575a716a359b344db0f1587fdc7c72_4x4.jpeg',
  
    './cache/resize/e392a58ff127b51a8ce3961e646b190f_4x4.jpeg',
  
    './cache/resize/e735eabb8932d4db0598a076d94b4e0e_4x4.jpeg',
  
    './cache/resize/eb4397409a1ef7ec7f6e727cedb59442_4x4.jpeg',
  
    './cache/resize/ed78ea36c068446ba9ff0b65e1fde576_4x4.jpeg',
  
    './cache/resize/eea0f50ecedd3f0f1fb0026d686a2796_4x4.jpeg',
  
    './cache/resize/f282315a7c92dea1c93dc3ad652bf327_4x4.jpeg',
  
    './cache/resize/f47e8c88c987a1fe7d96ce22b1bcf6f7_4x4.jpeg',
  
    './cache/resize/f6d0136d03d90b8e126789b251089f09_4x4.jpeg',
  
    './cache/resize/f780867555ea5706a4678b41d443b05d_4x4.jpeg',
  
    './cache/resize/f944581c9e32e907a584982ec24e81df_4x4.jpeg',
  
    './cache/resize/fc294dfae670f0f534e893392a172f4a_4x4.jpeg',
  
    './lib/feather.min.js',
  
    './lib/skeleton/skeleton.css',
  
    './lib/splide/css/splide.min.css',
  
    './lib/splide/js/splide-extension-url-hash.min.js',
  
    './lib/splide/js/splide.min.js',
  
    './lib/splide/js/splide.min.js.map',
  
    './assets/img/logo.webp',
  
    './assets/img/themed-mask-icon.webp',
  
    './assets/photos/metalBuildings/20240320_075203.webp',
  
    './assets/photos/metalBuildings/IMG_0861.webp',
  
    './assets/photos/metalBuildings/IMG_2150.webp',
  
    './assets/photos/metalBuildings/IMG_2157.webp',
  
    './assets/photos/metalBuildings/IMG_2522.webp',
  
    './assets/photos/metalBuildings/IMG_3906.webp',
  
    './assets/photos/metalBuildings/IMG_3907.webp',
  
    './assets/photos/metalBuildings/IMG_3908.webp',
  
    './assets/photos/metalBuildings/IMG_3909.webp',
  
    './assets/photos/metalBuildings/IMG_3910.webp',
  
    './assets/photos/metalBuildings/IMG_3911.webp',
  
    './assets/photos/metalBuildings/IMG_3912.webp',
  
    './assets/photos/metalBuildings/IMG_5221.webp',
  
    './assets/photos/metalBuildings/IMG_5234.webp',
  
    './assets/photos/metalBuildings/IMG_5235.webp',
  
    './assets/photos/metalBuildings/IMG_5236.webp',
  
    './assets/photos/metalBuildings/IMG_5237.webp',
  
    './assets/photos/tinyHomes/IMG_0381.webp',
  
    './assets/photos/tinyHomes/IMG_0382.webp',
  
    './assets/photos/tinyHomes/IMG_0383.webp',
  
    './assets/photos/tinyHomes/IMG_0384.webp',
  
    './assets/photos/tinyHomes/IMG_2395.webp',
  
    './assets/photos/tinyHomes/IMG_2396.webp',
  
    './assets/photos/tinyHomes/IMG_2397.webp',
  
    './assets/photos/tinyHomes/IMG_2398.webp',
  
    './assets/photos/tinyHomes/IMG_2399.webp',
  
    './assets/photos/tinyHomes/IMG_2400.webp',
  
    './assets/photos/tinyHomes/IMG_2401.webp',
  
    './assets/photos/woodBuildingsExteriors/IMG_0379.webp',
  
    './assets/photos/woodBuildingsExteriors/IMG_0380.webp',
  
    './assets/photos/woodBuildingsExteriors/IMG_0388.webp',
  
    './assets/photos/woodBuildingsExteriors/IMG_0390.webp',
  
    './assets/photos/woodBuildingsExteriors/IMG_0860.webp',
  
    './assets/photos/woodBuildingsExteriors/IMG_0937.webp',
  
    './assets/photos/woodBuildingsExteriors/IMG_1254.webp',
  
    './assets/photos/woodBuildingsExteriors/IMG_1260.webp',
  
    './assets/photos/woodBuildingsExteriors/IMG_1261.webp',
  
    './assets/photos/woodBuildingsExteriors/IMG_1262.webp',
  
    './assets/photos/woodBuildingsExteriors/IMG_1369.webp',
  
    './assets/photos/woodBuildingsExteriors/IMG_1847.webp',
  
    './assets/photos/woodBuildingsExteriors/IMG_1849.webp',
  
    './assets/photos/woodBuildingsExteriors/IMG_1850.webp',
  
    './assets/photos/woodBuildingsExteriors/IMG_1851.webp',
  
    './assets/photos/woodBuildingsExteriors/IMG_1856.webp',
  
    './assets/photos/woodBuildingsExteriors/IMG_1858.webp',
  
    './assets/photos/woodBuildingsExteriors/IMG_2011.webp',
  
    './assets/photos/woodBuildingsExteriors/IMG_2062.webp',
  
    './assets/photos/woodBuildingsExteriors/IMG_2065.webp',
  
    './assets/photos/woodBuildingsExteriors/IMG_2066.webp',
  
    './assets/photos/woodBuildingsExteriors/IMG_2067.webp',
  
    './assets/photos/woodBuildingsExteriors/IMG_2134.webp',
  
    './assets/photos/woodBuildingsExteriors/IMG_2146.webp',
  
    './assets/photos/woodBuildingsExteriors/IMG_2147.webp',
  
    './assets/photos/woodBuildingsExteriors/IMG_2281.webp',
  
    './assets/photos/woodBuildingsExteriors/IMG_2287.webp',
  
    './assets/photos/woodBuildingsExteriors/IMG_2290.webp',
  
    './assets/photos/woodBuildingsExteriors/IMG_2293.webp',
  
    './assets/photos/woodBuildingsExteriors/IMG_2296.webp',
  
    './assets/photos/woodBuildingsExteriors/IMG_2299.webp',
  
    './assets/photos/woodBuildingsExteriors/IMG_2302.webp',
  
    './assets/photos/woodBuildingsExteriors/IMG_2305.webp',
  
    './assets/photos/woodBuildingsExteriors/IMG_2349.webp',
  
    './assets/photos/woodBuildingsExteriors/IMG_2354.webp',
  
    './assets/photos/woodBuildingsExteriors/IMG_2361.webp',
  
    './assets/photos/woodBuildingsExteriors/IMG_2365.webp',
  
    './assets/photos/woodBuildingsExteriors/IMG_2501.webp',
  
    './assets/photos/woodBuildingsExteriors/IMG_3503.webp',
  
    './assets/photos/woodBuildingsExteriors/IMG_3504.webp',
  
    './assets/photos/woodBuildingsExteriors/IMG_3972.webp',
  
    './assets/photos/woodBuildingsExteriors/IMG_4585.webp',
  
    './assets/photos/woodBuildingsExteriors/IMG_8597.webp',
  
    './assets/photos/woodBuildingsExteriors/IMG_8603.webp',
  
    './assets/photos/woodBuildingsExteriors/IMG_8606.webp',
  
    './assets/photos/woodBuildingsExteriors/IMG_8622.webp',
  
  
    './build/tn-steel/',
  
    './build/',
  
    './slideshow/metal/',
  
    './slideshow/tinyhomes/',
  
    './slideshow/wood/',
  
    './',
  
  './sitemap.xml',
  './index.html'
];

// The install handler takes care of precaching the resources we always need.
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(PRECACHE)
      .then(cache => cache.addAll(PRECACHE_URLS))
      .then(self.skipWaiting())
  );
});

// The activate handler takes care of cleaning up old caches.
self.addEventListener('activate', event => {
  const currentCaches = [PRECACHE, RUNTIME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return cacheNames.filter(cacheName => !currentCaches.includes(cacheName));
    }).then(cachesToDelete => {
      return Promise.all(cachesToDelete.map(cacheToDelete => {
        return caches.delete(cacheToDelete);
      }));
    }).then(() => self.clients.claim())
  );
});

// The fetch handler serves responses for same-origin resources from a cache.
// If no response is found, it populates the runtime cache with the response
// from the network before returning it to the page.
self.addEventListener('fetch', event => {
  // Skip cross-origin requests, like those for Google Analytics.
  if (event.request.url.startsWith(self.location.origin)) {
    event.respondWith(
      caches.match(event.request).then(cachedResponse => {
        if (cachedResponse) {
          return cachedResponse;
        }

        return caches.open(RUNTIME).then(cache => {
          return fetch(event.request).then(response => {
            // Put a copy of the response in the runtime cache.
            return cache.put(event.request, response.clone()).then(() => {
              return response;
            });
          });
        });
      })
    );
  }
});
