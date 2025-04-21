/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BillingClassifications } from './BillingClassifications';
import { BillingClassificationsRequestBuilder } from './BillingClassificationsRequestBuilder';
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
export class BillingClassificationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BillingClassifications<DeSerializersT>, DeSerializersT>
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
  ): BillingClassificationsApi<DeSerializersT> {
    return new BillingClassificationsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = BillingClassifications;

  requestBuilder(): BillingClassificationsRequestBuilder<DeSerializersT> {
    return new BillingClassificationsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BillingClassifications<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      BillingClassifications<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BillingClassifications<DeSerializersT>,
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
    typeof BillingClassifications,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BillingClassifications,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      BillingClassifications<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BILLING_CLASSIFICATION: OrderableEdmTypeField<
      BillingClassifications<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      BillingClassifications<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREDIT_NOTE_NUMBER: OrderableEdmTypeField<
      BillingClassifications<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USE_INTEREST_CODE_FROM_POSTING_PROFILE: EnumField<
      BillingClassifications<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INVOICE_NUMBER: OrderableEdmTypeField<
      BillingClassifications<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COLLECTION_LETTER_SEQUENCE: OrderableEdmTypeField<
      BillingClassifications<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USE_COLLECTION_LETTER_SEQUENCE_FROM_POSTING_PROFILE: EnumField<
      BillingClassifications<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INTEREST_CODE: OrderableEdmTypeField<
      BillingClassifications<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RESTRICT_SETTLEMENT_OF_CREDIT_NOTES: EnumField<
      BillingClassifications<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TERMS_OF_PAYMENT: OrderableEdmTypeField<
      BillingClassifications<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<BillingClassifications<DeSerializers>>;
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
         * Static representation of the {@link billingClassification} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILLING_CLASSIFICATION: fieldBuilder.buildEdmTypeField(
          'BillingClassification',
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
         * Static representation of the {@link creditNoteNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_NOTE_NUMBER: fieldBuilder.buildEdmTypeField(
          'CreditNoteNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link useInterestCodeFromPostingProfile} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_INTEREST_CODE_FROM_POSTING_PROFILE: fieldBuilder.buildEnumField(
          'UseInterestCodeFromPostingProfile',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link invoiceNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_NUMBER: fieldBuilder.buildEdmTypeField(
          'InvoiceNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link collectionLetterSequence} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COLLECTION_LETTER_SEQUENCE: fieldBuilder.buildEdmTypeField(
          'CollectionLetterSequence',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link useCollectionLetterSequenceFromPostingProfile} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_COLLECTION_LETTER_SEQUENCE_FROM_POSTING_PROFILE:
          fieldBuilder.buildEnumField(
            'UseCollectionLetterSequenceFromPostingProfile',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link interestCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTEREST_CODE: fieldBuilder.buildEdmTypeField(
          'InterestCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link restrictSettlementOfCreditNotes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESTRICT_SETTLEMENT_OF_CREDIT_NOTES: fieldBuilder.buildEnumField(
          'RestrictSettlementOfCreditNotes',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link termsOfPayment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TERMS_OF_PAYMENT: fieldBuilder.buildEdmTypeField(
          'TermsOfPayment',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BillingClassifications)
      };
    }

    return this._schema;
  }
}
