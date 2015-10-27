cd $GOPATH; mkdir src pkg bin
mkdir -p src/github.com/hivehq; cd src/github.com/hivehq
git clone https://github.com/hivehq/transporter; cd transporter
go get -a ./cmd/...

go run ./cmd/transporter/*.go run --config config.yaml mapping_application.js