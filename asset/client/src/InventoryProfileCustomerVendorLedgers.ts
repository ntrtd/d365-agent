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
import type { InventoryProfileCustomerVendorLedgersApi } from './InventoryProfileCustomerVendorLedgersApi';
import { InventProfileTypeAllRu } from './InventProfileTypeAllRu';
import { InventProfileTypeRu } from './InventProfileTypeRu';

/**
 * This class represents the entity "InventoryProfileCustomerVendorLedgers" of service "d365_metadata".
 */
export class InventoryProfileCustomerVendorLedgers<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements InventoryProfileCustomerVendorLedgersType<T>
{
  /**
   * Technical entity name for InventoryProfileCustomerVendorLedgers.
   */
  static override _entityName = 'InventoryProfileCustomerVendorLedgers';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the InventoryProfileCustomerVendorLedgers entity.
   */
  static _keys = [
    'dataAreaId',
    'InventoryProfileRelation',
    'InventoryProfileId',
    'KindOfActivity'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Inventory Profile Relation.
   * @nullable
   */
  declare inventoryProfileRelation?: InventProfileTypeAllRu | null;
  /**
   * Inventory Profile Id.
   */
  declare inventoryProfileId: DeserializedType<T, 'Edm.String'>;
  /**
   * Kind Of Activity.
   * @nullable
   */
  declare kindOfActivity?: InventProfileTypeRu | null;
  /**
   * Customer Posting Profile.
   * @nullable
   */
  declare customerPostingProfile?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vendor Posting Profile.
   * @nullable
   */
  declare vendorPostingProfile?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: InventoryProfileCustomerVendorLedgersApi<T>) {
    super(_entityApi);
  }
}

export interface InventoryProfileCustomerVendorLedgersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  inventoryProfileRelation?: InventProfileTypeAllRu | null;
  inventoryProfileId: DeserializedType<T, 'Edm.String'>;
  kindOfActivity?: InventProfileTypeRu | null;
  customerPostingProfile?: DeserializedType<T, 'Edm.String'> | null;
  vendorPostingProfile?: DeserializedType<T, 'Edm.String'> | null;
}
