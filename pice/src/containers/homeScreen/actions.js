import keymirror from "fbjs/lib/keyMirror";

export const HomeScrTypes = keymirror({
  BOOK_TICKET: null,
  SAVE_DATA: null,
});

export function StartbookTicket(details) {
  return { type: HomeScrTypes.BOOK_TICKET, payload: { details } };
}
