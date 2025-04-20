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
import type { RetailStatementJourBiEntitiesApi } from './RetailStatementJourBiEntitiesApi';
import { RetailClosingMethodType } from './RetailClosingMethodType';
import { NoYes } from './NoYes';
import { RetailStatementType } from './RetailStatementType';
import { RetailEodCodeVersion } from './RetailEodCodeVersion';
import { RetailStaffTerminalTotal } from './RetailStaffTerminalTotal';

/**
 * This class represents the entity "RetailStatementJourBIEntities" of service "d365_metadata".
 */
export class RetailStatementJourBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailStatementJourBiEntitiesType<T>
{
  /**
   * Technical entity name for RetailStatementJourBiEntities.
   */
  static override _entityName = 'RetailStatementJourBIEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailStatementJourBiEntities entity.
   */
  static _keys = ['dataAreaId', 'statementId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Statement Id.
   */
  declare statementId: DeserializedType<T, 'Edm.String'>;
  /**
   * Calculated Date Time.
   */
  declare calculatedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Posted Date Time.
   */
  declare postedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Closing Method.
   * @nullable
   */
  declare closingMethod?: RetailClosingMethodType | null;
  /**
   * Number Of Items Barcodes Not On File.
   */
  declare numberOfItemsBarcodesNotOnFile: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Calculation Time.
   */
  declare calculationTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Calculated Lines.
   */
  declare calculatedLines: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Expenses Amount.
   */
  declare expensesAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Number Of Wrong Shift Transactions.
   */
  declare numberOfWrongShiftTransactions: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Skip Confirmation.
   * @nullable
   */
  declare skipConfirmation?: NoYes | null;
  /**
   * Staff Terminal.
   * @nullable
   */
  declare staffTerminal?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Calculated Time.
   */
  declare calculatedTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Posted Date.
   */
  declare postedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Loyalty Disc Amount Ru.
   */
  declare loyaltyDiscAmountRu: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Total Disc Amount.
   */
  declare totalDiscAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Use Channel Cash Management Reconciliation.
   * @nullable
   */
  declare useChannelCashManagementReconciliation?: NoYes | null;
  /**
   * Posted Time.
   */
  declare postedTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Shift Date.
   */
  declare shiftDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Store Id.
   * @nullable
   */
  declare storeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Created By.
   * @nullable
   */
  declare sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Posting Date.
   */
  declare postingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Shift Id.
   * @nullable
   */
  declare shiftId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Calculated Date.
   */
  declare calculatedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Tax Amount.
   */
  declare taxAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Statement Date.
   */
  declare statementDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Number Of Blocked Customers.
   */
  declare numberOfBlockedCustomers: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Enable Parallel Payment Posting For Sales.
   * @nullable
   */
  declare enableParallelPaymentPostingForSales?: NoYes | null;
  /**
   * Statement Type.
   * @nullable
   */
  declare statementType?: RetailStatementType | null;
  /**
   * Replication Counter.
   */
  declare replicationCounter: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Trans To Date.
   */
  declare transToDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Amount.
   */
  declare salesAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Eod Code Version.
   * @nullable
   */
  declare eodCodeVersion?: RetailEodCodeVersion | null;
  /**
   * Ignore Return Link.
   * @nullable
   */
  declare ignoreReturnLink?: NoYes | null;
  /**
   * Number Of Sales Payment Difference Trans.
   */
  declare numberOfSalesPaymentDifferenceTrans: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Trans To Time.
   */
  declare transToTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Number Sequence Code.
   * @nullable
   */
  declare numberSequenceCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Income Amount.
   */
  declare incomeAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Number Of Blocked Items.
   */
  declare numberOfBlockedItems: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Created On.
   */
  declare createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Statement Method.
   * @nullable
   */
  declare statementMethod?: RetailStaffTerminalTotal | null;
  /**
   * Trans From Date.
   */
  declare transFromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Trans From Time.
   */
  declare transFromTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Line Disc Amount.
   */
  declare lineDiscAmount: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: RetailStatementJourBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface RetailStatementJourBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  statementId: DeserializedType<T, 'Edm.String'>;
  calculatedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  postedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  closingMethod?: RetailClosingMethodType | null;
  numberOfItemsBarcodesNotOnFile: DeserializedType<T, 'Edm.Int32'>;
  calculationTime: DeserializedType<T, 'Edm.Int32'>;
  calculatedLines: DeserializedType<T, 'Edm.Int32'>;
  expensesAmount: DeserializedType<T, 'Edm.Decimal'>;
  numberOfWrongShiftTransactions: DeserializedType<T, 'Edm.Int32'>;
  skipConfirmation?: NoYes | null;
  staffTerminal?: DeserializedType<T, 'Edm.String'> | null;
  calculatedTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  postedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  loyaltyDiscAmountRu: DeserializedType<T, 'Edm.Decimal'>;
  totalDiscAmount: DeserializedType<T, 'Edm.Decimal'>;
  useChannelCashManagementReconciliation?: NoYes | null;
  postedTime: DeserializedType<T, 'Edm.Int32'>;
  shiftDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  storeId?: DeserializedType<T, 'Edm.String'> | null;
  sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  postingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  shiftId?: DeserializedType<T, 'Edm.String'> | null;
  calculatedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  taxAmount: DeserializedType<T, 'Edm.Decimal'>;
  statementDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  numberOfBlockedCustomers: DeserializedType<T, 'Edm.Int32'>;
  enableParallelPaymentPostingForSales?: NoYes | null;
  statementType?: RetailStatementType | null;
  replicationCounter: DeserializedType<T, 'Edm.Int32'>;
  transToDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  salesAmount: DeserializedType<T, 'Edm.Decimal'>;
  eodCodeVersion?: RetailEodCodeVersion | null;
  ignoreReturnLink?: NoYes | null;
  numberOfSalesPaymentDifferenceTrans: DeserializedType<T, 'Edm.Int32'>;
  transToTime: DeserializedType<T, 'Edm.Int32'>;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  numberSequenceCode?: DeserializedType<T, 'Edm.String'> | null;
  incomeAmount: DeserializedType<T, 'Edm.Decimal'>;
  numberOfBlockedItems: DeserializedType<T, 'Edm.Int32'>;
  createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  statementMethod?: RetailStaffTerminalTotal | null;
  transFromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  transFromTime: DeserializedType<T, 'Edm.Int32'>;
  lineDiscAmount: DeserializedType<T, 'Edm.Decimal'>;
}
