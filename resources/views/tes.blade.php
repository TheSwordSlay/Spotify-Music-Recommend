<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>tes</title>
</head>
<body>
    @foreach ($data as $dat)
        <p>{{ $dat["track_name"] }}</p>
    @endforeach
</body>
</html>