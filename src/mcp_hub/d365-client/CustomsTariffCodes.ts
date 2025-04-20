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
import type { CustomsTariffCodesApi } from './CustomsTariffCodesApi';
import { DirectionIn } from './DirectionIn';

/**
 * This class represents the entity "CustomsTariffCodes" of service "d365_metadata".
 */
export class CustomsTariffCodes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CustomsTariffCodesType<T>
{
  /**
   * Technical entity name for CustomsTariffCodes.
   */
  static override _entityName = 'CustomsTariffCodes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CustomsTariffCodes entity.
   */
  static _keys = ['dataAreaId', 'TariffCode', 'Direction'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Tariff Code.
   */
  declare tariffCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Direction.
   * @nullable
   */
  declare direction?: DirectionIn | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: CustomsTariffCodesApi<T>) {
    super(_entityApi);
  }
}

export interface CustomsTariffCodesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  tariffCode: DeserializedType<T, 'Edm.String'>;
  direction?: DirectionIn | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
