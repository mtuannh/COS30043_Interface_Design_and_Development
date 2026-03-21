const { createApp, computed } = Vue;

createApp({
  data() {
    return {
      activePage: 'event-info',
      events: [],
      filters: {
        id: '',
        name: '',
        duration: null,
        category: 'All'
      },
      form: {
        username: '',
        password: '',
        confirmPassword: '',
        category: '',
        eventId: ''
      }
    };
  },
  created() {
    this.loadEvents();
  },
  computed: {
    categories() {
      return [
        { value: 'Technology', label: 'Technology' },
        { value: 'Business', label: 'Business' },
        { value: 'Marketing', label: 'Marketing' },
        { value: 'Finance', label: 'Finance' }
      ];
    },
    categoriesWithAll() {
      return [
        { value: 'All', label: 'All' },
        ...this.categories
      ];
    },
    filteredEvents() {
      return this.events.filter(ev => {
        const idMatch = this.filters.id
          ? ev.eventid.toLowerCase().includes(this.filters.id.toLowerCase())
          : true;

        const nameMatch = this.filters.name
          ? ev.eventname.toLowerCase().includes(this.filters.name.toLowerCase())
          : true;

        const durationMatch =
          this.filters.duration !== null && this.filters.duration !== ''
            ? ev.durationhour === Number(this.filters.duration)
            : true;

        const categoryMatch =
          this.filters.category === 'All'
            ? true
            : ev.category === this.filters.category;

        return idMatch && nameMatch && durationMatch && categoryMatch;
      });
    },
    passwordMismatch() {
      if (!this.form.password && !this.form.confirmPassword) {
        return false;
      }
      return this.form.password !== this.form.confirmPassword;
    },
    eventsForSelectedCategory() {
      if (!this.form.category) return [];
      return this.events.filter(ev => ev.category === this.form.category);
    },
    liveSummary() {
      if (this.passwordMismatch) {
        return null;
      }

      if (!this.form.username || !this.form.category || !this.form.eventId) {
        return null;
      }

      const selectedEvent = this.events.find(ev => ev.eventid === this.form.eventId);
      if (!selectedEvent) {
        return null;
      }

      return {
        username: this.form.username,
        category: this.form.category,
        eventname: selectedEvent.eventname
      };
    }
  },
  watch: {
    'form.category'() {
      // Reset selected event when category changes
      this.form.eventId = '';
    }
  },
  methods: {
    async loadEvents() {
      try {
        const response = await fetch('events.txt');
        if (!response.ok) {
          throw new Error(`Failed to load events.txt: ${response.status}`);
        }

        const text = await response.text();
        // events.txt is a JavaScript-like array literal, not strict JSON.
        const parsed = Function(`"use strict"; return (${text});`)();
        this.events = Array.isArray(parsed) ? parsed : [];
      } catch (error) {
        console.error('Unable to load events:', error);
        this.events = [];
      }
    }
  }
}).mount('#app');

