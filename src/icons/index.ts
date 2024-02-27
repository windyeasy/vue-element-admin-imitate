
export function genUnocssCustomIcons(fs: any) {
  // 调入svg
  return {
    'my-icons': {
      account: '<svg><!-- ... --></svg>',
      // load your custom icon lazily
      settings: () => fs.readFile('@/src/icons/svg/vite.svg', 'utf-8'),
    },
  }
}


