import React, { useEffect } from 'react'

export default function OHIFViewer() {
    const containerId = 'ohif'
    const componentRenderedOrUpdatedCallback = function () {
        console.log('OHIF Viewer rendered/updated');
    };

    const ohifViewerConfig = {
        routerBasename: '/dicom-viewer',
        servers: {
            dicomWeb: [
                {
                    name: 'DCM4CHEE',
                    wadoUriRoot: 'https://server.dcmjs.org/dcm4chee-arc/aets/DCM4CHEE/wado',
                    qidoRoot: 'https://server.dcmjs.org/dcm4chee-arc/aets/DCM4CHEE/rs',
                    wadoRoot: 'https://server.dcmjs.org/dcm4chee-arc/aets/DCM4CHEE/rs',
                    qidoSupportsIncludeField: true,
                    imageRendering: 'wadors',
                    thumbnailRendering: 'wadors',
                },
            ],
        },
    } // or set it here


    useEffect(() => {
        // @ts-ignore
        import('@ohif/viewer').then(({ installViewer }) => {
            installViewer(
                ohifViewerConfig,
                containerId,
                componentRenderedOrUpdatedCallback
            );
        });
    }, []); // Ensure this runs only once when the component mounts

    return (
        <div id={containerId}></div>
    )
}
