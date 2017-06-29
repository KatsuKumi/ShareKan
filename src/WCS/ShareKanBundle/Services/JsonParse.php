<?php

namespace WCS\ShareKanBundle\Services;

use Symfony\Component\DependencyInjection\ContainerAwareInterface;
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
use Symfony\Component\DependencyInjection\ContainerInterface;

class JsonParse implements ContainerAwareInterface
{
    /**
     * @var ContainerInterface
     */
    private $_container;
    public function setContainer(ContainerInterface $container = null)
    {
        $this->_container = $container;
    }

  public function ToJson($data){

      $serializer = $this->_container->get('jms_serializer');
      return $serializer->serialize($data, 'json');
  }
}