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
import type { SubBillDeferralScheduleTableBiEntitiesApi } from './SubBillDeferralScheduleTableBiEntitiesApi';
import { SubBillDeferralSourceRecType } from './SubBillDeferralSourceRecType';
import { NoYes } from './NoYes';
import { SubBillDeferralScheduleStatus } from './SubBillDeferralScheduleStatus';
import { SubBillDeferralTransactionType } from './SubBillDeferralTransactionType';
import { DebitCredit } from './DebitCredit';
import { SubBillDeferralEventAllocationType } from './SubBillDeferralEventAllocationType';
import { SubBillDeferralScheduleCreationSource } from './SubBillDeferralScheduleCreationSource';
import { SubBillDeferralDistributionType } from './SubBillDeferralDistributionType';
import { SubBillDeferralScheduleType } from './SubBillDeferralScheduleType';

/**
 * This class represents the entity "SubBillDeferralScheduleTableBiEntities" of service "d365_metadata".
 */
export class SubBillDeferralScheduleTableBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SubBillDeferralScheduleTableBiEntitiesType<T>
{
  /**
   * Technical entity name for SubBillDeferralScheduleTableBiEntities.
   */
  static override _entityName = 'SubBillDeferralScheduleTableBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SubBillDeferralScheduleTableBiEntities entity.
   */
  static _keys = ['dataAreaId', 'SubBillDeferralScheduleNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Sub Bill Deferral Schedule Number.
   */
  declare subBillDeferralScheduleNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Sub Bill Deferral Source Rec Type.
   * @nullable
   */
  declare subBillDeferralSourceRecType?: SubBillDeferralSourceRecType | null;
  /**
   * Sub Bill Deferral On Hold Transferred.
   * @nullable
   */
  declare subBillDeferralOnHoldTransferred?: NoYes | null;
  /**
   * Sub Bill Deferral Original End Date.
   */
  declare subBillDeferralOriginalEndDate: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Customer Line Num.
   */
  declare customerLineNum: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Source Trans Line Def Rec Id.
   */
  declare sourceTransLineDefRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Proj Trans Id.
   * @nullable
   */
  declare projTransId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Trans Date.
   */
  declare transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Sub Bill Deferral Consolidate Prior Periods.
   * @nullable
   */
  declare subBillDeferralConsolidatePriorPeriods?: NoYes | null;
  /**
   * Proj Funding Source.
   */
  declare projFundingSource: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Sub Bill Deferral Schedule Status.
   * @nullable
   */
  declare subBillDeferralScheduleStatus?: SubBillDeferralScheduleStatus | null;
  /**
   * Sub Bill Deferral Transaction Type.
   * @nullable
   */
  declare subBillDeferralTransactionType?: SubBillDeferralTransactionType | null;
  /**
   * Sub Bill Deferral Original Start Date.
   */
  declare subBillDeferralOriginalStartDate: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * External Item Id.
   * @nullable
   */
  declare externalItemId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sub Bill Deferral Equal Per Period.
   * @nullable
   */
  declare subBillDeferralEqualPerPeriod?: NoYes | null;
  /**
   * Sales Id.
   * @nullable
   */
  declare salesId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sub Bill Deferral Recognition Type.
   * @nullable
   */
  declare subBillDeferralRecognitionType?: DebitCredit | null;
  /**
   * Sub Bill Deferral Event Allocation Type.
   * @nullable
   */
  declare subBillDeferralEventAllocationType?: SubBillDeferralEventAllocationType | null;
  /**
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sub Bill Deferral Reclassification Date.
   */
  declare subBillDeferralReclassificationDate: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Invoice Id.
   * @nullable
   */
  declare invoiceId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Sub Bill Schedule Dtl Rec Id.
   */
  declare subBillScheduleDtlRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Sub Bill Deferral Event Per Unit.
   * @nullable
   */
  declare subBillDeferralEventPerUnit?: NoYes | null;
  /**
   * Item Id.
   * @nullable
   */
  declare itemId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sub Bill Deferral Schedule Creation Source.
   * @nullable
   */
  declare subBillDeferralScheduleCreationSource?: SubBillDeferralScheduleCreationSource | null;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Sub Bill Deferral Amount.
   */
  declare subBillDeferralAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sub Bill Deferral Original Schedule Amount.
   */
  declare subBillDeferralOriginalScheduleAmount: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Source Rec Id.
   */
  declare sourceRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Sub Bill Deferral Distribution Type.
   * @nullable
   */
  declare subBillDeferralDistributionType?: SubBillDeferralDistributionType | null;
  /**
   * Sub Bill Deferral Event Template Id.
   * @nullable
   */
  declare subBillDeferralEventTemplateId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Sub Bill Deferral Schedule Type.
   * @nullable
   */
  declare subBillDeferralScheduleType?: SubBillDeferralScheduleType | null;
  /**
   * Sub Bill Deferral Short Term Amount.
   */
  declare subBillDeferralShortTermAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Cust Invoice Account.
   * @nullable
   */
  declare custInvoiceAccount?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: SubBillDeferralScheduleTableBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface SubBillDeferralScheduleTableBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  subBillDeferralScheduleNumber: DeserializedType<T, 'Edm.String'>;
  subBillDeferralSourceRecType?: SubBillDeferralSourceRecType | null;
  subBillDeferralOnHoldTransferred?: NoYes | null;
  subBillDeferralOriginalEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  customerLineNum: DeserializedType<T, 'Edm.Int32'>;
  sourceTransLineDefRecId: DeserializedType<T, 'Edm.Int64'>;
  projTransId?: DeserializedType<T, 'Edm.String'> | null;
  transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  subBillDeferralConsolidatePriorPeriods?: NoYes | null;
  projFundingSource: DeserializedType<T, 'Edm.Int64'>;
  subBillDeferralScheduleStatus?: SubBillDeferralScheduleStatus | null;
  subBillDeferralTransactionType?: SubBillDeferralTransactionType | null;
  subBillDeferralOriginalStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  externalItemId?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  subBillDeferralEqualPerPeriod?: NoYes | null;
  salesId?: DeserializedType<T, 'Edm.String'> | null;
  subBillDeferralRecognitionType?: DebitCredit | null;
  subBillDeferralEventAllocationType?: SubBillDeferralEventAllocationType | null;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  subBillDeferralReclassificationDate: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  invoiceId?: DeserializedType<T, 'Edm.String'> | null;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  subBillScheduleDtlRecId: DeserializedType<T, 'Edm.Int64'>;
  subBillDeferralEventPerUnit?: NoYes | null;
  itemId?: DeserializedType<T, 'Edm.String'> | null;
  subBillDeferralScheduleCreationSource?: SubBillDeferralScheduleCreationSource | null;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  subBillDeferralAmount: DeserializedType<T, 'Edm.Decimal'>;
  subBillDeferralOriginalScheduleAmount: DeserializedType<T, 'Edm.Decimal'>;
  sourceRecId: DeserializedType<T, 'Edm.Int64'>;
  subBillDeferralDistributionType?: SubBillDeferralDistributionType | null;
  subBillDeferralEventTemplateId?: DeserializedType<T, 'Edm.String'> | null;
  subBillDeferralScheduleType?: SubBillDeferralScheduleType | null;
  subBillDeferralShortTermAmount: DeserializedType<T, 'Edm.Decimal'>;
  custInvoiceAccount?: DeserializedType<T, 'Edm.String'> | null;
}
