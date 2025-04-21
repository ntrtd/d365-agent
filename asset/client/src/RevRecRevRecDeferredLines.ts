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
import type { RevRecRevRecDeferredLinesApi } from './RevRecRevRecDeferredLinesApi';
import { NoYes } from './NoYes';
import { DimensionSets, DimensionSetsType } from './DimensionSets';

/**
 * This class represents the entity "RevRecRevRecDeferredLines" of service "d365_metadata".
 */
export class RevRecRevRecDeferredLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RevRecRevRecDeferredLinesType<T>
{
  /**
   * Technical entity name for RevRecRevRecDeferredLines.
   */
  static override _entityName = 'RevRecRevRecDeferredLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RevRecRevRecDeferredLines entity.
   */
  static _keys = [
    'dataAreaId',
    'OrigSalesId',
    'ProjID',
    'LineNum',
    'InventTransId',
    'RevenueScheduleID',
    'RecPeriodNumber',
    'LatestNewValues',
    'ReallocationId',
    'ReallocationReversal',
    'InvoiceId'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Orig Sales Id.
   */
  declare origSalesId: DeserializedType<T, 'Edm.String'>;
  /**
   * Proj Id.
   */
  declare projId: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Num.
   */
  declare lineNum: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Invent Trans Id.
   */
  declare inventTransId: DeserializedType<T, 'Edm.String'>;
  /**
   * Revenue Schedule Id.
   */
  declare revenueScheduleId: DeserializedType<T, 'Edm.String'>;
  /**
   * Rec Period Number.
   */
  declare recPeriodNumber: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Latest New Values.
   * @nullable
   */
  declare latestNewValues?: NoYes | null;
  /**
   * Reallocation Id.
   */
  declare reallocationId: DeserializedType<T, 'Edm.String'>;
  /**
   * Reallocation Reversal.
   * @nullable
   */
  declare reallocationReversal?: NoYes | null;
  /**
   * Invoice Id.
   */
  declare invoiceId: DeserializedType<T, 'Edm.String'>;
  /**
   * Recognized Cogs Amount.
   */
  declare recognizedCogsAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Journal Id.
   * @nullable
   */
  declare journalId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Recognized Amount.
   */
  declare recognizedAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Recognize Now Amount.
   */
  declare recognizeNowAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * On Hold.
   * @nullable
   */
  declare onHold?: NoYes | null;
  /**
   * Line Cogs Amount.
   */
  declare lineCogsAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Recognize Cost Amount.
   */
  declare recognizeCostAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Remaining Qty.
   */
  declare remainingQty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Default Dimension Display Value.
   * @nullable
   */
  declare defaultDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Total Qty.
   */
  declare totalQty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Line Amount.
   */
  declare lineAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Exch Rate.
   */
  declare exchRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Invoice Date.
   */
  declare invoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Rev Account.
   * @nullable
   */
  declare revAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Recognize Percent.
   */
  declare recognizePercent: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Revenue Schedule Id Description.
   * @nullable
   */
  declare revenueScheduleIdDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Multiple Journals.
   * @nullable
   */
  declare multipleJournals?: NoYes | null;
  /**
   * Remaining Amount.
   */
  declare remainingAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Processed.
   * @nullable
   */
  declare processed?: NoYes | null;
  /**
   * Recognize Now Cogs Amount.
   */
  declare recognizeNowCogsAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Expected Period Name.
   * @nullable
   */
  declare expectedPeriodName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Remaining Cogs Amount.
   */
  declare remainingCogsAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Recognize Date.
   */
  declare recognizeDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Cust Account.
   * @nullable
   */
  declare custAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Amount In Functional Currency.
   */
  declare amountInFunctionalCurrency: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Company Currency Code.
   * @nullable
   */
  declare companyCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Id.
   * @nullable
   */
  declare itemId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Recognize Amount.
   */
  declare recognizeAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Item Description.
   * @nullable
   */
  declare itemDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Recognized Qty.
   */
  declare recognizedQty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Recognize Now Qty.
   */
  declare recognizeNowQty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Deferred Cogs Account.
   * @nullable
   */
  declare deferredCogsAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Deferred Cogs Amount.
   */
  declare deferredCogsAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Dim Id.
   * @nullable
   */
  declare inventDimId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cogs Account.
   * @nullable
   */
  declare cogsAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare dimensionSetEntity?: DimensionSets<T> | null;

  constructor(_entityApi: RevRecRevRecDeferredLinesApi<T>) {
    super(_entityApi);
  }
}

export interface RevRecRevRecDeferredLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  origSalesId: DeserializedType<T, 'Edm.String'>;
  projId: DeserializedType<T, 'Edm.String'>;
  lineNum: DeserializedType<T, 'Edm.Decimal'>;
  inventTransId: DeserializedType<T, 'Edm.String'>;
  revenueScheduleId: DeserializedType<T, 'Edm.String'>;
  recPeriodNumber: DeserializedType<T, 'Edm.Int32'>;
  latestNewValues?: NoYes | null;
  reallocationId: DeserializedType<T, 'Edm.String'>;
  reallocationReversal?: NoYes | null;
  invoiceId: DeserializedType<T, 'Edm.String'>;
  recognizedCogsAmount: DeserializedType<T, 'Edm.Decimal'>;
  journalId?: DeserializedType<T, 'Edm.String'> | null;
  recognizedAmount: DeserializedType<T, 'Edm.Decimal'>;
  recognizeNowAmount: DeserializedType<T, 'Edm.Decimal'>;
  onHold?: NoYes | null;
  lineCogsAmount: DeserializedType<T, 'Edm.Decimal'>;
  recognizeCostAmount: DeserializedType<T, 'Edm.Decimal'>;
  remainingQty: DeserializedType<T, 'Edm.Decimal'>;
  defaultDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  totalQty: DeserializedType<T, 'Edm.Decimal'>;
  lineAmount: DeserializedType<T, 'Edm.Decimal'>;
  exchRate: DeserializedType<T, 'Edm.Decimal'>;
  invoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  revAccount?: DeserializedType<T, 'Edm.String'> | null;
  recognizePercent: DeserializedType<T, 'Edm.Decimal'>;
  revenueScheduleIdDescription?: DeserializedType<T, 'Edm.String'> | null;
  multipleJournals?: NoYes | null;
  remainingAmount: DeserializedType<T, 'Edm.Decimal'>;
  processed?: NoYes | null;
  recognizeNowCogsAmount: DeserializedType<T, 'Edm.Decimal'>;
  expectedPeriodName?: DeserializedType<T, 'Edm.String'> | null;
  remainingCogsAmount: DeserializedType<T, 'Edm.Decimal'>;
  recognizeDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  custAccount?: DeserializedType<T, 'Edm.String'> | null;
  amountInFunctionalCurrency: DeserializedType<T, 'Edm.Decimal'>;
  companyCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  itemId?: DeserializedType<T, 'Edm.String'> | null;
  recognizeAmount: DeserializedType<T, 'Edm.Decimal'>;
  itemDescription?: DeserializedType<T, 'Edm.String'> | null;
  recognizedQty: DeserializedType<T, 'Edm.Decimal'>;
  recognizeNowQty: DeserializedType<T, 'Edm.Decimal'>;
  deferredCogsAccount?: DeserializedType<T, 'Edm.String'> | null;
  deferredCogsAmount: DeserializedType<T, 'Edm.Decimal'>;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  inventDimId?: DeserializedType<T, 'Edm.String'> | null;
  cogsAccount?: DeserializedType<T, 'Edm.String'> | null;
  dimensionSetEntity?: DimensionSetsType<T> | null;
}
