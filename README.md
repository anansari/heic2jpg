# heic2jpg

> **HEIC conversion won't work unless native modules are not installed**

### Install ImageMagick and HEIC codec for ImageMagick to work with HEIC format 
  1. Install required prerequists:

          apt-get build-essential libheif-examples libheif-dev
  2. Install build dependencies:
  
          apt-get -y build-dep imagemagick
  3. Download ImageMagick
  
          wget https://www.imagemagick.org/download/ImageMagick.tar.gz
  4. Build ImageMagick
      
          cd ImageMagick-7*
          ./configure
          make
          make install
          ldconfig /usr/local/lib
          identify -version

Note: identify the command to make sure MagickImage has been successfully installed.
  
### Install GraphicsMagick

    apt-get install -y graphicsmagick
