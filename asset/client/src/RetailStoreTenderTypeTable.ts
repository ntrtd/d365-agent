/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v4';
import type { RetailStoreTenderTypeTableApi } from './RetailStoreTenderTypeTableApi';
import { NoYes } from './NoYes';
import { RetailNoneNearestUpDown } from './RetailNoneNearestUpDown';
import { RetailLedgerBank } from './RetailLedgerBank';
import { RetailAuthorizationTypes } from './RetailAuthorizationTypes';
import { RetailTenderFunction } from './RetailTenderFunction';
import { DimensionSets, DimensionSetsType } from './DimensionSets';

/**
 * This class represents the entity "RetailStoreTenderTypeTable" of service "d365_metadata".
 */
export class RetailStoreTenderTypeTable<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailStoreTenderTypeTableType<T>
{
  /**
   * Technical entity name for RetailStoreTenderTypeTable.
   */
  static override _entityName = 'RetailStoreTenderTypeTable';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailStoreTenderTypeTable entity.
   */
  static _keys = ['dataAreaId', 'OMOperatingUnit_PartyNumber', 'TenderTypeId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Om Operating Unit Party Number.
   */
  declare omOperatingUnitPartyNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Tender Type Id.
   */
  declare tenderTypeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Open Drawer.
   * @nullable
   */
  declare openDrawer?: NoYes | null;
  /**
   * Om Operating Unit Number.
   * @nullable
   */
  declare omOperatingUnitNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Minimum Amount Allowed.
   */
  declare minimumAmountAllowed: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Line Num In Transaction.
   * @nullable
   */
  declare lineNumInTransaction?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rounding Method.
   * @nullable
   */
  declare roundingMethod?: RetailNoneNearestUpDown | null;
  /**
   * Difference Acc Ledger Dimension Display Value.
   * @nullable
   */
  declare differenceAccLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Change Line On Receipt.
   * @nullable
   */
  declare changeLineOnReceipt?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rounding.
   */
  declare rounding: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Connector Name.
   * @nullable
   */
  declare connectorName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment Terminal Id.
   * @nullable
   */
  declare paymentTerminalId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Slip Front In Printer.
   * @nullable
   */
  declare slipFrontInPrinter?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Diff Acc Big Diff Ledger Dimension Display Value.
   * @nullable
   */
  declare diffAccBigDiffLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Allow Float.
   * @nullable
   */
  declare allowFloat?: NoYes | null;
  /**
   * Taken To Bank.
   * @nullable
   */
  declare takenToBank?: NoYes | null;
  /**
   * Maximum Overtender Amount.
   */
  declare maximumOvertenderAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Active Account.
   * @nullable
   */
  declare activeAccount?: NoYes | null;
  /**
   * Bank Bag Account Type.
   * @nullable
   */
  declare bankBagAccountType?: RetailLedgerBank | null;
  /**
   * Safe Account Type.
   * @nullable
   */
  declare safeAccountType?: RetailLedgerBank | null;
  /**
   * Maximum Amount Entered.
   */
  declare maximumAmountEntered: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Restrict Returns Without Receipt.
   * @nullable
   */
  declare restrictReturnsWithoutReceipt?: NoYes | null;
  /**
   * Maximum Normal Difference Amount.
   */
  declare maximumNormalDifferenceAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Seek Authorization.
   * @nullable
   */
  declare seekAuthorization?: RetailAuthorizationTypes | null;
  /**
   * Above Minimum Tender Id.
   * @nullable
   */
  declare aboveMinimumTenderId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Gift Card Cash Out Threshold.
   */
  declare giftCardCashOutThreshold: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Maximum Counting Difference.
   */
  declare maximumCountingDifference: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Pay Account Bill.
   * @nullable
   */
  declare payAccountBill?: NoYes | null;
  /**
   * Gift Card Item Id.
   * @nullable
   */
  declare giftCardItemId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Account Type Gift Card Company.
   * @nullable
   */
  declare accountTypeGiftCardCompany?: RetailLedgerBank | null;
  /**
   * Sig Cap Min Amount.
   */
  declare sigCapMinAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tender Flow Ledger Dimension Display Value.
   * @nullable
   */
  declare tenderFlowLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Gift Card Company.
   * @nullable
   */
  declare giftCardCompany?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Endorse Check.
   * @nullable
   */
  declare endorseCheck?: NoYes | null;
  /**
   * Ledger Dimension Display Value.
   * @nullable
   */
  declare ledgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Counting Required.
   * @nullable
   */
  declare countingRequired?: NoYes | null;
  /**
   * Ask For Date.
   * @nullable
   */
  declare askForDate?: NoYes | null;
  /**
   * Taken To Safe.
   * @nullable
   */
  declare takenToSafe?: NoYes | null;
  /**
   * Safe Active Account.
   * @nullable
   */
  declare safeActiveAccount?: NoYes | null;
  /**
   * Bank Bag Ledger Dimension Display Value.
   * @nullable
   */
  declare bankBagLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Minimum Change Amount.
   */
  declare minimumChangeAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sig Cap Enabled.
   * @nullable
   */
  declare sigCapEnabled?: NoYes | null;
  /**
   * Multiply In Tender Operations.
   * @nullable
   */
  declare multiplyInTenderOperations?: NoYes | null;
  /**
   * Maximum Recount.
   */
  declare maximumRecount: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Endorsment Line 2.
   * @nullable
   */
  declare endorsmentLine2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Undertender Amount.
   */
  declare undertenderAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Endorsment Line 1.
   * @nullable
   */
  declare endorsmentLine1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Front Of Check.
   * @nullable
   */
  declare frontOfCheck?: NoYes | null;
  /**
   * Compress Payment Entries.
   * @nullable
   */
  declare compressPaymentEntries?: NoYes | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Hide Card Input Details In Pos.
   * @nullable
   */
  declare hideCardInputDetailsInPos?: NoYes | null;
  /**
   * Account Type.
   * @nullable
   */
  declare accountType?: RetailLedgerBank | null;
  /**
   * Pos Operation.
   */
  declare posOperation: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Change Tender Id.
   * @nullable
   */
  declare changeTenderId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Allow Undertender.
   * @nullable
   */
  declare allowUndertender?: NoYes | null;
  /**
   * Maximum Amount Allowed.
   */
  declare maximumAmountAllowed: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Allow Return Negative.
   * @nullable
   */
  declare allowReturnNegative?: NoYes | null;
  /**
   * Function.
   * @nullable
   */
  declare function?: RetailTenderFunction | null;
  /**
   * Safe Acc Ledger Dimension Display Value.
   * @nullable
   */
  declare safeAccLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Fiscal Printer Tender Type Br.
   * @nullable
   */
  declare fiscalPrinterTenderTypeBr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Allow Overtender.
   * @nullable
   */
  declare allowOvertender?: NoYes | null;
  /**
   * Pos Count Entries.
   * @nullable
   */
  declare posCountEntries?: NoYes | null;
  /**
   * Minimum Amount Entered.
   */
  declare minimumAmountEntered: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Cash Drawer Limit.
   */
  declare cashDrawerLimit: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Slip Back In Printer.
   * @nullable
   */
  declare slipBackInPrinter?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Check Payee.
   * @nullable
   */
  declare checkPayee?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ledger Dimension Gift Card Company Display Value.
   * @nullable
   */
  declare ledgerDimensionGiftCardCompanyDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Cash Drawer Limit Enabled.
   * @nullable
   */
  declare cashDrawerLimitEnabled?: NoYes | null;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare dimensionSet?: DimensionSets<T> | null;

  constructor(_entityApi: RetailStoreTenderTypeTableApi<T>) {
    super(_entityApi);
  }
}

export interface RetailStoreTenderTypeTableType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  omOperatingUnitPartyNumber: DeserializedType<T, 'Edm.String'>;
  tenderTypeId: DeserializedType<T, 'Edm.String'>;
  openDrawer?: NoYes | null;
  omOperatingUnitNumber?: DeserializedType<T, 'Edm.String'> | null;
  minimumAmountAllowed: DeserializedType<T, 'Edm.Decimal'>;
  lineNumInTransaction?: DeserializedType<T, 'Edm.String'> | null;
  roundingMethod?: RetailNoneNearestUpDown | null;
  differenceAccLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  changeLineOnReceipt?: DeserializedType<T, 'Edm.String'> | null;
  rounding: DeserializedType<T, 'Edm.Decimal'>;
  connectorName?: DeserializedType<T, 'Edm.String'> | null;
  paymentTerminalId?: DeserializedType<T, 'Edm.String'> | null;
  slipFrontInPrinter?: DeserializedType<T, 'Edm.String'> | null;
  diffAccBigDiffLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  allowFloat?: NoYes | null;
  takenToBank?: NoYes | null;
  maximumOvertenderAmount: DeserializedType<T, 'Edm.Decimal'>;
  activeAccount?: NoYes | null;
  bankBagAccountType?: RetailLedgerBank | null;
  safeAccountType?: RetailLedgerBank | null;
  maximumAmountEntered: DeserializedType<T, 'Edm.Decimal'>;
  restrictReturnsWithoutReceipt?: NoYes | null;
  maximumNormalDifferenceAmount: DeserializedType<T, 'Edm.Decimal'>;
  seekAuthorization?: RetailAuthorizationTypes | null;
  aboveMinimumTenderId?: DeserializedType<T, 'Edm.String'> | null;
  giftCardCashOutThreshold: DeserializedType<T, 'Edm.Decimal'>;
  maximumCountingDifference: DeserializedType<T, 'Edm.Decimal'>;
  payAccountBill?: NoYes | null;
  giftCardItemId?: DeserializedType<T, 'Edm.String'> | null;
  accountTypeGiftCardCompany?: RetailLedgerBank | null;
  sigCapMinAmount: DeserializedType<T, 'Edm.Decimal'>;
  tenderFlowLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  giftCardCompany?: DeserializedType<T, 'Edm.String'> | null;
  endorseCheck?: NoYes | null;
  ledgerDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  countingRequired?: NoYes | null;
  askForDate?: NoYes | null;
  takenToSafe?: NoYes | null;
  safeActiveAccount?: NoYes | null;
  bankBagLedgerDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  minimumChangeAmount: DeserializedType<T, 'Edm.Decimal'>;
  sigCapEnabled?: NoYes | null;
  multiplyInTenderOperations?: NoYes | null;
  maximumRecount: DeserializedType<T, 'Edm.Int32'>;
  endorsmentLine2?: DeserializedType<T, 'Edm.String'> | null;
  undertenderAmount: DeserializedType<T, 'Edm.Decimal'>;
  endorsmentLine1?: DeserializedType<T, 'Edm.String'> | null;
  frontOfCheck?: NoYes | null;
  compressPaymentEntries?: NoYes | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  hideCardInputDetailsInPos?: NoYes | null;
  accountType?: RetailLedgerBank | null;
  posOperation: DeserializedType<T, 'Edm.Int32'>;
  changeTenderId?: DeserializedType<T, 'Edm.String'> | null;
  allowUndertender?: NoYes | null;
  maximumAmountAllowed: DeserializedType<T, 'Edm.Decimal'>;
  allowReturnNegative?: NoYes | null;
  function?: RetailTenderFunction | null;
  safeAccLedgerDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  fiscalPrinterTenderTypeBr?: DeserializedType<T, 'Edm.String'> | null;
  allowOvertender?: NoYes | null;
  posCountEntries?: NoYes | null;
  minimumAmountEntered: DeserializedType<T, 'Edm.Decimal'>;
  cashDrawerLimit: DeserializedType<T, 'Edm.Decimal'>;
  slipBackInPrinter?: DeserializedType<T, 'Edm.String'> | null;
  checkPayee?: DeserializedType<T, 'Edm.String'> | null;
  ledgerDimensionGiftCardCompanyDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  cashDrawerLimitEnabled?: NoYes | null;
  dimensionSet?: DimensionSetsType<T> | null;
}
