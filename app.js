let API_KEY = '26f3d4b015730d97bb797de57a8deb32';
let main  = document.getElementById("main")
// console.log(GET `https://newsapi.org/v2/everything?q=tesla&from=2022-08-18&sortBy=publishedAt&apiKey=${API_KEY}`);

const getNews = async () => {
    let url = `https://gnews.io/api/v4/search?q=example&token=${API_KEY}`;
    const response = await fetch(url);

    console.log(response.status);
    
    const data = await response.json();
    console.log(data);
    console.log(data.articles);
    return showNews(data)
}


const showNews = (data) => {
   
   main.innerHTML = `
    <div class="content d-flex flex-column flex-column-fluid" id="kt_content">
        <!--begin::Toolbar-->
        <div class="toolbar" id="kt_toolbar">
            <!--begin::Container-->
        <!--begin::Post-->
        <div class="post d-flex flex-column-fluid" id="kt_post">
            <!--begin::Container-->
            <div id="kt_content_container" class="container-xxl">
                <!--begin::Home card-->
                <div class="card">
                    <!--begin::Body-->
                    <div class="card-body p-lg-20">
                        <!--begin::Section-->
                        <div class="mb-17">
                            <!--begin::Title-->
                            <h3 class="text-dark mb-7">Latest Articles, News &amp; Updates</h3>
                            <!--end::Title-->
                            <!--begin::Separator-->
                            <div class="separator separator-dashed mb-9"></div>
                            <!--end::Separator-->
                            <!--begin::Row-->
                            <div class="row">
                                <!--begin::Col-->
                                <div class="col-md-6">
                                    <!--begin::Feature post-->
                                    <div class="h-100 d-flex flex-column justify-content-between pe-lg-6 mb-lg-0 mb-10">
                                        <!--begin::Video-->
                                        <div class="mb-3 me-3">
                                            <img src="${data.articles[3].image}" class="image-fluid" style="width: 500px;height: 326px;">
                                        </div>
                                        <!--end::Video-->
                                        <!--begin::Body-->
                                        <div class="mb-5">
                                            <!--begin::Title-->
                                            <a href="#" class="fs-2 text-dark fw-bolder text-hover-primary text-dark lh-base">${data.articles[3].title}</a>
                                            <!--end::Title-->
                                            <!--begin::Text-->
                                            <div class="fw-bold fs-5 text-gray-600 text-dark mt-4">${data.articles[3].description}</div>
                                            <!--end::Text-->
                                        </div>
                                        <!--end::Body-->
                                        <!--begin::Footer-->
                                        <div class="d-flex flex-stack flex-wrap">
                                            <!--begin::Item-->
                                            <div class="d-flex align-items-center pe-2">
                                                <!--begin::Avatar-->
                                                <div class="symbol symbol-35px symbol-circle me-3">
                                                    <img alt="" src="${data.articles[3].image}">
                                                </div>
                                                <!--end::Avatar-->
                                                <!--begin::Text-->
                                                <div class="fs-5 fw-bolder">
                                                    <a href="../../demo1/dist/pages/user-profile/overview.html" class="text-gray-700 text-hover-primary">David Morgan</a>
                                                    <span class="text-muted">${data.articles[3].publishedAt}</span>
                                                </div>
                                                <!--end::Text-->
                                            </div>
                                            <!--end::Item-->
                                            <!--begin::Label-->
                                            <span class="badge badge-light-primary fw-bolder my-2">TUTORIALS</span>
                                            <!--end::Label-->
                                        </div>
                                        <!--end::Footer-->
                                    </div>
                                    <!--end::Feature post-->
                                </div>
                                <!--end::Col-->
                                <!--begin::Col-->
                                <div class="col-md-6 justify-content-between d-flex flex-column">
                                    <!--begin::Post-->
                                    <div class="ps-lg-6 mb-16 mt-md-0 mt-17">
                                        <!--begin::Body-->
                                        <div class="mb-6">
                                            <!--begin::Title-->
                                            <a href="#" class="fw-bolder text-dark mb-4 fs-2 lh-base text-hover-primary">${data.articles[0].title}</a>
                                            <!--end::Title-->
                                            <!--begin::Text-->
                                            <div class="fw-bold fs-5 mt-4 text-gray-600 text-dark">${data.articles[0].description}</div>
                                            <!--end::Text-->
                                        </div>
                                        <!--end::Body-->
                                        <!--begin::Footer-->
                                        <div class="d-flex flex-stack flex-wrap">
                                            <!--begin::Item-->
                                            <div class="d-flex align-items-center pe-2">
                                                <!--begin::Avatar-->
                                                <div class="symbol symbol-35px symbol-circle me-3">
                                                    <img src="${data.articles[0].image}" class="" alt="">
                                                </div>
                                                <!--end::Avatar-->
                                                <!--begin::Text-->
                                                <div class="fs-5 fw-bolder">
                                                    <a href="" class="text-gray-700 text-hover-primary">Jane Miller</a>
                                                    <span class="text-muted">${data.articles[0].publishedAt}</span>
                                                </div>
                                                <!--end::Text-->
                                            </div>
                                            <!--end::Item-->
                                            <!--begin::Label-->
                                            <span class="badge badge-light-info fw-bolder my-2">BLOG</span>
                                            <!--end::Label-->
                                        </div>
                                        <!--end::Footer-->
                                    </div>
                                    <!--end::Post-->
                                    <!--begin::Post-->
                                    <div class="ps-lg-6 mb-16">
                                        <!--begin::Body-->
                                        <div class="mb-6">
                                            <!--begin::Title-->
                                            <a href="#" class="fw-bolder text-dark mb-4 fs-2 lh-base text-hover-primary">${data.articles[1].title}</a>
                                            <!--end::Title-->
                                            <!--begin::Text-->
                                            <div class="fw-bold fs-5 mt-4 text-gray-600 text-dark">${data.articles[1].description}</div>
                                            <!--end::Text-->
                                        </div>
                                        <!--end::Body-->
                                        <!--begin::Footer-->
                                        <div class="d-flex flex-stack flex-wrap">
                                            <!--begin::Item-->
                                            <div class="d-flex align-items-center pe-2">
                                                <!--begin::Avatar-->
                                                <div class="symbol symbol-35px symbol-circle me-3">
                                                    <img src="${data.articles[1].image}" class="" alt="">
                                                </div>
                                                <!--end::Avatar-->
                                                <!--begin::Text-->
                                                <div class="fs-5 fw-bolder">
                                                    <a href="" class="text-gray-700 text-hover-primary">Cris Morgan</a>
                                                    <span class="text-muted">${data.articles[1].publishedAt}</span>
                                                </div>
                                                <!--end::Text-->
                                            </div>
                                            <!--end::Item-->
                                            <!--begin::Label-->
                                            <span class="badge badge-light-primary fw-bolder my-2">TUTORIALS</span>
                                            <!--end::Label-->
                                        </div>
                                        <!--end::Footer-->
                                    </div>
                                    <!--end::Post-->
                                    <!--begin::Post-->
                                    <div class="ps-lg-6">
                                        <!--begin::Body-->
                                        <div class="mb-6">
                                            <!--begin::Title-->
                                            <a href="#" class="fw-bolder text-dark mb-4 fs-2 lh-base text-hover-primary">${data.articles[2].title}</a>
                                            <!--end::Title-->
                                            <!--begin::Text-->
                                            <div class="fw-bold fs-5 mt-4 text-gray-600 text-dark">${data.articles[2].description}</div>
                                            <!--end::Text-->
                                        </div>
                                        <!--end::Body-->
                                        <!--begin::Footer-->
                                        <div class="d-flex flex-stack flex-wrap">
                                            <!--begin::Item-->
                                            <div class="d-flex align-items-center pe-2">
                                                <!--begin::Avatar-->
                                                <div class="symbol symbol-35px symbol-circle me-3">
                                                    <img src="${data.articles[2].image}" class="" alt="">
                                                </div>
                                                <!--end::Avatar-->
                                                <!--begin::Text-->
                                                <div class="fs-5 fw-bolder">
                                                    <a href="" class="text-gray-700 text-hover-primary">Cris Morgan</a>
                                                    <span class="text-muted">${data.articles[2].publishedAt}</span>
                                                </div>
                                                <!--end::Text-->
                                            </div>
                                            <!--end::Item-->
                                            <!--begin::Label-->
                                            <span class="badge badge-light-warning fw-bolder my-2">NEWS</span>
                                            <!--end::Label-->
                                        </div>
                                        <!--end::Footer-->
                                    </div>
                                    <!--end::Post-->
                                </div>
                                <!--end::Col-->
                            </div>
                            <!--begin::Row-->
                        </div>
                        <!--end::Section-->
                        <!--begin::Section-->
                        <div class="mb-17">
                            <!--begin::Content-->
                            <div class="d-flex flex-stack mb-5">
                                <!--begin::Title-->
                                <h3 class="text-dark">News Articles</h3>
                                <!--end::Title-->
                                <!--begin::Link-->
                                <a href="#" class="fs-6 fw-bold link-primary">View All Videos</a>
                                <!--end::Link-->
                            </div>
                            <!--end::Content-->
                            <!--begin::Separator-->
                            <div class="separator separator-dashed mb-9"></div>
                            <!--end::Separator-->
                            <!--begin::Row-->
                            <div class="row g-10">
                                <!--begin::Col-->
                                <div class="col-md-4">
                                    <!--begin::Feature post-->
                                    <div class="card-xl-stretch me-md-6">
                                        <!--begin::Image-->
                                        <a class="d-block bgi-no-repeat bgi-size-cover bgi-position-center card-rounded position-relative min-h-175px mb-5" style="background-image:url(${data.articles[4].image})" data-fslightbox="lightbox-video-tutorials" href="https://www.youtube.com/embed/btornGtLwIo">
                                            <img src="assets/media/svg/misc/video-play.svg" class="position-absolute top-50 start-50 translate-middle" alt="">
                                        </a>
                                        <!--end::Image-->
                                        <!--begin::Body-->
                                        <div class="m-0">
                                            <!--begin::Title-->
                                            <a href="../../demo1/dist/pages/user-profile/overview.html" class="fs-4 text-dark fw-bolder text-hover-primary text-dark lh-base">${data.articles[4].title}</a>
                                            <!--end::Title-->
                                            <!--begin::Text-->
                                            <div class="fw-bold fs-5 text-gray-600 text-dark my-4">${data.articles[0].description}</div>
                                            <!--end::Text-->
                                            <!--begin::Content-->
                                            <div class="fs-6 fw-bolder">
                                                <!--begin::Author-->
                                                <a href="" class="text-gray-700 text-hover-primary">Jane Miller</a>
                                                <!--end::Author-->
                                                <!--begin::Date-->
                                                <span class="text-muted">${data.articles[0].publishedAt}</span>
                                                <!--end::Date-->
                                            </div>
                                            <!--end::Content-->
                                        </div>
                                        <!--end::Body-->
                                    </div>
                                    <!--end::Feature post-->
                                </div>
                                <!--end::Col-->
                                <!--begin::Col-->
                                <div class="col-md-4">
                                    <!--begin::Feature post-->
                                    <div class="card-xl-stretch mx-md-3">
                                        <!--begin::Image-->
                                        <a class="d-block bgi-no-repeat bgi-size-cover bgi-position-center card-rounded position-relative min-h-175px mb-5" style="background-image:url(${data.articles[5].image})" data-fslightbox="lightbox-video-tutorials" href="https://www.youtube.com/embed/btornGtLwIo">
                                            <img src="assets/media/svg/misc/video-play.svg" class="position-absolute top-50 start-50 translate-middle" alt="">
                                        </a>
                                        <!--end::Image-->
                                        <!--begin::Body-->
                                        <div class="m-0">
                                            <!--begin::Title-->
                                            <a href="../../demo1/dist/pages/user-profile/overview.html" class="fs-4 text-dark fw-bolder text-hover-primary text-dark lh-base">${data.articles[5].title}</a>
                                            <!--end::Title-->
                                            <!--begin::Text-->
                                            <div class="fw-bold fs-5 text-gray-600 text-dark my-4">${data.articles[5].description}</div>
                                            <!--end::Text-->
                                            <!--begin::Content-->
                                            <div class="fs-6 fw-bolder">
                                                <!--begin::Author-->
                                                <a href="" class="text-gray-700 text-hover-primary">Cris Morgan</a>
                                                <!--end::Author-->
                                                <!--begin::Date-->
                                                <span class="text-muted">${data.articles[5].publishedAt}</span>
                                                <!--end::Date-->
                                            </div>
                                            <!--end::Content-->
                                        </div>
                                        <!--end::Body-->
                                    </div>
                                    <!--end::Feature post-->
                                </div>
                                <!--end::Col-->
                                <!--begin::Col-->
                                <div class="col-md-4">
                                    <!--begin::Feature post-->
                                    <div class="card-xl-stretch ms-md-6">
                                        <!--begin::Image-->
                                        <a class="d-block bgi-no-repeat bgi-size-cover bgi-position-center card-rounded position-relative min-h-175px mb-5" style="background-image:url(${data.articles[6].image})" data-fslightbox="lightbox-video-tutorials" href="https://www.youtube.com/embed/TWdDZYNqlg4">
                                            <img src="assets/media/svg/misc/video-play.svg" class="position-absolute top-50 start-50 translate-middle" alt="">
                                        </a>
                                        <!--end::Image-->
                                        <!--begin::Body-->
                                        <div class="m-0">
                                            <!--begin::Title-->
                                            <a href="../../demo1/dist/pages/user-profile/overview.html" class="fs-4 text-dark fw-bolder text-hover-primary text-dark lh-base">${data.articles[6].title}</a>
                                            <!--end::Title-->
                                            <!--begin::Text-->
                                            <div class="fw-bold fs-5 text-gray-600 text-dark my-4">${data.articles[0].description}</div>
                                            <!--end::Text-->
                                            <!--begin::Content-->
                                            <div class="fs-6 fw-bolder">
                                                <!--begin::Author-->
                                                <a href="../../demo1/dist/pages/user-profile/overview.html" class="text-gray-700 text-hover-primary">Carles Nilson</a>
                                                <!--end::Author-->
                                                <!--begin::Date-->
                                                <span class="text-muted">${data.articles[0].publishedAt}</span>
                                                <!--end::Date-->
                                            </div>
                                            <!--end::Content-->
                                        </div>
                                        <!--end::Body-->
                                    </div>
                                    <!--end::Feature post-->
                                </div>
                                <!--end::Col-->
                            </div>
                            <!--end::Row-->
                        </div>
                        <!--end::Section-->
                                                    </div>
                            <!--begin::Row-->
                        </div>
                        <!--end::latest instagram-->
                    </div>
                    <!--end::Body-->
                </div>
                <!--end::Home card-->
            </div>
            <!--end::Container-->
        </div>
        <!--end::Post-->
    </div>
    `
};



getNews();
