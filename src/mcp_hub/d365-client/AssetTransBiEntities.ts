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
import type { AssetTransBiEntitiesApi } from './AssetTransBiEntitiesApi';
import { AssetLowValuePoolTypeAu } from './AssetLowValuePoolTypeAu';
import { NoYes } from './NoYes';
import { RAssetPostingType } from './RAssetPostingType';
import { AssetTransType } from './AssetTransType';
import { AssetTransactionSubType } from './AssetTransactionSubType';

/**
 * This class represents the entity "AssetTransBiEntities" of service "d365_metadata".
 */
export class AssetTransBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetTransBiEntitiesType<T>
{
  /**
   * Technical entity name for AssetTransBiEntities.
   */
  static override _entityName = 'AssetTransBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetTransBiEntities entity.
   */
  static _keys = ['dataAreaId', 'SourceKey'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Reserve Trans Id.
   */
  declare reserveTransId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Voucher.
   * @nullable
   */
  declare voucher?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Modified Date Time.
   */
  declare sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Txt.
   * @nullable
   */
  declare txt?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reason Ref Rec Id.
   */
  declare reasonRefRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Low Value Pool Type Au.
   * @nullable
   */
  declare lowValuePoolTypeAu?: AssetLowValuePoolTypeAu | null;
  /**
   * Book Id.
   * @nullable
   */
  declare bookId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Prior Year.
   * @nullable
   */
  declare isPriorYear?: NoYes | null;
  /**
   * Interest Amount.
   */
  declare interestAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Fin Tag.
   */
  declare finTag: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Posting Type W.
   * @nullable
   */
  declare postingTypeW?: RAssetPostingType | null;
  /**
   * Trans Date.
   */
  declare transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Document Date W.
   */
  declare documentDateW: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Revaluation Done.
   * @nullable
   */
  declare revaluationDone?: NoYes | null;
  /**
   * Consumption Qty.
   */
  declare consumptionQty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Cash Disc Base Trans Id.
   */
  declare cashDiscBaseTransId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Amount Mst.
   */
  declare amountMst: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Reporting Currency Amount.
   */
  declare reportingCurrencyAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Ledger Dimension.
   */
  declare ledgerDimension: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Amount Cur.
   */
  declare amountCur: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Disposal Transaction.
   * @nullable
   */
  declare disposalTransaction?: NoYes | null;
  /**
   * Revaluation Amount.
   */
  declare revaluationAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Reclassification.
   * @nullable
   */
  declare reclassification?: NoYes | null;
  /**
   * Asset Id.
   * @nullable
   */
  declare assetId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cash Disc Base Amount Mst.
   */
  declare cashDiscBaseAmountMst: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Approver.
   */
  declare approver: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Asset Group.
   * @nullable
   */
  declare assetGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Lvp Transfer Id Au.
   * @nullable
   */
  declare lvpTransferIdAu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Trans Type.
   * @nullable
   */
  declare transType?: AssetTransType | null;
  /**
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Document Num W.
   * @nullable
   */
  declare documentNumW?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Posting Profile.
   * @nullable
   */
  declare postingProfile?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Revalued Trans Id.
   */
  declare revaluedTransId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Reserve Transfer Done.
   * @nullable
   */
  declare reserveTransferDone?: NoYes | null;
  /**
   * Created On.
   */
  declare createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Is Reporting Currency Amount Updated.
   * @nullable
   */
  declare isReportingCurrencyAmountUpdated?: NoYes | null;
  /**
   * Revaluation Trans.
   * @nullable
   */
  declare revaluationTrans?: NoYes | null;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Asset Trans Sub Type.
   * @nullable
   */
  declare assetTransSubType?: AssetTransactionSubType | null;
  /**
   * Paym Reference.
   * @nullable
   */
  declare paymReference?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: AssetTransBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface AssetTransBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  reserveTransId: DeserializedType<T, 'Edm.Int64'>;
  voucher?: DeserializedType<T, 'Edm.String'> | null;
  sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  txt?: DeserializedType<T, 'Edm.String'> | null;
  reasonRefRecId: DeserializedType<T, 'Edm.Int64'>;
  lowValuePoolTypeAu?: AssetLowValuePoolTypeAu | null;
  bookId?: DeserializedType<T, 'Edm.String'> | null;
  isPriorYear?: NoYes | null;
  interestAmount: DeserializedType<T, 'Edm.Decimal'>;
  finTag: DeserializedType<T, 'Edm.Int64'>;
  postingTypeW?: RAssetPostingType | null;
  transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  documentDateW: DeserializedType<T, 'Edm.DateTimeOffset'>;
  revaluationDone?: NoYes | null;
  consumptionQty: DeserializedType<T, 'Edm.Decimal'>;
  cashDiscBaseTransId: DeserializedType<T, 'Edm.Int64'>;
  amountMst: DeserializedType<T, 'Edm.Decimal'>;
  reportingCurrencyAmount: DeserializedType<T, 'Edm.Decimal'>;
  ledgerDimension: DeserializedType<T, 'Edm.Int64'>;
  amountCur: DeserializedType<T, 'Edm.Decimal'>;
  disposalTransaction?: NoYes | null;
  revaluationAmount: DeserializedType<T, 'Edm.Decimal'>;
  reclassification?: NoYes | null;
  assetId?: DeserializedType<T, 'Edm.String'> | null;
  cashDiscBaseAmountMst: DeserializedType<T, 'Edm.Decimal'>;
  approver: DeserializedType<T, 'Edm.Int64'>;
  assetGroup?: DeserializedType<T, 'Edm.String'> | null;
  lvpTransferIdAu?: DeserializedType<T, 'Edm.String'> | null;
  transType?: AssetTransType | null;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  documentNumW?: DeserializedType<T, 'Edm.String'> | null;
  postingProfile?: DeserializedType<T, 'Edm.String'> | null;
  revaluedTransId: DeserializedType<T, 'Edm.Int64'>;
  reserveTransferDone?: NoYes | null;
  createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  isReportingCurrencyAmountUpdated?: NoYes | null;
  revaluationTrans?: NoYes | null;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  assetTransSubType?: AssetTransactionSubType | null;
  paymReference?: DeserializedType<T, 'Edm.String'> | null;
}
