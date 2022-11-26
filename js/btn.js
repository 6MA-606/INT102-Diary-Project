$(() => {
    $('.btn').on('click', (e) => {
        window.open(e.currentTarget.attributes['data-href'].value, e.currentTarget.attributes['data-target'].value);
    });
});