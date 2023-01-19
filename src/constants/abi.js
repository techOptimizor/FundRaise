const address = "0x33DC027485Fa3481B01EBD9461E3028537dBd1bF";
const Fundaddress = "0x5D53A2e19D12fB2e17eAc44d49A56A29F6305458";
const ABI = [
  {
    anonymous: null,
    name: null,
    inputs: [
      { internalType: "string", name: "name", type: "string" },
      { internalType: "string", name: "symbol", type: "string" },
    ],
    outputs: [],
    type: "constructor",
    stateMutability: "nonpayable",
  },
  {
    anonymous: null,
    name: "Approval",
    inputs: [
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "address", name: "approved", type: "address" },
      { internalType: "uint256", name: "tokenId", type: "uint256" },
    ],
    outputs: [],
    type: "event",
    stateMutability: null,
  },
  {
    anonymous: null,
    name: "ApprovalForAll",
    inputs: [
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "address", name: "operator", type: "address" },
      { internalType: "bool", name: "approved", type: "bool" },
    ],
    outputs: [],
    type: "event",
    stateMutability: null,
  },
  {
    anonymous: null,
    name: "OwnershipTransferred",
    inputs: [
      { internalType: "address", name: "previousOwner", type: "address" },
      { internalType: "address", name: "newOwner", type: "address" },
    ],
    outputs: [],
    type: "event",
    stateMutability: null,
  },
  {
    anonymous: null,
    name: "Transfer",
    inputs: [
      { internalType: "address", name: "from", type: "address" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "tokenId", type: "uint256" },
    ],
    outputs: [],
    type: "event",
    stateMutability: null,
  },
  {
    anonymous: null,
    name: "approve",
    inputs: [
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "tokenId", type: "uint256" },
    ],
    outputs: [],
    type: "function",
    stateMutability: "nonpayable",
  },
  {
    anonymous: null,
    name: "balanceOf",
    inputs: [{ internalType: "address", name: "owner", type: "address" }],
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    type: "function",
    stateMutability: "view",
  },
  {
    anonymous: null,
    name: "getApproved",
    inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
    outputs: [{ internalType: "address", name: "", type: "address" }],
    type: "function",
    stateMutability: "view",
  },
  {
    anonymous: null,
    name: "isApprovedForAll",
    inputs: [
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "address", name: "operator", type: "address" },
    ],
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    type: "function",
    stateMutability: "view",
  },
  {
    anonymous: null,
    name: "name",
    inputs: [],
    outputs: [{ internalType: "string", name: "", type: "string" }],
    type: "function",
    stateMutability: "view",
  },
  {
    anonymous: null,
    name: "owner",
    inputs: [],
    outputs: [{ internalType: "address", name: "", type: "address" }],
    type: "function",
    stateMutability: "view",
  },
  {
    anonymous: null,
    name: "ownerOf",
    inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
    outputs: [{ internalType: "address", name: "", type: "address" }],
    type: "function",
    stateMutability: "view",
  },
  {
    anonymous: null,
    name: "renounceOwnership",
    inputs: [],
    outputs: [],
    type: "function",
    stateMutability: "nonpayable",
  },
  {
    anonymous: null,
    name: "safeMint",
    inputs: [
      { internalType: "address", name: "to", type: "address" },
      { internalType: "string", name: "metadataURI", type: "string" },
    ],
    outputs: [],
    type: "function",
    stateMutability: "nonpayable",
  },
  {
    anonymous: null,
    name: "safeTransferFrom",
    inputs: [
      { internalType: "address", name: "from", type: "address" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "tokenId", type: "uint256" },
    ],
    outputs: [],
    type: "function",
    stateMutability: "nonpayable",
  },
  {
    anonymous: null,
    name: "safeTransferFrom",
    inputs: [
      { internalType: "address", name: "from", type: "address" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "tokenId", type: "uint256" },
      { internalType: "bytes", name: "_data", type: "bytes" },
    ],
    outputs: [],
    type: "function",
    stateMutability: "nonpayable",
  },
  {
    anonymous: null,
    name: "setApprovalForAll",
    inputs: [
      { internalType: "address", name: "operator", type: "address" },
      { internalType: "bool", name: "approved", type: "bool" },
    ],
    outputs: [],
    type: "function",
    stateMutability: "nonpayable",
  },
  {
    anonymous: null,
    name: "supportsInterface",
    inputs: [{ internalType: "bytes4", name: "interfaceId", type: "bytes4" }],
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    type: "function",
    stateMutability: "view",
  },
  {
    anonymous: null,
    name: "symbol",
    inputs: [],
    outputs: [{ internalType: "string", name: "", type: "string" }],
    type: "function",
    stateMutability: "view",
  },
  {
    anonymous: null,
    name: "tokenByIndex",
    inputs: [{ internalType: "uint256", name: "index", type: "uint256" }],
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    type: "function",
    stateMutability: "view",
  },
  {
    anonymous: null,
    name: "tokenOfOwnerByIndex",
    inputs: [
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "uint256", name: "index", type: "uint256" },
    ],
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    type: "function",
    stateMutability: "view",
  },
  {
    anonymous: null,
    name: "tokenURI",
    inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
    outputs: [{ internalType: "string", name: "", type: "string" }],
    type: "function",
    stateMutability: "view",
  },
  {
    anonymous: null,
    name: "totalSupply",
    inputs: [],
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    type: "function",
    stateMutability: "view",
  },
  {
    anonymous: null,
    name: "transferFrom",
    inputs: [
      { internalType: "address", name: "from", type: "address" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "tokenId", type: "uint256" },
    ],
    outputs: [],
    type: "function",
    stateMutability: "nonpayable",
  },
  {
    anonymous: null,
    name: "transferOwnership",
    inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
    outputs: [],
    type: "function",
    stateMutability: "nonpayable",
  },
];

const FundAbi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_nftAdd",
        type: "address",
      },
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_donor",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Donated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "withdrawer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withDrawn",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "metadataURI",
        type: "string",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
    ],
    name: "Donate",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newOwner",
        type: "address",
      },
    ],
    name: "changeNFTowership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "changeOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "changeShares",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "claim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCounter",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "donor",
        type: "address",
      },
    ],
    name: "getDonorAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_count",
        type: "uint256",
      },
    ],
    name: "getNameOfDonor",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "withDraw",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_firm",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "withDrawToAnother",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

export default { address, ABI, FundAbi, Fundaddress };
