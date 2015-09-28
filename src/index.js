var FamousEngine = require('famous/core/FamousEngine')
var DOM = require('famous/dom-renderables/DOMElement')
var Position = require('famous/components/Position')
var Transitionable = require('famous/transitions/Transitionable')
var _ = require('underscore')
var faker = require('faker')

FamousEngine.init()
var scene = FamousEngine.createScene()

var appNode = scene.addChild()
var listNode = appNode.addChild()

listNode
  .setAlign(0.5, 0.5)
  .setOrigin(0.5, 0.5)
  .setMountPoint(0.5, 0.5)
  .setProportionalSize(0.25, 0.5)

new DOM(listNode, {tag: 'ul'})

_.times(8, function (i) {
  var itemNode = listNode.addChild()
    .setAlign(0, 0)
    .setOrigin(0, 0)
    .setSizeMode(0, 1)
    .setAbsoluteSize(0, 25)

  new DOM(itemNode, {
    tag: 'li',
    properties: {
      'padding': '2px',
      'border': 'solid 1px hotpink',
      'background-color': 'white'
    },
    content: faker.name.firstName() + ' ' + faker.name.lastName()
  })

  var yPos = new Position(itemNode)
  yPos.set(0, i*30, 0, { duration: i*250, curve: 'outCubic' })

})
