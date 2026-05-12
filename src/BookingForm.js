
import { useState } from "react";
import "./BookingForm.css";

function BookingForm() {
  const [form, setForm] = useState({
    data: "",
    hour: "",
    guests: "1",
    occasion: "1"
  });

  if (!form.data) {
setError("Wybierz datę");
return;

  }
  if (!form.hour) {
setError("Wybierz godzinę");
return;

  }
  if (!form.guests) {
setError("Wybierz osobę");
return;
  }


return (
    <main className="bookingform">
      <h1>Booking</h1>

      <form className="booking-form" onSubmit={handleSubmit}>
      <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          required
        />
<select
          type="hour"
          name="hour"
          value={form.hour}
          onChange={handleChange}
>
  <option value="17:00"></option>
  <option value="18:00"></option>
  <option value="19:00"></option>
</select>
<select
          name="guests"
          value={form.guests}
          onChange={handleChange}
          >
        <option value="1">1 person</option>
        <option value="2">2 person</option>

</select>

<select
          name="ocassion"
          value={form.ocassion}
          onChange={handleChange}
        >
          <option value="1">urodziny</option>
          <option value="2">rocznica</option>
        </select>


<button aria-label="submit">
          Make reservation
        </button>

      </form>
    </main>
  );
}

export default BookingForm;

