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
import type { CdsInventoryOnHandRequestsApi } from './CdsInventoryOnHandRequestsApi';
import { NoYes } from './NoYes';
import {
  CdsInventoryOnHandEntries,
  CdsInventoryOnHandEntriesType
} from './CdsInventoryOnHandEntries';
import {
  CdsReleasedDistinctProducts,
  CdsReleasedDistinctProductsType
} from './CdsReleasedDistinctProducts';
import {
  DvReleasedDistinctProducts,
  DvReleasedDistinctProductsType
} from './DvReleasedDistinctProducts';

/**
 * This class represents the entity "CDSInventoryOnHandRequests" of service "d365_metadata".
 */
export class CdsInventoryOnHandRequests<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CdsInventoryOnHandRequestsType<T>
{
  /**
   * Technical entity name for CdsInventoryOnHandRequests.
   */
  static override _entityName = 'CDSInventoryOnHandRequests';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CdsInventoryOnHandRequests entity.
   */
  static _keys = ['dataAreaId', 'RequestId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Request Id.
   */
  declare requestId: DeserializedType<T, 'Edm.String'>;
  /**
   * Inventory Site Id.
   * @nullable
   */
  declare inventorySiteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Order Quantity.
   */
  declare orderQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Reference Number.
   * @nullable
   */
  declare referenceNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Number.
   * @nullable
   */
  declare productNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Creation Sequence Number.
   */
  declare lineCreationSequenceNumber: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Inventory Warehouse Id.
   * @nullable
   */
  declare inventoryWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Atp Calculation.
   * @nullable
   */
  declare isAtpCalculation?: NoYes | null;
  /**
   * One-to-many navigation property to the {@link CdsInventoryOnHandEntries} entity.
   */
  declare cdsInventoryOnHandEntries: CdsInventoryOnHandEntries<T>[];
  /**
   * One-to-one navigation property to the {@link CdsReleasedDistinctProducts} entity.
   */
  declare cdsReleasedDistinctProducts?: CdsReleasedDistinctProducts<T> | null;
  /**
   * One-to-one navigation property to the {@link DvReleasedDistinctProducts} entity.
   */
  declare dvReleasedDistinctProducts?: DvReleasedDistinctProducts<T> | null;

  constructor(_entityApi: CdsInventoryOnHandRequestsApi<T>) {
    super(_entityApi);
  }
}

export interface CdsInventoryOnHandRequestsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  requestId: DeserializedType<T, 'Edm.String'>;
  inventorySiteId?: DeserializedType<T, 'Edm.String'> | null;
  orderQuantity: DeserializedType<T, 'Edm.Decimal'>;
  referenceNumber?: DeserializedType<T, 'Edm.String'> | null;
  productNumber?: DeserializedType<T, 'Edm.String'> | null;
  lineCreationSequenceNumber: DeserializedType<T, 'Edm.Int32'>;
  inventoryWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  isAtpCalculation?: NoYes | null;
  cdsInventoryOnHandEntries: CdsInventoryOnHandEntriesType<T>[];
  cdsReleasedDistinctProducts?: CdsReleasedDistinctProductsType<T> | null;
  dvReleasedDistinctProducts?: DvReleasedDistinctProductsType<T> | null;
}
