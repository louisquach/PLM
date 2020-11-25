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
use League\Csv\Writer;
use Symfony\Component\HttpFoundation\ResponseHeaderBag;
use Symfony\Component\HttpFoundation\StreamedResponse;
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
    public function insertData(): Response
    {
        $filePath = './../football.csv';
        $connectionParams = array(
            'dbname' => 'plm',
            'user' => 'root',
            'password' => '',
            'host' => 'localhost',
            'driver' => 'pdo_mysql',
        );
        $conn = DriverManager::getConnection($connectionParams);

        $csv = Reader::createFromPath($filePath, 'r');
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

    /**
     * @Route("/export_csv", name="export_csv")
     */
    public function exportCsv(): Response
    {
        $result = $this->plMatchesRepository->findAll();
        header('Content-Type: text/csv; charset=utf-8');
        header('Content-Disposition: attachment; filename=pl_matches.csv');

// create a file pointer connected to the output stream
        $output = fopen('php://output', 'w');
// loop over the rows, outputting them
        $array = ['Match Id', "Match Day", "Home", "Away"];
        fputcsv($output,$array);
        foreach ($result as $match) {
            fputcsv($output, $match->toArray());
        }
        fclose($output);
    }

    /**
     * @Route("/export_pdf", name="export_pdf")
     */
    public function exportPdf(): Response
    {
        $data = $this->plMatchesRepository->findAll();

    }
}