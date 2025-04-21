/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CashDiscounts } from './CashDiscounts';
import { CashDiscountsRequestBuilder } from './CashDiscountsRequestBuilder';
import { PurchaseAgreementsApi } from './PurchaseAgreementsApi';
import { FreeTextInvoiceHeadersApi } from './FreeTextInvoiceHeadersApi';
import { DimensionCombinationsApi } from './DimensionCombinationsApi';
import { CdsFreeTextInvoiceHeadersApi } from './CdsFreeTextInvoiceHeadersApi';
import { ClmIntegrationPurchaseAgreementsApi } from './ClmIntegrationPurchaseAgreementsApi';
import { DiscountOffsetMethod } from './DiscountOffsetMethod';
import { NetCurrent } from './NetCurrent';
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
export class CashDiscountsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<CashDiscounts<DeSerializersT>, DeSerializersT>
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
  ): CashDiscountsApi<DeSerializersT> {
    return new CashDiscountsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link purchaseAgreementHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_AGREEMENT_HEADERS: OneToManyLink<
      CashDiscounts<DeSerializersT>,
      DeSerializersT,
      PurchaseAgreementsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link freeTextInvoiceHeaderCashDiscount} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FREE_TEXT_INVOICE_HEADER_CASH_DISCOUNT: OneToManyLink<
      CashDiscounts<DeSerializersT>,
      DeSerializersT,
      FreeTextInvoiceHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      CashDiscounts<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link cdsFreeTextInvoiceHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CDS_FREE_TEXT_INVOICE_HEADERS: OneToManyLink<
      CashDiscounts<DeSerializersT>,
      DeSerializersT,
      CdsFreeTextInvoiceHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link clmIntegrationPurchaseAgreementHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CLM_INTEGRATION_PURCHASE_AGREEMENT_HEADERS: OneToManyLink<
      CashDiscounts<DeSerializersT>,
      DeSerializersT,
      ClmIntegrationPurchaseAgreementsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      PurchaseAgreementsApi<DeSerializersT>,
      FreeTextInvoiceHeadersApi<DeSerializersT>,
      DimensionCombinationsApi<DeSerializersT>,
      CdsFreeTextInvoiceHeadersApi<DeSerializersT>,
      ClmIntegrationPurchaseAgreementsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PURCHASE_AGREEMENT_HEADERS: new OneToManyLink(
        'PurchaseAgreementHeaders',
        this,
        linkedApis[0]
      ),
      FREE_TEXT_INVOICE_HEADER_CASH_DISCOUNT: new OneToManyLink(
        'FreeTextInvoiceHeaderCashDiscount',
        this,
        linkedApis[1]
      ),
      DIMENSION_COMBINATION: new OneToOneLink(
        'DimensionCombination',
        this,
        linkedApis[2]
      ),
      CDS_FREE_TEXT_INVOICE_HEADERS: new OneToManyLink(
        'CDSFreeTextInvoiceHeaders',
        this,
        linkedApis[3]
      ),
      CLM_INTEGRATION_PURCHASE_AGREEMENT_HEADERS: new OneToManyLink(
        'CLMIntegrationPurchaseAgreementHeaders',
        this,
        linkedApis[4]
      )
    };
    return this;
  }

  entityConstructor = CashDiscounts;

  requestBuilder(): CashDiscountsRequestBuilder<DeSerializersT> {
    return new CashDiscountsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CashDiscounts<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<CashDiscounts<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<CashDiscounts<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof CashDiscounts, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(CashDiscounts, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      CashDiscounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CASH_DISCOUNT_CODE: OrderableEdmTypeField<
      CashDiscounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PERCENT: OrderableEdmTypeField<
      CashDiscounts<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    OFFSET_METHOD_FOR_VENDOR_DISCOUNTS: EnumField<
      CashDiscounts<DeSerializers>,
      DeSerializersT,
      DiscountOffsetMethod,
      true,
      true
    >;
    NEXT_CASH_DISCOUNT_CODE: OrderableEdmTypeField<
      CashDiscounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NUMBER_OF_MONTHS: OrderableEdmTypeField<
      CashDiscounts<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    MAIN_ACCOUNT_ID_FOR_CUSTOMER_DISCOUNTS_DISPLAY_VALUE: OrderableEdmTypeField<
      CashDiscounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      CashDiscounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISCOUNT_METHOD: EnumField<
      CashDiscounts<DeSerializers>,
      DeSerializersT,
      NetCurrent,
      true,
      true
    >;
    MAIN_ACCOUNT_ID_FOR_VENDOR_DISCOUNTS_DISPLAY_VALUE: OrderableEdmTypeField<
      CashDiscounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NUMBER_OF_DAYS: OrderableEdmTypeField<
      CashDiscounts<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DESCRIPTION_QR_BILL: OrderableEdmTypeField<
      CashDiscounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseAgreementHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_AGREEMENT_HEADERS: OneToManyLink<
      CashDiscounts<DeSerializersT>,
      DeSerializersT,
      PurchaseAgreementsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link freeTextInvoiceHeaderCashDiscount} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FREE_TEXT_INVOICE_HEADER_CASH_DISCOUNT: OneToManyLink<
      CashDiscounts<DeSerializersT>,
      DeSerializersT,
      FreeTextInvoiceHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      CashDiscounts<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link cdsFreeTextInvoiceHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CDS_FREE_TEXT_INVOICE_HEADERS: OneToManyLink<
      CashDiscounts<DeSerializersT>,
      DeSerializersT,
      CdsFreeTextInvoiceHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link clmIntegrationPurchaseAgreementHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CLM_INTEGRATION_PURCHASE_AGREEMENT_HEADERS: OneToManyLink<
      CashDiscounts<DeSerializersT>,
      DeSerializersT,
      ClmIntegrationPurchaseAgreementsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<CashDiscounts<DeSerializers>>;
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
         * Static representation of the {@link cashDiscountCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_DISCOUNT_CODE: fieldBuilder.buildEdmTypeField(
          'CashDiscountCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link percent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERCENT: fieldBuilder.buildEdmTypeField(
          'Percent',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link offsetMethodForVendorDiscounts} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OFFSET_METHOD_FOR_VENDOR_DISCOUNTS: fieldBuilder.buildEnumField(
          'OffsetMethodForVendorDiscounts',
          DiscountOffsetMethod,
          true
        ),
        /**
         * Static representation of the {@link nextCashDiscountCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NEXT_CASH_DISCOUNT_CODE: fieldBuilder.buildEdmTypeField(
          'NextCashDiscountCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link numberOfMonths} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_OF_MONTHS: fieldBuilder.buildEdmTypeField(
          'NumberOfMonths',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link mainAccountIdForCustomerDiscountsDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAIN_ACCOUNT_ID_FOR_CUSTOMER_DISCOUNTS_DISPLAY_VALUE:
          fieldBuilder.buildEdmTypeField(
            'MainAccountIdForCustomerDiscountsDisplayValue',
            'Edm.String',
            true
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
         * Static representation of the {@link discountMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISCOUNT_METHOD: fieldBuilder.buildEnumField(
          'DiscountMethod',
          NetCurrent,
          true
        ),
        /**
         * Static representation of the {@link mainAccountIdForVendorDiscountsDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAIN_ACCOUNT_ID_FOR_VENDOR_DISCOUNTS_DISPLAY_VALUE:
          fieldBuilder.buildEdmTypeField(
            'MainAccountIdForVendorDiscountsDisplayValue',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link numberOfDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_OF_DAYS: fieldBuilder.buildEdmTypeField(
          'NumberOfDays',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link descriptionQrBill} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION_QR_BILL: fieldBuilder.buildEdmTypeField(
          'DescriptionQRBill',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CashDiscounts)
      };
    }

    return this._schema;
  }
}
