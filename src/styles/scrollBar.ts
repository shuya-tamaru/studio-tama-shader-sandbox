export const scrollBarCss = `
        /* Chrome, Safari, ... */
        &::-webkit-scrollbar {
          width: 7px;
        }
        &::-webkit-scrollbar-thumb {
          background-color: #718096;
          border-radius: 5px;
        }
        /* Firefox */
        scrollbar-width: auto;
        scrollbar-color: rgba(204,204,204,0.8) transparent;
      `;
