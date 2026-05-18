import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import bookingsData from '../data/bookingsData.json';
import { X, User, Package, PlusCircle, Clock, CheckCircle, XCircle } from 'lucide-react';

const Bookings = () => {
  const [showForm, setShowForm] = useState(false);
  const [bookings, setBookings] = useState(bookingsData);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    roomType: 'Standard',
    checkIn: '',
    checkOut: '',
    status: 'Booked'
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Nama tamu wajib diisi';
    if (!formData.email.trim()) {
      newErrors.email = 'Email wajib diisi';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email tidak valid';
    }
    if (!formData.phone.trim()) newErrors.phone = 'No. telepon wajib diisi';
    if (!formData.city.trim()) newErrors.city = 'Kota wajib diisi';
    if (!formData.checkIn) newErrors.checkIn = 'Tanggal check-in wajib diisi';
    if (!formData.checkOut) newErrors.checkOut = 'Tanggal check-out wajib diisi';
    if (formData.checkIn && formData.checkOut && formData.checkOut <= formData.checkIn) {
      newErrors.checkOut = 'Tanggal check-out harus setelah tanggal check-in';
    }
    return newErrors;
  };

  const handleAddBooking = () => {
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      const newBooking = {
        bookingId: `BOOK${String(bookings.length + 1).padStart(3, '0')}`,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        city: formData.city,
        roomType: formData.roomType,
        checkIn: formData.checkIn,
        checkOut: formData.checkOut,
        status: formData.status
      };

      setBookings([...bookings, newBooking]);
      setShowForm(false);

      setFormData({
        name: '',
        email: '',
        phone: '',
        city: '',
        roomType: 'Standard',
        checkIn: '',
        checkOut: '',
        status: 'Booked'
      });

      setErrors({});
    } else {
      setErrors(newErrors);
    }
  };

  const getStatusBadge = (status) => {
    const config = {
      'Booked': {
        color: 'from-blue-500 to-blue-600',
        icon: <Clock size={14} />,
        label: 'Booked'
      },
      'Checked In': {
        color: 'from-emerald-500 to-emerald-600',
        icon: <CheckCircle size={14} />,
        label: 'Checked In'
      },
      'Checked Out': {
        color: 'from-gray-500 to-gray-600',
        icon: <Package size={14} />,
        label: 'Checked Out'
      },
      'Cancelled': {
        color: 'from-red-500 to-red-600',
        icon: <XCircle size={14} />,
        label: 'Cancelled'
      }
    };

    const { color, icon, label } = config[status] || config['Booked'];

    return (
      <span className={`bg-gradient-to-r ${color} text-white px-3 py-1 rounded-full text-xs font-semibold inline-flex items-center gap-1 shadow-md`}>
        {icon}
        {label}
      </span>
    );
  };

  const statusOptions = [
    {
      value: 'Booked',
      icon: <Clock size={16} />,
      color: 'from-blue-500 to-blue-600',
      bg: 'bg-blue-50'
    },
    {
      value: 'Checked In',
      icon: <CheckCircle size={16} />,
      color: 'from-emerald-500 to-emerald-600',
      bg: 'bg-emerald-50'
    },
    {
      value: 'Checked Out',
      icon: <Package size={16} />,
      color: 'from-gray-500 to-gray-600',
      bg: 'bg-gray-50'
    },
    {
      value: 'Cancelled',
      icon: <XCircle size={16} />,
      color: 'from-red-500 to-red-600',
      bg: 'bg-red-50'
    }
  ];

  return (
    <div className="animate-fadeIn">
      <PageHeader
        title="Bookings"
        breadcrumb={['Dashboard', 'Bookings']}
      >
        <button
          onClick={() => setShowForm(true)}
          className="group relative overflow-hidden bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2.5 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>

          <span className="relative flex items-center gap-2">
            <PlusCircle size={18} className="group-hover:rotate-12 transition-transform" />
            Add Booking
          </span>
        </button>
      </PageHeader>

      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center animate-fadeIn">
          <div
            className="absolute inset-0 bg-gradient-to-br from-black/70 to-black/50 backdrop-blur-sm"
            onClick={() => setShowForm(false)}
          />

          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md transform animate-slideUp overflow-hidden">

            <div className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600"></div>

              <div className="relative px-6 py-5 flex justify-between items-center">
                <div>
                  <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                    <Package size={24} />
                    Tambah Booking
                  </h2>

                  <p className="text-blue-100 text-sm mt-1">
                    Isi detail booking dengan lengkap
                  </p>
                </div>

                <button
                  onClick={() => setShowForm(false)}
                  className="text-white hover:bg-white/20 rounded-full p-2 transition-all duration-200 hover:rotate-90"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            <div className="p-6 space-y-5">

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <User size={16} className="inline mr-2 text-blue-500" />
                  Nama Tamu
                </label>

                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      name: e.target.value
                    })
                  }
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl"
                  placeholder="Masukkan nama tamu"
                />

                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Tamu
                </label>

                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      email: e.target.value
                    })
                  }
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl"
                  placeholder="Masukkan email tamu"
                />

                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Nomor Telepon
                </label>

                <input
                  type="text"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      phone: e.target.value
                    })
                  }
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl"
                  placeholder="0812xxxxxxx"
                />

                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.phone}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Kota Asal
                </label>

                <input
                  type="text"
                  value={formData.city}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      city: e.target.value
                    })
                  }
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl"
                  placeholder="Masukkan kota tamu"
                />

                {errors.city && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.city}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Tipe Kamar
                </label>

                <select
                  value={formData.roomType}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      roomType: e.target.value
                    })
                  }
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl"
                >
                  <option value="Standard">Standard</option>
                  <option value="Superior">Superior</option>
                  <option value="Deluxe">Deluxe</option>
                  <option value="Suite">Suite</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Tanggal Check-In
                  </label>

                  <input
                    type="date"
                    value={formData.checkIn}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        checkIn: e.target.value
                      })
                    }
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl"
                  />

                  {errors.checkIn && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.checkIn}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Tanggal Check-Out
                  </label>

                  <input
                    type="date"
                    value={formData.checkOut}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        checkOut: e.target.value
                      })
                    }
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl"
                  />

                  {errors.checkOut && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.checkOut}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Status Booking
                </label>

                <div className="grid grid-cols-3 gap-3">
                  {statusOptions.map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() =>
                        setFormData({
                          ...formData,
                          status: option.value
                        })
                      }
                      className={`p-3 rounded-xl transition-all duration-300
                      ${formData.status === option.value
                          ? `bg-gradient-to-r ${option.color} text-white`
                          : `${option.bg} text-gray-600`
                        }`}
                    >
                      <div className="flex justify-center mb-1">
                        {option.icon}
                      </div>

                      <div className="text-xs font-semibold">
                        {option.value}
                      </div>
                    </button>
                  ))}
                </div>
              </div>


              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="flex-1 px-4 py-3 bg-gray-100 rounded-xl"
                >
                  Batal
                </button>

                <button
                  onClick={handleAddBooking}
                  className="flex-1 px-4 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl"
                >
                  Simpan
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

      <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">

            <thead className="bg-gradient-to-r from-gray-50 to-gray-100">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                  Booking ID
                </th>

                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                  Customer
                </th>

                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                  Email
                </th>

                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                  Phone
                </th>

                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                  City
                </th>

                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                  Room Type
                </th>

                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                  Check-In
                </th>

                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                  Check-Out
                </th>

                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                  Status
                </th>
              </tr>
            </thead>

            <tbody className="bg-white divide-y divide-gray-100">
              {bookings.map((booking) => (
                <tr
                  key={booking.bookingId}
                  className="hover:bg-gray-50 transition-colors duration-200"
                >
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    {booking.bookingId}
                  </td>

                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                    {booking.name}
                  </td>

                  <td className="px-6 py-4 text-sm text-gray-700">
                    {booking.email}
                  </td>

                  <td className="px-6 py-4 text-sm text-gray-700">
                    {booking.phone}
                  </td>

                  <td className="px-6 py-4 text-sm text-gray-700">
                    {booking.city}
                  </td>

                  <td className="px-6 py-4 text-sm text-gray-700">
                    {booking.roomType}
                  </td>

                  <td className="px-6 py-4 text-sm text-gray-700">
                    {new Date(booking.checkIn).toLocaleDateString('id-ID')}
                  </td>

                  <td className="px-6 py-4 text-sm text-gray-700">
                    {new Date(booking.checkOut).toLocaleDateString('id-ID')}
                  </td>

                  <td className="px-6 py-4">
                    {getStatusBadge(booking.status)}
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>
    </div>
  );
};

export default Bookings;