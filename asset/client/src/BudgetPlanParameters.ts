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
import type { BudgetPlanParametersApi } from './BudgetPlanParametersApi';
import { BudgetPlanningSecurityModel } from './BudgetPlanningSecurityModel';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "BudgetPlanParameters" of service "d365_metadata".
 */
export class BudgetPlanParameters<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BudgetPlanParametersType<T>
{
  /**
   * Technical entity name for BudgetPlanParameters.
   */
  static override _entityName = 'BudgetPlanParameters';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BudgetPlanParameters entity.
   */
  static _keys = ['dataAreaId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Security Model.
   * @nullable
   */
  declare securityModel?: BudgetPlanningSecurityModel | null;
  /**
   * Dimension Hierarchy Name.
   * @nullable
   */
  declare dimensionHierarchyName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Skip Currency Conversion.
   * @nullable
   */
  declare skipCurrencyConversion?: NoYes | null;
  /**
   * Use Budget Planning User Groups.
   * @nullable
   */
  declare useBudgetPlanningUserGroups?: NoYes | null;

  constructor(_entityApi: BudgetPlanParametersApi<T>) {
    super(_entityApi);
  }
}

export interface BudgetPlanParametersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  securityModel?: BudgetPlanningSecurityModel | null;
  dimensionHierarchyName?: DeserializedType<T, 'Edm.String'> | null;
  skipCurrencyConversion?: NoYes | null;
  useBudgetPlanningUserGroups?: NoYes | null;
}
