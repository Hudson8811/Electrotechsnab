export const tooltip = async () => {
    await import(/* webpackChunkName: "popper.js" */ 'popper.js');

    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })

    $(function () {
        $('[data-toggle="popover"]').popover()
    })
};

