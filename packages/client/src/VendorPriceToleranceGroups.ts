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
import type { VendorPriceToleranceGroupsApi } from './VendorPriceToleranceGroupsApi';
import {
  VendInvoicePriceTolerances,
  VendInvoicePriceTolerancesType
} from './VendInvoicePriceTolerances';

/**
 * This class represents the entity "VendorPriceToleranceGroups" of service "d365_metadata".
 */
export class VendorPriceToleranceGroups<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements VendorPriceToleranceGroupsType<T>
{
  /**
   * Technical entity name for VendorPriceToleranceGroups.
   */
  static override _entityName = 'VendorPriceToleranceGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the VendorPriceToleranceGroups entity.
   */
  static _keys = ['dataAreaId', 'GroupId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Group Id.
   */
  declare groupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link VendInvoicePriceTolerances} entity.
   */
  declare vendInvoicePriceTolerance: VendInvoicePriceTolerances<T>[];

  constructor(_entityApi: VendorPriceToleranceGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface VendorPriceToleranceGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  groupId: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  vendInvoicePriceTolerance: VendInvoicePriceTolerancesType<T>[];
}
