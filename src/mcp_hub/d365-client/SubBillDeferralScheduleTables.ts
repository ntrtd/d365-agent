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
import type { SubBillDeferralScheduleTablesApi } from './SubBillDeferralScheduleTablesApi';
import { SubBillDeferralDistributionType } from './SubBillDeferralDistributionType';
import { NoYes } from './NoYes';
import { SubBillDeferralEventAllocationType } from './SubBillDeferralEventAllocationType';
import { SubBillDeferralSourceRecType } from './SubBillDeferralSourceRecType';
import { SubBillDeferralTransactionType } from './SubBillDeferralTransactionType';
import { DebitCredit } from './DebitCredit';
import { SubBillDeferralScheduleType } from './SubBillDeferralScheduleType';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';

/**
 * This class represents the entity "SubBillDeferralScheduleTables" of service "d365_metadata".
 */
export class SubBillDeferralScheduleTables<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SubBillDeferralScheduleTablesType<T>
{
  /**
   * Technical entity name for SubBillDeferralScheduleTables.
   */
  static override _entityName = 'SubBillDeferralScheduleTables';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SubBillDeferralScheduleTables entity.
   */
  static _keys = ['dataAreaId', 'DeferralScheduleNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Deferral Schedule Number.
   */
  declare deferralScheduleNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Deferral Account Display Value.
   * @nullable
   */
  declare deferralAccountDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Expiration Account Display Value.
   * @nullable
   */
  declare expirationAccountDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * External.
   * @nullable
   */
  declare external?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Distribution Type.
   * @nullable
   */
  declare distributionType?: SubBillDeferralDistributionType | null;
  /**
   * Vendor Account.
   * @nullable
   */
  declare vendorAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Account.
   * @nullable
   */
  declare customerAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Number.
   * @nullable
   */
  declare itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Initial Rec Acct Display Value.
   * @nullable
   */
  declare initialRecAcctDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consolidate Prior Periods.
   * @nullable
   */
  declare consolidatePriorPeriods?: NoYes | null;
  /**
   * Trans Date.
   */
  declare transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Equal Per Period.
   * @nullable
   */
  declare equalPerPeriod?: NoYes | null;
  /**
   * Event Allocation Type.
   * @nullable
   */
  declare eventAllocationType?: SubBillDeferralEventAllocationType | null;
  /**
   * Deferral Source Record Type.
   * @nullable
   */
  declare deferralSourceRecordType?: SubBillDeferralSourceRecType | null;
  /**
   * Recognition Account Display Value.
   * @nullable
   */
  declare recognitionAccountDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Transaction Type.
   * @nullable
   */
  declare transactionType?: SubBillDeferralTransactionType | null;
  /**
   * Billing Schedule Number.
   * @nullable
   */
  declare billingScheduleNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * End Date.
   */
  declare endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Rec Off Acct Display Value.
   * @nullable
   */
  declare recOffAcctDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source Trans Line Deferral Record Id.
   */
  declare sourceTransLineDeferralRecordId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Short Term Account Display Value.
   * @nullable
   */
  declare shortTermAccountDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Original Transaction Reference.
   * @nullable
   */
  declare originalTransactionReference?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source Record Id.
   */
  declare sourceRecordId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * External Line Number.
   */
  declare externalLineNumber: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Recognition Type.
   * @nullable
   */
  declare recognitionType?: DebitCredit | null;
  /**
   * Deferral Amount.
   */
  declare deferralAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Start Date.
   */
  declare startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Schedule Type.
   * @nullable
   */
  declare scheduleType?: SubBillDeferralScheduleType | null;
  /**
   * Event Template Id.
   * @nullable
   */
  declare eventTemplateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare subBillDeferralRecOffAcctCombination?: DimensionCombinations<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare subBillDeferralShortTermAccountCombination?: DimensionCombinations<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare subBillDeferralInitialRecAcctCombination?: DimensionCombinations<T> | null;

  constructor(_entityApi: SubBillDeferralScheduleTablesApi<T>) {
    super(_entityApi);
  }
}

export interface SubBillDeferralScheduleTablesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  deferralScheduleNumber: DeserializedType<T, 'Edm.String'>;
  deferralAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  expirationAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  external?: DeserializedType<T, 'Edm.String'> | null;
  distributionType?: SubBillDeferralDistributionType | null;
  vendorAccount?: DeserializedType<T, 'Edm.String'> | null;
  customerAccount?: DeserializedType<T, 'Edm.String'> | null;
  itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  initialRecAcctDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  consolidatePriorPeriods?: NoYes | null;
  transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  equalPerPeriod?: NoYes | null;
  eventAllocationType?: SubBillDeferralEventAllocationType | null;
  deferralSourceRecordType?: SubBillDeferralSourceRecType | null;
  recognitionAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  transactionType?: SubBillDeferralTransactionType | null;
  billingScheduleNumber?: DeserializedType<T, 'Edm.String'> | null;
  endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  recOffAcctDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  sourceTransLineDeferralRecordId: DeserializedType<T, 'Edm.Int64'>;
  shortTermAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  originalTransactionReference?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  sourceRecordId: DeserializedType<T, 'Edm.Int64'>;
  externalLineNumber: DeserializedType<T, 'Edm.Int32'>;
  recognitionType?: DebitCredit | null;
  deferralAmount: DeserializedType<T, 'Edm.Decimal'>;
  startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  scheduleType?: SubBillDeferralScheduleType | null;
  eventTemplateId?: DeserializedType<T, 'Edm.String'> | null;
  subBillDeferralRecOffAcctCombination?: DimensionCombinationsType<T> | null;
  subBillDeferralShortTermAccountCombination?: DimensionCombinationsType<T> | null;
  subBillDeferralInitialRecAcctCombination?: DimensionCombinationsType<T> | null;
}
