<template>
<div class="hello">
  <Row>
    <Col :xs="{ span: 24, offset: 0 }"  :lg="{ span: 8, offset: 12 }">
      <bar></bar>
    </Col>
  </Row>
</div>

</template>

<script>
import bar from '@/components/bar';
export default {
  name: 'hello',
  components: {
    bar: bar
  },
  data() {
    return {

    }
  },
  methods: {

  }
}

</script>

<style scoped="">
.hello {
  width: 100%;
  text-align: center;
  margin: 0 auto;
}
</style>
