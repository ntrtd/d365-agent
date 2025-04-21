/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProjAdvancedJournalLineHours } from './ProjAdvancedJournalLineHours';
import { ProjAdvancedJournalLineHoursRequestBuilder } from './ProjAdvancedJournalLineHoursRequestBuilder';
import { NoYes } from './NoYes';
import { ProjTransType } from './ProjTransType';
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
export class ProjAdvancedJournalLineHoursApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ProjAdvancedJournalLineHours<DeSerializersT>, DeSerializersT>
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
  ): ProjAdvancedJournalLineHoursApi<DeSerializersT> {
    return new ProjAdvancedJournalLineHoursApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ProjAdvancedJournalLineHours;

  requestBuilder(): ProjAdvancedJournalLineHoursRequestBuilder<DeSerializersT> {
    return new ProjAdvancedJournalLineHoursRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProjAdvancedJournalLineHours<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ProjAdvancedJournalLineHours<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProjAdvancedJournalLineHours<DeSerializersT>,
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
    typeof ProjAdvancedJournalLineHours,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProjAdvancedJournalLineHours,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ProjAdvancedJournalLineHours<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      ProjAdvancedJournalLineHours<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PROJ_ADVANCED_JOURNAL: OrderableEdmTypeField<
      ProjAdvancedJournalLineHours<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    PROJ_DATA_AREA_ID: OrderableEdmTypeField<
      ProjAdvancedJournalLineHours<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POST_ERROR: EnumField<
      ProjAdvancedJournalLineHours<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ACCOUNTING_DATE: OrderableEdmTypeField<
      ProjAdvancedJournalLineHours<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PROJ_ID: OrderableEdmTypeField<
      ProjAdvancedJournalLineHours<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJ_CATEGORY_ID: OrderableEdmTypeField<
      ProjAdvancedJournalLineHours<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACTIVITY_NUMBER: OrderableEdmTypeField<
      ProjAdvancedJournalLineHours<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TEXT: OrderableEdmTypeField<
      ProjAdvancedJournalLineHours<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRICE_CURRENCY: OrderableEdmTypeField<
      ProjAdvancedJournalLineHours<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTENDED_PRICE: OrderableEdmTypeField<
      ProjAdvancedJournalLineHours<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EXTENDED_COST: OrderableEdmTypeField<
      ProjAdvancedJournalLineHours<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRICE_EXCHANGE_RATE: OrderableEdmTypeField<
      ProjAdvancedJournalLineHours<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CONTRACT_LINE_ID: OrderableEdmTypeField<
      ProjAdvancedJournalLineHours<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_GROUP: OrderableEdmTypeField<
      ProjAdvancedJournalLineHours<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VOUCHER: OrderableEdmTypeField<
      ProjAdvancedJournalLineHours<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANS_TYPE: EnumField<
      ProjAdvancedJournalLineHours<DeSerializers>,
      DeSerializersT,
      ProjTransType,
      true,
      true
    >;
    UNIT_PRICE: OrderableEdmTypeField<
      ProjAdvancedJournalLineHours<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LINE_PROPERTY_ID: OrderableEdmTypeField<
      ProjAdvancedJournalLineHours<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OVERRIDE_SALES_TAX: EnumField<
      ProjAdvancedJournalLineHours<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TAX_ITEM_GROUP: OrderableEdmTypeField<
      ProjAdvancedJournalLineHours<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNIT_COST: OrderableEdmTypeField<
      ProjAdvancedJournalLineHours<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PROJECT_SALES_TAX_GROUP: OrderableEdmTypeField<
      ProjAdvancedJournalLineHours<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJECT_SALES_TAX_ITEM_GROUP: OrderableEdmTypeField<
      ProjAdvancedJournalLineHours<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QUANTITY: OrderableEdmTypeField<
      ProjAdvancedJournalLineHours<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<ProjAdvancedJournalLineHours<DeSerializers>>;
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
         * Static representation of the {@link lineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'LineNumber',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link projAdvancedJournal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_ADVANCED_JOURNAL: fieldBuilder.buildEdmTypeField(
          'ProjAdvancedJournal',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link projDataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'ProjDataAreaId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link postError} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POST_ERROR: fieldBuilder.buildEnumField('PostError', NoYes, true),
        /**
         * Static representation of the {@link accountingDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNTING_DATE: fieldBuilder.buildEdmTypeField(
          'AccountingDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link projId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_ID: fieldBuilder.buildEdmTypeField('ProjId', 'Edm.String', true),
        /**
         * Static representation of the {@link projCategoryId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_CATEGORY_ID: fieldBuilder.buildEdmTypeField(
          'ProjCategoryId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link activityNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVITY_NUMBER: fieldBuilder.buildEdmTypeField(
          'ActivityNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link text} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TEXT: fieldBuilder.buildEdmTypeField('Text', 'Edm.String', true),
        /**
         * Static representation of the {@link priceCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_CURRENCY: fieldBuilder.buildEdmTypeField(
          'PriceCurrency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link extendedPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTENDED_PRICE: fieldBuilder.buildEdmTypeField(
          'ExtendedPrice',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link extendedCost} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTENDED_COST: fieldBuilder.buildEdmTypeField(
          'ExtendedCost',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link priceExchangeRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_EXCHANGE_RATE: fieldBuilder.buildEdmTypeField(
          'PriceExchangeRate',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link contractLineId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTRACT_LINE_ID: fieldBuilder.buildEdmTypeField(
          'ContractLineId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_GROUP: fieldBuilder.buildEdmTypeField(
          'TaxGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link voucher} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VOUCHER: fieldBuilder.buildEdmTypeField('Voucher', 'Edm.String', true),
        /**
         * Static representation of the {@link transType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANS_TYPE: fieldBuilder.buildEnumField(
          'TransType',
          ProjTransType,
          true
        ),
        /**
         * Static representation of the {@link unitPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_PRICE: fieldBuilder.buildEdmTypeField(
          'UnitPrice',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link linePropertyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_PROPERTY_ID: fieldBuilder.buildEdmTypeField(
          'LinePropertyId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link overrideSalesTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OVERRIDE_SALES_TAX: fieldBuilder.buildEnumField(
          'OverrideSalesTax',
          NoYes,
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
         * Static representation of the {@link unitCost} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_COST: fieldBuilder.buildEdmTypeField(
          'UnitCost',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link projectSalesTaxGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_SALES_TAX_GROUP: fieldBuilder.buildEdmTypeField(
          'ProjectSalesTaxGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link projectSalesTaxItemGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_SALES_TAX_ITEM_GROUP: fieldBuilder.buildEdmTypeField(
          'ProjectSalesTaxItemGroup',
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
        ALL_FIELDS: new AllFields('*', ProjAdvancedJournalLineHours)
      };
    }

    return this._schema;
  }
}
