/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ByProductTables } from './ByProductTables';
import { ByProductTablesRequestBuilder } from './ByProductTablesRequestBuilder';
import { ProdByProdCostingRu } from './ProdByProdCostingRu';
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
export class ByProductTablesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ByProductTables<DeSerializersT>, DeSerializersT>
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
  ): ByProductTablesApi<DeSerializersT> {
    return new ByProductTablesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ByProductTables;

  requestBuilder(): ByProductTablesRequestBuilder<DeSerializersT> {
    return new ByProductTablesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ByProductTables<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ByProductTables<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ByProductTables<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof ByProductTables, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ByProductTables,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ByProductTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MAIN_PRODUCT: OrderableEdmTypeField<
      ByProductTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DIMENSION_NUMBER_MAIN: OrderableEdmTypeField<
      ByProductTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ITEM_ID_BY_PROD: OrderableEdmTypeField<
      ByProductTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DIMENSION_NUMBER_BY_PROD: OrderableEdmTypeField<
      ByProductTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PERCENTAGE: OrderableEdmTypeField<
      ByProductTables<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    COSTING_RULE: EnumField<
      ByProductTables<DeSerializers>,
      DeSerializersT,
      ProdByProdCostingRu,
      true,
      true
    >;
    ALL_FIELDS: AllFields<ByProductTables<DeSerializers>>;
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
         * Static representation of the {@link mainProduct} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAIN_PRODUCT: fieldBuilder.buildEdmTypeField(
          'MainProduct',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link dimensionNumberMain} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIMENSION_NUMBER_MAIN: fieldBuilder.buildEdmTypeField(
          'DimensionNumberMain',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link itemIdByProd} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_ID_BY_PROD: fieldBuilder.buildEdmTypeField(
          'ItemIdByProd',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link dimensionNumberByProd} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIMENSION_NUMBER_BY_PROD: fieldBuilder.buildEdmTypeField(
          'DimensionNumberByProd',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link percentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'Percentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link costingRule} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COSTING_RULE: fieldBuilder.buildEnumField(
          'CostingRule',
          ProdByProdCostingRu,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ByProductTables)
      };
    }

    return this._schema;
  }
}
