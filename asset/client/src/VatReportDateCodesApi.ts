/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { VatReportDateCodes } from './VatReportDateCodes';
import { VatReportDateCodesRequestBuilder } from './VatReportDateCodesRequestBuilder';
import { PlTaxDueDate } from './PlTaxDueDate';
import { NoYes } from './NoYes';
import { PlTaxDueCalcFrom } from './PlTaxDueCalcFrom';
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
export class VatReportDateCodesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<VatReportDateCodes<DeSerializersT>, DeSerializersT>
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
  ): VatReportDateCodesApi<DeSerializersT> {
    return new VatReportDateCodesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = VatReportDateCodes;

  requestBuilder(): VatReportDateCodesRequestBuilder<DeSerializersT> {
    return new VatReportDateCodesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    VatReportDateCodes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<VatReportDateCodes<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    VatReportDateCodes<DeSerializersT>,
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
    typeof VatReportDateCodes,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        VatReportDateCodes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      VatReportDateCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VAT_REPORT_DATE_CODE: OrderableEdmTypeField<
      VatReportDateCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INCLUDE_IN_VAT_REPORT: EnumField<
      VatReportDateCodes<DeSerializers>,
      DeSerializersT,
      PlTaxDueDate,
      true,
      true
    >;
    VAT_DATE_IS_PAYMENT_DATE: EnumField<
      VatReportDateCodes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PARTIAL_SETTLEMENT: EnumField<
      VatReportDateCodes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      VatReportDateCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COUNTED_FROM: EnumField<
      VatReportDateCodes<DeSerializers>,
      DeSerializersT,
      PlTaxDueCalcFrom,
      true,
      true
    >;
    NUMBER_OF_DAYS: OrderableEdmTypeField<
      VatReportDateCodes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ALL_FIELDS: AllFields<VatReportDateCodes<DeSerializers>>;
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
         * Static representation of the {@link vatReportDateCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAT_REPORT_DATE_CODE: fieldBuilder.buildEdmTypeField(
          'VATReportDateCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link includeInVatReport} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCLUDE_IN_VAT_REPORT: fieldBuilder.buildEnumField(
          'IncludeInVATReport',
          PlTaxDueDate,
          true
        ),
        /**
         * Static representation of the {@link vatDateIsPaymentDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAT_DATE_IS_PAYMENT_DATE: fieldBuilder.buildEnumField(
          'VatDateIsPaymentDate',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link partialSettlement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARTIAL_SETTLEMENT: fieldBuilder.buildEnumField(
          'PartialSettlement',
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
         * Static representation of the {@link countedFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTED_FROM: fieldBuilder.buildEnumField(
          'CountedFrom',
          PlTaxDueCalcFrom,
          true
        ),
        /**
         * Static representation of the {@link numberOfDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_OF_DAYS: fieldBuilder.buildEdmTypeField(
          'NumberOfDays',
          'Edm.Int32',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', VatReportDateCodes)
      };
    }

    return this._schema;
  }
}
