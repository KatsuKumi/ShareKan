<?php

namespace WCS\ShareKanBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;

class PlaylistController extends Controller
{
    public function addAction()
    {
        return new JsonResponse(array('data' => 123));
    }
    public function deleteAction()
    {
        return $this->render('WCSShareKanBundle:Default:index.html.twig');
    }
    public function updateAction()
    {
        return $this->render('WCSShareKanBundle:Default:index.html.twig');
    }
    public function getAction()
    {
        return $this->render('WCSShareKanBundle:Default:index.html.twig');
    }
    public function getallAction()
    {
        return $this->render('WCSShareKanBundle:Default:index.html.twig');
    }
}
