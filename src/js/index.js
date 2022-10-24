const tabs = document.querySelectorAll(".tab");
tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        if (tab.classList.contains('selected')) {
            return;
        }

        const tabSelected = document.querySelector('.tab.selected');
        tabSelected.classList.remove('selected');
        tab.classList.add('selected');

       const infoSelected = document.querySelector('.info.selected');
       infoSelected.classList.remove('selected');

       const IdElementInfotab = `info-${tab.id}`

       const infoView = document.getElementById(IdElementInfotab);
       infoView.classList.add('selected')
    });
});