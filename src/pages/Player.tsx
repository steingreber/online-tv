import { useParams } from "react-router-dom";

export default function CanalExibido() {
    
    const { id, nome } = useParams()

    let urlCanal

     switch(String(id)) {
        case 'SBT':
             urlCanal = "https://stmv1.srvif.com/canal29/canal29/playlist.m3u8"
             break
        case 'RecordTV':
            urlCanal = "https://caikron.com.br:19360/criciuma/criciuma.m3u8"
            break
        case 'Rede-TV':
            urlCanal = "https://5b7f3c45ab7c2.streamlock.net/arapuan/ngrp:arapuan_all/playlist.m3u8"
            break
        case 'TV-Brasil':
            urlCanal = "https://tvdiversa.brasilstream.com.br/hls/tvdiversa/index.m3u8?token=2061839296005232600"
            break
        case 'Tv-Cultura':
            urlCanal = "https://video02.logicahost.com.br/tvguara23/tvguara23/playlist.m3u8"
            break
        case 'TV-Gazeta':
            urlCanal = "https://video02.logicahost.com.br/tvc21/tvc21/playlist.m3u8"
            break
        case 'Rede-Brasil':
            urlCanal = "https://5cf4a2c2512a2.streamlock.net/rbtv/rbtv/playlist.m3u8"
            break
        case 'TV-Agua-Boa':
            urlCanal = "https://5a2b083e9f360.streamlock.net/tvaguaboa2/tvaguaboa2.sdp/playlist.m3u8"
            break
        case 'NovaPlay-TV':
            urlCanal = "https://srv4.zcast.com.br/tvnovaplay/tvnovaplay/playlist.m3u8.m3u8"
            break
        case 'Vintage-TV':
            urlCanal = "https://stmv1.srvif.com/webvintage/webvintage/playlist.m3u8"
            break
        case 'AWTv':
            urlCanal = "https://ebocast.ebosystems.com.br:3070/live/awtvlive.m3u8"
            break
        case 'TV-Classicos':
            urlCanal = "https://tv01.livemustv.com.br/livemustv7426/livemustv7426/playlist.m3u8"
            break
        case 'GLN TV':
            urlCanal = "https://stmv1.paineltv.net/glnfilmes/glnfilmes/playlist.m3u8"
            break
        case 'Bons-Tempos-TV':
            urlCanal = "https://tv01.livemustv.com.br/rivaldo6209/rivaldo6209/playlist.m3u8"
            break
        case 'Channel-1':
            urlCanal = "https://stmv1.srvif.com/channel1/channel1/playlist.m3u8"
            break
        case 'Recordacoes-TV':
            urlCanal = "https://srv4.zcast.com.br/tvrecordacoeswebce/tvrecordacoeswebce/playlist.m3u8"
            break
        case 'Chips':
            urlCanal = "https://stmv1.srvif.com/tvserie4/tvserie4/playlist.m3u8"
            break
        case 'Web-TV':
            urlCanal = "https://stmv5.samcast.com.br/celio5934/celio5934/playlist.m3u8"
            break
        case 'Run-Time':
            urlCanal = "https://stream.ads.ottera.tv/playlist.m3u8?network_id=2552&avod=1&coppa=0&is_lat=0&us_privacy=1YN-&did=26b91be5b7b469af839c36bce968b76b&app_bundle=com.ammo.runtime&app_store_url=https%3A%2F%2Fwww.runtime.tv%2Fdevices&app_domain=runtime.tv&app_name=runtime&"
            break
        case 'Hits-TV':
            urlCanal = "https://stmv1.srvstm.com/gilberto6794/gilberto6794/playlist.m3u8"
            break
        case 'Imperial-TV':
            urlCanal = "https://5eaa6849d0971.streamlock.net/tvimperialnet/tvimperialnet/playlist.m3u8"
            break
        case 'Central-TV':
            urlCanal = "https://cdn-centraltv-11366.ciclano.io:1443/centraltv-11366/centraltv-11366/playlist.m3u8"
            break
        case 'Entorno-Sul-TV':
            urlCanal = "https://video01.kshost.com.br:4443/manoel2072/manoel2072/playlist.m3u8"
            break
        case 'ISTV':
            urlCanal = "https://cdn.jmvstream.com/w/LVW-9883/LVW9883_lFcfKysrHF/playlist.m3u8"
            break
    //     default:
    //   return null
     }



    return (
        <>
        <link href="https://vjs.zencdn.net/7.20.3/video-js.css" rel="stylesheet" />
        <div className="w-75 p-3 col align-self-center">
        <video
            id="my-video"
            className="video-js vjs-big-play-centered vjs-fluid"
            controls
            preload="auto"
            width="100%"
            height="460"
            poster=""
            data-setup="{}"
        >
            <source src={urlCanal} type="application/x-mpegURL" />
            <p className="vjs-no-js">
            To view this video please enable JavaScript, and consider upgrading to a
            web browser that
            <a href="https://videojs.com/html5-video-support/" target="_blank"
                >supports HTML5 video</a
            >
            </p>
        </video>
        </div>
        </>
    )
}

