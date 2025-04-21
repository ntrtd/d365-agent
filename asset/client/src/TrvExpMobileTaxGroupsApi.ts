/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TrvExpMobileTaxGroups } from './TrvExpMobileTaxGroups';
import { TrvExpMobileTaxGroupsRequestBuilder } from './TrvExpMobileTaxGroupsRequestBuilder';
import { FillVatDueDatePeriod } from './FillVatDueDatePeriod';
import { TaxGroupRounding } from './TaxGroupRounding';
import { NoYes } from './NoYes';
import { FillVatDueDateW } from './FillVatDueDateW';
import { FillVatDueDateBasedOn } from './FillVatDueDateBasedOn';
import { TaxPrintDetail } from './TaxPrintDetail';
import { TaxMasterDataSource } from './TaxMasterDataSource';
import { FillSalesDateW } from './FillSalesDateW';
import { TaxGroupSetup } from './TaxGroupSetup';
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
export class TrvExpMobileTaxGroupsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<TrvExpMobileTaxGroups<DeSerializersT>, DeSerializersT>
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
  ): TrvExpMobileTaxGroupsApi<DeSerializersT> {
    return new TrvExpMobileTaxGroupsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = TrvExpMobileTaxGroups;

  requestBuilder(): TrvExpMobileTaxGroupsRequestBuilder<DeSerializersT> {
    return new TrvExpMobileTaxGroupsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    TrvExpMobileTaxGroups<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<TrvExpMobileTaxGroups<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    TrvExpMobileTaxGroups<DeSerializersT>,
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
    typeof TrvExpMobileTaxGroups,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        TrvExpMobileTaxGroups,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      TrvExpMobileTaxGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SALES_TAX_GROUP: OrderableEdmTypeField<
      TrvExpMobileTaxGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NUMBER_OF_PERIODS: OrderableEdmTypeField<
      TrvExpMobileTaxGroups<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PERIOD_INTERVAL_UNIT: EnumField<
      TrvExpMobileTaxGroups<DeSerializers>,
      DeSerializersT,
      FillVatDueDatePeriod,
      true,
      true
    >;
    ROUNDING_BY: EnumField<
      TrvExpMobileTaxGroups<DeSerializers>,
      DeSerializersT,
      TaxGroupRounding,
      true,
      true
    >;
    MANDATORY_SERVICE_TARIFF_NUMBER: EnumField<
      TrvExpMobileTaxGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DATE_OF_VAT_REGISTER_FILLING: EnumField<
      TrvExpMobileTaxGroups<DeSerializers>,
      DeSerializersT,
      FillVatDueDateW,
      true,
      true
    >;
    BASED_ON_DATE: EnumField<
      TrvExpMobileTaxGroups<DeSerializers>,
      DeSerializersT,
      FillVatDueDateBasedOn,
      true,
      true
    >;
    MCR_COUNTRY: OrderableEdmTypeField<
      TrvExpMobileTaxGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SEARCH_FIELD_2: OrderableEdmTypeField<
      TrvExpMobileTaxGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EU_TRADE: EnumField<
      TrvExpMobileTaxGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SPLIT_PAYMENT: EnumField<
      TrvExpMobileTaxGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      TrvExpMobileTaxGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MCR_ZIP_CODE: OrderableEdmTypeField<
      TrvExpMobileTaxGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRINT: EnumField<
      TrvExpMobileTaxGroups<DeSerializers>,
      DeSerializersT,
      TaxPrintDetail,
      true,
      true
    >;
    REVERSE_SALES_TAX_ON_CASH_DISCOUNT: EnumField<
      TrvExpMobileTaxGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SOURCE: EnumField<
      TrvExpMobileTaxGroups<DeSerializers>,
      DeSerializersT,
      TaxMasterDataSource,
      true,
      true
    >;
    MANDATORY_SALES_DATE: EnumField<
      TrvExpMobileTaxGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SALES_DATE_FILLING: EnumField<
      TrvExpMobileTaxGroups<DeSerializers>,
      DeSerializersT,
      FillSalesDateW,
      true,
      true
    >;
    COUNTY: OrderableEdmTypeField<
      TrvExpMobileTaxGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSIT_TAX_GROUP: OrderableEdmTypeField<
      TrvExpMobileTaxGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CITY: OrderableEdmTypeField<
      TrvExpMobileTaxGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SEARCH_FIELD_1: OrderableEdmTypeField<
      TrvExpMobileTaxGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATE: OrderableEdmTypeField<
      TrvExpMobileTaxGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_TAX_GROUP_SETUP: EnumField<
      TrvExpMobileTaxGroups<DeSerializers>,
      DeSerializersT,
      TaxGroupSetup,
      true,
      true
    >;
    ALL_FIELDS: AllFields<TrvExpMobileTaxGroups<DeSerializers>>;
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
         * Static representation of the {@link salesTaxGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_TAX_GROUP: fieldBuilder.buildEdmTypeField(
          'SalesTaxGroup',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link numberOfPeriods} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_OF_PERIODS: fieldBuilder.buildEdmTypeField(
          'NumberOfPeriods',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link periodIntervalUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERIOD_INTERVAL_UNIT: fieldBuilder.buildEnumField(
          'PeriodIntervalUnit',
          FillVatDueDatePeriod,
          true
        ),
        /**
         * Static representation of the {@link roundingBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROUNDING_BY: fieldBuilder.buildEnumField(
          'RoundingBy',
          TaxGroupRounding,
          true
        ),
        /**
         * Static representation of the {@link mandatoryServiceTariffNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MANDATORY_SERVICE_TARIFF_NUMBER: fieldBuilder.buildEnumField(
          'MandatoryServiceTariffNumber',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link dateOfVatRegisterFilling} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE_OF_VAT_REGISTER_FILLING: fieldBuilder.buildEnumField(
          'DateOfVATRegisterFilling',
          FillVatDueDateW,
          true
        ),
        /**
         * Static representation of the {@link basedOnDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BASED_ON_DATE: fieldBuilder.buildEnumField(
          'BasedOnDate',
          FillVatDueDateBasedOn,
          true
        ),
        /**
         * Static representation of the {@link mcrCountry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MCR_COUNTRY: fieldBuilder.buildEdmTypeField(
          'MCRCountry',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link searchField2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEARCH_FIELD_2: fieldBuilder.buildEdmTypeField(
          'SearchField2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link euTrade} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EU_TRADE: fieldBuilder.buildEnumField('EUTrade', NoYes, true),
        /**
         * Static representation of the {@link splitPayment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SPLIT_PAYMENT: fieldBuilder.buildEnumField('SplitPayment', NoYes, true),
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
         * Static representation of the {@link mcrZipCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MCR_ZIP_CODE: fieldBuilder.buildEdmTypeField(
          'MCRZipCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link print} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINT: fieldBuilder.buildEnumField('Print', TaxPrintDetail, true),
        /**
         * Static representation of the {@link reverseSalesTaxOnCashDiscount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REVERSE_SALES_TAX_ON_CASH_DISCOUNT: fieldBuilder.buildEnumField(
          'ReverseSalesTaxOnCashDiscount',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link source} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE: fieldBuilder.buildEnumField(
          'Source',
          TaxMasterDataSource,
          true
        ),
        /**
         * Static representation of the {@link mandatorySalesDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MANDATORY_SALES_DATE: fieldBuilder.buildEnumField(
          'MandatorySalesDate',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link salesDateFilling} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_DATE_FILLING: fieldBuilder.buildEnumField(
          'SalesDateFilling',
          FillSalesDateW,
          true
        ),
        /**
         * Static representation of the {@link county} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTY: fieldBuilder.buildEdmTypeField('County', 'Edm.String', true),
        /**
         * Static representation of the {@link transitTaxGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSIT_TAX_GROUP: fieldBuilder.buildEdmTypeField(
          'TransitTaxGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link city} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CITY: fieldBuilder.buildEdmTypeField('City', 'Edm.String', true),
        /**
         * Static representation of the {@link searchField1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEARCH_FIELD_1: fieldBuilder.buildEdmTypeField(
          'SearchField1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link state} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATE: fieldBuilder.buildEdmTypeField('State', 'Edm.String', true),
        /**
         * Static representation of the {@link salesTaxGroupSetup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_TAX_GROUP_SETUP: fieldBuilder.buildEnumField(
          'SalesTaxGroupSetup',
          TaxGroupSetup,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', TrvExpMobileTaxGroups)
      };
    }

    return this._schema;
  }
}
