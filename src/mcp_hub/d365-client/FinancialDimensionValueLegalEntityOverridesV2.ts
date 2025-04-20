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
import type { FinancialDimensionValueLegalEntityOverridesV2Api } from './FinancialDimensionValueLegalEntityOverridesV2Api';
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
 * This class represents the entity "FinancialDimensionValueLegalEntityOverridesV2" of service "d365_metadata".
 */
export class FinancialDimensionValueLegalEntityOverridesV2<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements FinancialDimensionValueLegalEntityOverridesV2Type<T>
{
  /**
   * Technical entity name for FinancialDimensionValueLegalEntityOverridesV2.
   */
  static override _entityName = 'FinancialDimensionValueLegalEntityOverridesV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the FinancialDimensionValueLegalEntityOverridesV2 entity.
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
   * One-to-one navigation property to the {@link OfficeAddinLegalEntities} entity.
   */
  declare financialDimensionValueLegalEntityOverrideEntityRelatedRoleLegalEntity?: OfficeAddinLegalEntities<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionAttributes} entity.
   */
  declare financialDimensionValueLegalEntityOverrideV2EntityRelatedRoleFinancialDimension?: DimensionAttributes<T> | null;

  constructor(_entityApi: FinancialDimensionValueLegalEntityOverridesV2Api<T>) {
    super(_entityApi);
  }
}

export interface FinancialDimensionValueLegalEntityOverridesV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  financialDimension: DeserializedType<T, 'Edm.String'>;
  dimensionValue: DeserializedType<T, 'Edm.String'>;
  legalEntityId: DeserializedType<T, 'Edm.String'>;
  isSuspended?: NoYes | null;
  activeFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  activeTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  financialDimensionValueLegalEntityOverrideEntityRelatedRoleLegalEntity?: OfficeAddinLegalEntitiesType<T> | null;
  financialDimensionValueLegalEntityOverrideV2EntityRelatedRoleFinancialDimension?: DimensionAttributesType<T> | null;
}
