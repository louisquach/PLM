<?php

namespace App\Controller;

use App\Repository\PlMatchesRepository;
use Doctrine\DBAL\DriverManager;
use Doctrine\DBAL\Exception;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use League\Csv\Reader;
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

    /**
     * @Route("/insert", name="insert")
     * @throws Exception
     */
    public function insertData(): Response {
        $connectionParams = array(
            'dbname' => 'plm',
            'user' => 'root',
            'password' => '',
            'host' => 'localhost',
            'driver' => 'pdo_mysql',
        );
        $conn = DriverManager::getConnection($connectionParams);

        $csv = Reader::createFromPath('./../football.csv','r');
        $record = $csv->getRecords();
        $query = $conn->createQueryBuilder();

        foreach ($record as $match) {
            $query
                ->insert('pl_matches')
                ->setValue('day', '?')
                ->setValue('home', '?')
                ->setValue('away', '?')
                ->setParameter(0, $match[0])
                ->setParameter(1, $match[1])
                ->setParameter(2, $match[2])
                ->execute();
        }
        return $this->json($record);
    }
}
