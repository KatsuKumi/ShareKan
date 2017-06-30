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
    public function actualUserAction (Request $request)
    {
        $jsonContent = $this->container->get('jsonparse')->toJson($this->get('security.token_storage')->getToken()->getUser());

            return new Response($jsonContent);
    }
    public function inviteAction(Request $request){

        $message = \Swift_Message::newInstance()
            ->setSubject('Invitation ShareKan')
            ->setFrom("wildexchangemail@gmail.com")
            ->setTo($request->request->get("email"))
            ->setContentType('text/html')
            ->setBody(
                $this->renderView('email.html.twig',  // vue Twig du mail
                    array( 'name' => $this->get('security.token_storage')->getToken()->getUser()->getUsername(),
                        'mail' => $request->request->get("email"),
                        'message' => $request->request->get("message"),
                    ),
                    'text/html'
                ));

        $this->get('mailer')->send($message);

            return new Response("ok");

    }
}
