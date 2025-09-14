import React, { useState } from 'react';

function Main() {
  const products = [
    { id: 1, name: 'Product 1', status: false },
    { id: 2, name: 'Product 2', status: true },
    { id: 3, name: 'Product 3', status: false },
    { id: 4, name: 'Product 4', status: true },
    { id: 5, name: 'Product 5', status: false },
    { id: 6, name: 'Product 6', status: true },
    { id: 7, name: 'Product 7', status: false },
  ];

  const [counter, setCounter] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState('');
  const [search, setSearch] = useState('');

  // Filtered Products for Search
  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="container">
        <aside className="sidebar">
  <h2 className="logo">Logo</h2>
  <div className="divider"></div>
  <nav>
    <ul>
      <li className="active">Dashboard</li>
      <li>Status</li>
      <li>Reports</li>
      <li>Notification</li>
    </ul>
  </nav>
  <div className="sidebar-bottom">
    <div className="divider"></div>
    <button className="logout">
      Logout <span className="logout-icon">➜]</span>
    </button>
  </div>
</aside>


        <div className="topbar">
          <header>
            <h1>Dashboard</h1>
            <div className="profile">R</div>
          </header>
        </div>

        {/* Main section - Products */}
        <div className="main">
          <section className="products">
            <div className="details-row">
              <h3>List of Products</h3>
              <div className="search-container">
                <input
                  type="text"
                  placeholder="Search Product..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <span className="search-icon">⌕</span>
              </div>
            </div>
            <div className="scrollable-list">
              <ul>
                {filteredProducts.map((p) => (
                  <li key={p.id}>
                    <div>
                      <strong>{p.name}</strong>
                      <p>{p.name}</p>
                    </div>
                    <span className={`status ${p.status ? 'green' : 'red'}`}>
                      {p.status ? '✔' : '✖'}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>

        {/* Counter section */}
        <section className="right-top">
          <h3>Counter with products</h3>
          <div className="counter-controls">
            <button
              aria-label="Decrement"
              onClick={() => setCounter(counter - 1)}
              className="counter-btn"
            >
              -
            </button>
            <input type="text" value={counter} readOnly />
            <button
              aria-label="Increment"
              onClick={() => setCounter(counter + 1)}
              className="counter-btn"
            >
              +
            </button>
          </div>
          <div className="counter-boxes">
            <div>1</div>
            <div>2</div>
            <div>3</div>
          </div>
        </section>

        {/* Product details section */}
        <section className="right-bottom">
          <div className="details-row">
            <h3>Product Details</h3>
            <div className="header-row">
              <select
                value={selectedProduct}
                onChange={(e) => setSelectedProduct(e.target.value)}
              >
                <option value="">Select Product</option>
                {products.map((p) => (
                  <option key={p.id} value={p.name}>
                    {p.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="detail-card">
            {selectedProduct
              ? `${selectedProduct} details here`
              : 'Product Detail Card'}
          </div>
        </section>
      </div>
    </>
  );
}

export default Main;
