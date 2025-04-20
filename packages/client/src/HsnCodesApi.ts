/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { HsnCodes } from './HsnCodes';
import { HsnCodesRequestBuilder } from './HsnCodesRequestBuilder';
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
export class HsnCodesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<HsnCodes<DeSerializersT>, DeSerializersT>
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
  ): HsnCodesApi<DeSerializersT> {
    return new HsnCodesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = HsnCodes;

  requestBuilder(): HsnCodesRequestBuilder<DeSerializersT> {
    return new HsnCodesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<HsnCodes<DeSerializersT>, DeSerializersT> {
    return entityBuilder<HsnCodes<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<HsnCodes<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof HsnCodes, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(HsnCodes, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      HsnCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CHAPTER: OrderableEdmTypeField<
      HsnCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    HEADING: OrderableEdmTypeField<
      HsnCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SUBHEADING: OrderableEdmTypeField<
      HsnCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COUNTRY_EXTENSION: OrderableEdmTypeField<
      HsnCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STATISTICAL_SUFFIX: OrderableEdmTypeField<
      HsnCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      HsnCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CODE: OrderableEdmTypeField<
      HsnCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<HsnCodes<DeSerializers>>;
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
         * Static representation of the {@link chapter} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHAPTER: fieldBuilder.buildEdmTypeField('Chapter', 'Edm.String', false),
        /**
         * Static representation of the {@link heading} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEADING: fieldBuilder.buildEdmTypeField('Heading', 'Edm.String', false),
        /**
         * Static representation of the {@link subheading} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUBHEADING: fieldBuilder.buildEdmTypeField(
          'Subheading',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link countryExtension} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY_EXTENSION: fieldBuilder.buildEdmTypeField(
          'CountryExtension',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link statisticalSuffix} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATISTICAL_SUFFIX: fieldBuilder.buildEdmTypeField(
          'StatisticalSuffix',
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
         * Static representation of the {@link code} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CODE: fieldBuilder.buildEdmTypeField('Code', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', HsnCodes)
      };
    }

    return this._schema;
  }
}
