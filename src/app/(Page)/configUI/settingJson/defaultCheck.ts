import { IBaseSettingMapData, ITag } from "../../../interface"
const defaultCheck: Array<IBaseSettingMapData<ITag>> = [
  {
    id: "header-section",
    title: "Header",
    defaultValue: false,
    disabled: false,
    children: [
      {
        tag: "input",
        defaultValue: [
          {
            id: "header-section-text",
            value: "This is header",
            disabled: false,
          },
        ],
      },
    ],
  },
  {
    id: "restaurant-info-section",
    title: "Restaurant Info",
    defaultValue: false,
    disabled: false,
    children: [
      {
        tag: "checkboxGroup",
        defaultSort: [
          ["restaurant-info-section-restaurantName"],
          ["restaurant-info-section-address"],
          ["restaurant-info-section-phoneNumber"],
        ],
        defaultValue: [
          {
            id: "restaurant-info-section-restaurantName",
            label: "Restaurant Name",
            value: "restaurant-info-section-restaurantName",
            checked: true,
            disabled: false,
          },
          {
            id: "restaurant-info-section-address",
            label: "Address",
            value: "restaurant-info-section-address",
            checked: true,
            disabled: false,
          },
          {
            id: "restaurant-info-section-phoneNumber",
            label: "Phone Number",
            value: "restaurant-info-section-phoneNumber",
            checked: true,
            disabled: false,
          },
        ],
      },
    ],
  },
  {
    id: "check-info-section",
    title: "Check Info",
    defaultValue: false,
    disabled: true,
    children: [
      {
        tag: "checkboxGroup",
        defaultSort: [
          ["check-info-section-diningOption", "check-info-section-tableNumber"],
          ["check-info-section-checkNumber", "check-info-section-salesChannel"],
          ["check-info-section-serverName", "check-info-section-guestNumber"],
          ["check-info-section-date"],
        ],
        defaultValue: [
          {
            id: "check-info-section-salesChannel",
            label: "Sales Channel",
            value: "check-info-section-salesChannel",
            checked: true,
            disabled: false,
          },
          {
            id: "check-info-section-serverName",
            label: "Server name",
            value: "check-info-section-serverName",
            checked: true,
            disabled: false,
          },
          {
            id: "check-info-section-guestNumber",
            label: "Guest Number",
            value: "check-info-section-guestNumber",
            checked: true,
            disabled: false,
          },
        ],
      },
    ],
  },
  {
    id: "guest-info-section",
    title: "Guest Info",
    defaultValue: false,
    disabled: false,
    children: [
      {
        tag: "checkboxGroup",
        defaultSort: [
          [
            "guest-info-section-guestName",
            "guest-info-section-guestPhoneNumber",
          ],
          ["guest-info-section-guestNotes"],
        ],
        defaultValue: [
          {
            id: "guest-info-section-guestName",
            label: "Guest Name",
            value: "guest-info-section-guestName",
            checked: true,
            disabled: false,
          },
          {
            id: "guest-info-section-guestPhoneNumber",
            label: "Guest phone number",
            value: "guest-info-section-guestPhoneNumber",
            checked: true,
            disabled: false,
          },
          {
            id: "guest-info-section-guestNotes",
            label: "Guest Notes",
            value: "guest-info-section-guestNotes",
            checked: true,
            disabled: false,
          },
        ],
      },
    ],
  },
  {
    id: "item-info-section",
    title: "Item Info",
    defaultValue: false,
    disabled: true,
    children: [
      {
        tag: "spaceTag",
        defaultValue: [
          {
            id: "item-info-section-narrow",
            label: "Narrow",
            value: "5",
            checked: false,
            disabled: false,
          },
          {
            id: "item-info-section-mid",
            label: "Mid",
            value: "15",
            checked: true,
            disabled: false,
          },
          {
            id: "item-info-section-wide",
            label: "Wide",
            value: "30",
            checked: false,
            disabled: false,
          },
        ],
      },
      {
        tag: "checkboxGroup",
        defaultSort: [["item-info-section-itemNotes"]],
        defaultValue: [
          {
            id: "item-info-section-itemNotes",
            label: "Item notes",
            checked: false,
            value: "item-info-section-itemNotes",
            disabled: false,
          },
        ],
      },
    ],
  },
  {
    id: "check-notes-section",
    title: "Check Notes",
    defaultValue: false,
    disabled: false,
    children: [],
  },
  {
    id: "footer-section",
    title: "Footer",
    defaultValue: false,
    disabled: false,
    children: [
      {
        tag: "input",
        defaultValue: [
          {
            id: "footer-section-text",
            value: "This is footer",
            disabled: false,
          },
        ],
      },
    ],
  },
  {
    id: "payment-status-section",
    title: "Payment Status",
    defaultValue: false,
    disabled: false,
    children: [],
  },
];
export default defaultCheck;