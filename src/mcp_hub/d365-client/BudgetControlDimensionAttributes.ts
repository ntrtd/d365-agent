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
import type { BudgetControlDimensionAttributesApi } from './BudgetControlDimensionAttributesApi';
import { BudgetControlConfigurationStatus } from './BudgetControlConfigurationStatus';
import {
  BudgetControlConfigurations,
  BudgetControlConfigurationsType
} from './BudgetControlConfigurations';

/**
 * This class represents the entity "BudgetControlDimensionAttributes" of service "d365_metadata".
 */
export class BudgetControlDimensionAttributes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BudgetControlDimensionAttributesType<T>
{
  /**
   * Technical entity name for BudgetControlDimensionAttributes.
   */
  static override _entityName = 'BudgetControlDimensionAttributes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BudgetControlDimensionAttributes entity.
   */
  static _keys = [
    'dataAreaId',
    'LegalEntityId',
    'Status',
    'DimensionAttributeId'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Legal Entity Id.
   */
  declare legalEntityId: DeserializedType<T, 'Edm.String'>;
  /**
   * Status.
   * @nullable
   */
  declare status?: BudgetControlConfigurationStatus | null;
  /**
   * Dimension Attribute Id.
   */
  declare dimensionAttributeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Position.
   */
  declare position: DeserializedType<T, 'Edm.Int32'>;
  /**
   * In Use By.
   * @nullable
   */
  declare inUseBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link BudgetControlConfigurations} entity.
   */
  declare budgetControlConfigurations?: BudgetControlConfigurations<T> | null;

  constructor(_entityApi: BudgetControlDimensionAttributesApi<T>) {
    super(_entityApi);
  }
}

export interface BudgetControlDimensionAttributesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  legalEntityId: DeserializedType<T, 'Edm.String'>;
  status?: BudgetControlConfigurationStatus | null;
  dimensionAttributeId: DeserializedType<T, 'Edm.String'>;
  position: DeserializedType<T, 'Edm.Int32'>;
  inUseBy?: DeserializedType<T, 'Edm.String'> | null;
  budgetControlConfigurations?: BudgetControlConfigurationsType<T> | null;
}
