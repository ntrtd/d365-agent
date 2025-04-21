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
import type { RetailBarcodeMaskSegmentsApi } from './RetailBarcodeMaskSegmentsApi';
import { RetailBarcodeMaskCharacterTypeBase } from './RetailBarcodeMaskCharacterTypeBase';

/**
 * This class represents the entity "RetailBarcodeMaskSegments" of service "d365_metadata".
 */
export class RetailBarcodeMaskSegments<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailBarcodeMaskSegmentsType<T>
{
  /**
   * Technical entity name for RetailBarcodeMaskSegments.
   */
  static override _entityName = 'RetailBarcodeMaskSegments';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailBarcodeMaskSegments entity.
   */
  static _keys = ['dataAreaId', 'MaskId', 'SegmentNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Mask Id.
   */
  declare maskId: DeserializedType<T, 'Edm.String'>;
  /**
   * Segment Number.
   */
  declare segmentNumber: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Character.
   * @nullable
   */
  declare character?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Decimals.
   */
  declare decimals: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Character Type.
   * @nullable
   */
  declare characterType?: RetailBarcodeMaskCharacterTypeBase | null;
  /**
   * Length.
   */
  declare length: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: RetailBarcodeMaskSegmentsApi<T>) {
    super(_entityApi);
  }
}

export interface RetailBarcodeMaskSegmentsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  maskId: DeserializedType<T, 'Edm.String'>;
  segmentNumber: DeserializedType<T, 'Edm.Int32'>;
  character?: DeserializedType<T, 'Edm.String'> | null;
  decimals: DeserializedType<T, 'Edm.Int32'>;
  characterType?: RetailBarcodeMaskCharacterTypeBase | null;
  length: DeserializedType<T, 'Edm.Decimal'>;
}
