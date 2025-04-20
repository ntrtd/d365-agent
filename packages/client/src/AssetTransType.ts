/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
/**
 * This enum represents the enum type "{@link AssetTransType}".
 * The members represent values of EDM type Edm.Int32.
 */
export enum AssetTransType {
  /**
   * Original value: 0
   */
  None = 'None',
  /**
   * Original value: 1
   */
  Acquisition = 'Acquisition',
  /**
   * Original value: 2
   */
  AcquisitionAdj = 'AcquisitionAdj',
  /**
   * Original value: 3
   */
  Depreciation = 'Depreciation',
  /**
   * Original value: 4
   */
  DepreciationAdj = 'DepreciationAdj',
  /**
   * Original value: 5
   */
  Revaluation = 'Revaluation',
  /**
   * Original value: 6
   */
  WriteUpAdj = 'WriteUpAdj',
  /**
   * Original value: 7
   */
  WriteDownAdj = 'WriteDownAdj',
  /**
   * Original value: 8
   */
  DisposalSale = 'DisposalSale',
  /**
   * Original value: 9
   */
  DisposalScrap = 'DisposalScrap',
  /**
   * Original value: 10
   */
  NetBookValue = 'NetBookValue',
  /**
   * Original value: 11
   */
  ProfitLoss = 'ProfitLoss',
  /**
   * Original value: 12
   */
  AcqPriorYears = 'AcqPriorYears',
  /**
   * Original value: 13
   */
  AcqThisYear = 'AcqThisYear',
  /**
   * Original value: 14
   */
  AcqAdjPriorYears = 'AcqAdjPriorYears',
  /**
   * Original value: 15
   */
  AcqAdjThisYear = 'AcqAdjThisYear',
  /**
   * Original value: 16
   */
  DepPriorYears = 'DepPriorYears',
  /**
   * Original value: 17
   */
  DepThisYear = 'DepThisYear',
  /**
   * Original value: 18
   */
  DepAdjPriorYears = 'DepAdjPriorYears',
  /**
   * Original value: 19
   */
  DepAdjThisYear = 'DepAdjThisYear',
  /**
   * Original value: 20
   */
  RevaluePriorYears = 'RevaluePriorYears',
  /**
   * Original value: 21
   */
  RevalueThisYear = 'RevalueThisYear',
  /**
   * Original value: 22
   */
  WriteUpAdjPriorYears = 'WriteUpAdjPriorYears',
  /**
   * Original value: 23
   */
  WriteUpAdjThisYear = 'WriteUpAdjThisYear',
  /**
   * Original value: 24
   */
  WriteDownAdjPriorYears = 'WriteDownAdjPriorYears',
  /**
   * Original value: 25
   */
  WriteDownAdjThisYear = 'WriteDownAdjThisYear',
  /**
   * Original value: 26
   */
  CapitalReserve = 'CapitalReserve',
  /**
   * Original value: 27
   */
  CapitalReserveTransfer = 'CapitalReserveTransfer',
  /**
   * Original value: 28
   */
  ExtraordinaryDepreciation = 'ExtraordinaryDepreciation',
  /**
   * Original value: 29
   */
  ExtraDepPriorYears = 'ExtraDepPriorYears',
  /**
   * Original value: 30
   */
  ExtraDepThisYear = 'ExtraDepThisYear',
  /**
   * Original value: 32
   */
  BonusDepreciation = 'BonusDepreciation',
  /**
   * Original value: 33
   */
  BonusDepPriorYears = 'BonusDepPriorYears',
  /**
   * Original value: 34
   */
  BonusDepThisYear = 'BonusDepThisYear',
  /**
   * Original value: 35
   */
  DerogatoryIncrease = 'DerogatoryIncrease',
  /**
   * Original value: 36
   */
  DerogatoryDecrease = 'DerogatoryDecrease',
  /**
   * Original value: 37
   */
  DerogatoryIncreaseAllYears = 'DerogatoryIncreaseAllYears',
  /**
   * Original value: 38
   */
  DerogatoryDecreaseAllYears = 'DerogatoryDecreaseAllYears',
  /**
   * Original value: 39
   */
  AssetTransfer = 'AssetTransfer',
  /**
   * Original value: 100
   */
  PreAcquisition_CZ = 'PreAcquisition_CZ',
  /**
   * Original value: 102
   */
  DepreciationNotCost_PL = 'DepreciationNotCost_PL',
  /**
   * Original value: 103
   */
  DepNotCostPriorYears_PL = 'DepNotCostPriorYears_PL',
  /**
   * Original value: 104
   */
  DeprNotCostThisYear_PL = 'DeprNotCostThisYear_PL',
  /**
   * Original value: 105
   */
  AccumulatedDepreciation_PL = 'AccumulatedDepreciation_PL',
  /**
   * Original value: 106
   */
  PostOffAccDepreciation_PL = 'PostOffAccDepreciation_PL',
  /**
   * Original value: 107
   */
  PostOffAccDeprPriorYears_PL = 'PostOffAccDeprPriorYears_PL',
  /**
   * Original value: 108
   */
  PostOffAccDeprThisYear_PL = 'PostOffAccDeprThisYear_PL',
  /**
   * Original value: 109
   */
  AccDepreciationPriorYears_PL = 'AccDepreciationPriorYears_PL',
  /**
   * Original value: 110
   */
  AccDepreciationThisYear_PL = 'AccDepreciationThisYear_PL',
  /**
   * Original value: 101
   */
  DEL_Movement_LV = 'DEL_Movement_LV',
  /**
   * Original value: 113
   */
  AssetRetirementObligationInterest_JP = 'AssetRetirementObligationInterest_JP',
  /**
   * Original value: 120
   */
  ReductionEntryReserve_JP = 'ReductionEntryReserve_JP',
  /**
   * Original value: 121
   */
  ReductionEntryReserveAllocation_JP = 'ReductionEntryReserveAllocation_JP',
  /**
   * Original value: 122
   */
  ReductionEntryRepayment_JP = 'ReductionEntryRepayment_JP',
  /**
   * Original value: 123
   */
  SpecialDepReserve_JP = 'SpecialDepReserve_JP',
  /**
   * Original value: 124
   */
  SpecialDepReserveAllocation_JP = 'SpecialDepReserveAllocation_JP',
  /**
   * Original value: 125
   */
  AdditionalDepReserve_JP = 'AdditionalDepReserve_JP',
  /**
   * Original value: 126
   */
  AdditionalDepReserveAllocation_JP = 'AdditionalDepReserveAllocation_JP',
  /**
   * Original value: 127
   */
  ReductionEntryRepaymentSubsidy_JP = 'ReductionEntryRepaymentSubsidy_JP',
  /**
   * Original value: 128
   */
  ReductionEntryRepaymentProportional_JP = 'ReductionEntryRepaymentProportional_JP',
  /**
   * Original value: 131
   */
  MajorRepairs_RU = 'MajorRepairs_RU',
  /**
   * Original value: 132
   */
  PartialTakeDown_RU = 'PartialTakeDown_RU',
  /**
   * Original value: 133
   */
  Disposal_RU = 'Disposal_RU',
  /**
   * Original value: 134
   */
  Lending_RU = 'Lending_RU',
  /**
   * Original value: 135
   */
  LendingRet_RU = 'LendingRet_RU',
  /**
   * Original value: 136
   */
  CompanyIssue_RU = 'CompanyIssue_RU',
  /**
   * Original value: 137
   */
  CompanyReceipt_RU = 'CompanyReceipt_RU',
  /**
   * Original value: 138
   */
  Other_RU = 'Other_RU',
  /**
   * Original value: 139
   */
  CurrencyWriteUpAdj_RU = 'CurrencyWriteUpAdj_RU',
  /**
   * Original value: 140
   */
  CurrencyWriteDownAdj_RU = 'CurrencyWriteDownAdj_RU'
}
