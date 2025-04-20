/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { MainAccountLegalEntities } from './MainAccountLegalEntities';
import { MainAccountLegalEntitiesRequestBuilder } from './MainAccountLegalEntitiesRequestBuilder';
import { ExchangeRateTypesApi } from './ExchangeRateTypesApi';
import { DimensionSetsApi } from './DimensionSetsApi';
import { NoYes } from './NoYes';
import { FieldControl } from './FieldControl';
import { SalesPurch } from './SalesPurch';
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
export class MainAccountLegalEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<MainAccountLegalEntities<DeSerializersT>, DeSerializersT>
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
  ): MainAccountLegalEntitiesApi<DeSerializersT> {
    return new MainAccountLegalEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link exchangeRateType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EXCHANGE_RATE_TYPE: OneToOneLink<
      MainAccountLegalEntities<DeSerializersT>,
      DeSerializersT,
      ExchangeRateTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      MainAccountLegalEntities<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ExchangeRateTypesApi<DeSerializersT>,
      DimensionSetsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      EXCHANGE_RATE_TYPE: new OneToOneLink(
        'ExchangeRateType',
        this,
        linkedApis[0]
      ),
      DIMENSION_SET: new OneToOneLink('DimensionSet', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = MainAccountLegalEntities;

  requestBuilder(): MainAccountLegalEntitiesRequestBuilder<DeSerializersT> {
    return new MainAccountLegalEntitiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    MainAccountLegalEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      MainAccountLegalEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    MainAccountLegalEntities<DeSerializersT>,
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
    typeof MainAccountLegalEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        MainAccountLegalEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    MAIN_ACCOUNT_ID: OrderableEdmTypeField<
      MainAccountLegalEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CHART_OF_ACCOUNTS: OrderableEdmTypeField<
      MainAccountLegalEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LEGAL_ENTITY_ID: OrderableEdmTypeField<
      MainAccountLegalEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ACTIVE_TO: OrderableEdmTypeField<
      MainAccountLegalEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ACTIVE_FROM: OrderableEdmTypeField<
      MainAccountLegalEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    IS_EXEMPT: EnumField<
      MainAccountLegalEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_SUSPENDED: EnumField<
      MainAccountLegalEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    VALIDATE_SALES_TAX: EnumField<
      MainAccountLegalEntities<DeSerializers>,
      DeSerializersT,
      FieldControl,
      true,
      true
    >;
    SALES_TAX_GROUP: OrderableEdmTypeField<
      MainAccountLegalEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DO_NOT_ALLOW_MANUAL_ENTRY: EnumField<
      MainAccountLegalEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EXCHANGE_ADJUSTMENT_RATE_TYPE: OrderableEdmTypeField<
      MainAccountLegalEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_TABLE_LEGAL_ENTITY: OrderableEdmTypeField<
      MainAccountLegalEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AUTO_ALLOCATE: EnumField<
      MainAccountLegalEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ITEM_SALES_TAX_GROUP: OrderableEdmTypeField<
      MainAccountLegalEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_TAX_CODE: OrderableEdmTypeField<
      MainAccountLegalEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FIXED_DIMENSIONS_DISPLAY_VALUE: OrderableEdmTypeField<
      MainAccountLegalEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_TAX_DIRECTION: EnumField<
      MainAccountLegalEntities<DeSerializers>,
      DeSerializersT,
      SalesPurch,
      true,
      true
    >;
    ITEM_SALES_TAX_GROUP_HEADING_LEGAL_ENTITY: OrderableEdmTypeField<
      MainAccountLegalEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      MainAccountLegalEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REPORTING_EXCHANGE_ADJUSTMENT_RATE_TYPE: OrderableEdmTypeField<
      MainAccountLegalEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link exchangeRateType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EXCHANGE_RATE_TYPE: OneToOneLink<
      MainAccountLegalEntities<DeSerializersT>,
      DeSerializersT,
      ExchangeRateTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      MainAccountLegalEntities<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<MainAccountLegalEntities<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link mainAccountId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAIN_ACCOUNT_ID: fieldBuilder.buildEdmTypeField(
          'MainAccountId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link chartOfAccounts} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHART_OF_ACCOUNTS: fieldBuilder.buildEdmTypeField(
          'ChartOfAccounts',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link legalEntityId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEGAL_ENTITY_ID: fieldBuilder.buildEdmTypeField(
          'LegalEntityId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link activeTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVE_TO: fieldBuilder.buildEdmTypeField(
          'ActiveTo',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link activeFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVE_FROM: fieldBuilder.buildEdmTypeField(
          'ActiveFrom',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link isExempt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_EXEMPT: fieldBuilder.buildEnumField('IsExempt', NoYes, true),
        /**
         * Static representation of the {@link isSuspended} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SUSPENDED: fieldBuilder.buildEnumField('IsSuspended', NoYes, true),
        /**
         * Static representation of the {@link validateSalesTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALIDATE_SALES_TAX: fieldBuilder.buildEnumField(
          'ValidateSalesTax',
          FieldControl,
          true
        ),
        /**
         * Static representation of the {@link salesTaxGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_TAX_GROUP: fieldBuilder.buildEdmTypeField(
          'SalesTaxGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link doNotAllowManualEntry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DO_NOT_ALLOW_MANUAL_ENTRY: fieldBuilder.buildEnumField(
          'DoNotAllowManualEntry',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link exchangeAdjustmentRateType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCHANGE_ADJUSTMENT_RATE_TYPE: fieldBuilder.buildEdmTypeField(
          'ExchangeAdjustmentRateType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxTableLegalEntity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_TABLE_LEGAL_ENTITY: fieldBuilder.buildEdmTypeField(
          'TaxTableLegalEntity',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link autoAllocate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTO_ALLOCATE: fieldBuilder.buildEnumField('AutoAllocate', NoYes, true),
        /**
         * Static representation of the {@link itemSalesTaxGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_SALES_TAX_GROUP: fieldBuilder.buildEdmTypeField(
          'ItemSalesTaxGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesTaxCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_TAX_CODE: fieldBuilder.buildEdmTypeField(
          'SalesTaxCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fixedDimensionsDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIXED_DIMENSIONS_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'FixedDimensionsDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesTaxDirection} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_TAX_DIRECTION: fieldBuilder.buildEnumField(
          'SalesTaxDirection',
          SalesPurch,
          true
        ),
        /**
         * Static representation of the {@link itemSalesTaxGroupHeadingLegalEntity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_SALES_TAX_GROUP_HEADING_LEGAL_ENTITY:
          fieldBuilder.buildEdmTypeField(
            'ItemSalesTaxGroupHeadingLegalEntity',
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
         * Static representation of the {@link reportingExchangeAdjustmentRateType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORTING_EXCHANGE_ADJUSTMENT_RATE_TYPE: fieldBuilder.buildEdmTypeField(
          'ReportingExchangeAdjustmentRateType',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', MainAccountLegalEntities)
      };
    }

    return this._schema;
  }
}
