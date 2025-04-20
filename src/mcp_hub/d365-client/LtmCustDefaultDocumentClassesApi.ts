/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LtmCustDefaultDocumentClasses } from './LtmCustDefaultDocumentClasses';
import { LtmCustDefaultDocumentClassesRequestBuilder } from './LtmCustDefaultDocumentClassesRequestBuilder';
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
export class LtmCustDefaultDocumentClassesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<LtmCustDefaultDocumentClasses<DeSerializersT>, DeSerializersT>
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
  ): LtmCustDefaultDocumentClassesApi<DeSerializersT> {
    return new LtmCustDefaultDocumentClassesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = LtmCustDefaultDocumentClasses;

  requestBuilder(): LtmCustDefaultDocumentClassesRequestBuilder<DeSerializersT> {
    return new LtmCustDefaultDocumentClassesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    LtmCustDefaultDocumentClasses<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      LtmCustDefaultDocumentClasses<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    LtmCustDefaultDocumentClasses<DeSerializersT>,
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
    typeof LtmCustDefaultDocumentClasses,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        LtmCustDefaultDocumentClasses,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ACCOUNT_TYPE_GROUP_ID: OrderableEdmTypeField<
      LtmCustDefaultDocumentClasses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PROJECT_INVOICEID: OrderableEdmTypeField<
      LtmCustDefaultDocumentClasses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FREE_TEXT_INVOICE_VC_ID: OrderableEdmTypeField<
      LtmCustDefaultDocumentClasses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FTZ_PAKING_SLIP_VC_ID: OrderableEdmTypeField<
      LtmCustDefaultDocumentClasses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJECT_CREDIT_NOTE_ID: OrderableEdmTypeField<
      LtmCustDefaultDocumentClasses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FREE_TEXT_CREDIT_NOTE_VC_ID: OrderableEdmTypeField<
      LtmCustDefaultDocumentClasses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJECT_PACKING_SLIPID: OrderableEdmTypeField<
      LtmCustDefaultDocumentClasses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJECT_RETURN_DELIVERY_NOTE_ID: OrderableEdmTypeField<
      LtmCustDefaultDocumentClasses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_CREDIT_NOTE_VC_ID: OrderableEdmTypeField<
      LtmCustDefaultDocumentClasses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PACKING_SLIP_VC_ID: OrderableEdmTypeField<
      LtmCustDefaultDocumentClasses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_INVOICE_VC_ID: OrderableEdmTypeField<
      LtmCustDefaultDocumentClasses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REFOUND_REMISSION_VC_ID: OrderableEdmTypeField<
      LtmCustDefaultDocumentClasses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<LtmCustDefaultDocumentClasses<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
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
         * Static representation of the {@link projectInvoiceid} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_INVOICEID: fieldBuilder.buildEdmTypeField(
          'ProjectInvoiceid',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link freeTextInvoiceVcId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FREE_TEXT_INVOICE_VC_ID: fieldBuilder.buildEdmTypeField(
          'FreeTextInvoiceVCId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link ftzPakingSlipVcId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FTZ_PAKING_SLIP_VC_ID: fieldBuilder.buildEdmTypeField(
          'FTZPakingSlipVCId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link projectCreditNoteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_CREDIT_NOTE_ID: fieldBuilder.buildEdmTypeField(
          'ProjectCreditNoteId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link freeTextCreditNoteVcId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FREE_TEXT_CREDIT_NOTE_VC_ID: fieldBuilder.buildEdmTypeField(
          'FreeTextCreditNoteVCId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link projectPackingSlipid} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_PACKING_SLIPID: fieldBuilder.buildEdmTypeField(
          'ProjectPackingSlipid',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link projectReturnDeliveryNoteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_RETURN_DELIVERY_NOTE_ID: fieldBuilder.buildEdmTypeField(
          'ProjectReturnDeliveryNoteId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesCreditNoteVcId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_CREDIT_NOTE_VC_ID: fieldBuilder.buildEdmTypeField(
          'SalesCreditNoteVCId',
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
         * Static representation of the {@link salesInvoiceVcId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_INVOICE_VC_ID: fieldBuilder.buildEdmTypeField(
          'SalesInvoiceVCId',
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', LtmCustDefaultDocumentClasses)
      };
    }

    return this._schema;
  }
}
