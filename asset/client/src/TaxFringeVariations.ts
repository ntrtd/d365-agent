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
import type { TaxFringeVariationsApi } from './TaxFringeVariationsApi';

/**
 * This class represents the entity "TaxFringeVariations" of service "d365_metadata".
 */
export class TaxFringeVariations<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements TaxFringeVariationsType<T>
{
  /**
   * Technical entity name for TaxFringeVariations.
   */
  static override _entityName = 'TaxFringeVariations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TaxFringeVariations entity.
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

  constructor(_entityApi: TaxFringeVariationsApi<T>) {
    super(_entityApi);
  }
}

export interface TaxFringeVariationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  reasonCode: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
