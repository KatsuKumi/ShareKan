<?php

namespace WCS\ShareKanBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use JMS\Serializer\Annotation as JMSSerializer;

/**
 * Share
 *
 * @ORM\Table(name="share")
 * @ORM\Entity(repositoryClass="WCS\ShareKanBundle\Repository\ShareRepository")
 * @JMSSerializer\ExclusionPolicy("none")
 */
class Share
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
     * @ORM\Column(name="url", type="string", length=255)
     */
    private $url;

    /**
     * @ORM\ManyToOne(targetEntity="Playlist", inversedBy="shares")
     * @JMSSerializer\Exclude
     */
    private $playlist;

    /**
     * @ORM\ManyToOne(targetEntity="User", inversedBy="shares")
     * @JMSSerializer\Exclude
     */
    private $creator;


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
     * Set url
     *
     * @param string $url
     *
     * @return Share
     */
    public function setUrl($url)
    {
        $this->url = $url;

        return $this;
    }

    /**
     * Get url
     *
     * @return string
     */
    public function getUrl()
    {
        return $this->url;
    }

    /**
     * Set playlist
     *
     * @param \WCS\ShareKanBundle\Entity\Playlist $playlist
     *
     * @return Share
     */
    public function setPlaylist(\WCS\ShareKanBundle\Entity\Playlist $playlist = null)
    {
        $this->playlist = $playlist;

        return $this;
    }

    /**
     * Get playlist
     *
     * @return \WCS\ShareKanBundle\Entity\Playlist
     */
    public function getPlaylist()
    {
        return $this->playlist;
    }

    /**
     * Set creator
     *
     * @param \WCS\ShareKanBundle\Entity\User $creator
     *
     * @return Share
     */
    public function setCreator(\WCS\ShareKanBundle\Entity\User $creator = null)
    {
        $this->creator = $creator;

        return $this;
    }

    /**
     * Get creator
     *
     * @return \WCS\ShareKanBundle\Entity\User
     */
    public function getCreator()
    {
        return $this->creator;
    }
}
