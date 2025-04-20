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
import type { WarrantiedRelationSalesLinesApi } from './WarrantiedRelationSalesLinesApi';
import { WarrantiedRelationOrderType } from './WarrantiedRelationOrderType';
import { WarrantiedRelation } from './WarrantiedRelation';

/**
 * This class represents the entity "WarrantiedRelationSalesLines" of service "d365_metadata".
 */
export class WarrantiedRelationSalesLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements WarrantiedRelationSalesLinesType<T>
{
  /**
   * Technical entity name for WarrantiedRelationSalesLines.
   */
  static override _entityName = 'WarrantiedRelationSalesLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the WarrantiedRelationSalesLines entity.
   */
  static _keys = [
    'dataAreaId',
    'WarrantiedOrderType',
    'WarrantySalesId',
    'WarrantySalesLineNumber',
    'WarrantiedSerialNumber',
    'WarrantyOrderType',
    'WarrantiedSalesId',
    'WarrantiedSalesLineNumber'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Warrantied Order Type.
   * @nullable
   */
  declare warrantiedOrderType?: WarrantiedRelationOrderType | null;
  /**
   * Warranty Sales Id.
   */
  declare warrantySalesId: DeserializedType<T, 'Edm.String'>;
  /**
   * Warranty Sales Line Number.
   */
  declare warrantySalesLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Warrantied Serial Number.
   */
  declare warrantiedSerialNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Warranty Order Type.
   * @nullable
   */
  declare warrantyOrderType?: WarrantiedRelationOrderType | null;
  /**
   * Warrantied Sales Id.
   */
  declare warrantiedSalesId: DeserializedType<T, 'Edm.String'>;
  /**
   * Warrantied Sales Line Number.
   */
  declare warrantiedSalesLineNumber: DeserializedType<T, 'Edm.Decimal'>;
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
   * Relation.
   * @nullable
   */
  declare relation?: WarrantiedRelation | null;
  /**
   * Warrantied Item Id.
   * @nullable
   */
  declare warrantiedItemId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: WarrantiedRelationSalesLinesApi<T>) {
    super(_entityApi);
  }
}

export interface WarrantiedRelationSalesLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  warrantiedOrderType?: WarrantiedRelationOrderType | null;
  warrantySalesId: DeserializedType<T, 'Edm.String'>;
  warrantySalesLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  warrantiedSerialNumber: DeserializedType<T, 'Edm.String'>;
  warrantyOrderType?: WarrantiedRelationOrderType | null;
  warrantiedSalesId: DeserializedType<T, 'Edm.String'>;
  warrantiedSalesLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  warrantyItemId?: DeserializedType<T, 'Edm.String'> | null;
  customerAccount?: DeserializedType<T, 'Edm.String'> | null;
  warrantyInventoryLotId?: DeserializedType<T, 'Edm.String'> | null;
  warrantiedInventoryLotId?: DeserializedType<T, 'Edm.String'> | null;
  relation?: WarrantiedRelation | null;
  warrantiedItemId?: DeserializedType<T, 'Edm.String'> | null;
}
