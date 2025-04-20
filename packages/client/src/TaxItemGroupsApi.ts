/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TaxItemGroups } from './TaxItemGroups';
import { TaxItemGroupsRequestBuilder } from './TaxItemGroupsRequestBuilder';
import { PurchaseOrderLineChargesV2Api } from './PurchaseOrderLineChargesV2Api';
import { PurchaseOrderHeaderChargesApi } from './PurchaseOrderHeaderChargesApi';
import { TaxCodesApi } from './TaxCodesApi';
import { VendorInvoiceHeaderChargesApi } from './VendorInvoiceHeaderChargesApi';
import { EuSalesListType } from './EuSalesListType';
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
export class TaxItemGroupsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<TaxItemGroups<DeSerializersT>, DeSerializersT>
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
  ): TaxItemGroupsApi<DeSerializersT> {
    return new TaxItemGroupsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link purchaseOrderLineCharges} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_ORDER_LINE_CHARGES: OneToManyLink<
      TaxItemGroups<DeSerializersT>,
      DeSerializersT,
      PurchaseOrderLineChargesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseOrderHeaderCharges} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_ORDER_HEADER_CHARGES: OneToManyLink<
      TaxItemGroups<DeSerializersT>,
      DeSerializersT,
      PurchaseOrderHeaderChargesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link taxCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TAX_CODE: OneToOneLink<
      TaxItemGroups<DeSerializersT>,
      DeSerializersT,
      TaxCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link invoiceHeaderCharges} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVOICE_HEADER_CHARGES: OneToManyLink<
      TaxItemGroups<DeSerializersT>,
      DeSerializersT,
      VendorInvoiceHeaderChargesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      PurchaseOrderLineChargesV2Api<DeSerializersT>,
      PurchaseOrderHeaderChargesApi<DeSerializersT>,
      TaxCodesApi<DeSerializersT>,
      VendorInvoiceHeaderChargesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PURCHASE_ORDER_LINE_CHARGES: new OneToManyLink(
        'PurchaseOrderLineCharges',
        this,
        linkedApis[0]
      ),
      PURCHASE_ORDER_HEADER_CHARGES: new OneToManyLink(
        'PurchaseOrderHeaderCharges',
        this,
        linkedApis[1]
      ),
      TAX_CODE: new OneToOneLink('TaxCode', this, linkedApis[2]),
      INVOICE_HEADER_CHARGES: new OneToManyLink(
        'InvoiceHeaderCharges',
        this,
        linkedApis[3]
      )
    };
    return this;
  }

  entityConstructor = TaxItemGroups;

  requestBuilder(): TaxItemGroupsRequestBuilder<DeSerializersT> {
    return new TaxItemGroupsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    TaxItemGroups<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<TaxItemGroups<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<TaxItemGroups<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof TaxItemGroups, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(TaxItemGroups, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      TaxItemGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TAX_ITEM_GROUP_CODE: OrderableEdmTypeField<
      TaxItemGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TAX_CODE_ID: OrderableEdmTypeField<
      TaxItemGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TAXATION_CODE: OrderableEdmTypeField<
      TaxItemGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EU_SALES_LIST_TYPE: EnumField<
      TaxItemGroups<DeSerializers>,
      DeSerializersT,
      EuSalesListType,
      true,
      true
    >;
    TAX_EXEMPT_CODE: OrderableEdmTypeField<
      TaxItemGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      TaxItemGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WITHOUT_TAX_CREDIT: EnumField<
      TaxItemGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EXEMPT_TAX: EnumField<
      TaxItemGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseOrderLineCharges} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_ORDER_LINE_CHARGES: OneToManyLink<
      TaxItemGroups<DeSerializersT>,
      DeSerializersT,
      PurchaseOrderLineChargesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseOrderHeaderCharges} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_ORDER_HEADER_CHARGES: OneToManyLink<
      TaxItemGroups<DeSerializersT>,
      DeSerializersT,
      PurchaseOrderHeaderChargesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link taxCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TAX_CODE: OneToOneLink<
      TaxItemGroups<DeSerializersT>,
      DeSerializersT,
      TaxCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link invoiceHeaderCharges} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVOICE_HEADER_CHARGES: OneToManyLink<
      TaxItemGroups<DeSerializersT>,
      DeSerializersT,
      VendorInvoiceHeaderChargesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<TaxItemGroups<DeSerializers>>;
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
         * Static representation of the {@link taxItemGroupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_ITEM_GROUP_CODE: fieldBuilder.buildEdmTypeField(
          'TaxItemGroupCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link taxCodeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_CODE_ID: fieldBuilder.buildEdmTypeField(
          'TaxCodeId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link taxationCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAXATION_CODE: fieldBuilder.buildEdmTypeField(
          'TaxationCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link euSalesListType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EU_SALES_LIST_TYPE: fieldBuilder.buildEnumField(
          'EUSalesListType',
          EuSalesListType,
          true
        ),
        /**
         * Static representation of the {@link taxExemptCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_EXEMPT_CODE: fieldBuilder.buildEdmTypeField(
          'TaxExemptCode',
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
         * Static representation of the {@link withoutTaxCredit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WITHOUT_TAX_CREDIT: fieldBuilder.buildEnumField(
          'WithoutTaxCredit',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link exemptTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXEMPT_TAX: fieldBuilder.buildEnumField('ExemptTax', NoYes, true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', TaxItemGroups)
      };
    }

    return this._schema;
  }
}
