<?php

namespace WCS\ShareKanBundle\Services;

use Symfony\Component\Serializer\Serializer;
use Symfony\Component\Serializer\Encoder\XmlEncoder;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
/**
 * Created by PhpStorm.
 * User: root
 * Date: 29/06/17
 * Time: 07:26
 */
class JsonParse
{
  public function ToJson($data){

      $encoders = array(new XmlEncoder(), new JsonEncoder());
      $normalizer = new ObjectNormalizer();

      $normalizer->setCircularReferenceLimit(1);
      $normalizer->setCircularReferenceHandler(function ($object) {
          return $object->getID();
      });
      $normalizers = array($normalizer);
      $serializer = new Serializer($normalizers, $encoders);
      $data['creator'];
      return $serializer->serialize($data, 'json');
  }
}