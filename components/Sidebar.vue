<template>
            <div id="cm-drawer" class="cm-sidebar hide-scrollbar">
            <div class="cm-drawer-container">
                <section class="dr-list">
                    <h4>Cmemes tag</h4>
                    <ul>
                        <li class="active-lt">
                            <span class="dLeft">
                               <a href="#."><i class="bi bi-house-door-fill"></i>Hot</a> 
                            </span>
                            <span class="dright"><a href="#."><i class="bi bi-three-dots"></i></a></span>
                        </li>
                        <li>
                            <span class="dLeft">
                               <a href="#."><i class="bi bi-lightning-charge-fill"></i> Pages</a> 
                            </span>
                            <span class="dright"><a href="#."><i class="bi bi-three-dots"></i></a></span>
                        </li>
                        <li>
                            <span class="dLeft">
                               <a href="#."><i class="bi bi-stopwatch"></i> Tags</a> 
                            </span>
                            <span class="dright"><a href="#."><i class="bi bi-three-dots"></i></a></span>
                        </li>
                    </ul>
                </section>

                <section class="dr-list">
                    <h4>Section</h4>
                    <ul>
                        <li v-for="category in categories.data" :key="category.id">
                            <span class="dLeft">
                               <a href="#."><img src="https://i.picsum.photos/id/372/200/200.jpg?hmac=QFGGlcWGNWBK0oDD1jghIaCvGIFU5iJJcd2VhF5oH6o" alt="" class="thumb-icon">{{category.name}}</a> 
                            </span>
                        </li>
                    </ul>
                </section>
            </div>            
        </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [],
    }
  },
  async fetch() {
    this.categories = await fetch('http://localhost:8000/api/categories').then(
      (res) => res.json()
    )
  },
}
</script>