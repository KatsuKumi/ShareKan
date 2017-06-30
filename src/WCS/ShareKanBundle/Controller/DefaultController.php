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

            $em = $this->getDoctrine()->getManager();
            $jsondata = json_decode($request->request);
            $user = $em->getRepository('WCSShareKanBundle:User')->find($jsondata["userid"]);

        $message = \Swift_Message::newInstance()
            ->setSubject('Invitation de' . " " . $user->getNom())
            ->setFrom("vigeantalex@gmail.com")
            ->setTo($jsondata["email"])
            ->setContentType('text/html')
            ->setBody(
                $this->renderView('email.html.twig',  // vue Twig du mail
                    array( 'name' => $user->getNom(),
                        'mail' => $jsondata["email"],
                        'message' => $jsondata["message"],
                    ),
                    'text/html'
                ));

        $this->get('mailer')->send($message);

            return new Response("ok");

    }
}
