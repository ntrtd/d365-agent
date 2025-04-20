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
import type { RetailBarcodeMasksApi } from './RetailBarcodeMasksApi';
import { BarcodeType } from './BarcodeType';
import { RetailBarcodeMaskTypeBase } from './RetailBarcodeMaskTypeBase';

/**
 * This class represents the entity "RetailBarcodeMasks" of service "d365_metadata".
 */
export class RetailBarcodeMasks<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements RetailBarcodeMasksType<T>
{
  /**
   * Technical entity name for RetailBarcodeMasks.
   */
  static override _entityName = 'RetailBarcodeMasks';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailBarcodeMasks entity.
   */
  static _keys = ['dataAreaId', 'MaskId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Mask Id.
   */
  declare maskId: DeserializedType<T, 'Edm.String'>;
  /**
   * Mask.
   * @nullable
   */
  declare mask?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Prefix.
   * @nullable
   */
  declare prefix?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Symbology.
   * @nullable
   */
  declare symbology?: BarcodeType | null;
  /**
   * Type.
   * @nullable
   */
  declare type?: RetailBarcodeMaskTypeBase | null;

  constructor(_entityApi: RetailBarcodeMasksApi<T>) {
    super(_entityApi);
  }
}

export interface RetailBarcodeMasksType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  maskId: DeserializedType<T, 'Edm.String'>;
  mask?: DeserializedType<T, 'Edm.String'> | null;
  prefix?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  symbology?: BarcodeType | null;
  type?: RetailBarcodeMaskTypeBase | null;
}
