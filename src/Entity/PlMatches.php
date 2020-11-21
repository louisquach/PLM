<?php

namespace App\Entity;

use App\Repository\PlMatchesRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=PlMatchesRepository::class)
 */
class PlMatches
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $matches;

    /**
     * @ORM\Column(type="string")
     */
    private $day;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $home;

    /**
     * @ORM\Column(type="string", length=2)
     */
    private $away;

    /**
     * @ORM\Column(type="boolean")
     */
    private $subscribe;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getMatches(): ?string
    {
        return $this->matches;
    }

    public function setMatches(string $matches): self
    {
        $this->matches = $matches;

        return $this;
    }

    public function getDay(): ?\DateTimeInterface
    {
        return $this->day;
    }

    public function setDay(\DateTimeInterface $day): self
    {
        $this->day = $day;

        return $this;
    }

    public function getHome(): ?string
    {
        return $this->home;
    }

    public function setHome(string $home): self
    {
        $this->home = $home;

        return $this;
    }

    public function getAway(): ?string
    {
        return $this->away;
    }

    public function setAway(string $away): self
    {
        $this->away = $away;

        return $this;
    }

    public function getSubscribe(): ?bool
    {
        return $this->subscribe;
    }

    public function setSubscribe(bool $subscribe): self
    {
        $this->subscribe = $subscribe;

        return $this;
    }

    public function toArray(): array
    {
        return ['id' => $this->id, 'match' => $this->matches, 'day' => $this->day, 'home' => $this->home, 'away' => $this->away, 'subscribe' => $this->subscribe];
    }
}
