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
import type { CdsPurchaseOrderSoftDeletedLinesApi } from './CdsPurchaseOrderSoftDeletedLinesApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "CDSPurchaseOrderSoftDeletedLines" of service "d365_metadata".
 */
export class CdsPurchaseOrderSoftDeletedLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CdsPurchaseOrderSoftDeletedLinesType<T>
{
  /**
   * Technical entity name for CdsPurchaseOrderSoftDeletedLines.
   */
  static override _entityName = 'CDSPurchaseOrderSoftDeletedLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CdsPurchaseOrderSoftDeletedLines entity.
   */
  static _keys = ['dataAreaId', 'PurchaseOrderNumber', 'LineNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Purchase Order Number.
   */
  declare purchaseOrderNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Is Deleted.
   * @nullable
   */
  declare isDeleted?: NoYes | null;

  constructor(_entityApi: CdsPurchaseOrderSoftDeletedLinesApi<T>) {
    super(_entityApi);
  }
}

export interface CdsPurchaseOrderSoftDeletedLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  purchaseOrderNumber: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Int64'>;
  isDeleted?: NoYes | null;
}
