<?php
$serverName = "your_server_name";  // Thay bằng tên server SQL Server
$connectionOptions = array(
    "Database" => "QLSX",
    "Uid" => "your_username",  // Username của SQL Server
    "PWD" => "your_password"   // Password của SQL Server
);
$conn = sqlsrv_connect($serverName, $connectionOptions);

if ($conn === false) {
    die(print_r(sqlsrv_errors(), true));
}

$query = "SELECT * FROM NSX";
$result = sqlsrv_query($conn, $query);

while ($row = sqlsrv_fetch_array($result, SQLSRV_FETCH_ASSOC)) {
    echo "<tr>
            <td>{$row['MaNSX']}</td>
            <td>{$row['TenNSX']}</td>
            <td>{$row['DiaChi']}</td>
          </tr>";
}

sqlsrv_close($conn);
?>
