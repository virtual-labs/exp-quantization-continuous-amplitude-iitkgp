importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js');

workbox.precaching.precacheAndRoute([{"revision":"7cc40c199d128af6b01e74a28c5900b0","url":"assets/css/bootstrap.min.css"},{"revision":"b1e92a5593c58e6832c7f6dce30a06ce","url":"assets/css/common-styles-responsive.css"},{"revision":"77f3d6639e02a6b774981b1ad75806f5","url":"assets/css/common-styles.css"},{"revision":"22d85286c513f3d4038c42b486ea1bf6","url":"assets/css/fontawesome.min.css"},{"revision":"613745964e452941615d4e3d1a387ab7","url":"assets/css/github-markdown.min.css"},{"revision":"a394012067cf46c79ab70d75f9caf500","url":"assets/css/katex.min.css"},{"revision":"d4337ff16292cea2988829d88bb2a15b","url":"assets/css/vlabs-style.css"},{"revision":"269550530cc127b6aa5a35925a7de6ce","url":"assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css"},{"revision":"912ec66d7572ff821749319396470bde","url":"assets/fonts/font-awesome-4.7.0/fonts/fontawesome-webfont.svg"},{"revision":"ff2be0cf35ad764cfcc9779f148aa8ac","url":"assets/images/favicon.png"},{"revision":"59cbb9b31115938b15a1786dcedd7796","url":"assets/images/logo-new.png"},{"revision":"97524ffa51690acdcb0e54a4f5b8502a","url":"assets/images/logo.png"},{"revision":"7d45f6653f4b7219600292be2d83f1b4","url":"assets/images/popout.png"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"assets/images/vlabs-color-small-moe.jpg"},{"revision":"cd2bcc63369f82702340cbc2281c38d1","url":"assets/js/assessment_v2.js"},{"revision":"0c6c2d6c8bd1ff223774dc9689ee7788","url":"assets/js/assessment.js"},{"revision":"51392554bd6f04d452c6c2bf019e8812","url":"assets/js/event-handler.js"},{"revision":"0f6278fc4d074348edaba4042b4dd1f8","url":"assets/js/iframeResize.js"},{"revision":"4ae9cbf2f402c4a1dde3d8f0e3e8cf1b","url":"assets/js/instruction-box.js"},{"revision":"d9b11ca4d877c327889805b73bb79edd","url":"assets/js/jquery-3.4.1.slim.min.js"},{"revision":"bc2456c37c311bbdd25f4f54e0e8d1b9","url":"assets/js/toggleSidebar.js"},{"revision":"30ef592489ce0ac84ab367ce9eb0d597","url":"assets/js/webcomponents-loader.min.js"},{"revision":"0f2e317d41fb69dfb0270dbdf749e380","url":"assets/js/zero-md.min.js"},{"revision":"caf1062309e21ed583d00d24cac20912","url":"assets/katex_assets/katex.min.css"},{"revision":"e2746ef81277c4c45901ee6e5143d8cd","url":"contributors.html"},{"revision":"15fd988859ec857c8fbfa0b661182619","url":"feedback.html"},{"revision":"c380ebfb52c156ac50cf9e795408f2ec","url":"images/exp2_1.png"},{"revision":"225d48d6da418bc0cee45cf343014257","url":"images/fig-1.png"},{"revision":"6f390d147fcbe46d772cda5351780266","url":"images/fig-10.png"},{"revision":"e26e20fb157f4c3cf5ccd2906a4ed088","url":"images/fig-11.png"},{"revision":"a974374d770c65502571d0b290aeab7f","url":"images/fig-12.png"},{"revision":"ec29ea949308ae906975fdf66cdd6805","url":"images/fig-2.png"},{"revision":"153d57eb0ce647e52f8786eec0673632","url":"images/fig-3.png"},{"revision":"cf1601abb4cdf51908230d7dd706919c","url":"images/fig-4.png"},{"revision":"a522b0a552d2d4911d04570a3c2ec35b","url":"images/fig-5.png"},{"revision":"80b2a6987b587f4296e88ba309cdf1e7","url":"images/fig-6.png"},{"revision":"bb0bdeb5c5d6db181d1b4a76f1e31049","url":"images/fig-7.png"},{"revision":"467bff7fd5603dc0e22b1d233cf5b754","url":"images/fig-8.png"},{"revision":"22765fb6d75f5478f818e397e78c36e1","url":"images/fig-9.png"},{"revision":"f8d9c031f2854853d05da59d1e80c94a","url":"images/figexpt1a.png"},{"revision":"f2f1e415d681eb68a9d2c3598b1b80ec","url":"images/iitkgp.png"},{"revision":"c65e54722c3db018be41e1c69071c61e","url":"images/logo.jpg"},{"revision":"cc8375523e70cfe9bca89805c8fbae6d","url":"index.html"},{"revision":"776d0187ca3bba6151c0e9ac2056c025","url":"performance-report.html"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-performance/config.json"},{"revision":"3062d3749c84c5dc3fc7013e11376fce","url":"plugins/tool-performance/css/main.css"},{"revision":"8ec7b430663c34b8e9882c923e34e86e","url":"plugins/tool-performance/index.html"},{"revision":"6fc8455688b00e5dd6d392b61743473a","url":"plugins/tool-performance/js/api/gsc.js"},{"revision":"d62937417a11fee561c78bf3b145d85d","url":"plugins/tool-performance/js/api/lighthouse.js"},{"revision":"d42b124fa3c85371ea563f49f38e5a3d","url":"plugins/tool-performance/js/commonData.js"},{"revision":"11e328184e68c05f60030c19aa4efca9","url":"plugins/tool-performance/js/main.js"},{"revision":"66d4aa241bb986851066c1684270d236","url":"plugins/tool-performance/js/parse.js"},{"revision":"3f82067c934ff332a430c76f9e37b260","url":"plugins/tool-performance/js/populate/gsc.js"},{"revision":"9e183c67dc9157cd26b8a076ccf04d69","url":"plugins/tool-performance/js/populate/lighthouse.js"},{"revision":"1709dc5f9149e869449dcb2b7a8b3a20","url":"plugins/tool-performance/js/util.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-validation/config.json"},{"revision":"95c086500b7a5941bd950f22c888cc41","url":"plugins/tool-validation/css/main.css"},{"revision":"8c8a8e5422cc687a53deffd1326e5556","url":"plugins/tool-validation/index.html"},{"revision":"a35ebe17ce73daf38433381fbe0071de","url":"plugins/tool-validation/js/link_validation.js"},{"revision":"acc595e531160409a0194bf7190696d0","url":"plugins/tool-validation/js/main.js"},{"revision":"49049daf46cd95b6d8754b4df6cd57b2","url":"plugins/tool-validation/package-lock.json"},{"revision":"3e614b98b80bb07eef3338b563d697af","url":"plugins/tool-validation/package.json"},{"revision":"4f3da64dddc12e081ed9c2681481e274","url":"posttest.html"},{"revision":"afa3431bef21a607fac78ed61f7ec621","url":"posttest.json"},{"revision":"864b81e23962dc270022385323df39ad","url":"pretest.html"},{"revision":"0f2bd1d8c63e751aadad7c183f20dbc8","url":"pretest.json"},{"revision":"4311c032ec4653abc68cfed27c8dc7da","url":"procedure.html"},{"revision":"eea7befc59cf6a3c10703f9e953168e5","url":"references.html"},{"revision":"4b8ffc86b16ebd88087d23c27f740475","url":"simulation.html"},{"revision":"3223e561e2f89cc2c5db821a92bfa8ab","url":"simulation/css/adi.css"},{"revision":"f16490e0a840f15fe3cda21fd6f51565","url":"simulation/css/adik.css"},{"revision":"f8f2e2eb9a0dc54dc40d2a1510eb6ba5","url":"simulation/css/bootstrap.min.css"},{"revision":"d960ba258a7371af992d59ca90998786","url":"simulation/css/joint.css"},{"revision":"6fd5a6e8197041971d02cf62d06f4b14","url":"simulation/css/jquery-ui.css"},{"revision":"32c98a7488a20909017a578b74087c85","url":"simulation/css/main.css"},{"revision":"2ae2330d291878876824f41815b25160","url":"simulation/images/FuWa.png"},{"revision":"8931dd0bc569d7e7b10ed6c1509c3d50","url":"simulation/images/HaWa.png"},{"revision":"2d646db9485baccb85a7c47d00c27480","url":"simulation/images/iitkgp.png"},{"revision":"0b83d9b2c322182c437e582d7883996d","url":"simulation/images/vlabs.jpg"},{"revision":"bf9fa711f3378420485fbfe861eb0296","url":"simulation/images/vlabs.png"},{"revision":"9ca564a25beed33758e05ff3042c10ea","url":"simulation/index.html"},{"revision":"1c37a1585ce5e9de5ade2491ed81799e","url":"simulation/js/adidspex2s.js"},{"revision":"27802284bae105b6ea0712bcd266ead2","url":"simulation/js/adik.js"},{"revision":"222432686a333255fd0f9b8fa4d4e713","url":"simulation/js/backbone.js"},{"revision":"094448a3d4eb86a8f0f82406e4fbd38b","url":"simulation/js/basic.js"},{"revision":"77cbad27852866cec1e32648eaafd22d","url":"simulation/js/bootstrap.min.js"},{"revision":"c88eae88638e3bda1ef6b84dffc3ac32","url":"simulation/js/d3.v5.js"},{"revision":"f404be7b65a78c400376c2f38d9c5d42","url":"simulation/js/fonts/tex.js"},{"revision":"55ef252ef5172af738f8764fbfae8aa6","url":"simulation/js/joint.js"},{"revision":"ab5284de5e3d221e53647fd348e5644b","url":"simulation/js/jquery-ui.js"},{"revision":"23c7c5d2d1317508e807a6c7f777d6ed","url":"simulation/js/jquery.js"},{"revision":"dc5e7f18c8d36ac1d3d4753a87c98d0a","url":"simulation/js/jquery.min.js"},{"revision":"cac376515e879d9864e293ca3202b606","url":"simulation/js/knob.js"},{"revision":"cf4357240ba8acad4878b0494f8cfb6b","url":"simulation/js/leaderline.min.js"},{"revision":"c87b4981943241bf77dfb7a1f53f6323","url":"simulation/js/links.js"},{"revision":"bbb588cc4360df5d317ebff5f5c1ac9c","url":"simulation/js/lodash.js"},{"revision":"cbe21ee49f13dc9256c5e51e3bd11b8a","url":"simulation/js/main.js"},{"revision":"1bc5ac9a19fa41053771a08d8129f895","url":"simulation/js/p1.js"},{"revision":"e49171bc71b37f6f07f1f3b7fb8845ba","url":"simulation/js/plain-draggable.js"},{"revision":"b9f305114cd500cf450bedb6ddd8baed","url":"simulation/js/popper.min.js"},{"revision":"98314247892d6ca0ef312bc7373beb44","url":"simulation/js/tex-chtml-full.js"},{"revision":"745b55a56005593ada4bde5603a645de","url":"simulation/js/ui.el.js"},{"revision":"39f1b300485193c085761af6db9b2635","url":"simulation/js/ui.js"},{"revision":"3e9f73eec3f7b58311c86adef7db9504","url":"theory.html"},{"revision":"e413767782fb9b66336e01fca5d94782","url":"validator-report.html"}]);

// Add runtime caching for images, fonts, js, css.
workbox.routing.registerRoute(
    ({request}) => request.destination === 'script' || request.destination === 'style' || request.destination === 'font' || request.destination === 'image',
    new workbox.strategies.CacheFirst()
);

// Cache the json data from url https://github.com/exp-adder-circuit-iiith/pretest.json
// workbox.routing.registerRoute(
//     ({url}) => url.origin === 'https://github.com' && url.pathname === '/exp-adder-circuit-iiith/pretest.json',
//     new workbox.strategies.NetworkFirst()
// );