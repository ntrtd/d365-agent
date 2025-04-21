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
import type { CostConfigurationPriceListCostingVersionsApi } from './CostConfigurationPriceListCostingVersionsApi';
import { CostingVersions, CostingVersionsType } from './CostingVersions';

/**
 * This class represents the entity "CostConfigurationPriceListCostingVersions" of service "d365_metadata".
 */
export class CostConfigurationPriceListCostingVersions<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CostConfigurationPriceListCostingVersionsType<T>
{
  /**
   * Technical entity name for CostConfigurationPriceListCostingVersions.
   */
  static override _entityName = 'CostConfigurationPriceListCostingVersions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CostConfigurationPriceListCostingVersions entity.
   */
  static _keys = ['VersionId', 'LegalEntity', 'CostConfigurationPriceListName'];
  /**
   * Version Id.
   */
  declare versionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Legal Entity.
   */
  declare legalEntity: DeserializedType<T, 'Edm.String'>;
  /**
   * Cost Configuration Price List Name.
   */
  declare costConfigurationPriceListName: DeserializedType<T, 'Edm.String'>;
  /**
   * One-to-one navigation property to the {@link CostingVersions} entity.
   */
  declare costingVersion?: CostingVersions<T> | null;

  constructor(_entityApi: CostConfigurationPriceListCostingVersionsApi<T>) {
    super(_entityApi);
  }
}

export interface CostConfigurationPriceListCostingVersionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  versionId: DeserializedType<T, 'Edm.String'>;
  legalEntity: DeserializedType<T, 'Edm.String'>;
  costConfigurationPriceListName: DeserializedType<T, 'Edm.String'>;
  costingVersion?: CostingVersionsType<T> | null;
}
