<?php

namespace App\Http\Controllers;

use App\Models\Songs;
use App\Http\Requests\StoreSongsRequest;
use App\Http\Requests\UpdateSongsRequest;

class SongsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = Songs::all()->take(30)->toArray();
        // dd($data);
        $selectedData = [];
        foreach ($data as $song) {
            $selectedData[] = [
                'tempo' => $song['tempo'],
                'acousticness' => $song['acousticness'],
                'speechiness' => $song['speechiness'],
                'loudness' => $song['loudness'],
                'instrumentalness' => $song['instrumentalness'],
                'energy' => $song['energy'],
                'valence' => $song['valence'],
                'danceability' => $song['danceability'],
                'duration' => $song['duration_ms']
            ];
        }

        dd($selectedData);

        return view('tes', [
            'data' => $selecedData
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
