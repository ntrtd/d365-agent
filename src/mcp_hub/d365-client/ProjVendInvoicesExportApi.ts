/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProjVendInvoicesExport } from './ProjVendInvoicesExport';
import { ProjVendInvoicesExportRequestBuilder } from './ProjVendInvoicesExportRequestBuilder';
import { ProjVendInvoiceLinesExportEntityApi } from './ProjVendInvoiceLinesExportEntityApi';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class ProjVendInvoicesExportApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProjVendInvoicesExport<DeSerializersT>, DeSerializersT>
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
  ): ProjVendInvoicesExportApi<DeSerializersT> {
    return new ProjVendInvoicesExportApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link projVendInvoiceLineExport} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJ_VEND_INVOICE_LINE_EXPORT: OneToOneLink<
      ProjVendInvoicesExport<DeSerializersT>,
      DeSerializersT,
      ProjVendInvoiceLinesExportEntityApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [ProjVendInvoiceLinesExportEntityApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      PROJ_VEND_INVOICE_LINE_EXPORT: new OneToOneLink(
        'ProjVendInvoiceLineExport',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = ProjVendInvoicesExport;

  requestBuilder(): ProjVendInvoicesExportRequestBuilder<DeSerializersT> {
    return new ProjVendInvoicesExportRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProjVendInvoicesExport<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ProjVendInvoicesExport<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProjVendInvoicesExport<DeSerializersT>,
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
    typeof ProjVendInvoicesExport,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProjVendInvoicesExport,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ProjVendInvoicesExport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TABLE_REF_ID: OrderableEdmTypeField<
      ProjVendInvoicesExport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      ProjVendInvoicesExport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DOCUMENT_DATE: OrderableEdmTypeField<
      ProjVendInvoicesExport<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    VENDOR_INVOICE_NUM: OrderableEdmTypeField<
      ProjVendInvoicesExport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_ACCOUNT: OrderableEdmTypeField<
      ProjVendInvoicesExport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      ProjVendInvoicesExport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCH_ID: OrderableEdmTypeField<
      ProjVendInvoicesExport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANS_DATE: OrderableEdmTypeField<
      ProjVendInvoicesExport<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ORDER_ACCOUNT: OrderableEdmTypeField<
      ProjVendInvoicesExport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUBCONTRACT_INVOICE: EnumField<
      ProjVendInvoicesExport<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link projVendInvoiceLineExport} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJ_VEND_INVOICE_LINE_EXPORT: OneToOneLink<
      ProjVendInvoicesExport<DeSerializersT>,
      DeSerializersT,
      ProjVendInvoiceLinesExportEntityApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ProjVendInvoicesExport<DeSerializers>>;
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
         * Static representation of the {@link tableRefId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TABLE_REF_ID: fieldBuilder.buildEdmTypeField(
          'TableRefId',
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
         * Static representation of the {@link documentDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_DATE: fieldBuilder.buildEdmTypeField(
          'DocumentDate',
          'Edm.DateTimeOffset',
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
         * Static representation of the {@link invoiceAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'InvoiceAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link currencyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY_CODE: fieldBuilder.buildEdmTypeField(
          'CurrencyCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link purchId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCH_ID: fieldBuilder.buildEdmTypeField('PurchId', 'Edm.String', true),
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
         * Static representation of the {@link orderAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDER_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'OrderAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link subcontractInvoice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUBCONTRACT_INVOICE: fieldBuilder.buildEnumField(
          'SubcontractInvoice',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProjVendInvoicesExport)
      };
    }

    return this._schema;
  }
}
