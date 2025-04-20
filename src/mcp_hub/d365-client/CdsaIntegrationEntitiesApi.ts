/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CdsaIntegrationEntities } from './CdsaIntegrationEntities';
import { CdsaIntegrationEntitiesRequestBuilder } from './CdsaIntegrationEntitiesRequestBuilder';
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class CdsaIntegrationEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<CdsaIntegrationEntities<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  private constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ) {
    this.deSerializers = deSerializers;
  }

  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  public static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ): CdsaIntegrationEntitiesApi<DeSerializersT> {
    return new CdsaIntegrationEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = CdsaIntegrationEntities;

  requestBuilder(): CdsaIntegrationEntitiesRequestBuilder<DeSerializersT> {
    return new CdsaIntegrationEntitiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CdsaIntegrationEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      CdsaIntegrationEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CdsaIntegrationEntities<DeSerializersT>,
    DeSerializersT,
    NullableT
  > {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof CdsaIntegrationEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CdsaIntegrationEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ID: OrderableEdmTypeField<
      CdsaIntegrationEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    KEY_VAULT_SECRET_NAME: OrderableEdmTypeField<
      CdsaIntegrationEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AZURE_RESOURCE_GROUP_NAME: OrderableEdmTypeField<
      CdsaIntegrationEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TENANT_ID: OrderableEdmTypeField<
      CdsaIntegrationEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AZURE_SUBSCRIPTION_ID: OrderableEdmTypeField<
      CdsaIntegrationEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    KEY_VAULT_NAME: OrderableEdmTypeField<
      CdsaIntegrationEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UPN_EMAIL_ACCOUNTS: OrderableEdmTypeField<
      CdsaIntegrationEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STORAGE_ACCOUNT_NAME: OrderableEdmTypeField<
      CdsaIntegrationEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STORAGE_ACCOUNT_KEY: OrderableEdmTypeField<
      CdsaIntegrationEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_ENABLED: OrderableEdmTypeField<
      CdsaIntegrationEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    ALL_FIELDS: AllFields<CdsaIntegrationEntities<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link id} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ID: fieldBuilder.buildEdmTypeField('Id', 'Edm.Guid', false),
        /**
         * Static representation of the {@link keyVaultSecretName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        KEY_VAULT_SECRET_NAME: fieldBuilder.buildEdmTypeField(
          'KeyVaultSecretName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link azureResourceGroupName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AZURE_RESOURCE_GROUP_NAME: fieldBuilder.buildEdmTypeField(
          'AzureResourceGroupName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link tenantId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TENANT_ID: fieldBuilder.buildEdmTypeField(
          'TenantId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link azureSubscriptionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AZURE_SUBSCRIPTION_ID: fieldBuilder.buildEdmTypeField(
          'AzureSubscriptionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link keyVaultName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        KEY_VAULT_NAME: fieldBuilder.buildEdmTypeField(
          'KeyVaultName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link upnEmailAccounts} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UPN_EMAIL_ACCOUNTS: fieldBuilder.buildEdmTypeField(
          'UPNEmailAccounts',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link storageAccountName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STORAGE_ACCOUNT_NAME: fieldBuilder.buildEdmTypeField(
          'StorageAccountName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link storageAccountKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STORAGE_ACCOUNT_KEY: fieldBuilder.buildEdmTypeField(
          'StorageAccountKey',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ENABLED: fieldBuilder.buildEdmTypeField(
          'IsEnabled',
          'Edm.Boolean',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CdsaIntegrationEntities)
      };
    }

    return this._schema;
  }
}
