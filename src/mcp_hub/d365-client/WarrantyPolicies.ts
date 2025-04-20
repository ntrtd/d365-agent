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
import type { WarrantyPoliciesApi } from './WarrantyPoliciesApi';
import { WarrantyPolicyStatus } from './WarrantyPolicyStatus';

/**
 * This class represents the entity "WarrantyPolicies" of service "d365_metadata".
 */
export class WarrantyPolicies<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements WarrantyPoliciesType<T>
{
  /**
   * Technical entity name for WarrantyPolicies.
   */
  static override _entityName = 'WarrantyPolicies';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the WarrantyPolicies entity.
   */
  static _keys = ['dataAreaId', 'PolicyNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Policy Number.
   */
  declare policyNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Warranty Expiration Date.
   */
  declare warrantyExpirationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Warrantied Serial Number.
   * @nullable
   */
  declare warrantiedSerialNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Warrantied Fulfilled Date.
   */
  declare warrantiedFulfilledDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Warranty Item Id.
   * @nullable
   */
  declare warrantyItemId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Account.
   * @nullable
   */
  declare customerAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Warranty Inventory Lot Id.
   * @nullable
   */
  declare warrantyInventoryLotId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Warrantied Inventory Lot Id.
   * @nullable
   */
  declare warrantiedInventoryLotId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Warranty Effective Date.
   */
  declare warrantyEffectiveDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Notes.
   * @nullable
   */
  declare notes?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Warranty Sales Date.
   */
  declare warrantySalesDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Status.
   * @nullable
   */
  declare status?: WarrantyPolicyStatus | null;
  /**
   * Warrantied Item Id.
   * @nullable
   */
  declare warrantiedItemId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: WarrantyPoliciesApi<T>) {
    super(_entityApi);
  }
}

export interface WarrantyPoliciesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  policyNumber: DeserializedType<T, 'Edm.String'>;
  warrantyExpirationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  warrantiedSerialNumber?: DeserializedType<T, 'Edm.String'> | null;
  warrantiedFulfilledDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  warrantyItemId?: DeserializedType<T, 'Edm.String'> | null;
  customerAccount?: DeserializedType<T, 'Edm.String'> | null;
  warrantyInventoryLotId?: DeserializedType<T, 'Edm.String'> | null;
  warrantiedInventoryLotId?: DeserializedType<T, 'Edm.String'> | null;
  warrantyEffectiveDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  notes?: DeserializedType<T, 'Edm.String'> | null;
  warrantySalesDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  status?: WarrantyPolicyStatus | null;
  warrantiedItemId?: DeserializedType<T, 'Edm.String'> | null;
}
