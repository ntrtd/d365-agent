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
import type { CostConfigurationPriceListsApi } from './CostConfigurationPriceListsApi';
import { CostConfigurationCostingType } from './CostConfigurationCostingType';
import { CostConfigurationPriceType } from './CostConfigurationPriceType';

/**
 * This class represents the entity "CostConfigurationPriceLists" of service "d365_metadata".
 */
export class CostConfigurationPriceLists<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CostConfigurationPriceListsType<T>
{
  /**
   * Technical entity name for CostConfigurationPriceLists.
   */
  static override _entityName = 'CostConfigurationPriceLists';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CostConfigurationPriceLists entity.
   */
  static _keys = ['Name'];
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * Costing Type.
   * @nullable
   */
  declare costingType?: CostConfigurationCostingType | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Price Type.
   * @nullable
   */
  declare priceType?: CostConfigurationPriceType | null;

  constructor(_entityApi: CostConfigurationPriceListsApi<T>) {
    super(_entityApi);
  }
}

export interface CostConfigurationPriceListsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  name: DeserializedType<T, 'Edm.String'>;
  costingType?: CostConfigurationCostingType | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  priceType?: CostConfigurationPriceType | null;
}
