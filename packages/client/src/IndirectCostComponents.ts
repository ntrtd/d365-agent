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
import type { IndirectCostComponentsApi } from './IndirectCostComponentsApi';

/**
 * This class represents the entity "IndirectCostComponents" of service "d365_metadata".
 */
export class IndirectCostComponents<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements IndirectCostComponentsType<T>
{
  /**
   * Technical entity name for IndirectCostComponents.
   */
  static override _entityName = 'IndirectCostComponents';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the IndirectCostComponents entity.
   */
  static _keys = ['dataAreaId', 'ComponentId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Component Id.
   */
  declare componentId: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Category.
   * @nullable
   */
  declare category?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: IndirectCostComponentsApi<T>) {
    super(_entityApi);
  }
}

export interface IndirectCostComponentsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  componentId: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  category?: DeserializedType<T, 'Edm.String'> | null;
}
