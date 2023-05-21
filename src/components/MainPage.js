import React from 'react';

const PostColumn = () => {
    return (
        <div className="post">
            <div className="post-container">
                <a href="#">
                    {/*<img src="news-image-small-1.jpg" alt="" className="left bordered"/>*/}
                    <div id="picture" class="left bordered"></div>
                </a>
                <h3>
                    <a href="#">Tiêu đề</a>
                </h3>
                <p>Integer diam elit, condimentum ac semper ut, tincidunt non diam. Ut congue rutrum justo at commodo.
                    Aenean euismod tincidunt lorem scelerisque euismod.</p>
                <a href="#" className="more">Đọc thêm &#187;</a>
                <div className="clearer">&nbsp;</div>
            </div>
        </div>
    );
};

export default PostColumn;