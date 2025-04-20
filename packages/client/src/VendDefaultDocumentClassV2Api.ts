/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { VendDefaultDocumentClassV2 } from './VendDefaultDocumentClassV2';
import { VendDefaultDocumentClassV2RequestBuilder } from './VendDefaultDocumentClassV2RequestBuilder';
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
export class VendDefaultDocumentClassV2Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<VendDefaultDocumentClassV2<DeSerializersT>, DeSerializersT>
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
  ): VendDefaultDocumentClassV2Api<DeSerializersT> {
    return new VendDefaultDocumentClassV2Api(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = VendDefaultDocumentClassV2;

  requestBuilder(): VendDefaultDocumentClassV2RequestBuilder<DeSerializersT> {
    return new VendDefaultDocumentClassV2RequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    VendDefaultDocumentClassV2<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      VendDefaultDocumentClassV2<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    VendDefaultDocumentClassV2<DeSerializersT>,
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
    typeof VendDefaultDocumentClassV2,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        VendDefaultDocumentClassV2,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      VendDefaultDocumentClassV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ACCOUNT_TYPE_GROUP_ID: OrderableEdmTypeField<
      VendDefaultDocumentClassV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CREDIT_JOURNAL_LINE_VC_ID: OrderableEdmTypeField<
      VendDefaultDocumentClassV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PACKING_SLIP_VC_ID: OrderableEdmTypeField<
      VendDefaultDocumentClassV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REFOUND_REMISSION_VC_ID: OrderableEdmTypeField<
      VendDefaultDocumentClassV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_PAYMENT_DOCUMENT_CLASS_ID: OrderableEdmTypeField<
      VendDefaultDocumentClassV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCH_CREDIT_NOTE_VC_ID: OrderableEdmTypeField<
      VendDefaultDocumentClassV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCH_INVOICE_VC_ID: OrderableEdmTypeField<
      VendDefaultDocumentClassV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEBIT_JOURNAL_LINE_VC_ID: OrderableEdmTypeField<
      VendDefaultDocumentClassV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<VendDefaultDocumentClassV2<DeSerializers>>;
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
         * Static representation of the {@link accountTypeGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_TYPE_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'AccountTypeGroupId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link creditJournalLineVcId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_JOURNAL_LINE_VC_ID: fieldBuilder.buildEdmTypeField(
          'CreditJournalLineVCId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link packingSlipVcId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PACKING_SLIP_VC_ID: fieldBuilder.buildEdmTypeField(
          'PackingSlipVCId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link refoundRemissionVcId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REFOUND_REMISSION_VC_ID: fieldBuilder.buildEdmTypeField(
          'RefoundRemissionVCId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultPaymentDocumentClassId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_PAYMENT_DOCUMENT_CLASS_ID: fieldBuilder.buildEdmTypeField(
          'DefaultPaymentDocumentClassId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link purchCreditNoteVcId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCH_CREDIT_NOTE_VC_ID: fieldBuilder.buildEdmTypeField(
          'PurchCreditNoteVCId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link purchInvoiceVcId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCH_INVOICE_VC_ID: fieldBuilder.buildEdmTypeField(
          'PurchInvoiceVCId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link debitJournalLineVcId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEBIT_JOURNAL_LINE_VC_ID: fieldBuilder.buildEdmTypeField(
          'DebitJournalLineVCId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', VendDefaultDocumentClassV2)
      };
    }

    return this._schema;
  }
}
