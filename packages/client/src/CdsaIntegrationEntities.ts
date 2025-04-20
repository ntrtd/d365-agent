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
import type { CdsaIntegrationEntitiesApi } from './CdsaIntegrationEntitiesApi';

/**
 * This class represents the entity "CDSAIntegrationEntities" of service "d365_metadata".
 */
export class CdsaIntegrationEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CdsaIntegrationEntitiesType<T>
{
  /**
   * Technical entity name for CdsaIntegrationEntities.
   */
  static override _entityName = 'CDSAIntegrationEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CdsaIntegrationEntities entity.
   */
  static _keys = ['Id'];
  /**
   * Id.
   */
  declare id: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Key Vault Secret Name.
   * @nullable
   */
  declare keyVaultSecretName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Azure Resource Group Name.
   * @nullable
   */
  declare azureResourceGroupName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tenant Id.
   * @nullable
   */
  declare tenantId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Azure Subscription Id.
   * @nullable
   */
  declare azureSubscriptionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Key Vault Name.
   * @nullable
   */
  declare keyVaultName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Upn Email Accounts.
   * @nullable
   */
  declare upnEmailAccounts?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Storage Account Name.
   * @nullable
   */
  declare storageAccountName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Storage Account Key.
   * @nullable
   */
  declare storageAccountKey?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Enabled.
   */
  declare isEnabled: DeserializedType<T, 'Edm.Boolean'>;

  constructor(_entityApi: CdsaIntegrationEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface CdsaIntegrationEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  id: DeserializedType<T, 'Edm.Guid'>;
  keyVaultSecretName?: DeserializedType<T, 'Edm.String'> | null;
  azureResourceGroupName?: DeserializedType<T, 'Edm.String'> | null;
  tenantId?: DeserializedType<T, 'Edm.String'> | null;
  azureSubscriptionId?: DeserializedType<T, 'Edm.String'> | null;
  keyVaultName?: DeserializedType<T, 'Edm.String'> | null;
  upnEmailAccounts?: DeserializedType<T, 'Edm.String'> | null;
  storageAccountName?: DeserializedType<T, 'Edm.String'> | null;
  storageAccountKey?: DeserializedType<T, 'Edm.String'> | null;
  isEnabled: DeserializedType<T, 'Edm.Boolean'>;
}
