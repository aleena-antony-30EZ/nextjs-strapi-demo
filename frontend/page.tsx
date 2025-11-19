// Before
window.alert('Missing or invalid credentials');

// After
if (typeof window !== 'undefined') {
  window.alert('Missing or invalid credentials');
}

