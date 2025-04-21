/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LtmDocumentClassificationCollectPaymDocs } from './LtmDocumentClassificationCollectPaymDocs';
import { LtmDocumentClassificationCollectPaymDocsRequestBuilder } from './LtmDocumentClassificationCollectPaymDocsRequestBuilder';
import { NoYes } from './NoYes';
import { LtmcpdPaymentMediaType } from './LtmcpdPaymentMediaType';
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
export class LtmDocumentClassificationCollectPaymDocsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      LtmDocumentClassificationCollectPaymDocs<DeSerializersT>,
      DeSerializersT
    >
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
  ): LtmDocumentClassificationCollectPaymDocsApi<DeSerializersT> {
    return new LtmDocumentClassificationCollectPaymDocsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = LtmDocumentClassificationCollectPaymDocs;

  requestBuilder(): LtmDocumentClassificationCollectPaymDocsRequestBuilder<DeSerializersT> {
    return new LtmDocumentClassificationCollectPaymDocsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    LtmDocumentClassificationCollectPaymDocs<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      LtmDocumentClassificationCollectPaymDocs<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    LtmDocumentClassificationCollectPaymDocs<DeSerializersT>,
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
    typeof LtmDocumentClassificationCollectPaymDocs,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        LtmDocumentClassificationCollectPaymDocs,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      LtmDocumentClassificationCollectPaymDocs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DOCUMENT_CLASSIFICATION_ID: OrderableEdmTypeField<
      LtmDocumentClassificationCollectPaymDocs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CPD_ACTION_EMISSION: EnumField<
      LtmDocumentClassificationCollectPaymDocs<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CPD_ACTION_RE_ENTRY: EnumField<
      LtmDocumentClassificationCollectPaymDocs<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CPD_DEFAULT_CURRENCY: OrderableEdmTypeField<
      LtmDocumentClassificationCollectPaymDocs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CPD_DATE_DEFERRED: EnumField<
      LtmDocumentClassificationCollectPaymDocs<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CPD_CURRENCY_CHANGE_ENABLED: EnumField<
      LtmDocumentClassificationCollectPaymDocs<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CPD_ACTION_CANCEL: EnumField<
      LtmDocumentClassificationCollectPaymDocs<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CPD_PAYMENT_MEDIA_TYPE: EnumField<
      LtmDocumentClassificationCollectPaymDocs<DeSerializers>,
      DeSerializersT,
      LtmcpdPaymentMediaType,
      true,
      true
    >;
    CPD_VEND_POSTING_PROFILE: OrderableEdmTypeField<
      LtmDocumentClassificationCollectPaymDocs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CPD_ACTION_ENTRY: EnumField<
      LtmDocumentClassificationCollectPaymDocs<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CPD_CUST_POSTING_PROFILE: OrderableEdmTypeField<
      LtmDocumentClassificationCollectPaymDocs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CPD_ACTION_EXIT: EnumField<
      LtmDocumentClassificationCollectPaymDocs<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CPD_ACTION_ACCRUAL: EnumField<
      LtmDocumentClassificationCollectPaymDocs<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<
      LtmDocumentClassificationCollectPaymDocs<DeSerializers>
    >;
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
         * Static representation of the {@link documentClassificationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_CLASSIFICATION_ID: fieldBuilder.buildEdmTypeField(
          'DocumentClassificationId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link cpdActionEmission} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CPD_ACTION_EMISSION: fieldBuilder.buildEnumField(
          'CPDActionEmission',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link cpdActionReEntry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CPD_ACTION_RE_ENTRY: fieldBuilder.buildEnumField(
          'CPDActionReEntry',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link cpdDefaultCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CPD_DEFAULT_CURRENCY: fieldBuilder.buildEdmTypeField(
          'CPDDefaultCurrency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cpdDateDeferred} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CPD_DATE_DEFERRED: fieldBuilder.buildEnumField(
          'CPDDateDeferred',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link cpdCurrencyChangeEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CPD_CURRENCY_CHANGE_ENABLED: fieldBuilder.buildEnumField(
          'CPDCurrencyChangeEnabled',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link cpdActionCancel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CPD_ACTION_CANCEL: fieldBuilder.buildEnumField(
          'CPDActionCancel',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link cpdPaymentMediaType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CPD_PAYMENT_MEDIA_TYPE: fieldBuilder.buildEnumField(
          'CPDPaymentMediaType',
          LtmcpdPaymentMediaType,
          true
        ),
        /**
         * Static representation of the {@link cpdVendPostingProfile} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CPD_VEND_POSTING_PROFILE: fieldBuilder.buildEdmTypeField(
          'CPDVendPostingProfile',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cpdActionEntry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CPD_ACTION_ENTRY: fieldBuilder.buildEnumField(
          'CPDActionEntry',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link cpdCustPostingProfile} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CPD_CUST_POSTING_PROFILE: fieldBuilder.buildEdmTypeField(
          'CPDCustPostingProfile',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cpdActionExit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CPD_ACTION_EXIT: fieldBuilder.buildEnumField(
          'CPDActionExit',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link cpdActionAccrual} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CPD_ACTION_ACCRUAL: fieldBuilder.buildEnumField(
          'CPDActionAccrual',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', LtmDocumentClassificationCollectPaymDocs)
      };
    }

    return this._schema;
  }
}
