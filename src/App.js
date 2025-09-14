import React, { useState } from 'react';
import './styleEe.css';

function App() {
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

  return (
    <div className="app">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="logo">Logo</h2>
        <nav>
          <ul>
            <li className="active">Dashboard</li>
            <li>Status</li>
            <li>Reports</li>
            <li>Notification</li>
          </ul>
        </nav>
        <button className="logout">Logout</button>
      </aside>

      {/* Main content --------------------------------------------------TOBAR*/}
      <main className="topbar"> 
        <header>
          <h1>Dashboard</h1>
          <div className="profile">R</div>
        </header>

        <div className="main">
          {/* Products List ------------------------------------------------main*/}
          <section className="products">
            <h3>List of Products</h3>
            <input type="text" placeholder="Search Product..." />
            <ul>
              {products.map((p) => (
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
          </section>

          {/* Counter----------------------------------------------------------Counter */}
          <section className="right-top">
            <h3>Counter with products</h3>
            <div className="counter-controls">
              <button onClick={() => setCounter(counter - 1)}>-</button>
              <input type="text" value={counter} readOnly />
              <button onClick={() => setCounter(counter + 1)}>+</button>
            </div>
            <div className="counter-boxes">
              <div>1</div>
              <div>2</div>
              <div>3</div>
            </div>
          </section>

          {/* Product Details-----------------------------------------------------Product Details */}
          <section className="right-bottom">
            <h3>Product Details</h3>
            
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
            
            <div className="detail-card">
              {selectedProduct
                ? `${selectedProduct} details here`
                : 'Product Detail Card'}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
