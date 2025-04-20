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
import type { RetailImagesApi } from './RetailImagesApi';
import {
  RetailTillLayoutImageZones,
  RetailTillLayoutImageZonesType
} from './RetailTillLayoutImageZones';

/**
 * This class represents the entity "RetailImages" of service "d365_metadata".
 */
export class RetailImages<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements RetailImagesType<T>
{
  /**
   * Technical entity name for RetailImages.
   */
  static override _entityName = 'RetailImages';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailImages entity.
   */
  static _keys = ['PictureId'];
  /**
   * Picture Id.
   */
  declare pictureId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Picture.
   * @nullable
   */
  declare picture?: DeserializedType<T, 'Edm.Binary'> | null;
  /**
   * One-to-many navigation property to the {@link RetailTillLayoutImageZones} entity.
   */
  declare retailTillLayoutImageZone: RetailTillLayoutImageZones<T>[];

  constructor(_entityApi: RetailImagesApi<T>) {
    super(_entityApi);
  }
}

export interface RetailImagesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  pictureId: DeserializedType<T, 'Edm.Int32'>;
  picture?: DeserializedType<T, 'Edm.Binary'> | null;
  retailTillLayoutImageZone: RetailTillLayoutImageZonesType<T>[];
}
