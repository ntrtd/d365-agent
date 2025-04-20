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
import type { TaxExciseTariffCodesApi } from './TaxExciseTariffCodesApi';

/**
 * This class represents the entity "TaxExciseTariffCodes" of service "d365_metadata".
 */
export class TaxExciseTariffCodes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements TaxExciseTariffCodesType<T>
{
  /**
   * Technical entity name for TaxExciseTariffCodes.
   */
  static override _entityName = 'TaxExciseTariffCodes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TaxExciseTariffCodes entity.
   */
  static _keys = ['dataAreaId', 'TariffCode'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Tariff Code.
   */
  declare tariffCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: TaxExciseTariffCodesApi<T>) {
    super(_entityApi);
  }
}

export interface TaxExciseTariffCodesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  tariffCode: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
