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
import type { AssetLeasePaymentScheduleBiEntitiesApi } from './AssetLeasePaymentScheduleBiEntitiesApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "AssetLeasePaymentScheduleBiEntities" of service "d365_metadata".
 */
export class AssetLeasePaymentScheduleBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetLeasePaymentScheduleBiEntitiesType<T>
{
  /**
   * Technical entity name for AssetLeasePaymentScheduleBiEntities.
   */
  static override _entityName = 'AssetLeasePaymentScheduleBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetLeasePaymentScheduleBiEntities entity.
   */
  static _keys = ['dataAreaId', 'LeaseId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Lease Id.
   */
  declare leaseId: DeserializedType<T, 'Edm.String'>;
  /**
   * Sys Created By.
   * @nullable
   */
  declare sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Modified By.
   * @nullable
   */
  declare sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Souce Key.
   */
  declare souceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Number Of Payments.
   */
  declare numberOfPayments: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Total Payment Amount.
   */
  declare totalPaymentAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Total Present Value.
   */
  declare totalPresentValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Payment Confirmed.
   * @nullable
   */
  declare paymentConfirmed?: NoYes | null;
  /**
   * Variable Payment Modified.
   * @nullable
   */
  declare variablePaymentModified?: NoYes | null;
  /**
   * Sys Modified Date Time.
   */
  declare sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Created On.
   */
  declare createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;

  constructor(_entityApi: AssetLeasePaymentScheduleBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface AssetLeasePaymentScheduleBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  leaseId: DeserializedType<T, 'Edm.String'>;
  sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  souceKey: DeserializedType<T, 'Edm.Int64'>;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  numberOfPayments: DeserializedType<T, 'Edm.Int32'>;
  totalPaymentAmount: DeserializedType<T, 'Edm.Decimal'>;
  totalPresentValue: DeserializedType<T, 'Edm.Decimal'>;
  paymentConfirmed?: NoYes | null;
  variablePaymentModified?: NoYes | null;
  sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
}
