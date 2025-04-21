/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductSpecificUnitOfMeasureConversions } from './ProductSpecificUnitOfMeasureConversions';
import { ProductSpecificUnitOfMeasureConversionsRequestBuilder } from './ProductSpecificUnitOfMeasureConversionsRequestBuilder';
import { AllProductsApi } from './AllProductsApi';
import { UnitOfMeasureConversionRounding } from './UnitOfMeasureConversionRounding';
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
  EnumField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class ProductSpecificUnitOfMeasureConversionsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      ProductSpecificUnitOfMeasureConversions<DeSerializersT>,
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
  ): ProductSpecificUnitOfMeasureConversionsApi<DeSerializersT> {
    return new ProductSpecificUnitOfMeasureConversionsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link everyProduct} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EVERY_PRODUCT: OneToOneLink<
      ProductSpecificUnitOfMeasureConversions<DeSerializersT>,
      DeSerializersT,
      AllProductsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(linkedApis: [AllProductsApi<DeSerializersT>]): this {
    this.navigationPropertyFields = {
      EVERY_PRODUCT: new OneToOneLink('EveryProduct', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = ProductSpecificUnitOfMeasureConversions;

  requestBuilder(): ProductSpecificUnitOfMeasureConversionsRequestBuilder<DeSerializersT> {
    return new ProductSpecificUnitOfMeasureConversionsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    ProductSpecificUnitOfMeasureConversions<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ProductSpecificUnitOfMeasureConversions<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProductSpecificUnitOfMeasureConversions<DeSerializersT>,
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
    typeof ProductSpecificUnitOfMeasureConversions,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProductSpecificUnitOfMeasureConversions,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PRODUCT_NUMBER: OrderableEdmTypeField<
      ProductSpecificUnitOfMeasureConversions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FROM_UNIT_SYMBOL: OrderableEdmTypeField<
      ProductSpecificUnitOfMeasureConversions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TO_UNIT_SYMBOL: OrderableEdmTypeField<
      ProductSpecificUnitOfMeasureConversions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FACTOR: OrderableEdmTypeField<
      ProductSpecificUnitOfMeasureConversions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INNER_OFFSET: OrderableEdmTypeField<
      ProductSpecificUnitOfMeasureConversions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    OUTER_OFFSET: OrderableEdmTypeField<
      ProductSpecificUnitOfMeasureConversions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ROUNDING: EnumField<
      ProductSpecificUnitOfMeasureConversions<DeSerializers>,
      DeSerializersT,
      UnitOfMeasureConversionRounding,
      true,
      true
    >;
    DENOMINATOR: OrderableEdmTypeField<
      ProductSpecificUnitOfMeasureConversions<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    NUMERATOR: OrderableEdmTypeField<
      ProductSpecificUnitOfMeasureConversions<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link everyProduct} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EVERY_PRODUCT: OneToOneLink<
      ProductSpecificUnitOfMeasureConversions<DeSerializersT>,
      DeSerializersT,
      AllProductsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      ProductSpecificUnitOfMeasureConversions<DeSerializers>
    >;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link productNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_NUMBER: fieldBuilder.buildEdmTypeField(
          'ProductNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link fromUnitSymbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FROM_UNIT_SYMBOL: fieldBuilder.buildEdmTypeField(
          'FromUnitSymbol',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link toUnitSymbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_UNIT_SYMBOL: fieldBuilder.buildEdmTypeField(
          'ToUnitSymbol',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link factor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FACTOR: fieldBuilder.buildEdmTypeField('Factor', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link innerOffset} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INNER_OFFSET: fieldBuilder.buildEdmTypeField(
          'InnerOffset',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link outerOffset} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OUTER_OFFSET: fieldBuilder.buildEdmTypeField(
          'OuterOffset',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link rounding} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROUNDING: fieldBuilder.buildEnumField(
          'Rounding',
          UnitOfMeasureConversionRounding,
          true
        ),
        /**
         * Static representation of the {@link denominator} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DENOMINATOR: fieldBuilder.buildEdmTypeField(
          'Denominator',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link numerator} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMERATOR: fieldBuilder.buildEdmTypeField(
          'Numerator',
          'Edm.Int32',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProductSpecificUnitOfMeasureConversions)
      };
    }

    return this._schema;
  }
}
