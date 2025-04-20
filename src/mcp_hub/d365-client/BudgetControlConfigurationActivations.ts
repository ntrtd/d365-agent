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
import type { BudgetControlConfigurationActivationsApi } from './BudgetControlConfigurationActivationsApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "BudgetControlConfigurationActivations" of service "d365_metadata".
 */
export class BudgetControlConfigurationActivations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BudgetControlConfigurationActivationsType<T>
{
  /**
   * Technical entity name for BudgetControlConfigurationActivations.
   */
  static override _entityName = 'BudgetControlConfigurationActivations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BudgetControlConfigurationActivations entity.
   */
  static _keys = ['dataAreaId', 'LegalEntityId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Legal Entity Id.
   */
  declare legalEntityId: DeserializedType<T, 'Edm.String'>;
  /**
   * Turn On Budget Control.
   * @nullable
   */
  declare turnOnBudgetControl?: NoYes | null;
  /**
   * Activate Draft.
   * @nullable
   */
  declare activateDraft?: NoYes | null;

  constructor(_entityApi: BudgetControlConfigurationActivationsApi<T>) {
    super(_entityApi);
  }
}

export interface BudgetControlConfigurationActivationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  legalEntityId: DeserializedType<T, 'Edm.String'>;
  turnOnBudgetControl?: NoYes | null;
  activateDraft?: NoYes | null;
}
