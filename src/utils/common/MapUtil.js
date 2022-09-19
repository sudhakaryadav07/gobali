export const handleDraggableMarker = (H, map, behavior, handleLocation) => {
    map.addEventListener('dragstart', function (evt) {
        const target = evt.target, pointer = evt.currentPointer;
        if (target instanceof H.map.Marker) {
            const targetPosition = map.geoToScreen(target.getGeometry());
            target['offset'] = new H.math.Point(pointer.viewportX - targetPosition.x, pointer.viewportY - targetPosition.y);
            behavior.disable();
        }
    }, false);

    map.addEventListener('drag', function (evt) {
        const target = evt.target, pointer = evt.currentPointer;
        if (target instanceof H.map.Marker) {
            target.setGeometry(map.screenToGeo(pointer.viewportX - target['offset'].x, pointer.viewportY - target['offset'].y));
        }
    }, false);

    map.addEventListener('dragend', function (evt) {
        const target = evt.target;
        if (target instanceof H.map.Marker) {
            behavior.enable();
            const coord = map.screenToGeo(evt.currentPointer.viewportX, evt.currentPointer.viewportY);
            console.log('coord: ', coord);
            handleLocation(coord);
        }
    }, false);
}

export const createMarker = (H, center) => {
    const marker = new H.map.Marker(center, { volatility: true });
    marker.draggable = true;
    return marker;
}

export const handleMapClick = (map) => {
    if (!map) return;
    map.addEventListener('tap', function (evt) {
        console.log(evt)
        const coord = map.screenToGeo(evt.currentPointer.viewportX, evt.currentPointer.viewportY);
        console.log('coord: ', coord);
    });
};