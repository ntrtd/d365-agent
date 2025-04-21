/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PurchaseTotalDiscountAgreements } from './PurchaseTotalDiscountAgreements';
import { PurchaseTotalDiscountAgreementsRequestBuilder } from './PurchaseTotalDiscountAgreementsRequestBuilder';
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
export class PurchaseTotalDiscountAgreementsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<PurchaseTotalDiscountAgreements<DeSerializersT>, DeSerializersT>
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
  ): PurchaseTotalDiscountAgreementsApi<DeSerializersT> {
    return new PurchaseTotalDiscountAgreementsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = PurchaseTotalDiscountAgreements;

  requestBuilder(): PurchaseTotalDiscountAgreementsRequestBuilder<DeSerializersT> {
    return new PurchaseTotalDiscountAgreementsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    PurchaseTotalDiscountAgreements<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      PurchaseTotalDiscountAgreements<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PurchaseTotalDiscountAgreements<DeSerializersT>,
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
    typeof PurchaseTotalDiscountAgreements,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PurchaseTotalDiscountAgreements,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      PurchaseTotalDiscountAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RECORD_ID: OrderableEdmTypeField<
      PurchaseTotalDiscountAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TO_ORDER_SUB_TOTAL_AMOUNT: OrderableEdmTypeField<
      PurchaseTotalDiscountAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    WILL_SEARCH_CONTINUE: EnumField<
      PurchaseTotalDiscountAgreements<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FROM_ORDER_SUB_TOTAL_AMOUNT: OrderableEdmTypeField<
      PurchaseTotalDiscountAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DISCOUNT_PERCENTAGE_2: OrderableEdmTypeField<
      PurchaseTotalDiscountAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DISCOUNT_PERCENTAGE_1: OrderableEdmTypeField<
      PurchaseTotalDiscountAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DISCOUNT_APPLICABLE_FROM_DATE: OrderableEdmTypeField<
      PurchaseTotalDiscountAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DISCOUNT_APPLICABLE_TO_DATE: OrderableEdmTypeField<
      PurchaseTotalDiscountAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DISCOUNT_AMOUNT: OrderableEdmTypeField<
      PurchaseTotalDiscountAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DISCOUNT_CURRENCY_CODE: OrderableEdmTypeField<
      PurchaseTotalDiscountAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TOTAL_DISCOUNT_VENDOR_GROUP_CODE: OrderableEdmTypeField<
      PurchaseTotalDiscountAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VENDOR_ACCOUNT_NUMBER: OrderableEdmTypeField<
      PurchaseTotalDiscountAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<PurchaseTotalDiscountAgreements<DeSerializers>>;
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
         * Static representation of the {@link recordId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECORD_ID: fieldBuilder.buildEdmTypeField(
          'RecordId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link toOrderSubTotalAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_ORDER_SUB_TOTAL_AMOUNT: fieldBuilder.buildEdmTypeField(
          'ToOrderSubTotalAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link willSearchContinue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WILL_SEARCH_CONTINUE: fieldBuilder.buildEnumField(
          'WillSearchContinue',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link fromOrderSubTotalAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FROM_ORDER_SUB_TOTAL_AMOUNT: fieldBuilder.buildEdmTypeField(
          'FromOrderSubTotalAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link discountPercentage2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISCOUNT_PERCENTAGE_2: fieldBuilder.buildEdmTypeField(
          'DiscountPercentage2',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link discountPercentage1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISCOUNT_PERCENTAGE_1: fieldBuilder.buildEdmTypeField(
          'DiscountPercentage1',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link discountApplicableFromDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISCOUNT_APPLICABLE_FROM_DATE: fieldBuilder.buildEdmTypeField(
          'DiscountApplicableFromDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link discountApplicableToDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISCOUNT_APPLICABLE_TO_DATE: fieldBuilder.buildEdmTypeField(
          'DiscountApplicableToDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link discountAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISCOUNT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'DiscountAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link discountCurrencyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISCOUNT_CURRENCY_CODE: fieldBuilder.buildEdmTypeField(
          'DiscountCurrencyCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link totalDiscountVendorGroupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_DISCOUNT_VENDOR_GROUP_CODE: fieldBuilder.buildEdmTypeField(
          'TotalDiscountVendorGroupCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vendorAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'VendorAccountNumber',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PurchaseTotalDiscountAgreements)
      };
    }

    return this._schema;
  }
}
