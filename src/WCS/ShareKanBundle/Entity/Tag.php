<?php

namespace WCS\ShareKanBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * tag
 *
 * @ORM\Table(name="tag")
 * @ORM\Entity(repositoryClass="WCS\ShareKanBundle\Repository\tagRepository")
 */
class Tag
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
     * @ORM\Column(name="tag", type="string", length=255)
     */
    private $tag;


    /**
     * @ORM\ManyToMany(targetEntity="Playlist", inversedBy="tags")
     * @ORM\JoinTable(name="tag_playlist")
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
     * Set tag
     *
     * @param string $tag
     *
     * @return tag
     */
    public function setTag($tag)
    {
        $this->tag = $tag;

        return $this;
    }

    /**
     * Get tag
     *
     * @return string
     */
    public function getTag()
    {
        return $this->tag;
    }
    /**
     * Constructor
     */
    public function __construct()
    {
        $this->playlists = new \Doctrine\Common\Collections\ArrayCollection();
    }

    /**
     * Add playlist
     *
     * @param \WCS\ShareKanBundle\Entity\Playlist $playlist
     *
     * @return Tag
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
