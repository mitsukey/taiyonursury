<?php
// 記事のカテゴリー情報を取得する
$cat = get_the_category();
// 取得した配列から必要な情報を変数に入れる
$cat_name = $cat[0]->cat_name; // カテゴリー名
?>

<div class="blog-detail">
  <?php if (have_posts()) : while (have_posts()) : the_post(); ?>

      <?php // タイトル・カテゴリー・投稿日時を表示する 
      ?>
      <div class="blog-detail__wrapper">
        <h3 class="blog-detail__wrapper__title"><?php the_title(); ?></h3>
        <div class="blog-detail__wrapper__meta">
          <span><?php the_date(); ?></span>
          <span class="blog-detail__wrapper__meta__category"><?php echo $cat_name ?></span>
        </div>
      </div>

      <?php // アイキャッチ画像を表示する 
      ?>
      <figure class="blog-detail__image">
        <?php if (has_post_thumbnail()) : ?>
          <img src="<?php the_post_thumbnail_url("large"); ?>" width=720>
        <?php else : ?>
          <img src="/20211115/wp-content/themes/taiyonursery/assets/logo.png" width=720>
        <?php endif; ?>
      </figure>

      <?php // 本文を表示する 
      ?>
      <div class="blog-detail__body">
        <div class="blog-content"><?php echo the_content(); ?></div>
      </div>

  <?php endwhile;
  endif; ?>

  <div class="blog-detail__footer">
    <?php if (get_previous_post()) {
      previous_post_link('%link', '前へ');
    } else {
      echo '<div></div>';
    } ?>
    <a href="/20211115/archive/" id="return">一覧へ戻る</a>
    <?php if (get_next_post()) {
      next_post_link('%link', '次へ');
    } else {
      echo '<div></div>';
    } ?>
  </div>
</div>