<?php

namespace WCS\ShareKanBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;


class DefaultController extends Controller
{
    public function indexAction(Request $request)
    {
        return new JsonResponse(array('data' => 123));

    }

    public function emailAction (Request $request){


    $data = $form->getData();
    $message = \Swift_Message::newInstance()
        ->setSubject('Invitation de' . " " . $form->get('name')->getData())
        ->setFrom("demo@example.fr")
        ->setTo('sharekan-d61ed7@inbox.mailtrap.io')
        ->setContentType('text/html')
        ->setBody(
            $this->renderView('',  // vue Twig du mail
                array( 'name' => $data['name'],
                    'mail' => $data['mail'],
                ),
                'text/html'
            ));

    $this->get('mailer')->send($message);




    return new Response('coded_by_a_noob_sorry');
}
}
