<?php

namespace AppBundle\DataFixtures\ORM;

use Doctrine\Common\DataFixtures\FixtureInterface;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Component\DependencyInjection\ContainerAwareInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;
use WCS\ShareKanBundle\Entity\Playlist;
use WCS\ShareKanBundle\Entity\Share;
use WCS\ShareKanBundle\Entity\Tag;
use WCS\ShareKanBundle\Entity\User;

class LoadPlaylistData implements FixtureInterface, ContainerAwareInterface
{
    private $container;
    public function setContainer(ContainerInterface $container = null)
    {
       $this->container = $container;
    }

    public function load(ObjectManager $manager)
    {

        $em = $manager;
        $jsondatas = [array(
            "urls" => ["Unforgettable (Freestyle)" =>'https://soundcloud.com/pnbrock/unforgettable-freestyle'],
            "user"=>1,
            "public" => true,
            "tags" => ["pop","rock"],
            "user" => "Alex"),
            array(
            "urls" => [
            "Nicky Stix - Go For It" =>"https://soundcloud.com/dwyer018/nicky-stix-go-for-it",
            "Katy Perry - Roulette" =>"https://www.youtube.com/watch?v=RsaK6p8HDnU&list=RDMM",
            "Symphony (feat. Zara Larsson)" =>"http://www.deezer.com/track/144393668?utm_source=deezer&utm_content=track-144393668&utm_term=485906_1498755848&utm_medium=web",
            "Heyzus(Feat. Ant Beale & Kur)" =>"https://soundcloud.com/goodworkcharlie/heyzusfeat-ant-beale-kur", 
            "20 Wake N Bake" =>"https://soundcloud.com/kodak-black/20-wake-n-bake",
            "Selena Gomez - Bad Liar" =>"https://www.youtube.com/watch?v=NZKXkD6EgBk&list=RDRsaK6p8HDnU&index=7",  
            "Instruction par Jax Jones, Demi Lovato, Stefflon Don" =>"http://www.deezer.com/album/42891121?utm_source=deezer&utm_content=album-42891121&utm_term=485906_1498755873&utm_medium=web"
            ],
            "public" => true,
            "tags" => ["pop","rock","couille"],
            "user" => "Jean"),
            array(
            "urls" => ["20 Wake N Bake" =>'https://soundcloud.com/pnbrock/unforgettable-freestyle'],
            "public" => true,
            "tags" => ["pop","rock","couille"],
            "user" => "Keeek"),
            array(
            "urls" => ["20 Wake N Bake" =>'https://soundcloud.com/pnbrock/unforgettable-freestyle'],
            "public" => true,
            "tags" => ["pop","rock","couille"],
            "user" => "Pierreeee"),
            ];

        foreach ($jsondatas as $jsondata){
            $playlist = new Playlist();
            $playlist->setNom('Regis kkj');
            $playlist->setUrls($jsondata["urls"]);
            $user = new User();
            $user->setUsername($jsondata["user"]);
            $user->setEmail('admin@kek.fr');
            $user->setPassword('test');
            $encoder = $this->container->get('security.password_encoder');
            $password = $encoder->encodePassword($user, "test");
            $user->setPassword($password);
            $manager->persist($user);
            $playlist->setCreator($user);
            $playlist->setDatetime(new \DateTime());
            $playlist->setPublic($jsondata["public"]);
            $playlist->setTags($jsondata["tags"]);
            $playlist->setVote(0);
            $em->persist($playlist);
        }
        $em->flush();
    }
}