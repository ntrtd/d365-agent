/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SubBillSupportRenewalProcessLines } from './SubBillSupportRenewalProcessLines';
import { SubBillSupportRenewalProcessLinesRequestBuilder } from './SubBillSupportRenewalProcessLinesRequestBuilder';
import { NoYes } from './NoYes';
import { SubBillRenewalCalculationMethod } from './SubBillRenewalCalculationMethod';
import { SubBillSupportCalculationMethod } from './SubBillSupportCalculationMethod';
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
export class SubBillSupportRenewalProcessLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<SubBillSupportRenewalProcessLines<DeSerializersT>, DeSerializersT>
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
  ): SubBillSupportRenewalProcessLinesApi<DeSerializersT> {
    return new SubBillSupportRenewalProcessLinesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = SubBillSupportRenewalProcessLines;

  requestBuilder(): SubBillSupportRenewalProcessLinesRequestBuilder<DeSerializersT> {
    return new SubBillSupportRenewalProcessLinesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    SubBillSupportRenewalProcessLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      SubBillSupportRenewalProcessLines<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SubBillSupportRenewalProcessLines<DeSerializersT>,
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
    typeof SubBillSupportRenewalProcessLines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SubBillSupportRenewalProcessLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      SubBillSupportRenewalProcessLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SALES_ID: OrderableEdmTypeField<
      SubBillSupportRenewalProcessLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      SubBillSupportRenewalProcessLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVENTORY_LOT_ID: OrderableEdmTypeField<
      SubBillSupportRenewalProcessLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RENEWAL_RETAIL_VARIANT_ID: OrderableEdmTypeField<
      SubBillSupportRenewalProcessLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RENEWAL_AMOUNT: OrderableEdmTypeField<
      SubBillSupportRenewalProcessLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SUPPORT: EnumField<
      SubBillSupportRenewalProcessLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    RETAIL_VARIANT_ID: OrderableEdmTypeField<
      SubBillSupportRenewalProcessLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUPPORT_LEVEL: OrderableEdmTypeField<
      SubBillSupportRenewalProcessLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RENEWAL_START_DATE: OrderableEdmTypeField<
      SubBillSupportRenewalProcessLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    RENEWAL: EnumField<
      SubBillSupportRenewalProcessLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SUPPORT_PERCENTAGE: OrderableEdmTypeField<
      SubBillSupportRenewalProcessLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SUPPORT_START_DATE: OrderableEdmTypeField<
      SubBillSupportRenewalProcessLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ALIGNMENT_DATE: OrderableEdmTypeField<
      SubBillSupportRenewalProcessLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SUPPORT_AMOUNT: OrderableEdmTypeField<
      SubBillSupportRenewalProcessLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RENEWAL_END_DATE: OrderableEdmTypeField<
      SubBillSupportRenewalProcessLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    BILLING_SCHEDULE_NUMBER: OrderableEdmTypeField<
      SubBillSupportRenewalProcessLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RENEWAL_CALCULATION_METHOD: EnumField<
      SubBillSupportRenewalProcessLines<DeSerializers>,
      DeSerializersT,
      SubBillRenewalCalculationMethod,
      true,
      true
    >;
    SUPPORT_RETAIL_VARIANT_ID: OrderableEdmTypeField<
      SubBillSupportRenewalProcessLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUPPORT_END_DATE: OrderableEdmTypeField<
      SubBillSupportRenewalProcessLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    RENEWAL_ITEM: OrderableEdmTypeField<
      SubBillSupportRenewalProcessLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUPPORT_ITEM: OrderableEdmTypeField<
      SubBillSupportRenewalProcessLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUPPORT_CALCULATION_METHOD: EnumField<
      SubBillSupportRenewalProcessLines<DeSerializers>,
      DeSerializersT,
      SubBillSupportCalculationMethod,
      true,
      true
    >;
    RENEWAL_PERCENT: OrderableEdmTypeField<
      SubBillSupportRenewalProcessLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    HEADER_REC_ID: OrderableEdmTypeField<
      SubBillSupportRenewalProcessLines<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ALL_FIELDS: AllFields<SubBillSupportRenewalProcessLines<DeSerializers>>;
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
         * Static representation of the {@link salesId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_ID: fieldBuilder.buildEdmTypeField(
          'SalesId',
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
         * Static representation of the {@link inventoryLotId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_LOT_ID: fieldBuilder.buildEdmTypeField(
          'InventoryLotId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link renewalRetailVariantId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RENEWAL_RETAIL_VARIANT_ID: fieldBuilder.buildEdmTypeField(
          'RenewalRetailVariantId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link renewalAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RENEWAL_AMOUNT: fieldBuilder.buildEdmTypeField(
          'RenewalAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link support} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUPPORT: fieldBuilder.buildEnumField('Support', NoYes, true),
        /**
         * Static representation of the {@link retailVariantId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_VARIANT_ID: fieldBuilder.buildEdmTypeField(
          'RetailVariantId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link supportLevel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUPPORT_LEVEL: fieldBuilder.buildEdmTypeField(
          'SupportLevel',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link renewalStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RENEWAL_START_DATE: fieldBuilder.buildEdmTypeField(
          'RenewalStartDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link renewal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RENEWAL: fieldBuilder.buildEnumField('Renewal', NoYes, true),
        /**
         * Static representation of the {@link supportPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUPPORT_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'SupportPercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link supportStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUPPORT_START_DATE: fieldBuilder.buildEdmTypeField(
          'SupportStartDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link alignmentDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALIGNMENT_DATE: fieldBuilder.buildEdmTypeField(
          'AlignmentDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link supportAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUPPORT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'SupportAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link renewalEndDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RENEWAL_END_DATE: fieldBuilder.buildEdmTypeField(
          'RenewalEndDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link billingScheduleNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILLING_SCHEDULE_NUMBER: fieldBuilder.buildEdmTypeField(
          'BillingScheduleNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link renewalCalculationMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RENEWAL_CALCULATION_METHOD: fieldBuilder.buildEnumField(
          'RenewalCalculationMethod',
          SubBillRenewalCalculationMethod,
          true
        ),
        /**
         * Static representation of the {@link supportRetailVariantId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUPPORT_RETAIL_VARIANT_ID: fieldBuilder.buildEdmTypeField(
          'SupportRetailVariantId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link supportEndDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUPPORT_END_DATE: fieldBuilder.buildEdmTypeField(
          'SupportEndDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link renewalItem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RENEWAL_ITEM: fieldBuilder.buildEdmTypeField(
          'RenewalItem',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link supportItem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUPPORT_ITEM: fieldBuilder.buildEdmTypeField(
          'SupportItem',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link supportCalculationMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUPPORT_CALCULATION_METHOD: fieldBuilder.buildEnumField(
          'SupportCalculationMethod',
          SubBillSupportCalculationMethod,
          true
        ),
        /**
         * Static representation of the {@link renewalPercent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RENEWAL_PERCENT: fieldBuilder.buildEdmTypeField(
          'RenewalPercent',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link headerRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEADER_REC_ID: fieldBuilder.buildEdmTypeField(
          'HeaderRecId',
          'Edm.Int64',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SubBillSupportRenewalProcessLines)
      };
    }

    return this._schema;
  }
}
