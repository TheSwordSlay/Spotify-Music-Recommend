<?php

namespace App\Http\Controllers;

use App\Models\Songs;
use App\Http\Requests\StoreSongsRequest;
use App\Http\Requests\UpdateSongsRequest;
use Illuminate\Support\Facades\Request;
use Inertia\Inertia;

class SongsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $tempo = 60;

        $data = Songs::all()->take(10)->toArray();
        dd($data);
        return view('tes', [
            'data' => $data
        ]);
    }

    public function homePage()
    {
        // $data = Songs::select()->distinct()->orderBy('popularity', 'DESC')->take(10)->get();
        $data = Songs::select('track_id', 'popularity', 'track_name')->distinct()->orderBy('popularity', 'DESC')->take(10)->get();
        return Inertia::render('Homepage', [
            'popularSongs' => $data
        ]);
    }

    public function testBobot()
    {
        $tempo = request()->all();
        dd($tempo);
    }

    public function hitungWP()
    {
        
        function powr($int1, $int2){
            if ($int1 == 0) {
                return pow(0.000001, $int2);
            } else {
                return pow($int1, $int2);
            }
        }

        $tempo = request('tempo');
        $accousticness = request('accousticness');
        $speechiness = request('speechiness');
        $loudness = request('loudness');
        $instrumentalness = request('instrumentalness');
        $energy = request('energy');
        $valence = request('valence');
        $danceability = request('danceability');
        $duration  = request('duration');

        $tempoType = request('tempoType');
        $accousticnessType = request('accousticnessType');
        $speechinessType = request('speechinessType');
        $loudnessType = request('loudnessType');
        $instrumentalnessType = request('instrumentalnessType');
        $energyType = request('energyType');
        $valenceType = request('valenceType');
        $danceabilityType = request('danceabilityType');
        $durationType = request('durationType');

        $totalBobot = $tempo + $accousticness + $speechiness + $loudness + $instrumentalness + $energy + $valence + $danceability + $duration;

        if (!($totalBobot == 0)) {
            $tempo = $tempo * $tempoType / $totalBobot;
            $accousticness = $accousticness * $accousticnessType / $totalBobot;
            $speechiness = $speechiness * $speechinessType / $totalBobot;
            $loudness = $loudness * $loudnessType / $totalBobot;
            $instrumentalness = $instrumentalness * $instrumentalnessType / $totalBobot;
            $energy = $energy * $energyType / $totalBobot;
            $valence = $valence * $valenceType / $totalBobot;
            $danceability = $danceability * $danceabilityType / $totalBobot;
            $duration = $duration * $durationType / $totalBobot;
        }
        
        $data = Songs::all()->toArray();
        $maxLoud = max(array_column($data, 'loudness'));

        if(max(array_column($data, 'loudness')) > 0) {
            foreach($data as &$song){
                $song['loudness'] -= ($maxLoud + 0.1);
            }
        }

        $minLoud = min(array_column($data, 'loudness'));

        foreach ($data as &$song) {
            $song["vectorS"] = powr($song["tempo"], $tempo) * powr($song["acousticness"], $accousticness) * powr($song["speechiness"], $speechiness) * powr(($minLoud/($song["loudness"])), $loudness) * powr($song["instrumentalness"], $instrumentalness) * powr($song["energy"], $energy) * powr($song["valence"], $valence) * powr($song["danceability"], $danceability) * powr($song["duration_ms"], $duration);
            
        }

        $sum = array_sum(array_column($data, 'vectorS'));
        foreach ($data as &$song) {
            $song["vectorI"] = $song["vectorS"] / $sum;
        }

        $vectorI = array_column($data, 'vectorI');
        array_multisort($vectorI, SORT_DESC, $data);
        $slice = array_slice($data, 0, 10);
        
        return Inertia::render('RecommendPage', [
            'songs' => $slice,
        ]);
    }

    public function recommendPage()
    {
        return Inertia::render('RecommendPage', [
            'req' => request()->all(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreSongsRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Songs $songs)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Songs $songs)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateSongsRequest $request, Songs $songs)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Songs $songs)
    {
        //
    }
}
