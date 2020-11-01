<template>
  <div>
    <h4>Metadata</h4>
    <b-table stacked :items="items"></b-table>

    <h4>Streams</h4>
    <b-table striped hover :items="streams"></b-table>

    <h4>Frames</h4>
    <b-table striped hover :items="frames"></b-table>
  </div>
</template>

<script>
export default {
  name: 'Overview',
  props: ['info'],
  computed: {
      streams() {
          const s = [];
          for (let i = 0; i < this.info.streams.size(); i++) {
              s.push(this.info.streams.get(i));
          }
          return s;
      },
      frames() {
          const s = [];
          const frame_type = {66: "B", 73: "I", 80: "P", }
          for (let i = 0; i < this.info.frames.size(); i++) {
              let f = this.info.frames.get(i)
              f.frame_type = frame_type[f.frame_type];
              s.push(f);
          }
          return s;
      }
  },
  data() {
    return {
      items: [
        {
          name: this.info.name,
          duration: this.info.duration,
          bit_rate: this.info.bit_rate,
          url: this.info.url,
          nb_streams: this.info.nb_streams,
          flags: this.info.flags,
        },
      ]
    }
  }
}
</script>