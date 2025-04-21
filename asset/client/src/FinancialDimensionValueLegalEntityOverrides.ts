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
import type { FinancialDimensionValueLegalEntityOverridesApi } from './FinancialDimensionValueLegalEntityOverridesApi';
import { NoYes } from './NoYes';
import {
  DimensionAttributes,
  DimensionAttributesType
} from './DimensionAttributes';
import { Workers, WorkersType } from './Workers';

/**
 * This class represents the entity "FinancialDimensionValueLegalEntityOverrides" of service "d365_metadata".
 */
export class FinancialDimensionValueLegalEntityOverrides<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements FinancialDimensionValueLegalEntityOverridesType<T>
{
  /**
   * Technical entity name for FinancialDimensionValueLegalEntityOverrides.
   */
  static override _entityName = 'FinancialDimensionValueLegalEntityOverrides';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the FinancialDimensionValueLegalEntityOverrides entity.
   */
  static _keys = ['FinancialDimension', 'DimensionValue', 'LegalEntityId'];
  /**
   * Financial Dimension.
   */
  declare financialDimension: DeserializedType<T, 'Edm.String'>;
  /**
   * Dimension Value.
   */
  declare dimensionValue: DeserializedType<T, 'Edm.String'>;
  /**
   * Legal Entity Id.
   */
  declare legalEntityId: DeserializedType<T, 'Edm.String'>;
  /**
   * Is Suspended.
   * @nullable
   */
  declare isSuspended?: NoYes | null;
  /**
   * Active From.
   */
  declare activeFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Active To.
   */
  declare activeTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Owner.
   * @nullable
   */
  declare owner?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link DimensionAttributes} entity.
   */
  declare financialDimensionValueLegalEntityOverrideEntityRelatedRoleFinancialDimension?: DimensionAttributes<T> | null;
  /**
   * One-to-one navigation property to the {@link Workers} entity.
   */
  declare worker?: Workers<T> | null;

  constructor(_entityApi: FinancialDimensionValueLegalEntityOverridesApi<T>) {
    super(_entityApi);
  }
}

export interface FinancialDimensionValueLegalEntityOverridesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  financialDimension: DeserializedType<T, 'Edm.String'>;
  dimensionValue: DeserializedType<T, 'Edm.String'>;
  legalEntityId: DeserializedType<T, 'Edm.String'>;
  isSuspended?: NoYes | null;
  activeFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  activeTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  owner?: DeserializedType<T, 'Edm.String'> | null;
  financialDimensionValueLegalEntityOverrideEntityRelatedRoleFinancialDimension?: DimensionAttributesType<T> | null;
  worker?: WorkersType<T> | null;
}
