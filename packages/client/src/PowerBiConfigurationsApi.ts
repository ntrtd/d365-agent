/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PowerBiConfigurations } from './PowerBiConfigurations';
import { PowerBiConfigurationsRequestBuilder } from './PowerBiConfigurationsRequestBuilder';
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
export class PowerBiConfigurationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<PowerBiConfigurations<DeSerializersT>, DeSerializersT>
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
  ): PowerBiConfigurationsApi<DeSerializersT> {
    return new PowerBiConfigurationsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = PowerBiConfigurations;

  requestBuilder(): PowerBiConfigurationsRequestBuilder<DeSerializersT> {
    return new PowerBiConfigurationsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PowerBiConfigurations<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<PowerBiConfigurations<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PowerBiConfigurations<DeSerializersT>,
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
    typeof PowerBiConfigurations,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PowerBiConfigurations,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CLIENT_ID: OrderableEdmTypeField<
      PowerBiConfigurations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TILE_FILTER_COLUMN_NAME: OrderableEdmTypeField<
      PowerBiConfigurations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POWER_BIAPI_ADDRESS: OrderableEdmTypeField<
      PowerBiConfigurations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REDIRECT_URL: OrderableEdmTypeField<
      PowerBiConfigurations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    APPLICATION_KEY: OrderableEdmTypeField<
      PowerBiConfigurations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TENANT_ID: OrderableEdmTypeField<
      PowerBiConfigurations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    APPLY_TILE_FILTER: OrderableEdmTypeField<
      PowerBiConfigurations<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    AZURE_AD_AUTHORITY_URI: OrderableEdmTypeField<
      PowerBiConfigurations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TILE_FILTER_TABLE_NAME: OrderableEdmTypeField<
      PowerBiConfigurations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_ENABLED: OrderableEdmTypeField<
      PowerBiConfigurations<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    AZURE_AD_POWER_BI_API_RESOURCE_URI: OrderableEdmTypeField<
      PowerBiConfigurations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<PowerBiConfigurations<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link clientId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLIENT_ID: fieldBuilder.buildEdmTypeField(
          'ClientID',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link tileFilterColumnName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TILE_FILTER_COLUMN_NAME: fieldBuilder.buildEdmTypeField(
          'TileFilterColumnName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link powerBiapiAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POWER_BIAPI_ADDRESS: fieldBuilder.buildEdmTypeField(
          'PowerBIAPIAddress',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link redirectUrl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REDIRECT_URL: fieldBuilder.buildEdmTypeField(
          'RedirectUrl',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link applicationKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPLICATION_KEY: fieldBuilder.buildEdmTypeField(
          'ApplicationKey',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link tenantId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TENANT_ID: fieldBuilder.buildEdmTypeField(
          'TenantID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link applyTileFilter} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPLY_TILE_FILTER: fieldBuilder.buildEdmTypeField(
          'ApplyTileFilter',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link azureAdAuthorityUri} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AZURE_AD_AUTHORITY_URI: fieldBuilder.buildEdmTypeField(
          'AzureADAuthorityUri',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link tileFilterTableName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TILE_FILTER_TABLE_NAME: fieldBuilder.buildEdmTypeField(
          'TileFilterTableName',
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
        /**
         * Static representation of the {@link azureAdPowerBiApiResourceUri} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AZURE_AD_POWER_BI_API_RESOURCE_URI: fieldBuilder.buildEdmTypeField(
          'AzureADPowerBIApiResourceUri',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PowerBiConfigurations)
      };
    }

    return this._schema;
  }
}
