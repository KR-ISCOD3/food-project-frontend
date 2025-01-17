import { useContext } from "react";
import { GoTrash } from "react-icons/go";
import { TiShoppingCart } from "react-icons/ti";
import { FoodContext } from "../store/FoodContext";
import { useAuth } from "../store/ReactAuthContext";
import { useNavigate } from "react-router-dom";

function CartUser(): JSX.Element {
  const foodContext = useContext(FoodContext);
  const {user} = useAuth();
  const navigate = useNavigate()

  if (!foodContext) {
    return <div>Loading...</div>;
  }

  const {
    cart,
    selectedIds,
    handleSelectAll,
    handleSelect,
    handleQuantityChange,
    handleDelete,
    totalPrice 
  } = foodContext;

  const handleCheckout = () => {
    if (!user) {
      // Redirect to the login page if the user is not authenticated
      navigate("/signin");

    }else{
      navigate("/checkout");
    }

  };
  return (
    <div className="container pt-2 px-md-5 pb-5">
      <div className="row m-0 justify-content-center justify-content-lg-between">
        {/* Food List Section */}
        <div className="col-md-10 col-lg-7 shadow p-3 rounded-4 mx-md-3">
          <div className="d-flex justify-content-between border-bottom">
            <div className="d-flex align-items-center">
              <input
                type="checkbox"
               
                onChange={(e) => handleSelectAll(e.target.checked)}
                className="form-check me-2"
              />
              <span>Select all foods</span>
            </div>
            <button
              className={`btn border-0 mb-2 ${
                !selectedIds.length ? "text-secondary" : "text-danger"
              }`}
              onClick={handleDelete}
              disabled={!selectedIds.length}
            >
              <GoTrash className="fs-5" />
            </button>
          </div>

          <table className="table align-middle">
            <tbody>
              {cart.map((food) => (
                <tr className="border-bottom" key={food.id}>
                  <td className="d-flex align-items-center ps-md-4">
                    <input
                      type="checkbox"
                      checked={selectedIds.includes(food.id)}
                      onChange={(e) => handleSelect(food.id, e.target.checked)}
                      className="form-check me-3"
                    />
                    <div
                      style={{ width: "50px", height: "50px" }}
                      className="rounded-circle my-3 overflow-hidden p-0"
                    >
                      <img src={food.image} alt={food.name} className="w-100 h-100 object-fit-cover" />
                    </div>
                    <div className="ms-2" style={{ fontSize: 14 }}>
                      <p className="m-0">{food.name}</p>
                      <p className="m-0 text-secondary">{food.category}</p>
                    </div>
                  </td>
                  <td className="col-2 p-1 px-lg-4">
                    <input
                      min={0}
                      type="number"
                      defaultValue={food.quantity}
                      className="form-control border border-1 rounded-2 shadow-none py-1 ps-2 pe-1"
                      onChange={(e) => handleQuantityChange(food.id, parseInt(e.target.value, 10))}
                    />
                  </td>
                  <td className="col-3 col-md-4 ps-md-4 text-end pe-lg-5">
                    <p className="text-secondary m-0 fs-6">Sub total</p>
                    <h3 className="m-0 fs-4">
                      <span className="fs-6 text-success">$</span>
                      {food.subtotal.toFixed(2)}
                    </h3>
                  </td>
                </tr>
              ))}
              {cart.length === 0 && <p className="mt-3 px-2 text-secondary">Cart is empty...</p>}
            </tbody>
          </table>


        </div>

        {/* Summary Section */}
        <div className="col-md-10 col-lg-4 shadow p-md-3 rounded-4 mt-3 mt-lg-0 px-4 h-50 py-4 mb-3">
          <div className="d-flex justify-content-between">
            <p className="text-secondary">Delivery services:</p>
            <p className="fs-5">$0.00</p>
          </div>
          <div className="d-flex justify-content-between">
            <div>
              <p className="text-secondary m-0">Total price:</p>
              <p className="fs-4 m-0">
                ${totalPrice.toFixed(2)}
              </p>
            </div>
            <button onClick={handleCheckout} className="btn btn-dark rounded-5 px-4 fs-5 my-3">
              <TiShoppingCart className="mb-1 me-2" />
              Check Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartUser;
