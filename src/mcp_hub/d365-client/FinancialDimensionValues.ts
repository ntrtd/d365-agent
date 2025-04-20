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
import type { FinancialDimensionValuesApi } from './FinancialDimensionValuesApi';
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
 * This class represents the entity "FinancialDimensionValues" of service "d365_metadata".
 */
export class FinancialDimensionValues<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements FinancialDimensionValuesType<T>
{
  /**
   * Technical entity name for FinancialDimensionValues.
   */
  static override _entityName = 'FinancialDimensionValues';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the FinancialDimensionValues entity.
   */
  static _keys = ['FinancialDimension', 'LegalEntityId', 'DimensionValue'];
  /**
   * Financial Dimension.
   */
  declare financialDimension: DeserializedType<T, 'Edm.String'>;
  /**
   * Legal Entity Id.
   */
  declare legalEntityId: DeserializedType<T, 'Edm.String'>;
  /**
   * Dimension Value.
   */
  declare dimensionValue: DeserializedType<T, 'Edm.String'>;
  /**
   * Group Dimension.
   * @nullable
   */
  declare groupDimension?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Suspended.
   * @nullable
   */
  declare isSuspended?: NoYes | null;
  /**
   * Is Blocked For Manual Entry.
   * @nullable
   */
  declare isBlockedForManualEntry?: NoYes | null;
  /**
   * Is Total.
   * @nullable
   */
  declare isTotal?: NoYes | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
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
   * Is Balancing Psn.
   * @nullable
   */
  declare isBalancingPsn?: NoYes | null;
  /**
   * One-to-one navigation property to the {@link OfficeAddinLegalEntities} entity.
   */
  declare financialDimensionValueEntityRelatedRoleLegalEntity?: OfficeAddinLegalEntities<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionAttributes} entity.
   */
  declare financialDimensionValueEntityRelatedRoleFinancialDimension?: DimensionAttributes<T> | null;

  constructor(_entityApi: FinancialDimensionValuesApi<T>) {
    super(_entityApi);
  }
}

export interface FinancialDimensionValuesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  financialDimension: DeserializedType<T, 'Edm.String'>;
  legalEntityId: DeserializedType<T, 'Edm.String'>;
  dimensionValue: DeserializedType<T, 'Edm.String'>;
  groupDimension?: DeserializedType<T, 'Edm.String'> | null;
  isSuspended?: NoYes | null;
  isBlockedForManualEntry?: NoYes | null;
  isTotal?: NoYes | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  activeFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  activeTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  owner?: DeserializedType<T, 'Edm.String'> | null;
  isBalancingPsn?: NoYes | null;
  financialDimensionValueEntityRelatedRoleLegalEntity?: OfficeAddinLegalEntitiesType<T> | null;
  financialDimensionValueEntityRelatedRoleFinancialDimension?: DimensionAttributesType<T> | null;
}
