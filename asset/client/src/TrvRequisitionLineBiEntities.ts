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
import type { TrvRequisitionLineBiEntitiesApi } from './TrvRequisitionLineBiEntitiesApi';
import { ProjExpPolicyStatus } from './ProjExpPolicyStatus';
import { TrvCarRentalVehicleClassEnum } from './TrvCarRentalVehicleClassEnum';
import { TrvRequisitionReconciliationStatus } from './TrvRequisitionReconciliationStatus';
import { NoYes } from './NoYes';
import { TrvExpType } from './TrvExpType';
import { TrvAirlineServiceClassEnum } from './TrvAirlineServiceClassEnum';

/**
 * This class represents the entity "TrvRequisitionLineBiEntities" of service "d365_metadata".
 */
export class TrvRequisitionLineBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements TrvRequisitionLineBiEntitiesType<T>
{
  /**
   * Technical entity name for TrvRequisitionLineBiEntities.
   */
  static override _entityName = 'TrvRequisitionLineBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TrvRequisitionLineBiEntities entity.
   */
  static _keys = ['SourceKey'];
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Trv Locations.
   */
  declare trvLocations: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Category.
   * @nullable
   */
  declare category?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Proj Policy Status.
   * @nullable
   */
  declare projPolicyStatus?: ProjExpPolicyStatus | null;
  /**
   * Perdiem Date From.
   */
  declare perdiemDateFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Car Rental Vehicle Class.
   * @nullable
   */
  declare carRentalVehicleClass?: TrvCarRentalVehicleClassEnum | null;
  /**
   * Proj Activity Number.
   * @nullable
   */
  declare projActivityNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Merchant.
   * @nullable
   */
  declare merchant?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Trv Requisition Table.
   */
  declare trvRequisitionTable: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Transaction Currency Amount.
   */
  declare transactionCurrencyAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Mileage.
   */
  declare mileage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Exchange Rate.
   */
  declare exchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Estimated Date.
   */
  declare estimatedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Perdiem Date To.
   */
  declare perdiemDateTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Mileage Rate.
   */
  declare mileageRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Reconciliation Status.
   * @nullable
   */
  declare reconciliationStatus?: TrvRequisitionReconciliationStatus | null;
  /**
   * Transaction Currency Code.
   * @nullable
   */
  declare transactionCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Reference Data Area Id.
   * @nullable
   */
  declare referenceDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Accounting Currency Amount.
   */
  declare accountingCurrencyAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Proj Line Property Id.
   * @nullable
   */
  declare projLinePropertyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Budget Check Pending.
   * @nullable
   */
  declare isBudgetCheckPending?: NoYes | null;
  /**
   * Source Document Line.
   */
  declare sourceDocumentLine: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Legal Entity.
   */
  declare legalEntity: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Proj Policy Text.
   * @nullable
   */
  declare projPolicyText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Exp Type.
   * @nullable
   */
  declare expType?: TrvExpType | null;
  /**
   * Airline Service Class.
   * @nullable
   */
  declare airlineServiceClass?: TrvAirlineServiceClassEnum | null;
  /**
   * Proj Table.
   */
  declare projTable: DeserializedType<T, 'Edm.Int64'>;

  constructor(_entityApi: TrvRequisitionLineBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface TrvRequisitionLineBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  trvLocations: DeserializedType<T, 'Edm.Int64'>;
  category?: DeserializedType<T, 'Edm.String'> | null;
  projPolicyStatus?: ProjExpPolicyStatus | null;
  perdiemDateFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  carRentalVehicleClass?: TrvCarRentalVehicleClassEnum | null;
  projActivityNumber?: DeserializedType<T, 'Edm.String'> | null;
  merchant?: DeserializedType<T, 'Edm.String'> | null;
  trvRequisitionTable: DeserializedType<T, 'Edm.Int64'>;
  transactionCurrencyAmount: DeserializedType<T, 'Edm.Decimal'>;
  mileage: DeserializedType<T, 'Edm.Decimal'>;
  exchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  estimatedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  perdiemDateTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  mileageRate: DeserializedType<T, 'Edm.Decimal'>;
  reconciliationStatus?: TrvRequisitionReconciliationStatus | null;
  transactionCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  referenceDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  accountingCurrencyAmount: DeserializedType<T, 'Edm.Decimal'>;
  projLinePropertyId?: DeserializedType<T, 'Edm.String'> | null;
  isBudgetCheckPending?: NoYes | null;
  sourceDocumentLine: DeserializedType<T, 'Edm.Int64'>;
  legalEntity: DeserializedType<T, 'Edm.Int64'>;
  projPolicyText?: DeserializedType<T, 'Edm.String'> | null;
  expType?: TrvExpType | null;
  airlineServiceClass?: TrvAirlineServiceClassEnum | null;
  projTable: DeserializedType<T, 'Edm.Int64'>;
}
