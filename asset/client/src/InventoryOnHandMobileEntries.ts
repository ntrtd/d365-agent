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
import type { InventoryOnHandMobileEntriesApi } from './InventoryOnHandMobileEntriesApi';
import { InventInventoryOnHandMobileAggregateType } from './InventInventoryOnHandMobileAggregateType';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "InventoryOnHandMobileEntries" of service "d365_metadata".
 */
export class InventoryOnHandMobileEntries<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements InventoryOnHandMobileEntriesType<T>
{
  /**
   * Technical entity name for InventoryOnHandMobileEntries.
   */
  static override _entityName = 'InventoryOnHandMobileEntries';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the InventoryOnHandMobileEntries entity.
   */
  static _keys = ['ProductNumber'];
  /**
   * Product Number.
   */
  declare productNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Reserved Physical.
   */
  declare reservedPhysical: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Avail Physical.
   */
  declare availPhysical: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Aggregate Type.
   * @nullable
   */
  declare aggregateType?: InventInventoryOnHandMobileAggregateType | null;
  /**
   * Request Id.
   * @nullable
   */
  declare requestId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Total Available.
   */
  declare totalAvailable: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Whs Item.
   * @nullable
   */
  declare isWhsItem?: NoYes | null;
  /**
   * Invent Batch Id.
   * @nullable
   */
  declare inventBatchId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Color Id.
   * @nullable
   */
  declare inventColorId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Size Id.
   * @nullable
   */
  declare inventSizeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * W Ms Location Id.
   * @nullable
   */
  declare wMsLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Location Id.
   * @nullable
   */
  declare inventLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Version Id.
   * @nullable
   */
  declare inventVersionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Style Id.
   * @nullable
   */
  declare inventStyleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * On Order.
   */
  declare onOrder: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Physical Invent.
   */
  declare physicalInvent: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Invent Site Id.
   * @nullable
   */
  declare inventSiteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Status Id.
   * @nullable
   */
  declare inventStatusId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Config Id.
   * @nullable
   */
  declare configId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: InventoryOnHandMobileEntriesApi<T>) {
    super(_entityApi);
  }
}

export interface InventoryOnHandMobileEntriesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  productNumber: DeserializedType<T, 'Edm.String'>;
  reservedPhysical: DeserializedType<T, 'Edm.Decimal'>;
  availPhysical: DeserializedType<T, 'Edm.Decimal'>;
  aggregateType?: InventInventoryOnHandMobileAggregateType | null;
  requestId?: DeserializedType<T, 'Edm.String'> | null;
  totalAvailable: DeserializedType<T, 'Edm.Decimal'>;
  isWhsItem?: NoYes | null;
  inventBatchId?: DeserializedType<T, 'Edm.String'> | null;
  inventColorId?: DeserializedType<T, 'Edm.String'> | null;
  inventSizeId?: DeserializedType<T, 'Edm.String'> | null;
  wMsLocationId?: DeserializedType<T, 'Edm.String'> | null;
  inventLocationId?: DeserializedType<T, 'Edm.String'> | null;
  inventVersionId?: DeserializedType<T, 'Edm.String'> | null;
  inventStyleId?: DeserializedType<T, 'Edm.String'> | null;
  onOrder: DeserializedType<T, 'Edm.Decimal'>;
  physicalInvent: DeserializedType<T, 'Edm.Decimal'>;
  inventSiteId?: DeserializedType<T, 'Edm.String'> | null;
  inventStatusId?: DeserializedType<T, 'Edm.String'> | null;
  configId?: DeserializedType<T, 'Edm.String'> | null;
}
