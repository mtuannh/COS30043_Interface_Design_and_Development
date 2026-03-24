const { createApp, computed } = Vue;

createApp({
  data() {
    return {
      activePage: 'event-info', //controls which page is shown
      events: [], //an empty array to hold the events loaded from events.txt
      filters: { //holds the current filter values
        id: '',
        name: '',
        duration: null,
        category: 'All'
      },
      form: { //holds the form input values, including validation fields like "confirmPassword"
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
  computed: { //computed properties to derive data for the UI
    categories() { //returns the list of categories for the filter dropdown
      return [
        { value: 'Technology', label: 'Technology' },
        { value: 'Business', label: 'Business' },
        { value: 'Marketing', label: 'Marketing' },
        { value: 'Finance', label: 'Finance' }
      ];
    },
    categoriesWithAll() { //returns the list of categories for the filter dropdown, including an "All" option
      return [
        { value: 'All', label: 'All' },
        ...this.categories
      ];
    },
    filteredEvents() { //returns the list of events filtered based on the current filter values
      return this.events.filter(ev => {
        const idMatch = this.filters.id //if filter has value, check if eventid includes it (case-insensitive), otherwise match all
          ? ev.eventid.toLowerCase().includes(this.filters.id.toLowerCase())
          : true;

        const nameMatch = this.filters.name 
          ? ev.eventname.toLowerCase().includes(this.filters.name.toLowerCase())
          : true;

        const durationMatch =
          this.filters.duration !== null && this.filters.duration !== ''
            ? ev.durationhour === Number(this.filters.duration)
            : true;

        const categoryMatch = //if filter category is "All", match all, otherwise check if event category matches filter category
          this.filters.category === 'All'
            ? true
            : ev.category === this.filters.category;

        return idMatch && nameMatch && durationMatch && categoryMatch;
      });
    },
    passwordMismatch() { //returns true if password and confirmPassword do not match, used for form validation
      if (!this.form.password && !this.form.confirmPassword) {
        return false;
      }
      return this.form.password !== this.form.confirmPassword;
    },
    eventsForSelectedCategory() { //returns the list of events that belong to the category selected in the form
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
      //reset selected event when category changed
      this.form.eventId = '';
    }
  },
  methods: {
    async loadEvents() { //method to load events from events.txt using fetch API
      try {
        const response = await fetch('events.txt');
        if (!response.ok) {
          throw new Error(`Failed to load events.txt: ${response.status}`);
        }

        const text = await response.text();
        const parsed = Function(`"use strict"; return (${text});`)();
        this.events = Array.isArray(parsed) ? parsed : [];
      } catch (error) {
        console.error('Unable to load events:', error);
        this.events = [];
      }
    }
  }
}).mount('#app'); //mount the Vue app to the element with id "app"