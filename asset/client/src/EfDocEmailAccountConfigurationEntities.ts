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
import type { EfDocEmailAccountConfigurationEntitiesApi } from './EfDocEmailAccountConfigurationEntitiesApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "EFDocEmailAccountConfigurationEntities" of service "d365_metadata".
 */
export class EfDocEmailAccountConfigurationEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements EfDocEmailAccountConfigurationEntitiesType<T>
{
  /**
   * Technical entity name for EfDocEmailAccountConfigurationEntities.
   */
  static override _entityName = 'EFDocEmailAccountConfigurationEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the EfDocEmailAccountConfigurationEntities entity.
   */
  static _keys = ['dataAreaId', 'Username'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Username.
   */
  declare username: DeserializedType<T, 'Edm.String'>;
  /**
   * Login Authority.
   * @nullable
   */
  declare loginAuthority?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Resource Id.
   * @nullable
   */
  declare resourceId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Use Modern Auth.
   * @nullable
   */
  declare useModernAuth?: NoYes | null;
  /**
   * Client Secret Key Vault Secret Name.
   * @nullable
   */
  declare clientSecretKeyVaultSecretName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Port.
   */
  declare port: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Tenant Id Key Vault Secret Name.
   * @nullable
   */
  declare tenantIdKeyVaultSecretName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Use Ssl.
   * @nullable
   */
  declare useSsl?: NoYes | null;
  /**
   * Client Id Key Vault Secret Name.
   * @nullable
   */
  declare clientIdKeyVaultSecretName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Server Address.
   * @nullable
   */
  declare serverAddress?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: EfDocEmailAccountConfigurationEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface EfDocEmailAccountConfigurationEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  username: DeserializedType<T, 'Edm.String'>;
  loginAuthority?: DeserializedType<T, 'Edm.String'> | null;
  resourceId?: DeserializedType<T, 'Edm.String'> | null;
  useModernAuth?: NoYes | null;
  clientSecretKeyVaultSecretName?: DeserializedType<T, 'Edm.String'> | null;
  port: DeserializedType<T, 'Edm.Int32'>;
  tenantIdKeyVaultSecretName?: DeserializedType<T, 'Edm.String'> | null;
  useSsl?: NoYes | null;
  clientIdKeyVaultSecretName?: DeserializedType<T, 'Edm.String'> | null;
  serverAddress?: DeserializedType<T, 'Edm.String'> | null;
}
