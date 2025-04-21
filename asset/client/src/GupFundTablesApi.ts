/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { GupFundTables } from './GupFundTables';
import { GupFundTablesRequestBuilder } from './GupFundTablesRequestBuilder';
import { TamFundType } from './TamFundType';
import { NoYes } from './NoYes';
import { GupFundValueType } from './GupFundValueType';
import { GupFundSourceType } from './GupFundSourceType';
import { TamFundStatus } from './TamFundStatus';
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
export class GupFundTablesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<GupFundTables<DeSerializersT>, DeSerializersT>
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
  ): GupFundTablesApi<DeSerializersT> {
    return new GupFundTablesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = GupFundTables;

  requestBuilder(): GupFundTablesRequestBuilder<DeSerializersT> {
    return new GupFundTablesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    GupFundTables<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<GupFundTables<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<GupFundTables<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof GupFundTables, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(GupFundTables, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      GupFundTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FUND_ID: OrderableEdmTypeField<
      GupFundTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      GupFundTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DETAILS: OrderableEdmTypeField<
      GupFundTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USAGE: OrderableEdmTypeField<
      GupFundTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TO_DATE: OrderableEdmTypeField<
      GupFundTables<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      GupFundTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNIT_OF_MEASURE_SYMBOL: OrderableEdmTypeField<
      GupFundTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FROM_DATE: OrderableEdmTypeField<
      GupFundTables<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TYPE: EnumField<
      GupFundTables<DeSerializers>,
      DeSerializersT,
      TamFundType,
      true,
      true
    >;
    ORDERED_AMT: OrderableEdmTypeField<
      GupFundTables<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REBATE_RELATED: EnumField<
      GupFundTables<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FUND_VALUE_TYPE: EnumField<
      GupFundTables<DeSerializers>,
      DeSerializersT,
      GupFundValueType,
      true,
      true
    >;
    INVOICED_AMT: OrderableEdmTypeField<
      GupFundTables<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    FUND_SOURCE_TYPE: EnumField<
      GupFundTables<DeSerializers>,
      DeSerializersT,
      GupFundSourceType,
      true,
      true
    >;
    STATUS: EnumField<
      GupFundTables<DeSerializers>,
      DeSerializersT,
      TamFundStatus,
      true,
      true
    >;
    TOTAL_FUND_AMT: OrderableEdmTypeField<
      GupFundTables<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<GupFundTables<DeSerializers>>;
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
         * Static representation of the {@link fundId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FUND_ID: fieldBuilder.buildEdmTypeField('FundID', 'Edm.String', false),
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
         * Static representation of the {@link details} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DETAILS: fieldBuilder.buildEdmTypeField('Details', 'Edm.String', true),
        /**
         * Static representation of the {@link usage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USAGE: fieldBuilder.buildEdmTypeField('Usage', 'Edm.String', true),
        /**
         * Static representation of the {@link toDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_DATE: fieldBuilder.buildEdmTypeField(
          'ToDate',
          'Edm.DateTimeOffset',
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
         * Static representation of the {@link unitOfMeasureSymbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_OF_MEASURE_SYMBOL: fieldBuilder.buildEdmTypeField(
          'UnitOfMeasureSymbol',
          'Edm.String',
          true
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
         * Static representation of the {@link type} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE: fieldBuilder.buildEnumField('Type', TamFundType, true),
        /**
         * Static representation of the {@link orderedAmt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDERED_AMT: fieldBuilder.buildEdmTypeField(
          'OrderedAmt',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link rebateRelated} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REBATE_RELATED: fieldBuilder.buildEnumField(
          'RebateRelated',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link fundValueType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FUND_VALUE_TYPE: fieldBuilder.buildEnumField(
          'FundValueType',
          GupFundValueType,
          true
        ),
        /**
         * Static representation of the {@link invoicedAmt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICED_AMT: fieldBuilder.buildEdmTypeField(
          'InvoicedAmt',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link fundSourceType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FUND_SOURCE_TYPE: fieldBuilder.buildEnumField(
          'FundSourceType',
          GupFundSourceType,
          true
        ),
        /**
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEnumField('Status', TamFundStatus, true),
        /**
         * Static representation of the {@link totalFundAmt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_FUND_AMT: fieldBuilder.buildEdmTypeField(
          'TotalFundAmt',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', GupFundTables)
      };
    }

    return this._schema;
  }
}
