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
import type { LtmInvSalesPointIdRelationsApi } from './LtmInvSalesPointIdRelationsApi';

/**
 * This class represents the entity "LTMInvSalesPointIdRelations" of service "d365_metadata".
 */
export class LtmInvSalesPointIdRelations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LtmInvSalesPointIdRelationsType<T>
{
  /**
   * Technical entity name for LtmInvSalesPointIdRelations.
   */
  static override _entityName = 'LTMInvSalesPointIdRelations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LtmInvSalesPointIdRelations entity.
   */
  static _keys = ['dataAreaId', 'PSSalesPointId', 'InvSalesPointId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Ps Sales Point Id.
   */
  declare psSalesPointId: DeserializedType<T, 'Edm.String'>;
  /**
   * Inv Sales Point Id.
   */
  declare invSalesPointId: DeserializedType<T, 'Edm.String'>;

  constructor(_entityApi: LtmInvSalesPointIdRelationsApi<T>) {
    super(_entityApi);
  }
}

export interface LtmInvSalesPointIdRelationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  psSalesPointId: DeserializedType<T, 'Edm.String'>;
  invSalesPointId: DeserializedType<T, 'Edm.String'>;
}
