import Timeline from './Timeline';

function TimelinePage() {
    const items = [
        {
          title: "2023 09 01",
          cardSubtitle: "article....",
          media: {
            type: "IMAGE",
            source: {
              url: "https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68"
            }
          }
        },
        {
          title: "2023 09 01",
          cardSubtitle: "article....",
          media: {
            type: "IMAGE",
            source: {
              url: "https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68"
            }
          }
        },
        {
          title: "2023 09 01",
          cardSubtitle: "article....",
          media: {
            type: "IMAGE",
            source: {
              url: "https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68"
            }
          }
        }
      ];

    return (
        <div>
            <Timeline items={items} />
        </div>
    );
}

export default TimelinePage;
