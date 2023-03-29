import React, { useContext }from 'react';
import {TemaVerisi} from '../App';

export default function Icerik() {
  return (
    <div style={useContext(TemaVerisi)}>
        <h1>React öğreniyorum</h1>
        <h2>Merhabalar</h2>
        <p>Çok basit değilmi ? aslında hiç bir şey görüldüğü gibi değil. gördüğün doğru fakat sen farklı düşünüyorsun. gerçeği görmek için öncelikle içine
            girmen, görmen gerekiyor. daha sonra gördüğünü doğru görürsün.
        </p>
    </div>
  );
}
