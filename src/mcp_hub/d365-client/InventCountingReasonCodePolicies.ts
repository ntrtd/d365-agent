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
import type { InventCountingReasonCodePoliciesApi } from './InventCountingReasonCodePoliciesApi';
import { InventCountingReasonCodeType } from './InventCountingReasonCodeType';
import { Warehouses, WarehousesType } from './Warehouses';
import {
  ReleasedProductsV2,
  ReleasedProductsV2Type
} from './ReleasedProductsV2';

/**
 * This class represents the entity "InventCountingReasonCodePolicies" of service "d365_metadata".
 */
export class InventCountingReasonCodePolicies<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements InventCountingReasonCodePoliciesType<T>
{
  /**
   * Technical entity name for InventCountingReasonCodePolicies.
   */
  static override _entityName = 'InventCountingReasonCodePolicies';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the InventCountingReasonCodePolicies entity.
   */
  static _keys = ['dataAreaId', 'Name'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * Invent Counting Reason Code Type.
   * @nullable
   */
  declare inventCountingReasonCodeType?: InventCountingReasonCodeType | null;
  /**
   * One-to-one navigation property to the {@link Warehouses} entity.
   */
  declare warehouse?: Warehouses<T> | null;
  /**
   * One-to-one navigation property to the {@link ReleasedProductsV2} entity.
   */
  declare releasedProductV2?: ReleasedProductsV2<T> | null;

  constructor(_entityApi: InventCountingReasonCodePoliciesApi<T>) {
    super(_entityApi);
  }
}

export interface InventCountingReasonCodePoliciesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  name: DeserializedType<T, 'Edm.String'>;
  inventCountingReasonCodeType?: InventCountingReasonCodeType | null;
  warehouse?: WarehousesType<T> | null;
  releasedProductV2?: ReleasedProductsV2Type<T> | null;
}
