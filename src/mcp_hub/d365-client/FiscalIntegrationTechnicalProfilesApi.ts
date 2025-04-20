/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FiscalIntegrationTechnicalProfiles } from './FiscalIntegrationTechnicalProfiles';
import { FiscalIntegrationTechnicalProfilesRequestBuilder } from './FiscalIntegrationTechnicalProfilesRequestBuilder';
import { RetailFiscalIntegrationConnectorLocation } from './RetailFiscalIntegrationConnectorLocation';
import { RetailFiscalIntegrationConnectorType } from './RetailFiscalIntegrationConnectorType';
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
export class FiscalIntegrationTechnicalProfilesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      FiscalIntegrationTechnicalProfiles<DeSerializersT>,
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
  ): FiscalIntegrationTechnicalProfilesApi<DeSerializersT> {
    return new FiscalIntegrationTechnicalProfilesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = FiscalIntegrationTechnicalProfiles;

  requestBuilder(): FiscalIntegrationTechnicalProfilesRequestBuilder<DeSerializersT> {
    return new FiscalIntegrationTechnicalProfilesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    FiscalIntegrationTechnicalProfiles<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      FiscalIntegrationTechnicalProfiles<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    FiscalIntegrationTechnicalProfiles<DeSerializersT>,
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
    typeof FiscalIntegrationTechnicalProfiles,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        FiscalIntegrationTechnicalProfiles,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PROFILE_NUMBER: OrderableEdmTypeField<
      FiscalIntegrationTechnicalProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CONNECTOR_LOCATION: EnumField<
      FiscalIntegrationTechnicalProfiles<DeSerializers>,
      DeSerializersT,
      RetailFiscalIntegrationConnectorLocation,
      true,
      true
    >;
    CONNECTOR_TYPE: EnumField<
      FiscalIntegrationTechnicalProfiles<DeSerializers>,
      DeSerializersT,
      RetailFiscalIntegrationConnectorType,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      FiscalIntegrationTechnicalProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONNECTOR_NAME: OrderableEdmTypeField<
      FiscalIntegrationTechnicalProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TECHNICAL_PROFILE_PROPERTIES: OrderableEdmTypeField<
      FiscalIntegrationTechnicalProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<FiscalIntegrationTechnicalProfiles<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
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
         * Static representation of the {@link connectorLocation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONNECTOR_LOCATION: fieldBuilder.buildEnumField(
          'ConnectorLocation',
          RetailFiscalIntegrationConnectorLocation,
          true
        ),
        /**
         * Static representation of the {@link connectorType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONNECTOR_TYPE: fieldBuilder.buildEnumField(
          'ConnectorType',
          RetailFiscalIntegrationConnectorType,
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
         * Static representation of the {@link technicalProfileProperties} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TECHNICAL_PROFILE_PROPERTIES: fieldBuilder.buildEdmTypeField(
          'TechnicalProfileProperties',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', FiscalIntegrationTechnicalProfiles)
      };
    }

    return this._schema;
  }
}
