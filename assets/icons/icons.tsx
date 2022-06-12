import { createIcon } from "@chakra-ui/react";

const HeartIcon = createIcon({
  displayName: "Heart",
  viewBox: "0 0 24 24",
  path: (
    <path
      d="M2.77216 3.77216C0.40928 6.13503 0.409282 9.96602 2.77216 12.3289L11.937 21.4937L12 21.4307L12.0631 21.4938L21.2279 12.329C23.5908 9.96609 23.5908 6.13511 21.2279 3.77223C18.865 1.40936 15.034 1.40936 12.6712 3.77224L12.3536 4.08978C12.1584 4.28505 11.8418 4.28505 11.6465 4.08978L11.3289 3.77216C8.96601 1.40928 5.13503 1.40928 2.77216 3.77216Z"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  ),
});

const SearchIcon = createIcon({
  displayName: "Search",
  viewBox: "0 0 24 24",
  path: (
    <>
      <path
        d="M11 20C15.9706 20 20 15.9706 20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20Z"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M21 21L18 18"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </>
  ),
});

const PersonIcon = createIcon({
  displayName: "Person",
  viewBox: "0 0 24 24",
  path: (
    <>
      <path
        d="M18.9506 17.3802C17.3783 16.5669 14.7849 15.5 12 15.5C9.21513 15.5 6.62175 16.5669 5.04942 17.3802C4.03431 17.9052 3.42295 18.9351 3.2883 20.07L3 22.5H21L20.7117 20.07C20.577 18.9351 19.9657 17.9052 18.9506 17.3802Z"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12 11C14.4853 11 16.5 8.98528 16.5 6.5C16.5 4.01472 14.4853 2 12 2C9.51472 2 7.5 4.01472 7.5 6.5C7.5 8.98528 9.51472 11 12 11Z"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </>
  ),
});

const HomeIcon = createIcon({
  displayName: "Home",
  viewBox: "0 0 24 24",
  path: (
    <path
      d="M2 9.88014C2 8.92659 2.45332 8.02983 3.22115 7.46442L12 1L20.7788 7.46443C21.5467 8.02983 22 8.92659 22 9.88014V20.5C22 21.8807 20.8807 23 19.5 23H16C15.4477 23 15 22.5523 15 22V16C15 15.7239 14.7761 15.5 14.5 15.5H9.5C9.22386 15.5 9 15.7239 9 16V22C9 22.5523 8.55228 23 8 23H4.5C3.11929 23 2 21.8807 2 20.5V9.88014Z"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  ),
});

const PhotoIcon = createIcon({
  displayName: "Photo",
  viewBox: "0 0 24 24",
  path: (
    <>
      <path
        d="M2 9.25694C2 7.45818 3.45818 6 5.25694 6V6C6.34591 6 7.36283 5.45576 7.96688 4.54969L8 4.5C8.62474 3.56288 9.6765 3 10.8028 3H13.1972C14.3235 3 15.3753 3.56288 16 4.5L16.0331 4.54969C16.6372 5.45576 17.6541 6 18.7431 6V6C20.5418 6 22 7.45818 22 9.25694V17C22 19.2091 20.2091 21 18 21H6C3.79086 21 2 19.2091 2 17V9.25694Z"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <circle
        cx="12"
        cy="13"
        r="4"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </>
  ),
});

const VideoIcon = createIcon({
  displayName: "Video",
  viewBox: "0 0 24 24",
  path: (
    <>
      <rect
        x="1"
        y="1"
        width="18"
        height="20"
        rx="2"
        stroke-width="1"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M1 11H19"
        stroke-width="1"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M1 6H5"
        stroke-width="1"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M1 16H5"
        stroke-width="1"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15 6H19"
        stroke-width="1"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15 16H19"
        stroke-width="1"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14.5 1V21"
        stroke-width="1"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.5 1V21"
        stroke-width="1"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </>
  ),
});

export { HeartIcon, SearchIcon, PersonIcon, HomeIcon, PhotoIcon, VideoIcon };
