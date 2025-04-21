/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DimensionIntegrationFormats } from './DimensionIntegrationFormats';
import { DimensionIntegrationFormatsRequestBuilder } from './DimensionIntegrationFormatsRequestBuilder';
import { DimensionHierarchyType } from './DimensionHierarchyType';
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
export class DimensionIntegrationFormatsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<DimensionIntegrationFormats<DeSerializersT>, DeSerializersT>
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
  ): DimensionIntegrationFormatsApi<DeSerializersT> {
    return new DimensionIntegrationFormatsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = DimensionIntegrationFormats;

  requestBuilder(): DimensionIntegrationFormatsRequestBuilder<DeSerializersT> {
    return new DimensionIntegrationFormatsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    DimensionIntegrationFormats<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      DimensionIntegrationFormats<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    DimensionIntegrationFormats<DeSerializersT>,
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
    typeof DimensionIntegrationFormats,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        DimensionIntegrationFormats,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DIMENSION_FORMAT_NAME: OrderableEdmTypeField<
      DimensionIntegrationFormats<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DIMENSION_FORMAT_TYPE: EnumField<
      DimensionIntegrationFormats<DeSerializers>,
      DeSerializersT,
      DimensionHierarchyType,
      true,
      true
    >;
    FINANCIAL_DIMENSION_FORMAT: OrderableEdmTypeField<
      DimensionIntegrationFormats<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_ACTIVE: EnumField<
      DimensionIntegrationFormats<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<DimensionIntegrationFormats<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link dimensionFormatName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIMENSION_FORMAT_NAME: fieldBuilder.buildEdmTypeField(
          'DimensionFormatName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link dimensionFormatType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIMENSION_FORMAT_TYPE: fieldBuilder.buildEnumField(
          'DimensionFormatType',
          DimensionHierarchyType,
          true
        ),
        /**
         * Static representation of the {@link financialDimensionFormat} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FINANCIAL_DIMENSION_FORMAT: fieldBuilder.buildEdmTypeField(
          'FinancialDimensionFormat',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isActive} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ACTIVE: fieldBuilder.buildEnumField('IsActive', NoYes, true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', DimensionIntegrationFormats)
      };
    }

    return this._schema;
  }
}
