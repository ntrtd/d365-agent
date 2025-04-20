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
import type { WarehouseBatchDetailsCapturePoliciesApi } from './WarehouseBatchDetailsCapturePoliciesApi';
import { WhsVendBatchDetailDisplayPolicy } from './WhsVendBatchDetailDisplayPolicy';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "WarehouseBatchDetailsCapturePolicies" of service "d365_metadata".
 */
export class WarehouseBatchDetailsCapturePolicies<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements WarehouseBatchDetailsCapturePoliciesType<T>
{
  /**
   * Technical entity name for WarehouseBatchDetailsCapturePolicies.
   */
  static override _entityName = 'WarehouseBatchDetailsCapturePolicies';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the WarehouseBatchDetailsCapturePolicies entity.
   */
  static _keys = ['dataAreaId', 'BatchDetailsCapturePolicy'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Batch Details Capture Policy.
   */
  declare batchDetailsCapturePolicy: DeserializedType<T, 'Edm.String'>;
  /**
   * Vendor Batch Details Display Policy.
   * @nullable
   */
  declare vendorBatchDetailsDisplayPolicy?: WhsVendBatchDetailDisplayPolicy | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Calculate Batch Date Values.
   * @nullable
   */
  declare calculateBatchDateValues?: NoYes | null;

  constructor(_entityApi: WarehouseBatchDetailsCapturePoliciesApi<T>) {
    super(_entityApi);
  }
}

export interface WarehouseBatchDetailsCapturePoliciesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  batchDetailsCapturePolicy: DeserializedType<T, 'Edm.String'>;
  vendorBatchDetailsDisplayPolicy?: WhsVendBatchDetailDisplayPolicy | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  calculateBatchDateValues?: NoYes | null;
}
