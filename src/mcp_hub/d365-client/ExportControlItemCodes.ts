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
import type { ExportControlItemCodesApi } from './ExportControlItemCodesApi';

/**
 * This class represents the entity "ExportControlItemCodes" of service "d365_metadata".
 */
export class ExportControlItemCodes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ExportControlItemCodesType<T>
{
  /**
   * Technical entity name for ExportControlItemCodes.
   */
  static override _entityName = 'ExportControlItemCodes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ExportControlItemCodes entity.
   */
  static _keys = ['dataAreaId', 'Jurisdiction', 'ItemId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Jurisdiction.
   */
  declare jurisdiction: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Id.
   */
  declare itemId: DeserializedType<T, 'Edm.String'>;
  /**
   * De Minimis.
   */
  declare deMinimis: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Code.
   * @nullable
   */
  declare code?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ExportControlItemCodesApi<T>) {
    super(_entityApi);
  }
}

export interface ExportControlItemCodesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  jurisdiction: DeserializedType<T, 'Edm.String'>;
  itemId: DeserializedType<T, 'Edm.String'>;
  deMinimis: DeserializedType<T, 'Edm.Decimal'>;
  code?: DeserializedType<T, 'Edm.String'> | null;
}
