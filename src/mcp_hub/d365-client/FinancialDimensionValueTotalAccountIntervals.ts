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
import type { FinancialDimensionValueTotalAccountIntervalsApi } from './FinancialDimensionValueTotalAccountIntervalsApi';
import { NoYes } from './NoYes';
import {
  OfficeAddinLegalEntities,
  OfficeAddinLegalEntitiesType
} from './OfficeAddinLegalEntities';
import {
  DimensionAttributes,
  DimensionAttributesType
} from './DimensionAttributes';

/**
 * This class represents the entity "FinancialDimensionValueTotalAccountIntervals" of service "d365_metadata".
 */
export class FinancialDimensionValueTotalAccountIntervals<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements FinancialDimensionValueTotalAccountIntervalsType<T>
{
  /**
   * Technical entity name for FinancialDimensionValueTotalAccountIntervals.
   */
  static override _entityName = 'FinancialDimensionValueTotalAccountIntervals';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the FinancialDimensionValueTotalAccountIntervals entity.
   */
  static _keys = [
    'FinancialDimension',
    'DimensionValue',
    'FromValue',
    'ToValue'
  ];
  /**
   * Financial Dimension.
   */
  declare financialDimension: DeserializedType<T, 'Edm.String'>;
  /**
   * Dimension Value.
   */
  declare dimensionValue: DeserializedType<T, 'Edm.String'>;
  /**
   * From Value.
   */
  declare fromValue: DeserializedType<T, 'Edm.String'>;
  /**
   * To Value.
   */
  declare toValue: DeserializedType<T, 'Edm.String'>;
  /**
   * Legal Entity Id.
   * @nullable
   */
  declare legalEntityId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invert Total Sign.
   * @nullable
   */
  declare invertTotalSign?: NoYes | null;
  /**
   * One-to-one navigation property to the {@link OfficeAddinLegalEntities} entity.
   */
  declare financialDimensionValueTotalAccountIntervalEntityRelatedRoleOfficeAddinLegalEntityEntity?: OfficeAddinLegalEntities<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionAttributes} entity.
   */
  declare financialDimensionValueTotalAccountIntervalEntityRelatedRoleDimensionAttributeEntity?: DimensionAttributes<T> | null;

  constructor(_entityApi: FinancialDimensionValueTotalAccountIntervalsApi<T>) {
    super(_entityApi);
  }
}

export interface FinancialDimensionValueTotalAccountIntervalsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  financialDimension: DeserializedType<T, 'Edm.String'>;
  dimensionValue: DeserializedType<T, 'Edm.String'>;
  fromValue: DeserializedType<T, 'Edm.String'>;
  toValue: DeserializedType<T, 'Edm.String'>;
  legalEntityId?: DeserializedType<T, 'Edm.String'> | null;
  invertTotalSign?: NoYes | null;
  financialDimensionValueTotalAccountIntervalEntityRelatedRoleOfficeAddinLegalEntityEntity?: OfficeAddinLegalEntitiesType<T> | null;
  financialDimensionValueTotalAccountIntervalEntityRelatedRoleDimensionAttributeEntity?: DimensionAttributesType<T> | null;
}
