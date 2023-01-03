#version 120
uniform sampler2D currentTexture;

void main() {
    vec2 coord = gl_TexCoord[0].xy;   
    vec4 pixel_color = texture2D(currentTexture, coord);

    vec2 uv = coord;
    vec2 pos = 0.3 - uv;
    float dist = 3.0/length(pos);
    dist *= 0.3;
    dist = pow(dist, 0.8);    
    vec3 col = dist * vec3(1.0, 1, 0);
    col = 1.0 - exp( -col );
    gl_FragColor = vec4(col, pixel_color[0]);
}
