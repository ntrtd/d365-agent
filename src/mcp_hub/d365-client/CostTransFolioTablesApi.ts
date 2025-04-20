/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CostTransFolioTables } from './CostTransFolioTables';
import { CostTransFolioTablesRequestBuilder } from './CostTransFolioTablesRequestBuilder';
import { ItmCostCategory } from './ItmCostCategory';
import { ItmCostApportionmentMethod } from './ItmCostApportionmentMethod';
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
export class CostTransFolioTablesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<CostTransFolioTables<DeSerializersT>, DeSerializersT>
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
  ): CostTransFolioTablesApi<DeSerializersT> {
    return new CostTransFolioTablesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = CostTransFolioTables;

  requestBuilder(): CostTransFolioTablesRequestBuilder<DeSerializersT> {
    return new CostTransFolioTablesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CostTransFolioTables<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<CostTransFolioTables<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CostTransFolioTables<DeSerializersT>,
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
    typeof CostTransFolioTables,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CostTransFolioTables,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      CostTransFolioTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SHIP_FOLIO_ID: OrderableEdmTypeField<
      CostTransFolioTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      CostTransFolioTables<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SHIP_DATA_AREA: OrderableEdmTypeField<
      CostTransFolioTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIP_COST_CATEGORY: EnumField<
      CostTransFolioTables<DeSerializers>,
      DeSerializersT,
      ItmCostCategory,
      true,
      true
    >;
    MIN_COST_AMOUNT: OrderableEdmTypeField<
      CostTransFolioTables<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      CostTransFolioTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINK_COST_TYPE_ID: OrderableEdmTypeField<
      CostTransFolioTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COST_VALUE: OrderableEdmTypeField<
      CostTransFolioTables<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SHIP_COST_TYPE_ID: OrderableEdmTypeField<
      CostTransFolioTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    APPORTIONMENT_METHOD: EnumField<
      CostTransFolioTables<DeSerializers>,
      DeSerializersT,
      ItmCostApportionmentMethod,
      true,
      true
    >;
    TAX_ITEM_GROUP: OrderableEdmTypeField<
      CostTransFolioTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<CostTransFolioTables<DeSerializers>>;
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
         * Static representation of the {@link shipFolioId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_FOLIO_ID: fieldBuilder.buildEdmTypeField(
          'ShipFolioId',
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CostTransFolioTables)
      };
    }

    return this._schema;
  }
}
