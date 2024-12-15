export const validationRegister = (data) => {
  const errors = [];

  if (!data.name) {
    errors.name = "Nama wajib di isi";
  } else if (data.name.length < 3) {
    errors.name = "Name must be at least 3 characters";
  } else if (data.name.length > 50) {
    errors.name = "Name cannot be more than 50 characters";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email) {
    errors.email = "Email Wajib di isi";
  } else if (!emailRegex.test(data.email)) {
    errors.email = "Invalid email format";
  }

  if (!data.password) {
    errors.password = "Password wajib di isi";
  } else if (data.password.length < 6) {
    errors.password = "Password must be at least 6 characters";
  }

  if (!data.confirmPassword) {
    errors.confirmPassword = "Confirm password wajib di isi";
  } else if (data.password !== data.confirmPassword) {
    errors.confirmPassword = "Passwords must match";
  }

  if (!data.phone) {
    errors.phone = "Confirm password wajib di isi";
  }

  return errors;
};

export const validateLogin = (data) => {
  const errors = {};

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email) {
    errors.email = "Email harus di isi";
  } else if (!emailRegex.test(data.email)) {
    errors.email = "Invalid email format";
  }

  if (!data.password) {
    errors.password = "Password wajib di isi";
  }

  return errors;
};
