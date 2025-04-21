/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PurchaseAgreementHeadersForAi } from './PurchaseAgreementHeadersForAi';
import { PurchaseAgreementHeadersForAiRequestBuilder } from './PurchaseAgreementHeadersForAiRequestBuilder';
import { VendorsForAiApi } from './VendorsForAiApi';
import { PurchaseAgreementLinesForAiApi } from './PurchaseAgreementLinesForAiApi';
import { AgreementState } from './AgreementState';
import { CommitmentType } from './CommitmentType';
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
  OneToOneLink,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class PurchaseAgreementHeadersForAiApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<PurchaseAgreementHeadersForAi<DeSerializersT>, DeSerializersT>
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
  ): PurchaseAgreementHeadersForAiApi<DeSerializersT> {
    return new PurchaseAgreementHeadersForAiApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link agreementVendor} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AGREEMENT_VENDOR: OneToOneLink<
      PurchaseAgreementHeadersForAi<DeSerializersT>,
      DeSerializersT,
      VendorsForAiApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseAgreementLinesAi} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_AGREEMENT_LINES_AI: OneToManyLink<
      PurchaseAgreementHeadersForAi<DeSerializersT>,
      DeSerializersT,
      PurchaseAgreementLinesForAiApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      VendorsForAiApi<DeSerializersT>,
      PurchaseAgreementLinesForAiApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      AGREEMENT_VENDOR: new OneToOneLink(
        'AgreementVendor',
        this,
        linkedApis[0]
      ),
      PURCHASE_AGREEMENT_LINES_AI: new OneToManyLink(
        'PurchaseAgreementLinesAI',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = PurchaseAgreementHeadersForAi;

  requestBuilder(): PurchaseAgreementHeadersForAiRequestBuilder<DeSerializersT> {
    return new PurchaseAgreementHeadersForAiRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    PurchaseAgreementHeadersForAi<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      PurchaseAgreementHeadersForAi<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PurchaseAgreementHeadersForAi<DeSerializersT>,
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
    typeof PurchaseAgreementHeadersForAi,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PurchaseAgreementHeadersForAi,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      PurchaseAgreementHeadersForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PURCHASE_AGREEMENT_ID: OrderableEdmTypeField<
      PurchaseAgreementHeadersForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VENDOR_PAYMENT_METHOD_SPECIFICATION_NAME: OrderableEdmTypeField<
      PurchaseAgreementHeadersForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DOCUMENT_TITLE: OrderableEdmTypeField<
      PurchaseAgreementHeadersForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AGREEMENT_VENDOR_DATA_AREA_ID: OrderableEdmTypeField<
      PurchaseAgreementHeadersForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      PurchaseAgreementHeadersForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VENDOR_PAYMENT_METHOD_NAME: OrderableEdmTypeField<
      PurchaseAgreementHeadersForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LANGUAGE_ID: OrderableEdmTypeField<
      PurchaseAgreementHeadersForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AGREEMENT_STATUS: EnumField<
      PurchaseAgreementHeadersForAi<DeSerializers>,
      DeSerializersT,
      AgreementState,
      true,
      true
    >;
    AGREEMENT_VENDOR_ACCOUNT_NUMBER: OrderableEdmTypeField<
      PurchaseAgreementHeadersForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_EFFECTIVE_DATE: OrderableEdmTypeField<
      PurchaseAgreementHeadersForAi<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DEFAULT_COMMITMENT_TYPE: EnumField<
      PurchaseAgreementHeadersForAi<DeSerializers>,
      DeSerializersT,
      CommitmentType,
      true,
      true
    >;
    AGREEMENT_CREATED_DATE_TIME: OrderableEdmTypeField<
      PurchaseAgreementHeadersForAi<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DEFAULT_EXPIRATION_DATE: OrderableEdmTypeField<
      PurchaseAgreementHeadersForAi<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link agreementVendor} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AGREEMENT_VENDOR: OneToOneLink<
      PurchaseAgreementHeadersForAi<DeSerializersT>,
      DeSerializersT,
      VendorsForAiApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseAgreementLinesAi} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_AGREEMENT_LINES_AI: OneToManyLink<
      PurchaseAgreementHeadersForAi<DeSerializersT>,
      DeSerializersT,
      PurchaseAgreementLinesForAiApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<PurchaseAgreementHeadersForAi<DeSerializers>>;
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
         * Static representation of the {@link purchaseAgreementId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_AGREEMENT_ID: fieldBuilder.buildEdmTypeField(
          'PurchaseAgreementId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link vendorPaymentMethodSpecificationName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_PAYMENT_METHOD_SPECIFICATION_NAME:
          fieldBuilder.buildEdmTypeField(
            'VendorPaymentMethodSpecificationName',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link documentTitle} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_TITLE: fieldBuilder.buildEdmTypeField(
          'DocumentTitle',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link agreementVendorDataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGREEMENT_VENDOR_DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'AgreementVendorDataAreaId',
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
         * Static representation of the {@link vendorPaymentMethodName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_PAYMENT_METHOD_NAME: fieldBuilder.buildEdmTypeField(
          'VendorPaymentMethodName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link languageId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LANGUAGE_ID: fieldBuilder.buildEdmTypeField(
          'LanguageId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link agreementStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGREEMENT_STATUS: fieldBuilder.buildEnumField(
          'AgreementStatus',
          AgreementState,
          true
        ),
        /**
         * Static representation of the {@link agreementVendorAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGREEMENT_VENDOR_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'AgreementVendorAccountNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultEffectiveDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_EFFECTIVE_DATE: fieldBuilder.buildEdmTypeField(
          'DefaultEffectiveDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link defaultCommitmentType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_COMMITMENT_TYPE: fieldBuilder.buildEnumField(
          'DefaultCommitmentType',
          CommitmentType,
          true
        ),
        /**
         * Static representation of the {@link agreementCreatedDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGREEMENT_CREATED_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'AgreementCreatedDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link defaultExpirationDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_EXPIRATION_DATE: fieldBuilder.buildEdmTypeField(
          'DefaultExpirationDate',
          'Edm.DateTimeOffset',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PurchaseAgreementHeadersForAi)
      };
    }

    return this._schema;
  }
}
