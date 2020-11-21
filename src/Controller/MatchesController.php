<?php

namespace App\Controller;

use App\Repository\PlMatchesRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
/**
 * @Route("api/matches", name="matches")
 */
class MatchesController extends AbstractController
{
    private $entityManager;
    private $plMatchesRepository;

    public function __construct(EntityManagerInterface $entityManager, PlMatchesRepository $plMatchesRepository)
    {
        $this->entityManager = $entityManager;
        $this->plMatchesRepository = $plMatchesRepository;
    }

    /**
     * @Route("/list", name="list")
     */
    public function index(): Response
    {
       $arrayMatches = [];
       $result = $this->plMatchesRepository->findAll();
       foreach ($result as $match) {
           $arrayMatches[] = $match->toArray();
       }
       return $this->json($arrayMatches);
    }
}
