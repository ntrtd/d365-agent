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
import type { TaxPayAsYouGoVariationsApi } from './TaxPayAsYouGoVariationsApi';

/**
 * This class represents the entity "TaxPayAsYouGoVariations" of service "d365_metadata".
 */
export class TaxPayAsYouGoVariations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements TaxPayAsYouGoVariationsType<T>
{
  /**
   * Technical entity name for TaxPayAsYouGoVariations.
   */
  static override _entityName = 'TaxPayAsYouGoVariations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TaxPayAsYouGoVariations entity.
   */
  static _keys = ['dataAreaId', 'ReasonCode'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Reason Code.
   */
  declare reasonCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: TaxPayAsYouGoVariationsApi<T>) {
    super(_entityApi);
  }
}

export interface TaxPayAsYouGoVariationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  reasonCode: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
