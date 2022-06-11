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

export { HeartIcon, SearchIcon, PersonIcon };
