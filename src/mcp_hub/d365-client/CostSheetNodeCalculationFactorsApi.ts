/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CostSheetNodeCalculationFactors } from './CostSheetNodeCalculationFactors';
import { CostSheetNodeCalculationFactorsRequestBuilder } from './CostSheetNodeCalculationFactorsRequestBuilder';
import { CostingVersionStatus } from './CostingVersionStatus';
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
export class CostSheetNodeCalculationFactorsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<CostSheetNodeCalculationFactors<DeSerializersT>, DeSerializersT>
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
  ): CostSheetNodeCalculationFactorsApi<DeSerializersT> {
    return new CostSheetNodeCalculationFactorsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = CostSheetNodeCalculationFactors;

  requestBuilder(): CostSheetNodeCalculationFactorsRequestBuilder<DeSerializersT> {
    return new CostSheetNodeCalculationFactorsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    CostSheetNodeCalculationFactors<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      CostSheetNodeCalculationFactors<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CostSheetNodeCalculationFactors<DeSerializersT>,
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
    typeof CostSheetNodeCalculationFactors,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CostSheetNodeCalculationFactors,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      CostSheetNodeCalculationFactors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COST_SHEET_NODE_NAME: OrderableEdmTypeField<
      CostSheetNodeCalculationFactors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRICE_SITE_ID: OrderableEdmTypeField<
      CostSheetNodeCalculationFactors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FROM_DATE: OrderableEdmTypeField<
      CostSheetNodeCalculationFactors<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    COSTING_VERSION_ID: OrderableEdmTypeField<
      CostSheetNodeCalculationFactors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ITEM_NUMBER: OrderableEdmTypeField<
      CostSheetNodeCalculationFactors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_GROUP_ID: OrderableEdmTypeField<
      CostSheetNodeCalculationFactors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SURCHARGE_PERCENTAGE: OrderableEdmTypeField<
      CostSheetNodeCalculationFactors<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ACCOUNTING_CURRENCY_RATE_AMOUNT: OrderableEdmTypeField<
      CostSheetNodeCalculationFactors<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ACCOUNTING_CURRENCY_UNIT_BASED_AMOUNT: OrderableEdmTypeField<
      CostSheetNodeCalculationFactors<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    COSTING_VERSION_STATUS: EnumField<
      CostSheetNodeCalculationFactors<DeSerializers>,
      DeSerializersT,
      CostingVersionStatus,
      true,
      true
    >;
    ALL_FIELDS: AllFields<CostSheetNodeCalculationFactors<DeSerializers>>;
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
         * Static representation of the {@link costSheetNodeName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_SHEET_NODE_NAME: fieldBuilder.buildEdmTypeField(
          'CostSheetNodeName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link priceSiteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_SITE_ID: fieldBuilder.buildEdmTypeField(
          'PriceSiteId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link fromDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FROM_DATE: fieldBuilder.buildEdmTypeField(
          'FromDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link costingVersionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COSTING_VERSION_ID: fieldBuilder.buildEdmTypeField(
          'CostingVersionId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link itemNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_NUMBER: fieldBuilder.buildEdmTypeField(
          'ItemNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'ProductGroupId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link surchargePercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SURCHARGE_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'SurchargePercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link accountingCurrencyRateAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNTING_CURRENCY_RATE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'AccountingCurrencyRateAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link accountingCurrencyUnitBasedAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNTING_CURRENCY_UNIT_BASED_AMOUNT: fieldBuilder.buildEdmTypeField(
          'AccountingCurrencyUnitBasedAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link costingVersionStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COSTING_VERSION_STATUS: fieldBuilder.buildEnumField(
          'CostingVersionStatus',
          CostingVersionStatus,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CostSheetNodeCalculationFactors)
      };
    }

    return this._schema;
  }
}
