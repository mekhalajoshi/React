import React from 'react'
import { makeStyles, } from '@material-ui/core/styles'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import IconButton from '@material-ui/core/IconButton'
import StarBorderIcon from '@material-ui/icons/StarBorder'


export default function Content() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <GridList cellHeight={200} spacing={1} cols={4} className={classes.gridList}>
        {tileData.map(tile => (
          <GridListTile key={tile.img} className={classes.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              titlePosition="bottom"
              actionIcon={
                <IconButton aria-label={`star ${tile.title}`} className={classes.icon}>
                  <StarBorderIcon />
                </IconButton>
              }
              actionPosition="left"
              className={classes.titleBar}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  )
}

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    // backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: '100%',
    paddingBottom: '10px',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  icon: {
    color: 'white',
  },
  img: {
    width: 250,
    height:200,
  },
}))

const tileData = [
  {
    img: 'https://pixabay.com/get/55e1d1434e5bae14f6da8c7dda79367c1c38dee750586c4870297fd29f45c25aba_1280.jpg',
    title: 'Image',
    author: 'author',
    featured: true,
  },
  {
    img: 'https://pixabay.com/get/55e1d1414f50a514f6da8c7dda79367c1c38dee750586c4870297fd29f45c25aba_1280.jpg',
    title: 'Image',
    author: 'author',
    featured: true,
  },
  {
    img: 'https://pixabay.com/get/54e5d5434b54b108f5d0846096293577123fdce65a4c704c732b7ddc9f4ac75a_1280.jpg',
    title: 'Image',
    author: 'author',
    featured: true,
  },
  {
    img: 'https://pixabay.com/get/54e2dc464e51a814f6da8c7dda79367c1c38dee750586c4870297fd29f4ac55bb0_1280.jpg',
    title: 'Image',
    author: 'author',
    featured: true,
  },
  {
    img:  'https://pixabay.com/get/57e6d04b4b5bb108f5d0846096293577123fdce65a4c704c732b7ddc9f4ac75a_1280.jpg',
    title: 'Image',
    author: 'author',
    featured: true,
  },
  {
    img: 'https://pixabay.com/get/55e0d340485aa814f6da8c7dda79367c1c38dee750586c4870297fd29f4ac55bb0_1280.jpg',
    title: 'Image',
    author: 'author',
    featured: true,
  },
  {
    img: 'https://pixabay.com/get/52e4d041485ab108f5d0846096293577123fdce65a4c704c732b7ddc9f4ac75a_1280.jpg',
    title: 'Image',
    author: 'author',
    featured: true,
  },
  {
    img: 'https://pixabay.com/get/53e7d44a4e52b108f5d0846096293577123fdce65a4c704c732b7ddc9f4ac75a_1280.jpg',
    title: 'Image',
    author: 'author',
    featured: true,
  },
  {
    img: 'https://pixabay.com/get/54e0d34b4c5bae14f6da8c7dda79367c1c38dee750586c4870297fd29f45c25aba_1280.jpg',
    title: 'Image',
    author: 'author',
    featured: true,
  },
  {
    img: 'https://pixabay.com/get/55e2d1424d57b108f5d0846096293577123fdce65a4c704c732b7ddc9f4ac75a_1280.jpg',
    title: 'Image',
    author: 'author',
    featured: true,
  },
  {
    img: 'https://pixabay.com/get/55e7d743495aaf14f6da8c7dda79367c1c38dee750586c4870297fd29f45c15dba_1280.jpg',
    title: 'Image',
    author: 'author',
    featured: true,
  },

  {
    img: 'https://pixabay.com/get/57e2d5464c51ad14f6da8c7dda79367c1c38dee750586c4870297fd29f45c25aba_1280.jpg',
    title: 'Image',
    author: 'author',
    featured: true,
  },
  {
    img: 'https://pixabay.com/get/57e1d7444b55a814f6da8c7dda79367c1c38dee750586c4870297fd29f45c15dba_1280.jpg',
    title: 'Image',
    author: 'author',
    featured: true,
  },
  {
    img:  'https://pixabay.com/get/55e7dd474a50ae14f6da8c7dda79367c1c38dee750586c4870297fd29f45c25aba_1280.jpg',
    title: 'Image',
    author: 'author',
    featured: true,
  },
  {
    img: 'https://pixabay.com/get/53e6d1424e4fad0bffd8992cc62a3e79153dddec4e50744f712973dc9348c7_1280.jpg',
    title: 'Image',
    author: 'author',
    featured: true,
  },
  {
    img: 'https://pixabay.com/get/57e6dd4b4953b108f5d0846096293577123fdce65a4c704c732b7ddc9f4ac75a_1280.jpg',
    title: 'Image',
    author: 'author',
    featured: true,
  },
  {
    img: 'https://pixabay.com/get/57e5d6454a5aa414f6da8c7dda79367c1c38dee750586c4870297fd29f4ac55bb0_1280.jpg',
    title: 'Image',
    author: 'author',
    featured: true,
  },
  {
    img: 'https://pixabay.com/get/57e1d7444c54aa14f6da8c7dda79367c1c38dee750586c4870297fd29f45c25aba_1280.jpg',
    title: 'Image',
    author: 'author',
    featured: true,
  },
  {
    img:  'https://pixabay.com/get/57e1d6444957b108f5d0846096293577123fdce65a4c704c732b7ddc9f49c05a_1280.jpg',
    title: 'Image',
    author: 'author',
    featured: true,
  },
    
]