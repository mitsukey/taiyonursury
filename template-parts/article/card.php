<div class="article-card">
    <figure class="article-card__image">
      <a href="<?php the_permalink(); ?>">
        <?php
        if (has_post_thumbnail()) {
          the_post_thumbnail('medium');
        } else {
          echo '<img class="logo" src="' . get_bloginfo('stylesheet_directory') . '/assets/logo.png" />';
        }
        ?>
      </a>
    </figure>
    <div class="article-card__content-wrapper">
      <span class="category">
        <?php the_category(', '); ?>
      </span>
      <h3 class="title">
        <a href="<?php the_permalink(); ?>">
          <?php the_title(); ?>
        </a>
      </h3>
      <span class="date">
        <?php the_date(); ?>
      </span>
      <p class="content">
        <a href="<?php the_permalink(); ?>">
          <?php echo get_the_excerpt(); ?>
        </a>
      </p>
      <span class="article-card__link">
        <a href="<?php the_permalink(); ?>">
            詳細を見る
        </a>
      </span>
    </div>
</div>

<span class="article-card__border"></span>