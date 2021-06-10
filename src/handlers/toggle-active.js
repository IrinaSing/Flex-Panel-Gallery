function toggleActive(e) {
    if(e.propertyName.includes('flex')) {
      this.classList.toggle('open-active');
    }
  }