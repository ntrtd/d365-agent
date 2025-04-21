/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { KitVariantComponents } from './KitVariantComponents';
import { KitVariantComponentsRequestBuilder } from './KitVariantComponentsRequestBuilder';
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
export class KitVariantComponentsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<KitVariantComponents<DeSerializersT>, DeSerializersT>
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
  ): KitVariantComponentsApi<DeSerializersT> {
    return new KitVariantComponentsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = KitVariantComponents;

  requestBuilder(): KitVariantComponentsRequestBuilder<DeSerializersT> {
    return new KitVariantComponentsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    KitVariantComponents<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<KitVariantComponents<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    KitVariantComponents<DeSerializersT>,
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
    typeof KitVariantComponents,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        KitVariantComponents,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PRODUCT_NUMBER: OrderableEdmTypeField<
      KitVariantComponents<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_VARIANT_NUMBER: OrderableEdmTypeField<
      KitVariantComponents<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    KIT_PRODUCT_NUMBER: OrderableEdmTypeField<
      KitVariantComponents<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    KIT_COMPONENT_LINE_NUMBER: OrderableEdmTypeField<
      KitVariantComponents<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    UNIT_OF_MEASURE_SYMBOL: OrderableEdmTypeField<
      KitVariantComponents<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QUANTITY: OrderableEdmTypeField<
      KitVariantComponents<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<KitVariantComponents<DeSerializers>>;
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
         * Static representation of the {@link productVariantNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_VARIANT_NUMBER: fieldBuilder.buildEdmTypeField(
          'ProductVariantNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link kitProductNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        KIT_PRODUCT_NUMBER: fieldBuilder.buildEdmTypeField(
          'KitProductNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link kitComponentLineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        KIT_COMPONENT_LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'KitComponentLineNumber',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link unitOfMeasureSymbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_OF_MEASURE_SYMBOL: fieldBuilder.buildEdmTypeField(
          'UnitOfMeasureSymbol',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link quantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUANTITY: fieldBuilder.buildEdmTypeField(
          'Quantity',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', KitVariantComponents)
      };
    }

    return this._schema;
  }
}
