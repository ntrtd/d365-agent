/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProjVendInvoiceLinesExportEntity } from './ProjVendInvoiceLinesExportEntity';
import { ProjVendInvoiceLinesExportEntityRequestBuilder } from './ProjVendInvoiceLinesExportEntityRequestBuilder';
import { VendInvoiceExportsV2Api } from './VendInvoiceExportsV2Api';
import { ProjVendInvoicesExportApi } from './ProjVendInvoicesExportApi';
import { ProjCategoryType } from './ProjCategoryType';
import { ProjBillingType } from './ProjBillingType';
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
export class ProjVendInvoiceLinesExportEntityApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ProjVendInvoiceLinesExportEntity<DeSerializersT>, DeSerializersT>
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
  ): ProjVendInvoiceLinesExportEntityApi<DeSerializersT> {
    return new ProjVendInvoiceLinesExportEntityApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link projVendInvoiceExportV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJ_VEND_INVOICE_EXPORT_V_2: OneToOneLink<
      ProjVendInvoiceLinesExportEntity<DeSerializersT>,
      DeSerializersT,
      VendInvoiceExportsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link projVendInvoiceExport} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJ_VEND_INVOICE_EXPORT: OneToOneLink<
      ProjVendInvoiceLinesExportEntity<DeSerializersT>,
      DeSerializersT,
      ProjVendInvoicesExportApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      VendInvoiceExportsV2Api<DeSerializersT>,
      ProjVendInvoicesExportApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PROJ_VEND_INVOICE_EXPORT_V_2: new OneToOneLink(
        'ProjVendInvoiceExportV2',
        this,
        linkedApis[0]
      ),
      PROJ_VEND_INVOICE_EXPORT: new OneToOneLink(
        'ProjVendInvoiceExport',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = ProjVendInvoiceLinesExportEntity;

  requestBuilder(): ProjVendInvoiceLinesExportEntityRequestBuilder<DeSerializersT> {
    return new ProjVendInvoiceLinesExportEntityRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    ProjVendInvoiceLinesExportEntity<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ProjVendInvoiceLinesExportEntity<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProjVendInvoiceLinesExportEntity<DeSerializersT>,
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
    typeof ProjVendInvoiceLinesExportEntity,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProjVendInvoiceLinesExportEntity,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PROJ_TRANS_ID: OrderableEdmTypeField<
      ProjVendInvoiceLinesExportEntity<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PROJ_DATA_AREA_ID: OrderableEdmTypeField<
      ProjVendInvoiceLinesExportEntity<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VENDOR_INVOICE_NUM: OrderableEdmTypeField<
      ProjVendInvoiceLinesExportEntity<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJ_SUBCONTRACT_LINE_NUMBER: OrderableEdmTypeField<
      ProjVendInvoiceLinesExportEntity<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ROLE_ID: OrderableEdmTypeField<
      ProjVendInvoiceLinesExportEntity<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    D_AREA_ID: OrderableEdmTypeField<
      ProjVendInvoiceLinesExportEntity<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCH_UNIT: OrderableEdmTypeField<
      ProjVendInvoiceLinesExportEntity<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJ_ITEM_TRANS_EXISTS: OrderableEdmTypeField<
      ProjVendInvoiceLinesExportEntity<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PROJ_ID: OrderableEdmTypeField<
      ProjVendInvoiceLinesExportEntity<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_ACCOUNT: OrderableEdmTypeField<
      ProjVendInvoiceLinesExportEntity<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QTY_RECEIVE_NOW: OrderableEdmTypeField<
      ProjVendInvoiceLinesExportEntity<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      ProjVendInvoiceLinesExportEntity<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANS_DATE: OrderableEdmTypeField<
      ProjVendInvoiceLinesExportEntity<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PROJ_TASK_NUMBER: OrderableEdmTypeField<
      ProjVendInvoiceLinesExportEntity<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSACTION_CATEGORY_ID: OrderableEdmTypeField<
      ProjVendInvoiceLinesExportEntity<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CATEGORY_TYPE: EnumField<
      ProjVendInvoiceLinesExportEntity<DeSerializers>,
      DeSerializersT,
      ProjCategoryType,
      true,
      true
    >;
    ORDER_ACCOUNT: OrderableEdmTypeField<
      ProjVendInvoiceLinesExportEntity<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCH_PRICE: OrderableEdmTypeField<
      ProjVendInvoiceLinesExportEntity<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BILLING_TYPE: EnumField<
      ProjVendInvoiceLinesExportEntity<DeSerializers>,
      DeSerializersT,
      ProjBillingType,
      true,
      true
    >;
    LINE_AMOUNT: OrderableEdmTypeField<
      ProjVendInvoiceLinesExportEntity<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      ProjVendInvoiceLinesExportEntity<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_ID: OrderableEdmTypeField<
      ProjVendInvoiceLinesExportEntity<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISPLAY_PRODUCT_NUMBER: OrderableEdmTypeField<
      ProjVendInvoiceLinesExportEntity<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link projVendInvoiceExportV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJ_VEND_INVOICE_EXPORT_V_2: OneToOneLink<
      ProjVendInvoiceLinesExportEntity<DeSerializersT>,
      DeSerializersT,
      VendInvoiceExportsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link projVendInvoiceExport} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJ_VEND_INVOICE_EXPORT: OneToOneLink<
      ProjVendInvoiceLinesExportEntity<DeSerializersT>,
      DeSerializersT,
      ProjVendInvoicesExportApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ProjVendInvoiceLinesExportEntity<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link projTransId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_TRANS_ID: fieldBuilder.buildEdmTypeField(
          'ProjTransId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link projDataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'ProjDataAreaId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link vendorInvoiceNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_INVOICE_NUM: fieldBuilder.buildEdmTypeField(
          'VendorInvoiceNum',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link projSubcontractLineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_SUBCONTRACT_LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'ProjSubcontractLineNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link roleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROLE_ID: fieldBuilder.buildEdmTypeField('RoleId', 'Edm.String', true),
        /**
         * Static representation of the {@link dAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        D_AREA_ID: fieldBuilder.buildEdmTypeField(
          'DAreaId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link purchUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCH_UNIT: fieldBuilder.buildEdmTypeField(
          'PurchUnit',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link projItemTransExists} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_ITEM_TRANS_EXISTS: fieldBuilder.buildEdmTypeField(
          'ProjItemTransExists',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link projId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_ID: fieldBuilder.buildEdmTypeField('ProjId', 'Edm.String', true),
        /**
         * Static representation of the {@link invoiceAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'InvoiceAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link qtyReceiveNow} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QTY_RECEIVE_NOW: fieldBuilder.buildEdmTypeField(
          'QtyReceiveNow',
          'Edm.Decimal',
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
         * Static representation of the {@link transDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANS_DATE: fieldBuilder.buildEdmTypeField(
          'TransDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link projTaskNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_TASK_NUMBER: fieldBuilder.buildEdmTypeField(
          'ProjTaskNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transactionCategoryId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_CATEGORY_ID: fieldBuilder.buildEdmTypeField(
          'TransactionCategoryId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link categoryType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATEGORY_TYPE: fieldBuilder.buildEnumField(
          'CategoryType',
          ProjCategoryType,
          true
        ),
        /**
         * Static representation of the {@link orderAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDER_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'OrderAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link purchPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCH_PRICE: fieldBuilder.buildEdmTypeField(
          'PurchPrice',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link billingType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILLING_TYPE: fieldBuilder.buildEnumField(
          'BillingType',
          ProjBillingType,
          true
        ),
        /**
         * Static representation of the {@link lineAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'LineAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link currencyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY_CODE: fieldBuilder.buildEdmTypeField(
          'currencyCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link itemId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_ID: fieldBuilder.buildEdmTypeField('ItemId', 'Edm.String', true),
        /**
         * Static representation of the {@link displayProductNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISPLAY_PRODUCT_NUMBER: fieldBuilder.buildEdmTypeField(
          'DisplayProductNumber',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProjVendInvoiceLinesExportEntity)
      };
    }

    return this._schema;
  }
}
