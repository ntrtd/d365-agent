/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FiscalIntegrationTechnicalProfileOverrides } from './FiscalIntegrationTechnicalProfileOverrides';
import { FiscalIntegrationTechnicalProfileOverridesRequestBuilder } from './FiscalIntegrationTechnicalProfileOverridesRequestBuilder';
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
export class FiscalIntegrationTechnicalProfileOverridesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      FiscalIntegrationTechnicalProfileOverrides<DeSerializersT>,
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
  ): FiscalIntegrationTechnicalProfileOverridesApi<DeSerializersT> {
    return new FiscalIntegrationTechnicalProfileOverridesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = FiscalIntegrationTechnicalProfileOverrides;

  requestBuilder(): FiscalIntegrationTechnicalProfileOverridesRequestBuilder<DeSerializersT> {
    return new FiscalIntegrationTechnicalProfileOverridesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    FiscalIntegrationTechnicalProfileOverrides<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      FiscalIntegrationTechnicalProfileOverrides<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    FiscalIntegrationTechnicalProfileOverrides<DeSerializersT>,
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
    typeof FiscalIntegrationTechnicalProfileOverrides,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        FiscalIntegrationTechnicalProfileOverrides,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    TECHNICAL_PROFILE_ID: OrderableEdmTypeField<
      FiscalIntegrationTechnicalProfileOverrides<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STORE_ID: OrderableEdmTypeField<
      FiscalIntegrationTechnicalProfileOverrides<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TERMINAL_ID: OrderableEdmTypeField<
      FiscalIntegrationTechnicalProfileOverrides<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TECHNICAL_PROFILE_PROPERTIES: OrderableEdmTypeField<
      FiscalIntegrationTechnicalProfileOverrides<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<
      FiscalIntegrationTechnicalProfileOverrides<DeSerializers>
    >;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link technicalProfileId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TECHNICAL_PROFILE_ID: fieldBuilder.buildEdmTypeField(
          'TechnicalProfileId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link storeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STORE_ID: fieldBuilder.buildEdmTypeField(
          'StoreId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link terminalId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TERMINAL_ID: fieldBuilder.buildEdmTypeField(
          'TerminalId',
          'Edm.String',
          false
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
        ALL_FIELDS: new AllFields(
          '*',
          FiscalIntegrationTechnicalProfileOverrides
        )
      };
    }

    return this._schema;
  }
}
