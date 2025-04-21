/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DimAttributeFinancialTags } from './DimAttributeFinancialTags';
import { DimAttributeFinancialTagsRequestBuilder } from './DimAttributeFinancialTagsRequestBuilder';
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
export class DimAttributeFinancialTagsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<DimAttributeFinancialTags<DeSerializersT>, DeSerializersT>
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
  ): DimAttributeFinancialTagsApi<DeSerializersT> {
    return new DimAttributeFinancialTagsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = DimAttributeFinancialTags;

  requestBuilder(): DimAttributeFinancialTagsRequestBuilder<DeSerializersT> {
    return new DimAttributeFinancialTagsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    DimAttributeFinancialTags<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      DimAttributeFinancialTags<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    DimAttributeFinancialTags<DeSerializersT>,
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
    typeof DimAttributeFinancialTags,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        DimAttributeFinancialTags,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    VALUE: OrderableEdmTypeField<
      DimAttributeFinancialTags<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      DimAttributeFinancialTags<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DIMENSION_NAME: OrderableEdmTypeField<
      DimAttributeFinancialTags<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<DimAttributeFinancialTags<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link value} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALUE: fieldBuilder.buildEdmTypeField('Value', 'Edm.String', false),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link dimensionName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIMENSION_NAME: fieldBuilder.buildEdmTypeField(
          'DimensionName',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', DimAttributeFinancialTags)
      };
    }

    return this._schema;
  }
}
