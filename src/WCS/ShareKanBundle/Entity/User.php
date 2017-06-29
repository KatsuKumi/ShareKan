<?php

namespace WCS\ShareKanBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Security\Core\User\UserInterface;

/**
 * user
 *
 * @ORM\Table(name="user")
 * @ORM\Entity(repositoryClass="WCS\ShareKanBundle\Repository\userRepository")
 */
class User implements UserInterface
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="username", type="string", length=255)
     */
    private $username;

    /**
     * @var string
     *
     * @ORM\Column(name="password", type="string", length=255)
     */
    private $password;

    /**
     * @var string
     *
     * @ORM\Column(name="email", type="string", length=255)
     */
    private $email;

    /**
     * @var string
     *
     * @ORM\Column(name="soundcloud", type="string", length=255, nullable=true)
     */
    private $soundcloud;

    /**
     * @var string
     *
     * @ORM\Column(name="deezer", type="string", length=255, nullable=true)
     */
    private $deezer;

    /**
     * @var string
     *
     * @ORM\Column(name="youtube", type="string", length=255, nullable=true)
     */
    private $youtube;

    /**
     * @var string
     *
     * @ORM\Column(name="twitter", type="string", length=255, nullable=true)
     */
    private $twitter;


    /**
     * @ORM\OneToMany(targetEntity="Share", mappedBy="creator")
     */
    private $shares;

    /**
     * @ORM\OneToMany(targetEntity="Playlist", mappedBy="creator")
     */
    private $playlists;

    /**
     * Get id
     *
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set username
     *
     * @param string $username
     *
     * @return user
     */
    public function setUsername($username)
    {
        $this->username = $username;

        return $this;
    }

    /**
     * Get username
     *
     * @return string
     */
    public function getUsername()
    {
        return $this->username;
    }

    /**
     * Set password
     *
     * @param string $password
     *
     * @return user
     */
    public function setPassword($password)
    {
        $this->password = $password;

        return $this;
    }

    /**
     * Get password
     *
     * @return string
     */
    public function getPassword()
    {
        return $this->password;
    }

    /**
     * Set email
     *
     * @param string $email
     *
     * @return user
     */
    public function setEmail($email)
    {
        $this->email = $email;

        return $this;
    }

    /**
     * Get email
     *
     * @return string
     */
    public function getEmail()
    {
        return $this->email;
    }

    /**
     * Set soundcloud
     *
     * @param string $soundcloud
     *
     * @return user
     */
    public function setSoundcloud($soundcloud)
    {
        $this->soundcloud = $soundcloud;

        return $this;
    }

    /**
     * Get soundcloud
     *
     * @return string
     */
    public function getSoundcloud()
    {
        return $this->soundcloud;
    }

    /**
     * Set deezer
     *
     * @param string $deezer
     *
     * @return user
     */
    public function setDeezer($deezer)
    {
        $this->deezer = $deezer;

        return $this;
    }

    /**
     * Get deezer
     *
     * @return string
     */
    public function getDeezer()
    {
        return $this->deezer;
    }

    /**
     * Set youtube
     *
     * @param string $youtube
     *
     * @return user
     */
    public function setYoutube($youtube)
    {
        $this->youtube = $youtube;

        return $this;
    }

    /**
     * Get youtube
     *
     * @return string
     */
    public function getYoutube()
    {
        return $this->youtube;
    }

    /**
     * Set twitter
     *
     * @param string $twitter
     *
     * @return user
     */
    public function setTwitter($twitter)
    {
        $this->twitter = $twitter;

        return $this;
    }

    /**
     * Get twitter
     *
     * @return string
     */
    public function getTwitter()
    {
        return $this->twitter;
    }

    public function getRoles()
    {
        return array('ROLE_ADMIN');
    }
    public function getSalt()
    {
        // The bcrypt algorithm doesn't require a separate salt.
        // You *may* need a real salt if you choose a different encoder.
        return '';
    }
    public function eraseCredentials()
    {
        // The bcrypt algorithm doesn't require a separate salt.
        // You *may* need a real salt if you choose a different encoder.
        return null;
    }
    /**
     * Constructor
     */
    public function __construct()
    {
        $this->shares = new \Doctrine\Common\Collections\ArrayCollection();
        $this->playlists = new \Doctrine\Common\Collections\ArrayCollection();
    }

    /**
     * Add share
     *
     * @param \WCS\ShareKanBundle\Entity\Share $share
     *
     * @return User
     */
    public function addShare(\WCS\ShareKanBundle\Entity\Share $share)
    {
        $this->shares[] = $share;

        return $this;
    }

    /**
     * Remove share
     *
     * @param \WCS\ShareKanBundle\Entity\Share $share
     */
    public function removeShare(\WCS\ShareKanBundle\Entity\Share $share)
    {
        $this->shares->removeElement($share);
    }

    /**
     * Get shares
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getShares()
    {
        return $this->shares;
    }

    /**
     * Add playlist
     *
     * @param \WCS\ShareKanBundle\Entity\Playlist $playlist
     *
     * @return User
     */
    public function addPlaylist(\WCS\ShareKanBundle\Entity\Playlist $playlist)
    {
        $this->playlists[] = $playlist;

        return $this;
    }

    /**
     * Remove playlist
     *
     * @param \WCS\ShareKanBundle\Entity\Playlist $playlist
     */
    public function removePlaylist(\WCS\ShareKanBundle\Entity\Playlist $playlist)
    {
        $this->playlists->removeElement($playlist);
    }

    /**
     * Get playlists
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getPlaylists()
    {
        return $this->playlists;
    }
}
