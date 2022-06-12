import FadeListProduct from "../LayoutProducts/FadeListProduct";
import FadeSortProduct from "../LayoutProducts/FadeSortProduct";
import GridFadeProduct from "../LayoutProducts/GridFadeProduct";


function ContentWrapper() {
const products = [1,2,3,4,5,6,7,8]
  return (
    <div className="content-wrapper col-xl-9 col-lg-9 order-lg-2">
      <div className="block-category mb-30 w-100 float-left">
        <div className="category-cover">
          <img src="img/banner/category-banner.png" alt="category-banner" />
        </div>
        <div className="title-category text-capitalize">women</div>
        <div className="category-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sagittis,
          magna et euismod auctor, mauris ipsum interdum risus, a varius augue
          lacus id diam. Mauris maximus, ipsum at gravida sodales, purus tellus
          tempor eros, a feugiat elit odio in nunc.
        </div>
      </div>
      <header className="product-grid-header d-flex d-xs-block d-sm-flex d-lg-flex w-100 float-left">
        <div className="hidden-sm-down total-products d-flex d-xs-block d-lg-flex col-md-3 col-sm-3 col-xs-12 align-items-center">
          <div className="row">
            <div className="nav" role="tablist">
              <a
                className="grid active"
                href="#grid"
                data-toggle="tab"
                role="tab"
                aria-selected="true"
                aria-controls="grid"
              >
                <i className="material-icons align-middle">grid_on</i>
              </a>
              <a
                className="list"
                href="#list"
                data-toggle="tab"
                role="tab"
                aria-selected="false"
                aria-controls="list"
              >
                <i className="material-icons align-middle">
                  format_list_bulleted
                </i>
              </a>
              <a
                className="sort"
                href="#sort-view"
                data-toggle="tab"
                role="tab"
                aria-selected="false"
                aria-controls="sort-view"
              >
                <i className="material-icons align-middle">reorder</i>
              </a>
            </div>
          </div>
        </div>
        <div className="shop-results-wrapper d-flex d-sm-flex d-xs-block d-lg-flex justify-content-end col-md-9 col-sm-9 col-xs-12">
          <div className="shop-results d-flex align-items-center">
            <span>Show</span>
            <div className="shop-select">
              <select name="number" id="number">
                <option value={9}>9</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
                <option value={75}>75</option>
                <option value={100}>100</option>
              </select>
            </div>
          </div>
          <div className="shop-results d-flex align-items-center">
            <span>Sort By</span>
            <div className="shop-select">
              <select name="sort" id="sort">
                <option value="position">Default sorting</option>
                <option value="p-name">Sort Popularity</option>
                <option value="p-price">Sort Price</option>
              </select>
            </div>
          </div>
        </div>
      </header>
      <div className="tab-content text-center products w-100 float-left">
        <div className="tab-pane grid fade active" id="grid" role="tabpanel">
          <div className="row">
            { products.map((a,b) => (
                <GridFadeProduct/>
            ))}
          </div>
        </div>
        <div className="tab-pane fade list text-left" id="list" role="tabpanel">
                {products.map((a,b) => (
                    <FadeListProduct/>
                ))}
        </div>
        <div
          className="tab-pane fade sort text-left"
          id="sort-view"
          role="tabpanel"
        >
            {products.map((a,b) => (
                <FadeSortProduct/>
            ))}
        </div>
      </div>
      <div className="pagination-wrapper float-left w-100">
        <p>Showing 1 to 9 of 11 (2 Pages)</p>
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">«</span>
                <span className="sr-only">Previous</span>
              </a>
            </li>
            <li className="page-item active">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">»</span>
                <span className="sr-only">Next</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
export default ContentWrapper;
