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
import type { SalesLineBrBiEntitiesApi } from './SalesLineBrBiEntitiesApi';

/**
 * This class represents the entity "SalesLineBRBiEntities" of service "d365_metadata".
 */
export class SalesLineBrBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SalesLineBrBiEntitiesType<T>
{
  /**
   * Technical entity name for SalesLineBrBiEntities.
   */
  static override _entityName = 'SalesLineBRBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SalesLineBrBiEntities entity.
   */
  static _keys = ['dataAreaId', 'SourceKey'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Suframa Discount Br.
   */
  declare suframaDiscountBr: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax Service Code Br.
   * @nullable
   */
  declare taxServiceCodeBr?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: SalesLineBrBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface SalesLineBrBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  suframaDiscountBr: DeserializedType<T, 'Edm.Decimal'>;
  taxServiceCodeBr?: DeserializedType<T, 'Edm.String'> | null;
}
