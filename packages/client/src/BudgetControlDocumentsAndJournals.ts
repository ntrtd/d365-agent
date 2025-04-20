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
import type { BudgetControlDocumentsAndJournalsApi } from './BudgetControlDocumentsAndJournalsApi';
import { BudgetControlConfigurationStatus } from './BudgetControlConfigurationStatus';
import { BudgetControlSourceIntegrator } from './BudgetControlSourceIntegrator';
import { NoYes } from './NoYes';
import {
  BudgetControlConfigurations,
  BudgetControlConfigurationsType
} from './BudgetControlConfigurations';

/**
 * This class represents the entity "BudgetControlDocumentsAndJournals" of service "d365_metadata".
 */
export class BudgetControlDocumentsAndJournals<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BudgetControlDocumentsAndJournalsType<T>
{
  /**
   * Technical entity name for BudgetControlDocumentsAndJournals.
   */
  static override _entityName = 'BudgetControlDocumentsAndJournals';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BudgetControlDocumentsAndJournals entity.
   */
  static _keys = ['dataAreaId', 'LegalEntityId', 'Status', 'DocumentOrJournal'];
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
   * Document Or Journal.
   * @nullable
   */
  declare documentOrJournal?: BudgetControlSourceIntegrator | null;
  /**
   * Do Budget Check On Entry.
   * @nullable
   */
  declare doBudgetCheckOnEntry?: NoYes | null;
  /**
   * Is Enabled.
   * @nullable
   */
  declare isEnabled?: NoYes | null;
  /**
   * In Use By.
   * @nullable
   */
  declare inUseBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link BudgetControlConfigurations} entity.
   */
  declare budgetControlConfigurations?: BudgetControlConfigurations<T> | null;

  constructor(_entityApi: BudgetControlDocumentsAndJournalsApi<T>) {
    super(_entityApi);
  }
}

export interface BudgetControlDocumentsAndJournalsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  legalEntityId: DeserializedType<T, 'Edm.String'>;
  status?: BudgetControlConfigurationStatus | null;
  documentOrJournal?: BudgetControlSourceIntegrator | null;
  doBudgetCheckOnEntry?: NoYes | null;
  isEnabled?: NoYes | null;
  inUseBy?: DeserializedType<T, 'Edm.String'> | null;
  budgetControlConfigurations?: BudgetControlConfigurationsType<T> | null;
}
