<?php

namespace WCS\ShareKanBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;


class DefaultController extends Controller
{
    public function indexAction(Request $request)
    {
        return new JsonResponse(array('data' => 123));

    }
}
