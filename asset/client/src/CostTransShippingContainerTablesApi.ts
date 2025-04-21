/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CostTransShippingContainerTables } from './CostTransShippingContainerTables';
import { CostTransShippingContainerTablesRequestBuilder } from './CostTransShippingContainerTablesRequestBuilder';
import { ItmCostCategory } from './ItmCostCategory';
import { ItmCostApportionmentMethod } from './ItmCostApportionmentMethod';
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
export class CostTransShippingContainerTablesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<CostTransShippingContainerTables<DeSerializersT>, DeSerializersT>
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
  ): CostTransShippingContainerTablesApi<DeSerializersT> {
    return new CostTransShippingContainerTablesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = CostTransShippingContainerTables;

  requestBuilder(): CostTransShippingContainerTablesRequestBuilder<DeSerializersT> {
    return new CostTransShippingContainerTablesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    CostTransShippingContainerTables<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      CostTransShippingContainerTables<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CostTransShippingContainerTables<DeSerializersT>,
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
    typeof CostTransShippingContainerTables,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CostTransShippingContainerTables,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      CostTransShippingContainerTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SHIP_ID: OrderableEdmTypeField<
      CostTransShippingContainerTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SHIP_CONTAINER_ID: OrderableEdmTypeField<
      CostTransShippingContainerTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      CostTransShippingContainerTables<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SHIP_DATA_AREA: OrderableEdmTypeField<
      CostTransShippingContainerTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIP_COST_CATEGORY: EnumField<
      CostTransShippingContainerTables<DeSerializers>,
      DeSerializersT,
      ItmCostCategory,
      true,
      true
    >;
    LINK_LEG_ID: OrderableEdmTypeField<
      CostTransShippingContainerTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MIN_COST_AMOUNT: OrderableEdmTypeField<
      CostTransShippingContainerTables<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      CostTransShippingContainerTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIP_LEG_ID: OrderableEdmTypeField<
      CostTransShippingContainerTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINK_COST_TYPE_ID: OrderableEdmTypeField<
      CostTransShippingContainerTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COST_VALUE: OrderableEdmTypeField<
      CostTransShippingContainerTables<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SHIP_COST_TYPE_ID: OrderableEdmTypeField<
      CostTransShippingContainerTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    APPORTIONMENT_METHOD: EnumField<
      CostTransShippingContainerTables<DeSerializers>,
      DeSerializersT,
      ItmCostApportionmentMethod,
      true,
      true
    >;
    TAX_ITEM_GROUP: OrderableEdmTypeField<
      CostTransShippingContainerTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AGGREGATED_COST: EnumField<
      CostTransShippingContainerTables<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<CostTransShippingContainerTables<DeSerializers>>;
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
         * Static representation of the {@link shipId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_ID: fieldBuilder.buildEdmTypeField('ShipId', 'Edm.String', false),
        /**
         * Static representation of the {@link shipContainerId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_CONTAINER_ID: fieldBuilder.buildEdmTypeField(
          'ShipContainerId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link lineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'LineNumber',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link shipDataArea} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_DATA_AREA: fieldBuilder.buildEdmTypeField(
          'ShipDataArea',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shipCostCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_COST_CATEGORY: fieldBuilder.buildEnumField(
          'ShipCostCategory',
          ItmCostCategory,
          true
        ),
        /**
         * Static representation of the {@link linkLegId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINK_LEG_ID: fieldBuilder.buildEdmTypeField(
          'LinkLegId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link minCostAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MIN_COST_AMOUNT: fieldBuilder.buildEdmTypeField(
          'MinCostAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link currencyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY_CODE: fieldBuilder.buildEdmTypeField(
          'CurrencyCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shipLegId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_LEG_ID: fieldBuilder.buildEdmTypeField(
          'ShipLegId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link linkCostTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINK_COST_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'LinkCostTypeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link costValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_VALUE: fieldBuilder.buildEdmTypeField(
          'CostValue',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link shipCostTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_COST_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'ShipCostTypeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link apportionmentMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPORTIONMENT_METHOD: fieldBuilder.buildEnumField(
          'ApportionmentMethod',
          ItmCostApportionmentMethod,
          true
        ),
        /**
         * Static representation of the {@link taxItemGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_ITEM_GROUP: fieldBuilder.buildEdmTypeField(
          'TaxItemGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link aggregatedCost} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGGREGATED_COST: fieldBuilder.buildEnumField(
          'AggregatedCost',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CostTransShippingContainerTables)
      };
    }

    return this._schema;
  }
}
