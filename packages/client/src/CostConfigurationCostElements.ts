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
import type { CostConfigurationCostElementsApi } from './CostConfigurationCostElementsApi';

/**
 * This class represents the entity "CostConfigurationCostElements" of service "d365_metadata".
 */
export class CostConfigurationCostElements<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CostConfigurationCostElementsType<T>
{
  /**
   * Technical entity name for CostConfigurationCostElements.
   */
  static override _entityName = 'CostConfigurationCostElements';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CostConfigurationCostElements entity.
   */
  static _keys = ['CostElementListName', 'CostElement'];
  /**
   * Cost Element List Name.
   */
  declare costElementListName: DeserializedType<T, 'Edm.String'>;
  /**
   * Cost Element.
   */
  declare costElement: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: CostConfigurationCostElementsApi<T>) {
    super(_entityApi);
  }
}

export interface CostConfigurationCostElementsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  costElementListName: DeserializedType<T, 'Edm.String'>;
  costElement: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
