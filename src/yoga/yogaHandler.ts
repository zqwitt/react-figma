import { messagePromise } from '../helpers/messagePromise';
import * as nanoid from 'nanoid/non-secure';
import { isReactFigmaNode } from '../isReactFigmaNode';

const transformNodesToTree = node => {
    if (!isReactFigmaNode(node)) {
        return;
    }
    const nodeBatchId = nanoid();
    node.setPluginData('nodeBatchId', nodeBatchId);
    return {
        width: node.width,
        height: node.height,
        style:
            (node.getPluginData && node.getPluginData('reactStyle') && JSON.parse(node.getPluginData('reactStyle'))) ||
            undefined,
        children: node.children && node.children.map(transformNodesToTree).filter(item => !!item),
        nodeBatchId
    };
};

const transformYogaToCoords = result => {
    return {
        x: result.left,
        y: result.top,
        width: result.width,
        height: result.height,
        children: result.children && result.children.map(transformYogaToCoords),
        nodeBatchId: result.nodeBatchId
    };
};

export const yogaHandler = async node => {
    const result = await messagePromise({
        type: 'calculateLayout',
        value: transformNodesToTree(node)
    });
    return transformYogaToCoords(result);
};
