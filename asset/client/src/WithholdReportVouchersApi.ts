/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WithholdReportVouchers } from './WithholdReportVouchers';
import { WithholdReportVouchersRequestBuilder } from './WithholdReportVouchersRequestBuilder';
import { NoYes } from './NoYes';
import { TaxRepVersion } from './TaxRepVersion';
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
export class WithholdReportVouchersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<WithholdReportVouchers<DeSerializersT>, DeSerializersT>
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
  ): WithholdReportVouchersApi<DeSerializersT> {
    return new WithholdReportVouchersApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = WithholdReportVouchers;

  requestBuilder(): WithholdReportVouchersRequestBuilder<DeSerializersT> {
    return new WithholdReportVouchersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    WithholdReportVouchers<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      WithholdReportVouchers<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    WithholdReportVouchers<DeSerializersT>,
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
    typeof WithholdReportVouchers,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        WithholdReportVouchers,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      WithholdReportVouchers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VOUCHER: OrderableEdmTypeField<
      WithholdReportVouchers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DATE: OrderableEdmTypeField<
      WithholdReportVouchers<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    REFERENCE_TO_DATE: OrderableEdmTypeField<
      WithholdReportVouchers<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    POSTED_WITHHOLDING_TAX_CORRECTIONS: EnumField<
      WithholdReportVouchers<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REFERENCE_FROM_DATE: OrderableEdmTypeField<
      WithholdReportVouchers<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    REFERENCE_SATTLEMENT_PERIOD: OrderableEdmTypeField<
      WithholdReportVouchers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WITHHOLDING_TAX_PAYMENT_VERSION: EnumField<
      WithholdReportVouchers<DeSerializers>,
      DeSerializersT,
      TaxRepVersion,
      true,
      true
    >;
    ALL_FIELDS: AllFields<WithholdReportVouchers<DeSerializers>>;
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
         * Static representation of the {@link voucher} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VOUCHER: fieldBuilder.buildEdmTypeField('Voucher', 'Edm.String', false),
        /**
         * Static representation of the {@link date} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE: fieldBuilder.buildEdmTypeField(
          'Date',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link referenceToDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REFERENCE_TO_DATE: fieldBuilder.buildEdmTypeField(
          'ReferenceToDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link postedWithholdingTaxCorrections} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTED_WITHHOLDING_TAX_CORRECTIONS: fieldBuilder.buildEnumField(
          'PostedWithholdingTaxCorrections',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link referenceFromDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REFERENCE_FROM_DATE: fieldBuilder.buildEdmTypeField(
          'ReferenceFromDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link referenceSattlementPeriod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REFERENCE_SATTLEMENT_PERIOD: fieldBuilder.buildEdmTypeField(
          'ReferenceSattlementPeriod',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link withholdingTaxPaymentVersion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WITHHOLDING_TAX_PAYMENT_VERSION: fieldBuilder.buildEnumField(
          'WithholdingTaxPaymentVersion',
          TaxRepVersion,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', WithholdReportVouchers)
      };
    }

    return this._schema;
  }
}
