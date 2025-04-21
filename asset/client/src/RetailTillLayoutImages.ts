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
import type { RetailTillLayoutImagesApi } from './RetailTillLayoutImagesApi';

/**
 * This class represents the entity "RetailTillLayoutImages" of service "d365_metadata".
 */
export class RetailTillLayoutImages<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailTillLayoutImagesType<T>
{
  /**
   * Technical entity name for RetailTillLayoutImages.
   */
  static override _entityName = 'RetailTillLayoutImages';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailTillLayoutImages entity.
   */
  static _keys = ['LayoutId', 'PictureId', 'ZoneId', 'LayoutSizeId'];
  /**
   * Layout Id.
   */
  declare layoutId: DeserializedType<T, 'Edm.String'>;
  /**
   * Picture Id.
   */
  declare pictureId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Zone Id.
   */
  declare zoneId: DeserializedType<T, 'Edm.String'>;
  /**
   * Layout Size Id.
   */
  declare layoutSizeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Zone Name.
   * @nullable
   */
  declare zoneName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Picture.
   * @nullable
   */
  declare picture?: DeserializedType<T, 'Edm.Binary'> | null;

  constructor(_entityApi: RetailTillLayoutImagesApi<T>) {
    super(_entityApi);
  }
}

export interface RetailTillLayoutImagesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  layoutId: DeserializedType<T, 'Edm.String'>;
  pictureId: DeserializedType<T, 'Edm.Int32'>;
  zoneId: DeserializedType<T, 'Edm.String'>;
  layoutSizeId: DeserializedType<T, 'Edm.String'>;
  zoneName?: DeserializedType<T, 'Edm.String'> | null;
  picture?: DeserializedType<T, 'Edm.Binary'> | null;
}
