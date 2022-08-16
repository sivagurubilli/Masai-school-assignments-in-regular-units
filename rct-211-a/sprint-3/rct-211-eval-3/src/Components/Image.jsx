//Complete the Custom Image component based on the props that it expects to receive

export const Image = ({alt,src,width,height,borderRadius,fit}) => {


  return <img alt={alt} src={src}   style={{borderRadius:borderRadius, height:height, width:width,objectFit:fit}}/>;
};
