<div id="article_nav-container">
  <div class="list_wrapper" id="archive_annual">
    <h3>過去のお知らせ</h3>
    <ul>
      <?php wp_get_archives('show_post_count=1'); ?>
    </ul>
  </div>

  <div class="list_wrapper" id="archive_categories">
    <h3>カテゴリー</h3>
  <ul class="category-list">
    <?php
      $args = array(
        'orderby' => 'name'
      );
      $categories = get_categories( $args );
      foreach ( $categories as $category ) {
        $cat_link = get_category_link($category->cat_ID);
        echo '<li class="category-list__item"><a href="' . $cat_link . '">' . $category->name . '</a></li>';
      }
    ?>
    </ul>
  </div>

</div>