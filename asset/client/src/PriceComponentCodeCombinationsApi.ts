/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PriceComponentCodeCombinations } from './PriceComponentCodeCombinations';
import { PriceComponentCodeCombinationsRequestBuilder } from './PriceComponentCodeCombinationsRequestBuilder';
import { NoYes } from './NoYes';
import { GupGroupAll } from './GupGroupAll';
import { RetailDiscountConcurrency } from './RetailDiscountConcurrency';
import { GupPriceComponent } from './GupPriceComponent';
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
export class PriceComponentCodeCombinationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<PriceComponentCodeCombinations<DeSerializersT>, DeSerializersT>
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
  ): PriceComponentCodeCombinationsApi<DeSerializersT> {
    return new PriceComponentCodeCombinationsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = PriceComponentCodeCombinations;

  requestBuilder(): PriceComponentCodeCombinationsRequestBuilder<DeSerializersT> {
    return new PriceComponentCodeCombinationsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    PriceComponentCodeCombinations<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      PriceComponentCodeCombinations<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PriceComponentCodeCombinations<DeSerializersT>,
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
    typeof PriceComponentCodeCombinations,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PriceComponentCodeCombinations,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      PriceComponentCodeCombinations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      PriceComponentCodeCombinations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRICE_ATTRIBUTE_GROUP_COMBINATION_NAME: OrderableEdmTypeField<
      PriceComponentCodeCombinations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    HEADER_PRICE_ATTRIBUTE_GROUP_ALL_ENABLED: EnumField<
      PriceComponentCodeCombinations<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    HEADER_GROUP_ALL: EnumField<
      PriceComponentCodeCombinations<DeSerializers>,
      DeSerializersT,
      GupGroupAll,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      PriceComponentCodeCombinations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONCURRENCY_MODE: EnumField<
      PriceComponentCodeCombinations<DeSerializers>,
      DeSerializersT,
      RetailDiscountConcurrency,
      true,
      true
    >;
    PRICE_COMPONENT_CODE_GROUP: OrderableEdmTypeField<
      PriceComponentCodeCombinations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_PRICE_ATTRIBUTE_GROUP: OrderableEdmTypeField<
      PriceComponentCodeCombinations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HEADER_PRICE_ATTRIBUTE_GROUP: OrderableEdmTypeField<
      PriceComponentCodeCombinations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRICE_COMPONENT: EnumField<
      PriceComponentCodeCombinations<DeSerializers>,
      DeSerializersT,
      GupPriceComponent,
      true,
      true
    >;
    PRIORITY: OrderableEdmTypeField<
      PriceComponentCodeCombinations<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    LINE_PRICE_ATTRIBUTE_GROUP_ALL_ENABLED: EnumField<
      PriceComponentCodeCombinations<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LINE_GROUP_ALL: EnumField<
      PriceComponentCodeCombinations<DeSerializers>,
      DeSerializersT,
      GupGroupAll,
      true,
      true
    >;
    ALL_FIELDS: AllFields<PriceComponentCodeCombinations<DeSerializers>>;
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
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', false),
        /**
         * Static representation of the {@link priceAttributeGroupCombinationName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_ATTRIBUTE_GROUP_COMBINATION_NAME: fieldBuilder.buildEdmTypeField(
          'PriceAttributeGroupCombinationName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link headerPriceAttributeGroupAllEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEADER_PRICE_ATTRIBUTE_GROUP_ALL_ENABLED: fieldBuilder.buildEnumField(
          'HeaderPriceAttributeGroupAllEnabled',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link headerGroupAll} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEADER_GROUP_ALL: fieldBuilder.buildEnumField(
          'HeaderGroupAll',
          GupGroupAll,
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
         * Static representation of the {@link concurrencyMode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONCURRENCY_MODE: fieldBuilder.buildEnumField(
          'ConcurrencyMode',
          RetailDiscountConcurrency,
          true
        ),
        /**
         * Static representation of the {@link priceComponentCodeGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_COMPONENT_CODE_GROUP: fieldBuilder.buildEdmTypeField(
          'PriceComponentCodeGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link linePriceAttributeGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_PRICE_ATTRIBUTE_GROUP: fieldBuilder.buildEdmTypeField(
          'LinePriceAttributeGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link headerPriceAttributeGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEADER_PRICE_ATTRIBUTE_GROUP: fieldBuilder.buildEdmTypeField(
          'HeaderPriceAttributeGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link priceComponent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_COMPONENT: fieldBuilder.buildEnumField(
          'PriceComponent',
          GupPriceComponent,
          true
        ),
        /**
         * Static representation of the {@link priority} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIORITY: fieldBuilder.buildEdmTypeField(
          'Priority',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link linePriceAttributeGroupAllEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_PRICE_ATTRIBUTE_GROUP_ALL_ENABLED: fieldBuilder.buildEnumField(
          'LinePriceAttributeGroupAllEnabled',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link lineGroupAll} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_GROUP_ALL: fieldBuilder.buildEnumField(
          'LineGroupAll',
          GupGroupAll,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PriceComponentCodeCombinations)
      };
    }

    return this._schema;
  }
}
