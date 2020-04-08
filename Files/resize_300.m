var = 'Katerina.png';
img = imread(var);
img = imresize(img,[300,300]);
imwrite(img,var);