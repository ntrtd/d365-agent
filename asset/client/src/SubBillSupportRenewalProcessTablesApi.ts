/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SubBillSupportRenewalProcessTables } from './SubBillSupportRenewalProcessTables';
import { SubBillSupportRenewalProcessTablesRequestBuilder } from './SubBillSupportRenewalProcessTablesRequestBuilder';
import { NoYes } from './NoYes';
import { SubBillSupportRenewalFrequency } from './SubBillSupportRenewalFrequency';
import { SubBillSupportAndRenewalQuantity } from './SubBillSupportAndRenewalQuantity';
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
export class SubBillSupportRenewalProcessTablesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      SubBillSupportRenewalProcessTables<DeSerializersT>,
      DeSerializersT
    >
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
  ): SubBillSupportRenewalProcessTablesApi<DeSerializersT> {
    return new SubBillSupportRenewalProcessTablesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = SubBillSupportRenewalProcessTables;

  requestBuilder(): SubBillSupportRenewalProcessTablesRequestBuilder<DeSerializersT> {
    return new SubBillSupportRenewalProcessTablesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    SubBillSupportRenewalProcessTables<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      SubBillSupportRenewalProcessTables<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SubBillSupportRenewalProcessTables<DeSerializersT>,
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
    typeof SubBillSupportRenewalProcessTables,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SubBillSupportRenewalProcessTables,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      SubBillSupportRenewalProcessTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SALES_ID: OrderableEdmTypeField<
      SubBillSupportRenewalProcessTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SALES_TABLE_REC_ID: OrderableEdmTypeField<
      SubBillSupportRenewalProcessTables<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ALIGN_TO_MONTH: EnumField<
      SubBillSupportRenewalProcessTables<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INCLUDE_DISCOUNT_RENEWAL: EnumField<
      SubBillSupportRenewalProcessTables<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BILLING_SCHEDULE_NUMBER: OrderableEdmTypeField<
      SubBillSupportRenewalProcessTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BILLING_FREQUENCY_RENEWAL: EnumField<
      SubBillSupportRenewalProcessTables<DeSerializers>,
      DeSerializersT,
      SubBillSupportRenewalFrequency,
      true,
      true
    >;
    SUPPORT_END_DATE: OrderableEdmTypeField<
      SubBillSupportRenewalProcessTables<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SUPPORT_AND_RENEWAL_QUANTITY: EnumField<
      SubBillSupportRenewalProcessTables<DeSerializers>,
      DeSerializersT,
      SubBillSupportAndRenewalQuantity,
      true,
      true
    >;
    RENEWAL_END_DATE: OrderableEdmTypeField<
      SubBillSupportRenewalProcessTables<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    INCLUDE_DISCOUNT_SUPPORT: EnumField<
      SubBillSupportRenewalProcessTables<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SUPPORT_LEVEL: OrderableEdmTypeField<
      SubBillSupportRenewalProcessTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BILLING_INTERVAL_RENEWAL: OrderableEdmTypeField<
      SubBillSupportRenewalProcessTables<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SUPPORT_START_DATE: OrderableEdmTypeField<
      SubBillSupportRenewalProcessTables<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    OVERRIDE_START_DATE: EnumField<
      SubBillSupportRenewalProcessTables<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BILLING_FREQUENCY_SUPPORT: EnumField<
      SubBillSupportRenewalProcessTables<DeSerializers>,
      DeSerializersT,
      SubBillSupportRenewalFrequency,
      true,
      true
    >;
    END_USER_ACCOUNT: OrderableEdmTypeField<
      SubBillSupportRenewalProcessTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RENEWAL_START_DATE: OrderableEdmTypeField<
      SubBillSupportRenewalProcessTables<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ALIGNMENT_DATE: OrderableEdmTypeField<
      SubBillSupportRenewalProcessTables<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    BILLING_INTERVAL_SUPPORT: OrderableEdmTypeField<
      SubBillSupportRenewalProcessTables<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ALL_FIELDS: AllFields<SubBillSupportRenewalProcessTables<DeSerializers>>;
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
         * Static representation of the {@link salesTableRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_TABLE_REC_ID: fieldBuilder.buildEdmTypeField(
          'SalesTableRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link alignToMonth} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALIGN_TO_MONTH: fieldBuilder.buildEnumField(
          'AlignToMonth',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link includeDiscountRenewal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCLUDE_DISCOUNT_RENEWAL: fieldBuilder.buildEnumField(
          'IncludeDiscountRenewal',
          NoYes,
          true
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
         * Static representation of the {@link billingFrequencyRenewal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILLING_FREQUENCY_RENEWAL: fieldBuilder.buildEnumField(
          'BillingFrequencyRenewal',
          SubBillSupportRenewalFrequency,
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
         * Static representation of the {@link supportAndRenewalQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUPPORT_AND_RENEWAL_QUANTITY: fieldBuilder.buildEnumField(
          'SupportAndRenewalQuantity',
          SubBillSupportAndRenewalQuantity,
          true
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
         * Static representation of the {@link includeDiscountSupport} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCLUDE_DISCOUNT_SUPPORT: fieldBuilder.buildEnumField(
          'IncludeDiscountSupport',
          NoYes,
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
         * Static representation of the {@link billingIntervalRenewal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILLING_INTERVAL_RENEWAL: fieldBuilder.buildEdmTypeField(
          'BillingIntervalRenewal',
          'Edm.Int32',
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
         * Static representation of the {@link overrideStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OVERRIDE_START_DATE: fieldBuilder.buildEnumField(
          'OverrideStartDate',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link billingFrequencySupport} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILLING_FREQUENCY_SUPPORT: fieldBuilder.buildEnumField(
          'BillingFrequencySupport',
          SubBillSupportRenewalFrequency,
          true
        ),
        /**
         * Static representation of the {@link endUserAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        END_USER_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'EndUserAccount',
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
         * Static representation of the {@link alignmentDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALIGNMENT_DATE: fieldBuilder.buildEdmTypeField(
          'AlignmentDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link billingIntervalSupport} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILLING_INTERVAL_SUPPORT: fieldBuilder.buildEdmTypeField(
          'BillingIntervalSupport',
          'Edm.Int32',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SubBillSupportRenewalProcessTables)
      };
    }

    return this._schema;
  }
}
