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
import type { CostConfigurationCostElementListsApi } from './CostConfigurationCostElementListsApi';

/**
 * This class represents the entity "CostConfigurationCostElementLists" of service "d365_metadata".
 */
export class CostConfigurationCostElementLists<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CostConfigurationCostElementListsType<T>
{
  /**
   * Technical entity name for CostConfigurationCostElementLists.
   */
  static override _entityName = 'CostConfigurationCostElementLists';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CostConfigurationCostElementLists entity.
   */
  static _keys = ['Name'];
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: CostConfigurationCostElementListsApi<T>) {
    super(_entityApi);
  }
}

export interface CostConfigurationCostElementListsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  name: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
