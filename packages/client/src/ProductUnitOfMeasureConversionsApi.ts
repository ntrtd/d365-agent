/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductUnitOfMeasureConversions } from './ProductUnitOfMeasureConversions';
import { ProductUnitOfMeasureConversionsRequestBuilder } from './ProductUnitOfMeasureConversionsRequestBuilder';
import { UnitsOfMeasureApi } from './UnitsOfMeasureApi';
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
export class ProductUnitOfMeasureConversionsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ProductUnitOfMeasureConversions<DeSerializersT>, DeSerializersT>
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
  ): ProductUnitOfMeasureConversionsApi<DeSerializersT> {
    return new ProductUnitOfMeasureConversionsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link fromUnitOfMeasure} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FROM_UNIT_OF_MEASURE: OneToOneLink<
      ProductUnitOfMeasureConversions<DeSerializersT>,
      DeSerializersT,
      UnitsOfMeasureApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toUnitOfMeasure} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_UNIT_OF_MEASURE: OneToOneLink<
      ProductUnitOfMeasureConversions<DeSerializersT>,
      DeSerializersT,
      UnitsOfMeasureApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link everyProduct} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EVERY_PRODUCT: OneToOneLink<
      ProductUnitOfMeasureConversions<DeSerializersT>,
      DeSerializersT,
      AllProductsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      UnitsOfMeasureApi<DeSerializersT>,
      UnitsOfMeasureApi<DeSerializersT>,
      AllProductsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      FROM_UNIT_OF_MEASURE: new OneToOneLink(
        'FromUnitOfMeasure',
        this,
        linkedApis[0]
      ),
      TO_UNIT_OF_MEASURE: new OneToOneLink(
        'ToUnitOfMeasure',
        this,
        linkedApis[1]
      ),
      EVERY_PRODUCT: new OneToOneLink('EveryProduct', this, linkedApis[2])
    };
    return this;
  }

  entityConstructor = ProductUnitOfMeasureConversions;

  requestBuilder(): ProductUnitOfMeasureConversionsRequestBuilder<DeSerializersT> {
    return new ProductUnitOfMeasureConversionsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    ProductUnitOfMeasureConversions<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ProductUnitOfMeasureConversions<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProductUnitOfMeasureConversions<DeSerializersT>,
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
    typeof ProductUnitOfMeasureConversions,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProductUnitOfMeasureConversions,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    FROM_UNIT_SYMBOL: OrderableEdmTypeField<
      ProductUnitOfMeasureConversions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TO_UNIT_SYMBOL: OrderableEdmTypeField<
      ProductUnitOfMeasureConversions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_NUMBER: OrderableEdmTypeField<
      ProductUnitOfMeasureConversions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INNER_OFFSET: OrderableEdmTypeField<
      ProductUnitOfMeasureConversions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    OUTER_OFFSET: OrderableEdmTypeField<
      ProductUnitOfMeasureConversions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ROUNDING: EnumField<
      ProductUnitOfMeasureConversions<DeSerializers>,
      DeSerializersT,
      UnitOfMeasureConversionRounding,
      true,
      true
    >;
    NUMERATOR: OrderableEdmTypeField<
      ProductUnitOfMeasureConversions<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    FACTOR: OrderableEdmTypeField<
      ProductUnitOfMeasureConversions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DENOMINATOR: OrderableEdmTypeField<
      ProductUnitOfMeasureConversions<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link fromUnitOfMeasure} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FROM_UNIT_OF_MEASURE: OneToOneLink<
      ProductUnitOfMeasureConversions<DeSerializersT>,
      DeSerializersT,
      UnitsOfMeasureApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toUnitOfMeasure} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_UNIT_OF_MEASURE: OneToOneLink<
      ProductUnitOfMeasureConversions<DeSerializersT>,
      DeSerializersT,
      UnitsOfMeasureApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link everyProduct} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EVERY_PRODUCT: OneToOneLink<
      ProductUnitOfMeasureConversions<DeSerializersT>,
      DeSerializersT,
      AllProductsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ProductUnitOfMeasureConversions<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
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
         * Static representation of the {@link productNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_NUMBER: fieldBuilder.buildEdmTypeField(
          'ProductNumber',
          'Edm.String',
          false
        ),
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
         * Static representation of the {@link numerator} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMERATOR: fieldBuilder.buildEdmTypeField(
          'Numerator',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link factor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FACTOR: fieldBuilder.buildEdmTypeField('Factor', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link denominator} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DENOMINATOR: fieldBuilder.buildEdmTypeField(
          'Denominator',
          'Edm.Int32',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProductUnitOfMeasureConversions)
      };
    }

    return this._schema;
  }
}
