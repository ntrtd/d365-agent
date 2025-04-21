/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProjInvoice_W } from './ProjInvoice_W';
import { ProjInvoice_WRequestBuilder } from './ProjInvoice_WRequestBuilder';
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
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class ProjInvoice_WApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProjInvoice_W<DeSerializersT>, DeSerializersT>
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
  ): ProjInvoice_WApi<DeSerializersT> {
    return new ProjInvoice_WApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ProjInvoice_W;

  requestBuilder(): ProjInvoice_WRequestBuilder<DeSerializersT> {
    return new ProjInvoice_WRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProjInvoice_W<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ProjInvoice_W<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ProjInvoice_W<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof ProjInvoice_W, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(ProjInvoice_W, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ProjInvoice_W<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PROJ_INVOICE_ID: OrderableEdmTypeField<
      ProjInvoice_W<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LEDGER_VOUCHER: OrderableEdmTypeField<
      ProjInvoice_W<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INVOICE_DATE: OrderableEdmTypeField<
      ProjInvoice_W<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SUBMISSION_UUID_W: OrderableEdmTypeField<
      ProjInvoice_W<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QR_CODE_W: OrderableEdmTypeField<
      ProjInvoice_W<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<ProjInvoice_W<DeSerializers>>;
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
         * Static representation of the {@link projInvoiceId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_INVOICE_ID: fieldBuilder.buildEdmTypeField(
          'ProjInvoiceId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link ledgerVoucher} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEDGER_VOUCHER: fieldBuilder.buildEdmTypeField(
          'LedgerVoucher',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link invoiceDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_DATE: fieldBuilder.buildEdmTypeField(
          'InvoiceDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link submissionUuidW} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUBMISSION_UUID_W: fieldBuilder.buildEdmTypeField(
          'SubmissionUUID_W',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link qrCodeW} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QR_CODE_W: fieldBuilder.buildEdmTypeField(
          'QRCode_W',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProjInvoice_W)
      };
    }

    return this._schema;
  }
}
