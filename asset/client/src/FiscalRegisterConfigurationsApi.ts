/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FiscalRegisterConfigurations } from './FiscalRegisterConfigurations';
import { FiscalRegisterConfigurationsRequestBuilder } from './FiscalRegisterConfigurationsRequestBuilder';
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
export class FiscalRegisterConfigurationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<FiscalRegisterConfigurations<DeSerializersT>, DeSerializersT>
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
  ): FiscalRegisterConfigurationsApi<DeSerializersT> {
    return new FiscalRegisterConfigurationsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = FiscalRegisterConfigurations;

  requestBuilder(): FiscalRegisterConfigurationsRequestBuilder<DeSerializersT> {
    return new FiscalRegisterConfigurationsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    FiscalRegisterConfigurations<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      FiscalRegisterConfigurations<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    FiscalRegisterConfigurations<DeSerializersT>,
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
    typeof FiscalRegisterConfigurations,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        FiscalRegisterConfigurations,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CONFIGURATION_ID: OrderableEdmTypeField<
      FiscalRegisterConfigurations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      FiscalRegisterConfigurations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONFIGURATION_CONTENT: OrderableEdmTypeField<
      FiscalRegisterConfigurations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<FiscalRegisterConfigurations<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link configurationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONFIGURATION_ID: fieldBuilder.buildEdmTypeField(
          'ConfigurationId',
          'Edm.String',
          false
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
         * Static representation of the {@link configurationContent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONFIGURATION_CONTENT: fieldBuilder.buildEdmTypeField(
          'ConfigurationContent',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', FiscalRegisterConfigurations)
      };
    }

    return this._schema;
  }
}
