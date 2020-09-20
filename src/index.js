import './styles/styles.css'
import Post from './Post'
import * as $ from 'jquery'


const post = new Post('Webpack Post Title')

console.log('Post to String:', post.toSring())
