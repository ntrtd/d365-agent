/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ReportExtraFieldsBEs } from './ReportExtraFieldsBEs';
import { ReportExtraFieldsBEsRequestBuilder } from './ReportExtraFieldsBEsRequestBuilder';
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
export class ReportExtraFieldsBEsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ReportExtraFieldsBEs<DeSerializersT>, DeSerializersT>
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
  ): ReportExtraFieldsBEsApi<DeSerializersT> {
    return new ReportExtraFieldsBEsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ReportExtraFieldsBEs;

  requestBuilder(): ReportExtraFieldsBEsRequestBuilder<DeSerializersT> {
    return new ReportExtraFieldsBEsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ReportExtraFieldsBEs<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ReportExtraFieldsBEs<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ReportExtraFieldsBEs<DeSerializersT>,
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
    typeof ReportExtraFieldsBEs,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ReportExtraFieldsBEs,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ReportExtraFieldsBEs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TAX_PERIOD: OrderableEdmTypeField<
      ReportExtraFieldsBEs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VALID_FROM: OrderableEdmTypeField<
      ReportExtraFieldsBEs<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    VALID_TO: OrderableEdmTypeField<
      ReportExtraFieldsBEs<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    VOUCHER: OrderableEdmTypeField<
      ReportExtraFieldsBEs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VAT_DISBURSEMENT: OrderableEdmTypeField<
      ReportExtraFieldsBEs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NIHIL_ANNUAL_LISTING: EnumField<
      ReportExtraFieldsBEs<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PAYMENT_FORM_ORDER: EnumField<
      ReportExtraFieldsBEs<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TRANS_DATE: OrderableEdmTypeField<
      ReportExtraFieldsBEs<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    REQUESTS_REPAYMENTS: EnumField<
      ReportExtraFieldsBEs<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<ReportExtraFieldsBEs<DeSerializers>>;
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
         * Static representation of the {@link taxPeriod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_PERIOD: fieldBuilder.buildEdmTypeField(
          'TaxPeriod',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link validFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_FROM: fieldBuilder.buildEdmTypeField(
          'ValidFrom',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link validTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_TO: fieldBuilder.buildEdmTypeField(
          'ValidTo',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link voucher} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VOUCHER: fieldBuilder.buildEdmTypeField('Voucher', 'Edm.String', true),
        /**
         * Static representation of the {@link vatDisbursement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAT_DISBURSEMENT: fieldBuilder.buildEdmTypeField(
          'VATDisbursement',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link nihilAnnualListing} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NIHIL_ANNUAL_LISTING: fieldBuilder.buildEnumField(
          'NihilAnnualListing',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link paymentFormOrder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_FORM_ORDER: fieldBuilder.buildEnumField(
          'PaymentFormOrder',
          NoYes,
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
         * Static representation of the {@link requestsRepayments} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUESTS_REPAYMENTS: fieldBuilder.buildEnumField(
          'RequestsRepayments',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ReportExtraFieldsBEs)
      };
    }

    return this._schema;
  }
}
