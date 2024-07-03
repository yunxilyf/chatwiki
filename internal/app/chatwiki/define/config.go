// Copyright © 2016- 2024 Sesame Network Technology all right reserved

package define

var Config ConfigParam

type ConfigParam struct {
	WebService map[string]string
	NumCPU     map[string]string
	Redis      map[string]string
	Postgres   map[string]string
	NsqLookup  map[string]string
	Nsqd       map[string]string
	Crawler    map[string]string
}
type Model struct {
	Name string `json:"name" toml:"name"`
	Url  string `json:"url"`
	Key  string `json:"key" toml:"key"`
}
