const fruits = [
{id:1, title: 'яблоки', price: 20, img: 'https://avatars.mds.yandex.net/i?id=52322d308dab6d606ac65fe588dace807a1ecaec-9245818-images-thumbs&n=13'},
{id:2, title: 'апельсины', price: 30, img: 'https://avatars.mds.yandex.net/i?id=7f777eb1172d662a9e95536fde325c6def5454d6-4571539-images-thumbs&n=13'},
{id:3, title: 'манго', price: 40, img: 'https://otvet.imgsmail.ru/download/875a8375f91de049494d6073098e8a2f_dc3ce722ec066bbe769e70c64bc52ba8.png'}
]




const modal = $.modal({
    title: 'marik modal',
    closable: true,
    content: `
    <h4>Modal is working</h4>
    <p>marik team</p>
    `,
    width: '400px',
    footerbuttons: [
      {text: 'Ok',type: 'primary', handler(){
        console.log('primary btn clicked')
        modal.close()
      }},
      {text: 'Cancel',type: 'denger', handler(){
        console.log('denger btn clicked')
        modal.close()
      }}
    ]
})