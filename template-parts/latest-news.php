<div class="latest_news">
  <ul>
    <?php
    $args = array(
      'posts_per_page' => 4 // 表示件数
    );
    $posts = get_posts($args);
    foreach ($posts as $post) : // ループの開始
      setup_postdata($post); // 記事データの取得
    ?>
      <a href="<?php echo get_permalink($post->ID); ?>">
        <li>
          <object class="category">
            <?php the_category(', '); ?>
          </object>
          <figure class="latest_news_image">
            <?php if (has_post_thumbnail()) : ?>
              <?php the_post_thumbnail(array(182, 160)); ?>
            <?php else : ?>
              <?php // アイキャッチ画像がない場合は、デフォルトの画像を表示 
              ?>
              <img src=<?php echo get_template_directory_uri() . "/assets/logo.png"; ?> alt=”ダミー画像”>
            <?php endif; ?>
          </figure>
          <br>
          <h4><?php the_title(); ?></h4>
          <br>
          <span class="date">
            <?php the_date(); ?>
          </span>
          <br>
          <p><?php the_excerpt(); ?></p>
        </li>
      </a>
    <?php
    endforeach; // ループの終了
    ?>
  </ul>
</div>