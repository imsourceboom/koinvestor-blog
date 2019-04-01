// import './masonry/masonry';
import './intro';
// import './menu';
import './header';
import './components/detail';
import './components/result';
import './admin';

if (document.location.protocol == 'http:') {
    document.location.href = document.location.href.replace('http:', 'https:');
}