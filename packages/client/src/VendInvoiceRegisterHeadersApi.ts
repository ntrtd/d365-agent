/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { VendInvoiceRegisterHeaders } from './VendInvoiceRegisterHeaders';
import { VendInvoiceRegisterHeadersRequestBuilder } from './VendInvoiceRegisterHeadersRequestBuilder';
import { VendInvoiceRegisterLinesApi } from './VendInvoiceRegisterLinesApi';
import { VendInvoiceRegisterLinesV2Api } from './VendInvoiceRegisterLinesV2Api';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class VendInvoiceRegisterHeadersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<VendInvoiceRegisterHeaders<DeSerializersT>, DeSerializersT>
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
  ): VendInvoiceRegisterHeadersApi<DeSerializersT> {
    return new VendInvoiceRegisterHeadersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link vendInvoiceRegisterLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VEND_INVOICE_REGISTER_LINE: OneToManyLink<
      VendInvoiceRegisterHeaders<DeSerializersT>,
      DeSerializersT,
      VendInvoiceRegisterLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link vendInvoiceRegisterLineV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VEND_INVOICE_REGISTER_LINE_V_2: OneToManyLink<
      VendInvoiceRegisterHeaders<DeSerializersT>,
      DeSerializersT,
      VendInvoiceRegisterLinesV2Api<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      VendInvoiceRegisterLinesApi<DeSerializersT>,
      VendInvoiceRegisterLinesV2Api<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      VEND_INVOICE_REGISTER_LINE: new OneToManyLink(
        'VendInvoiceRegisterLine',
        this,
        linkedApis[0]
      ),
      VEND_INVOICE_REGISTER_LINE_V_2: new OneToManyLink(
        'VendInvoiceRegisterLineV2',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = VendInvoiceRegisterHeaders;

  requestBuilder(): VendInvoiceRegisterHeadersRequestBuilder<DeSerializersT> {
    return new VendInvoiceRegisterHeadersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    VendInvoiceRegisterHeaders<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      VendInvoiceRegisterHeaders<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    VendInvoiceRegisterHeaders<DeSerializersT>,
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
    typeof VendInvoiceRegisterHeaders,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        VendInvoiceRegisterHeaders,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      VendInvoiceRegisterHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    JOURNAL_BATCH_NUMBER: OrderableEdmTypeField<
      VendInvoiceRegisterHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    JOURNAL_NAME: OrderableEdmTypeField<
      VendInvoiceRegisterHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSTED: EnumField<
      VendInvoiceRegisterHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BUSINESS_DOCUMENT_SUBMISSION_ID_W: OrderableEdmTypeField<
      VendInvoiceRegisterHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    OVERRIDE_SALES_TAX: EnumField<
      VendInvoiceRegisterHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      VendInvoiceRegisterHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_TAX_INCLUDED: EnumField<
      VendInvoiceRegisterHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link vendInvoiceRegisterLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VEND_INVOICE_REGISTER_LINE: OneToManyLink<
      VendInvoiceRegisterHeaders<DeSerializersT>,
      DeSerializersT,
      VendInvoiceRegisterLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link vendInvoiceRegisterLineV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VEND_INVOICE_REGISTER_LINE_V_2: OneToManyLink<
      VendInvoiceRegisterHeaders<DeSerializersT>,
      DeSerializersT,
      VendInvoiceRegisterLinesV2Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<VendInvoiceRegisterHeaders<DeSerializers>>;
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
         * Static representation of the {@link journalBatchNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_BATCH_NUMBER: fieldBuilder.buildEdmTypeField(
          'JournalBatchNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link journalName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_NAME: fieldBuilder.buildEdmTypeField(
          'JournalName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link posted} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTED: fieldBuilder.buildEnumField('Posted', NoYes, true),
        /**
         * Static representation of the {@link businessDocumentSubmissionIdW} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUSINESS_DOCUMENT_SUBMISSION_ID_W: fieldBuilder.buildEdmTypeField(
          'BusinessDocumentSubmissionId_W',
          'Edm.Guid',
          false
        ),
        /**
         * Static representation of the {@link overrideSalesTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OVERRIDE_SALES_TAX: fieldBuilder.buildEnumField(
          'OverrideSalesTax',
          NoYes,
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
         * Static representation of the {@link salesTaxIncluded} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_TAX_INCLUDED: fieldBuilder.buildEnumField(
          'SalesTaxIncluded',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', VendInvoiceRegisterHeaders)
      };
    }

    return this._schema;
  }
}
