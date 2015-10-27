package state

import (
	"github.com/hivehq/transporter/pkg/message"
)

type MsgState struct {
	Msg   *message.Msg
	Extra map[string]interface{}
}

type SessionStore interface {
	Set(path string, state *MsgState) error
	Get(path string) (*MsgState, error)
}
