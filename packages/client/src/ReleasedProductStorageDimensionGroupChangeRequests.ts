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
import type { ReleasedProductStorageDimensionGroupChangeRequestsApi } from './ReleasedProductStorageDimensionGroupChangeRequestsApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "ReleasedProductStorageDimensionGroupChangeRequests" of service "d365_metadata".
 */
export class ReleasedProductStorageDimensionGroupChangeRequests<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ReleasedProductStorageDimensionGroupChangeRequestsType<T>
{
  /**
   * Technical entity name for ReleasedProductStorageDimensionGroupChangeRequests.
   */
  static override _entityName =
    'ReleasedProductStorageDimensionGroupChangeRequests';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ReleasedProductStorageDimensionGroupChangeRequests entity.
   */
  static _keys = ['dataAreaId', 'ItemNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Number.
   */
  declare itemNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Storage Dimension Group Name.
   * @nullable
   */
  declare storageDimensionGroupName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inventory Reservation Hierarchy Name.
   * @nullable
   */
  declare inventoryReservationHierarchyName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Is Product Updated.
   * @nullable
   */
  declare isProductUpdated?: NoYes | null;
  /**
   * Catch Weight Item Handling Policy Name.
   * @nullable
   */
  declare catchWeightItemHandlingPolicyName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Unit Of Measure Conversion Sequence Group Id.
   * @nullable
   */
  declare unitOfMeasureConversionSequenceGroupId?: DeserializedType<
    T,
    'Edm.String'
  > | null;

  constructor(
    _entityApi: ReleasedProductStorageDimensionGroupChangeRequestsApi<T>
  ) {
    super(_entityApi);
  }
}

export interface ReleasedProductStorageDimensionGroupChangeRequestsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  itemNumber: DeserializedType<T, 'Edm.String'>;
  storageDimensionGroupName?: DeserializedType<T, 'Edm.String'> | null;
  inventoryReservationHierarchyName?: DeserializedType<T, 'Edm.String'> | null;
  isProductUpdated?: NoYes | null;
  catchWeightItemHandlingPolicyName?: DeserializedType<T, 'Edm.String'> | null;
  unitOfMeasureConversionSequenceGroupId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
}
