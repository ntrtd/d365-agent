/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EfDocEmailAccountConfigurationEntities } from './EfDocEmailAccountConfigurationEntities';
import { EfDocEmailAccountConfigurationEntitiesRequestBuilder } from './EfDocEmailAccountConfigurationEntitiesRequestBuilder';
import { NoYes } from './NoYes';
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
  OrderableEdmTypeField,
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class EfDocEmailAccountConfigurationEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      EfDocEmailAccountConfigurationEntities<DeSerializersT>,
      DeSerializersT
    >
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
  ): EfDocEmailAccountConfigurationEntitiesApi<DeSerializersT> {
    return new EfDocEmailAccountConfigurationEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = EfDocEmailAccountConfigurationEntities;

  requestBuilder(): EfDocEmailAccountConfigurationEntitiesRequestBuilder<DeSerializersT> {
    return new EfDocEmailAccountConfigurationEntitiesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    EfDocEmailAccountConfigurationEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      EfDocEmailAccountConfigurationEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    EfDocEmailAccountConfigurationEntities<DeSerializersT>,
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
    typeof EfDocEmailAccountConfigurationEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        EfDocEmailAccountConfigurationEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      EfDocEmailAccountConfigurationEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    USERNAME: OrderableEdmTypeField<
      EfDocEmailAccountConfigurationEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LOGIN_AUTHORITY: OrderableEdmTypeField<
      EfDocEmailAccountConfigurationEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RESOURCE_ID: OrderableEdmTypeField<
      EfDocEmailAccountConfigurationEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USE_MODERN_AUTH: EnumField<
      EfDocEmailAccountConfigurationEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CLIENT_SECRET_KEY_VAULT_SECRET_NAME: OrderableEdmTypeField<
      EfDocEmailAccountConfigurationEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PORT: OrderableEdmTypeField<
      EfDocEmailAccountConfigurationEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TENANT_ID_KEY_VAULT_SECRET_NAME: OrderableEdmTypeField<
      EfDocEmailAccountConfigurationEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USE_SSL: EnumField<
      EfDocEmailAccountConfigurationEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CLIENT_ID_KEY_VAULT_SECRET_NAME: OrderableEdmTypeField<
      EfDocEmailAccountConfigurationEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SERVER_ADDRESS: OrderableEdmTypeField<
      EfDocEmailAccountConfigurationEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<
      EfDocEmailAccountConfigurationEntities<DeSerializers>
    >;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link dataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'dataAreaId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link username} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USERNAME: fieldBuilder.buildEdmTypeField(
          'Username',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link loginAuthority} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOGIN_AUTHORITY: fieldBuilder.buildEdmTypeField(
          'LoginAuthority',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link resourceId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESOURCE_ID: fieldBuilder.buildEdmTypeField(
          'ResourceId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link useModernAuth} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_MODERN_AUTH: fieldBuilder.buildEnumField(
          'UseModernAuth',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link clientSecretKeyVaultSecretName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLIENT_SECRET_KEY_VAULT_SECRET_NAME: fieldBuilder.buildEdmTypeField(
          'ClientSecretKeyVaultSecretName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link port} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PORT: fieldBuilder.buildEdmTypeField('Port', 'Edm.Int32', false),
        /**
         * Static representation of the {@link tenantIdKeyVaultSecretName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TENANT_ID_KEY_VAULT_SECRET_NAME: fieldBuilder.buildEdmTypeField(
          'TenantIdKeyVaultSecretName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link useSsl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_SSL: fieldBuilder.buildEnumField('UseSsl', NoYes, true),
        /**
         * Static representation of the {@link clientIdKeyVaultSecretName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLIENT_ID_KEY_VAULT_SECRET_NAME: fieldBuilder.buildEdmTypeField(
          'ClientIdKeyVaultSecretName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link serverAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVER_ADDRESS: fieldBuilder.buildEdmTypeField(
          'ServerAddress',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', EfDocEmailAccountConfigurationEntities)
      };
    }

    return this._schema;
  }
}
