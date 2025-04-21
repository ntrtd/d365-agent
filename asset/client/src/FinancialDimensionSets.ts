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
import type { FinancialDimensionSetsApi } from './FinancialDimensionSetsApi';
import { DimensionFocusBalanceInitializationState } from './DimensionFocusBalanceInitializationState';
import {
  DimensionAttributes,
  DimensionAttributesType
} from './DimensionAttributes';
import {
  BudgetTrackingWorkspaceParameters,
  BudgetTrackingWorkspaceParametersType
} from './BudgetTrackingWorkspaceParameters';

/**
 * This class represents the entity "FinancialDimensionSets" of service "d365_metadata".
 */
export class FinancialDimensionSets<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements FinancialDimensionSetsType<T>
{
  /**
   * Technical entity name for FinancialDimensionSets.
   */
  static override _entityName = 'FinancialDimensionSets';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the FinancialDimensionSets entity.
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
  /**
   * Segment Name 04.
   * @nullable
   */
  declare segmentName04?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Segment Name 05.
   * @nullable
   */
  declare segmentName05?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Segment Name 06.
   * @nullable
   */
  declare segmentName06?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Segment Name 07.
   * @nullable
   */
  declare segmentName07?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Segment Name 01.
   * @nullable
   */
  declare segmentName01?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Segment Name 02.
   * @nullable
   */
  declare segmentName02?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Segment Name 03.
   * @nullable
   */
  declare segmentName03?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Segment Name 08.
   * @nullable
   */
  declare segmentName08?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Segment Name 09.
   * @nullable
   */
  declare segmentName09?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Segment Name 10.
   * @nullable
   */
  declare segmentName10?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Segment Name 11.
   * @nullable
   */
  declare segmentName11?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Focus State.
   * @nullable
   */
  declare focusState?: DimensionFocusBalanceInitializationState | null;
  /**
   * One-to-one navigation property to the {@link DimensionAttributes} entity.
   */
  declare financialDimensionSetEntityRelatedRoleSegmentName03?: DimensionAttributes<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionAttributes} entity.
   */
  declare financialDimensionSetEntityRelatedRoleSegmentName04?: DimensionAttributes<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionAttributes} entity.
   */
  declare financialDimensionSetEntityRelatedRoleSegmentName11?: DimensionAttributes<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionAttributes} entity.
   */
  declare financialDimensionSetEntityRelatedRoleSegmentName01?: DimensionAttributes<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionAttributes} entity.
   */
  declare financialDimensionSetEntityRelatedRoleSegmentName02?: DimensionAttributes<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionAttributes} entity.
   */
  declare financialDimensionSetEntityRelatedRoleSegmentName09?: DimensionAttributes<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionAttributes} entity.
   */
  declare financialDimensionSetEntityRelatedRoleSegmentName07?: DimensionAttributes<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionAttributes} entity.
   */
  declare financialDimensionSetEntityRelatedRoleSegmentName10?: DimensionAttributes<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionAttributes} entity.
   */
  declare financialDimensionSetEntityRelatedRoleSegmentName08?: DimensionAttributes<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionAttributes} entity.
   */
  declare financialDimensionSetEntityRelatedRoleSegmentName05?: DimensionAttributes<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionAttributes} entity.
   */
  declare financialDimensionSetEntityRelatedRoleSegmentName06?: DimensionAttributes<T> | null;
  /**
   * One-to-one navigation property to the {@link BudgetTrackingWorkspaceParameters} entity.
   */
  declare budgetTrackingWorkspaceParametersExpenseFinancialDimensionSet?: BudgetTrackingWorkspaceParameters<T> | null;
  /**
   * One-to-one navigation property to the {@link BudgetTrackingWorkspaceParameters} entity.
   */
  declare budgetTrackingWorkspaceParametersRevenueFinancialDimensionSet?: BudgetTrackingWorkspaceParameters<T> | null;

  constructor(_entityApi: FinancialDimensionSetsApi<T>) {
    super(_entityApi);
  }
}

export interface FinancialDimensionSetsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  name: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  segmentName04?: DeserializedType<T, 'Edm.String'> | null;
  segmentName05?: DeserializedType<T, 'Edm.String'> | null;
  segmentName06?: DeserializedType<T, 'Edm.String'> | null;
  segmentName07?: DeserializedType<T, 'Edm.String'> | null;
  segmentName01?: DeserializedType<T, 'Edm.String'> | null;
  segmentName02?: DeserializedType<T, 'Edm.String'> | null;
  segmentName03?: DeserializedType<T, 'Edm.String'> | null;
  segmentName08?: DeserializedType<T, 'Edm.String'> | null;
  segmentName09?: DeserializedType<T, 'Edm.String'> | null;
  segmentName10?: DeserializedType<T, 'Edm.String'> | null;
  segmentName11?: DeserializedType<T, 'Edm.String'> | null;
  focusState?: DimensionFocusBalanceInitializationState | null;
  financialDimensionSetEntityRelatedRoleSegmentName03?: DimensionAttributesType<T> | null;
  financialDimensionSetEntityRelatedRoleSegmentName04?: DimensionAttributesType<T> | null;
  financialDimensionSetEntityRelatedRoleSegmentName11?: DimensionAttributesType<T> | null;
  financialDimensionSetEntityRelatedRoleSegmentName01?: DimensionAttributesType<T> | null;
  financialDimensionSetEntityRelatedRoleSegmentName02?: DimensionAttributesType<T> | null;
  financialDimensionSetEntityRelatedRoleSegmentName09?: DimensionAttributesType<T> | null;
  financialDimensionSetEntityRelatedRoleSegmentName07?: DimensionAttributesType<T> | null;
  financialDimensionSetEntityRelatedRoleSegmentName10?: DimensionAttributesType<T> | null;
  financialDimensionSetEntityRelatedRoleSegmentName08?: DimensionAttributesType<T> | null;
  financialDimensionSetEntityRelatedRoleSegmentName05?: DimensionAttributesType<T> | null;
  financialDimensionSetEntityRelatedRoleSegmentName06?: DimensionAttributesType<T> | null;
  budgetTrackingWorkspaceParametersExpenseFinancialDimensionSet?: BudgetTrackingWorkspaceParametersType<T> | null;
  budgetTrackingWorkspaceParametersRevenueFinancialDimensionSet?: BudgetTrackingWorkspaceParametersType<T> | null;
}
