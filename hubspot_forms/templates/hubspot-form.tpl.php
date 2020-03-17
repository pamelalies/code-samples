<?php
/**
 * @file
 * Hubspot embed form.
 */
?>
<div id="<?php echo $target; ?>"></div>
</script>
<!--[if lte IE 8]>
<script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/v2-legacy.js"></script>
<![endif]-->
<script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/v2.js"></script>
<script>

  hbspt.forms.create({
    css: '',
    portalId: '<?php echo $portal_id; ?>',
    formId: '<?php echo $form_id; ?>',
    target: '#<?php echo $target; ?>'
  });
</script>
