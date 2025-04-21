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
import type { RetailStoreTenderTypesApi } from './RetailStoreTenderTypesApi';
import { NoYes } from './NoYes';
import { RetailAuthorizationTypes } from './RetailAuthorizationTypes';
import { RetailNoneNearestUpDown } from './RetailNoneNearestUpDown';
import { RetailLedgerBank } from './RetailLedgerBank';
import { RetailTenderFunction } from './RetailTenderFunction';
import { OnlineChannels, OnlineChannelsType } from './OnlineChannels';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';
import { RetailCallCenters, RetailCallCentersType } from './RetailCallCenters';
import { RetailStores, RetailStoresType } from './RetailStores';
import { DimensionSets, DimensionSetsType } from './DimensionSets';

/**
 * This class represents the entity "RetailStoreTenderTypes" of service "d365_metadata".
 */
export class RetailStoreTenderTypes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailStoreTenderTypesType<T>
{
  /**
   * Technical entity name for RetailStoreTenderTypes.
   */
  static override _entityName = 'RetailStoreTenderTypes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailStoreTenderTypes entity.
   */
  static _keys = ['dataAreaId', 'RetailChannelId', 'PaymentMethodNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Retail Channel Id.
   */
  declare retailChannelId: DeserializedType<T, 'Edm.String'>;
  /**
   * Payment Method Number.
   */
  declare paymentMethodNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Taken To Bank.
   * @nullable
   */
  declare takenToBank?: NoYes | null;
  /**
   * Signature Capture Min Amount.
   */
  declare signatureCaptureMinAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Hide Card Input Details In Pos.
   * @nullable
   */
  declare hideCardInputDetailsInPos?: NoYes | null;
  /**
   * Connector Name.
   * @nullable
   */
  declare connectorName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Max Recount.
   */
  declare maxRecount: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Pay Account Bill.
   * @nullable
   */
  declare payAccountBill?: NoYes | null;
  /**
   * Seek Authorization.
   * @nullable
   */
  declare seekAuthorization?: RetailAuthorizationTypes | null;
  /**
   * Maximum Overtender Amount.
   */
  declare maximumOvertenderAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Rounding Method.
   * @nullable
   */
  declare roundingMethod?: RetailNoneNearestUpDown | null;
  /**
   * Front Of Check.
   * @nullable
   */
  declare frontOfCheck?: NoYes | null;
  /**
   * Safe Active Account.
   * @nullable
   */
  declare safeActiveAccount?: NoYes | null;
  /**
   * Open Drawer.
   * @nullable
   */
  declare openDrawer?: NoYes | null;
  /**
   * Compress Payment Entries.
   * @nullable
   */
  declare compressPaymentEntries?: NoYes | null;
  /**
   * Multiply In Tender Operations.
   * @nullable
   */
  declare multiplyInTenderOperations?: NoYes | null;
  /**
   * Rounding.
   */
  declare rounding: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Ledger Dimension Gift Card Company Display Value.
   * @nullable
   */
  declare ledgerDimensionGiftCardCompanyDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Minimum Change Amount.
   */
  declare minimumChangeAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Pos Count Entries.
   * @nullable
   */
  declare posCountEntries?: NoYes | null;
  /**
   * Taken To Safe.
   * @nullable
   */
  declare takenToSafe?: NoYes | null;
  /**
   * Max Normal Difference Amount.
   */
  declare maxNormalDifferenceAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Allow Undertender.
   * @nullable
   */
  declare allowUndertender?: NoYes | null;
  /**
   * Tender Flow Ledger Dimension Display Value.
   * @nullable
   */
  declare tenderFlowLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Above Minimum Tender Id.
   * @nullable
   */
  declare aboveMinimumTenderId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Allow Return Negative.
   * @nullable
   */
  declare allowReturnNegative?: NoYes | null;
  /**
   * Change Line On Receipt.
   * @nullable
   */
  declare changeLineOnReceipt?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Difference Acc Ledger Dimension Display Value.
   * @nullable
   */
  declare differenceAccLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Sig Cap Enabled.
   * @nullable
   */
  declare sigCapEnabled?: NoYes | null;
  /**
   * Maximum Amount Entered.
   */
  declare maximumAmountEntered: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Endorse Check.
   * @nullable
   */
  declare endorseCheck?: NoYes | null;
  /**
   * Account Type Gift Card Company.
   * @nullable
   */
  declare accountTypeGiftCardCompany?: RetailLedgerBank | null;
  /**
   * Gift Card Company.
   * @nullable
   */
  declare giftCardCompany?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Transaction Type.
   * @nullable
   */
  declare bankTransactionType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Allow Overtender.
   * @nullable
   */
  declare allowOvertender?: NoYes | null;
  /**
   * Gift Card Cash Out Threshold.
   */
  declare giftCardCashOutThreshold: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Ask For Date.
   * @nullable
   */
  declare askForDate?: NoYes | null;
  /**
   * Minimum Amount Allowed.
   */
  declare minimumAmountAllowed: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Maximum Amount Allowed.
   */
  declare maximumAmountAllowed: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Change Tender Id.
   * @nullable
   */
  declare changeTenderId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Function.
   * @nullable
   */
  declare function?: RetailTenderFunction | null;
  /**
   * Minimum Amount Entered.
   */
  declare minimumAmountEntered: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Diff Acc Big Diff Ledger Dimension Display Value.
   * @nullable
   */
  declare diffAccBigDiffLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Paym Term Id.
   * @nullable
   */
  declare paymTermId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Gift Card Item Id.
   * @nullable
   */
  declare giftCardItemId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ledger Dimension Display Value.
   * @nullable
   */
  declare ledgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Max Counting Difference.
   */
  declare maxCountingDifference: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Undertender Amount.
   */
  declare undertenderAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Account Type.
   * @nullable
   */
  declare accountType?: RetailLedgerBank | null;
  /**
   * Counting Required.
   * @nullable
   */
  declare countingRequired?: NoYes | null;
  /**
   * Safe Account Type.
   * @nullable
   */
  declare safeAccountType?: RetailLedgerBank | null;
  /**
   * Pos Operation.
   */
  declare posOperation: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Check Payee.
   * @nullable
   */
  declare checkPayee?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Active Account.
   * @nullable
   */
  declare activeAccount?: NoYes | null;
  /**
   * Slip Back In Printer.
   * @nullable
   */
  declare slipBackInPrinter?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Bag Ledger Dimension Display Value.
   * @nullable
   */
  declare bankBagLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Endorsment Line 2.
   * @nullable
   */
  declare endorsmentLine2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Slip Front In Printer.
   * @nullable
   */
  declare slipFrontInPrinter?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Endorsment Line 1.
   * @nullable
   */
  declare endorsmentLine1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Allow Float.
   * @nullable
   */
  declare allowFloat?: NoYes | null;
  /**
   * Line Num In Transaction.
   * @nullable
   */
  declare lineNumInTransaction?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Dimension Display Value.
   * @nullable
   */
  declare defaultDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Safe Acc Ledger Dimension Display Value.
   * @nullable
   */
  declare safeAccLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Bank Bag Account Type.
   * @nullable
   */
  declare bankBagAccountType?: RetailLedgerBank | null;
  /**
   * One-to-one navigation property to the {@link OnlineChannels} entity.
   */
  declare onlineChannel?: OnlineChannels<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare dimensionCombination?: DimensionCombinations<T> | null;
  /**
   * One-to-one navigation property to the {@link RetailCallCenters} entity.
   */
  declare retailCallCenter?: RetailCallCenters<T> | null;
  /**
   * One-to-one navigation property to the {@link RetailStores} entity.
   */
  declare retailStore?: RetailStores<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare dimensionSet?: DimensionSets<T> | null;

  constructor(_entityApi: RetailStoreTenderTypesApi<T>) {
    super(_entityApi);
  }
}

export interface RetailStoreTenderTypesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  retailChannelId: DeserializedType<T, 'Edm.String'>;
  paymentMethodNumber: DeserializedType<T, 'Edm.String'>;
  takenToBank?: NoYes | null;
  signatureCaptureMinAmount: DeserializedType<T, 'Edm.Decimal'>;
  hideCardInputDetailsInPos?: NoYes | null;
  connectorName?: DeserializedType<T, 'Edm.String'> | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  maxRecount: DeserializedType<T, 'Edm.Int32'>;
  payAccountBill?: NoYes | null;
  seekAuthorization?: RetailAuthorizationTypes | null;
  maximumOvertenderAmount: DeserializedType<T, 'Edm.Decimal'>;
  roundingMethod?: RetailNoneNearestUpDown | null;
  frontOfCheck?: NoYes | null;
  safeActiveAccount?: NoYes | null;
  openDrawer?: NoYes | null;
  compressPaymentEntries?: NoYes | null;
  multiplyInTenderOperations?: NoYes | null;
  rounding: DeserializedType<T, 'Edm.Decimal'>;
  ledgerDimensionGiftCardCompanyDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  minimumChangeAmount: DeserializedType<T, 'Edm.Decimal'>;
  posCountEntries?: NoYes | null;
  takenToSafe?: NoYes | null;
  maxNormalDifferenceAmount: DeserializedType<T, 'Edm.Decimal'>;
  allowUndertender?: NoYes | null;
  tenderFlowLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  aboveMinimumTenderId?: DeserializedType<T, 'Edm.String'> | null;
  allowReturnNegative?: NoYes | null;
  changeLineOnReceipt?: DeserializedType<T, 'Edm.String'> | null;
  differenceAccLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  sigCapEnabled?: NoYes | null;
  maximumAmountEntered: DeserializedType<T, 'Edm.Decimal'>;
  endorseCheck?: NoYes | null;
  accountTypeGiftCardCompany?: RetailLedgerBank | null;
  giftCardCompany?: DeserializedType<T, 'Edm.String'> | null;
  bankTransactionType?: DeserializedType<T, 'Edm.String'> | null;
  allowOvertender?: NoYes | null;
  giftCardCashOutThreshold: DeserializedType<T, 'Edm.Decimal'>;
  askForDate?: NoYes | null;
  minimumAmountAllowed: DeserializedType<T, 'Edm.Decimal'>;
  maximumAmountAllowed: DeserializedType<T, 'Edm.Decimal'>;
  changeTenderId?: DeserializedType<T, 'Edm.String'> | null;
  function?: RetailTenderFunction | null;
  minimumAmountEntered: DeserializedType<T, 'Edm.Decimal'>;
  diffAccBigDiffLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  paymTermId?: DeserializedType<T, 'Edm.String'> | null;
  giftCardItemId?: DeserializedType<T, 'Edm.String'> | null;
  ledgerDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  maxCountingDifference: DeserializedType<T, 'Edm.Decimal'>;
  undertenderAmount: DeserializedType<T, 'Edm.Decimal'>;
  accountType?: RetailLedgerBank | null;
  countingRequired?: NoYes | null;
  safeAccountType?: RetailLedgerBank | null;
  posOperation: DeserializedType<T, 'Edm.Int32'>;
  checkPayee?: DeserializedType<T, 'Edm.String'> | null;
  activeAccount?: NoYes | null;
  slipBackInPrinter?: DeserializedType<T, 'Edm.String'> | null;
  bankBagLedgerDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  endorsmentLine2?: DeserializedType<T, 'Edm.String'> | null;
  slipFrontInPrinter?: DeserializedType<T, 'Edm.String'> | null;
  endorsmentLine1?: DeserializedType<T, 'Edm.String'> | null;
  allowFloat?: NoYes | null;
  lineNumInTransaction?: DeserializedType<T, 'Edm.String'> | null;
  defaultDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  safeAccLedgerDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  bankBagAccountType?: RetailLedgerBank | null;
  onlineChannel?: OnlineChannelsType<T> | null;
  dimensionCombination?: DimensionCombinationsType<T> | null;
  retailCallCenter?: RetailCallCentersType<T> | null;
  retailStore?: RetailStoresType<T> | null;
  dimensionSet?: DimensionSetsType<T> | null;
}
