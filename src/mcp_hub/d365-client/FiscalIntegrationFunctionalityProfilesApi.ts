/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FiscalIntegrationFunctionalityProfiles } from './FiscalIntegrationFunctionalityProfiles';
import { FiscalIntegrationFunctionalityProfilesRequestBuilder } from './FiscalIntegrationFunctionalityProfilesRequestBuilder';
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
export class FiscalIntegrationFunctionalityProfilesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      FiscalIntegrationFunctionalityProfiles<DeSerializersT>,
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
  ): FiscalIntegrationFunctionalityProfilesApi<DeSerializersT> {
    return new FiscalIntegrationFunctionalityProfilesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = FiscalIntegrationFunctionalityProfiles;

  requestBuilder(): FiscalIntegrationFunctionalityProfilesRequestBuilder<DeSerializersT> {
    return new FiscalIntegrationFunctionalityProfilesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    FiscalIntegrationFunctionalityProfiles<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      FiscalIntegrationFunctionalityProfiles<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    FiscalIntegrationFunctionalityProfiles<DeSerializersT>,
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
    typeof FiscalIntegrationFunctionalityProfiles,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        FiscalIntegrationFunctionalityProfiles,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      FiscalIntegrationFunctionalityProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PROFILE_NUMBER: OrderableEdmTypeField<
      FiscalIntegrationFunctionalityProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DOCUMENT_PROVIDER_NAME: OrderableEdmTypeField<
      FiscalIntegrationFunctionalityProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      FiscalIntegrationFunctionalityProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONNECTOR_NAME: OrderableEdmTypeField<
      FiscalIntegrationFunctionalityProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DOCUMENT_PROVIDER_PROPERTIES: OrderableEdmTypeField<
      FiscalIntegrationFunctionalityProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<
      FiscalIntegrationFunctionalityProfiles<DeSerializers>
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
         * Static representation of the {@link profileNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROFILE_NUMBER: fieldBuilder.buildEdmTypeField(
          'ProfileNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link documentProviderName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_PROVIDER_NAME: fieldBuilder.buildEdmTypeField(
          'DocumentProviderName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link connectorName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONNECTOR_NAME: fieldBuilder.buildEdmTypeField(
          'ConnectorName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link documentProviderProperties} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_PROVIDER_PROPERTIES: fieldBuilder.buildEdmTypeField(
          'DocumentProviderProperties',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', FiscalIntegrationFunctionalityProfiles)
      };
    }

    return this._schema;
  }
}
