// Event data (based on events.txt)
const events = [
  { eventid: 'EVT10001', eventname: 'Tech Innovations Conference', category: 'Technology', durationhour: 8 },
  { eventid: 'EVT10002', eventname: 'Startup Pitch Day', category: 'Business', durationhour: 6 },
  { eventid: 'EVT10003', eventname: 'AI & Machine Learning Summit', category: 'Technology', durationhour: 10 },
  { eventid: 'EVT10004', eventname: 'Cybersecurity Workshop', category: 'Technology', durationhour: 4 },
  { eventid: 'EVT10005', eventname: 'Digital Marketing Bootcamp', category: 'Marketing', durationhour: 6 },
  { eventid: 'EVT10006', eventname: 'Blockchain and Cryptocurrency', category: 'Finance', durationhour: 5 },
  { eventid: 'EVT10007', eventname: 'Entrepreneurship Forum', category: 'Business', durationhour: 7 },
  { eventid: 'EVT10008', eventname: 'Data Science Hackathon', category: 'Technology', durationhour: 12 },
  { eventid: 'EVT10009', eventname: 'Leadership and Management Summit', category: 'Business', durationhour: 9 },
  { eventid: 'EVT10010', eventname: 'E-commerce Strategies', category: 'Marketing', durationhour: 6 },
  { eventid: 'EVT10011', eventname: 'AI for Business', category: 'Business', durationhour: 8 },
  { eventid: 'EVT10012', eventname: 'IoT & Smart Devices Expo', category: 'Technology', durationhour: 7 },
  { eventid: 'EVT10013', eventname: 'Brand Strategy and Growth', category: 'Marketing', durationhour: 5 },
  { eventid: 'EVT10014', eventname: 'Investment and Wealth Management', category: 'Finance', durationhour: 6 },
  { eventid: 'EVT10015', eventname: 'Financial Technology (FinTech) Summit', category: 'Finance', durationhour: 8 },
  { eventid: 'EVT10016', eventname: 'AI Ethics and Regulations', category: 'Technology', durationhour: 4 },
  { eventid: 'EVT10017', eventname: 'Business Analytics Workshop', category: 'Business', durationhour: 6 },
  { eventid: 'EVT10018', eventname: 'SEO and Content Marketing', category: 'Marketing', durationhour: 7 },
  { eventid: 'EVT10019', eventname: 'Cryptocurrency Investment Strategies', category: 'Finance', durationhour: 9 },
  { eventid: 'EVT10020', eventname: 'Social Media Marketing Trends', category: 'Marketing', durationhour: 5 }
];

const { createApp, computed } = Vue;

createApp({
  data() {
    return {
      events,
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
      },
      summary: null
    };
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
    }
  },
  watch: {
    'form.category'() {
      // Reset selected event when category changes
      this.form.eventId = '';
    }
  },
  methods: {
    submitForm() {
      if (this.passwordMismatch) {
        return;
      }

      const selectedEvent = this.events.find(ev => ev.eventid === this.form.eventId);
      if (!selectedEvent) {
        return;
      }

      this.summary = {
        username: this.form.username,
        category: this.form.category,
        eventname: selectedEvent.eventname
      };
    }
  }
}).mount('#app');

