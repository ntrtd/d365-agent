/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { VendorGroups } from './VendorGroups';
import { VendorGroupsRequestBuilder } from './VendorGroupsRequestBuilder';
import { SupplyForecastEntriesApi } from './SupplyForecastEntriesApi';
import { ProspectsApi } from './ProspectsApi';
import { PaymentTermsApi } from './PaymentTermsApi';
import { TaxGroupsApi } from './TaxGroupsApi';
import { PlannedOrdersApi } from './PlannedOrdersApi';
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
  EnumField,
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class VendorGroupsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<VendorGroups<DeSerializersT>, DeSerializersT>
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
  ): VendorGroupsApi<DeSerializersT> {
    return new VendorGroupsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link supplyForecastEntries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SUPPLY_FORECAST_ENTRIES: OneToManyLink<
      VendorGroups<DeSerializersT>,
      DeSerializersT,
      SupplyForecastEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link prospects} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROSPECTS: OneToManyLink<
      VendorGroups<DeSerializersT>,
      DeSerializersT,
      ProspectsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link clearingPeriodPaymentTerm} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CLEARING_PERIOD_PAYMENT_TERM: OneToOneLink<
      VendorGroups<DeSerializersT>,
      DeSerializersT,
      PaymentTermsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link defaultPaymentTerm} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEFAULT_PAYMENT_TERM: OneToOneLink<
      VendorGroups<DeSerializersT>,
      DeSerializersT,
      PaymentTermsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link defaultTaxGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEFAULT_TAX_GROUP: OneToOneLink<
      VendorGroups<DeSerializersT>,
      DeSerializersT,
      TaxGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link plannedOrders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PLANNED_ORDERS: OneToManyLink<
      VendorGroups<DeSerializersT>,
      DeSerializersT,
      PlannedOrdersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      SupplyForecastEntriesApi<DeSerializersT>,
      ProspectsApi<DeSerializersT>,
      PaymentTermsApi<DeSerializersT>,
      PaymentTermsApi<DeSerializersT>,
      TaxGroupsApi<DeSerializersT>,
      PlannedOrdersApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      SUPPLY_FORECAST_ENTRIES: new OneToManyLink(
        'SupplyForecastEntries',
        this,
        linkedApis[0]
      ),
      PROSPECTS: new OneToManyLink('Prospects', this, linkedApis[1]),
      CLEARING_PERIOD_PAYMENT_TERM: new OneToOneLink(
        'ClearingPeriodPaymentTerm',
        this,
        linkedApis[2]
      ),
      DEFAULT_PAYMENT_TERM: new OneToOneLink(
        'DefaultPaymentTerm',
        this,
        linkedApis[3]
      ),
      DEFAULT_TAX_GROUP: new OneToOneLink(
        'DefaultTaxGroup',
        this,
        linkedApis[4]
      ),
      PLANNED_ORDERS: new OneToManyLink('PlannedOrders', this, linkedApis[5])
    };
    return this;
  }

  entityConstructor = VendorGroups;

  requestBuilder(): VendorGroupsRequestBuilder<DeSerializersT> {
    return new VendorGroupsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    VendorGroups<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<VendorGroups<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<VendorGroups<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof VendorGroups, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(VendorGroups, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      VendorGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VENDOR_GROUP_ID: OrderableEdmTypeField<
      VendorGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      VendorGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_TAX_GROUP_CODE: OrderableEdmTypeField<
      VendorGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCOUNTING_CURRENCY_EXCHANGE_RATE_TYPE: OrderableEdmTypeField<
      VendorGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_PAYMENT_TERM_NAME: OrderableEdmTypeField<
      VendorGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VENDOR_ACCOUNT_NUMBER_SEQUENCE: OrderableEdmTypeField<
      VendorGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CLEARING_PERIOD_PAYMENT_TERM_NAME: OrderableEdmTypeField<
      VendorGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_EXCLUDED_FROM_SEARCH_RESULTS: EnumField<
      VendorGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REPORTING_CURRENCY_EXCHANGE_RATE_TYPE: OrderableEdmTypeField<
      VendorGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      VendorGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_PUBLIC_SECTOR_IT: EnumField<
      VendorGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link supplyForecastEntries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SUPPLY_FORECAST_ENTRIES: OneToManyLink<
      VendorGroups<DeSerializersT>,
      DeSerializersT,
      SupplyForecastEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link prospects} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROSPECTS: OneToManyLink<
      VendorGroups<DeSerializersT>,
      DeSerializersT,
      ProspectsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link clearingPeriodPaymentTerm} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CLEARING_PERIOD_PAYMENT_TERM: OneToOneLink<
      VendorGroups<DeSerializersT>,
      DeSerializersT,
      PaymentTermsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link defaultPaymentTerm} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEFAULT_PAYMENT_TERM: OneToOneLink<
      VendorGroups<DeSerializersT>,
      DeSerializersT,
      PaymentTermsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link defaultTaxGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEFAULT_TAX_GROUP: OneToOneLink<
      VendorGroups<DeSerializersT>,
      DeSerializersT,
      TaxGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link plannedOrders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PLANNED_ORDERS: OneToManyLink<
      VendorGroups<DeSerializersT>,
      DeSerializersT,
      PlannedOrdersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<VendorGroups<DeSerializers>>;
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
         * Static representation of the {@link vendorGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'VendorGroupId',
          'Edm.String',
          false
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
         * Static representation of the {@link defaultTaxGroupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_TAX_GROUP_CODE: fieldBuilder.buildEdmTypeField(
          'DefaultTaxGroupCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link accountingCurrencyExchangeRateType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNTING_CURRENCY_EXCHANGE_RATE_TYPE: fieldBuilder.buildEdmTypeField(
          'AccountingCurrencyExchangeRateType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultPaymentTermName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_PAYMENT_TERM_NAME: fieldBuilder.buildEdmTypeField(
          'DefaultPaymentTermName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vendorAccountNumberSequence} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_ACCOUNT_NUMBER_SEQUENCE: fieldBuilder.buildEdmTypeField(
          'VendorAccountNumberSequence',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link clearingPeriodPaymentTermName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLEARING_PERIOD_PAYMENT_TERM_NAME: fieldBuilder.buildEdmTypeField(
          'ClearingPeriodPaymentTermName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isExcludedFromSearchResults} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_EXCLUDED_FROM_SEARCH_RESULTS: fieldBuilder.buildEnumField(
          'IsExcludedFromSearchResults',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link reportingCurrencyExchangeRateType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORTING_CURRENCY_EXCHANGE_RATE_TYPE: fieldBuilder.buildEdmTypeField(
          'ReportingCurrencyExchangeRateType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_DIMENSION_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'DefaultDimensionDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isPublicSectorIt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PUBLIC_SECTOR_IT: fieldBuilder.buildEnumField(
          'IsPublicSector_IT',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', VendorGroups)
      };
    }

    return this._schema;
  }
}
