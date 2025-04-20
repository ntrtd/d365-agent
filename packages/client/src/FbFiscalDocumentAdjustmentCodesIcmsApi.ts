/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FbFiscalDocumentAdjustmentCodesIcms } from './FbFiscalDocumentAdjustmentCodesIcms';
import { FbFiscalDocumentAdjustmentCodesIcmsRequestBuilder } from './FbFiscalDocumentAdjustmentCodesIcmsRequestBuilder';
import { NoYes } from './NoYes';
import { FbFiscalDocumentClassificationIcmsBr } from './FbFiscalDocumentClassificationIcmsBr';
import { FbAdjustmentCollectionTypeBr } from './FbAdjustmentCollectionTypeBr';
import { TaxTypeBr } from './TaxTypeBr';
import { FbAdjustmentResponsibilityTypeBr } from './FbAdjustmentResponsibilityTypeBr';
import { FbAdjustmentSourceTaxationTypeBr } from './FbAdjustmentSourceTaxationTypeBr';
import { FbAdjustmentAssessmentTypeBr } from './FbAdjustmentAssessmentTypeBr';
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
export class FbFiscalDocumentAdjustmentCodesIcmsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      FbFiscalDocumentAdjustmentCodesIcms<DeSerializersT>,
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
  ): FbFiscalDocumentAdjustmentCodesIcmsApi<DeSerializersT> {
    return new FbFiscalDocumentAdjustmentCodesIcmsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = FbFiscalDocumentAdjustmentCodesIcms;

  requestBuilder(): FbFiscalDocumentAdjustmentCodesIcmsRequestBuilder<DeSerializersT> {
    return new FbFiscalDocumentAdjustmentCodesIcmsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    FbFiscalDocumentAdjustmentCodesIcms<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      FbFiscalDocumentAdjustmentCodesIcms<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    FbFiscalDocumentAdjustmentCodesIcms<DeSerializersT>,
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
    typeof FbFiscalDocumentAdjustmentCodesIcms,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        FbFiscalDocumentAdjustmentCodesIcms,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ADJUSTMENT_CODE: OrderableEdmTypeField<
      FbFiscalDocumentAdjustmentCodesIcms<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      FbFiscalDocumentAdjustmentCodesIcms<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SPED_ADJUSTMENT_CODE: OrderableEdmTypeField<
      FbFiscalDocumentAdjustmentCodesIcms<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TABLE_52: EnumField<
      FbFiscalDocumentAdjustmentCodesIcms<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    VALID_FROM_DATE: OrderableEdmTypeField<
      FbFiscalDocumentAdjustmentCodesIcms<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TYPE_OF_BENEFIT_CODE: OrderableEdmTypeField<
      FbFiscalDocumentAdjustmentCodesIcms<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CLASSIFICATION: EnumField<
      FbFiscalDocumentAdjustmentCodesIcms<DeSerializers>,
      DeSerializersT,
      FbFiscalDocumentClassificationIcmsBr,
      true,
      true
    >;
    TAX_PAYMENT_TYPE: EnumField<
      FbFiscalDocumentAdjustmentCodesIcms<DeSerializers>,
      DeSerializersT,
      FbAdjustmentCollectionTypeBr,
      true,
      true
    >;
    TAX_TYPE: EnumField<
      FbFiscalDocumentAdjustmentCodesIcms<DeSerializers>,
      DeSerializersT,
      TaxTypeBr,
      true,
      true
    >;
    RESPONSIBILITY: EnumField<
      FbFiscalDocumentAdjustmentCodesIcms<DeSerializers>,
      DeSerializersT,
      FbAdjustmentResponsibilityTypeBr,
      true,
      true
    >;
    OTHER_DEBIT: EnumField<
      FbFiscalDocumentAdjustmentCodesIcms<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    OCCURRENCE_CODE: OrderableEdmTypeField<
      FbFiscalDocumentAdjustmentCodesIcms<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_POVERTY_FUND: EnumField<
      FbFiscalDocumentAdjustmentCodesIcms<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    RECEITA_CODE: OrderableEdmTypeField<
      FbFiscalDocumentAdjustmentCodesIcms<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_TAX: EnumField<
      FbFiscalDocumentAdjustmentCodesIcms<DeSerializers>,
      DeSerializersT,
      FbAdjustmentSourceTaxationTypeBr,
      true,
      true
    >;
    VALID_TO_DATE: OrderableEdmTypeField<
      FbFiscalDocumentAdjustmentCodesIcms<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    GIA_ADJUSTMENT_CODE: OrderableEdmTypeField<
      FbFiscalDocumentAdjustmentCodesIcms<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ASSESSMENT_TYPE: EnumField<
      FbFiscalDocumentAdjustmentCodesIcms<DeSerializers>,
      DeSerializersT,
      FbAdjustmentAssessmentTypeBr,
      true,
      true
    >;
    STATE: OrderableEdmTypeField<
      FbFiscalDocumentAdjustmentCodesIcms<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<FbFiscalDocumentAdjustmentCodesIcms<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link adjustmentCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADJUSTMENT_CODE: fieldBuilder.buildEdmTypeField(
          'AdjustmentCode',
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
         * Static representation of the {@link spedAdjustmentCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SPED_ADJUSTMENT_CODE: fieldBuilder.buildEdmTypeField(
          'SpedAdjustmentCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link table52} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TABLE_52: fieldBuilder.buildEnumField('Table52', NoYes, true),
        /**
         * Static representation of the {@link validFromDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_FROM_DATE: fieldBuilder.buildEdmTypeField(
          'ValidFromDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link typeOfBenefitCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE_OF_BENEFIT_CODE: fieldBuilder.buildEdmTypeField(
          'TypeOfBenefitCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link classification} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLASSIFICATION: fieldBuilder.buildEnumField(
          'Classification',
          FbFiscalDocumentClassificationIcmsBr,
          true
        ),
        /**
         * Static representation of the {@link taxPaymentType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_PAYMENT_TYPE: fieldBuilder.buildEnumField(
          'TaxPaymentType',
          FbAdjustmentCollectionTypeBr,
          true
        ),
        /**
         * Static representation of the {@link taxType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_TYPE: fieldBuilder.buildEnumField('TaxType', TaxTypeBr, true),
        /**
         * Static representation of the {@link responsibility} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESPONSIBILITY: fieldBuilder.buildEnumField(
          'Responsibility',
          FbAdjustmentResponsibilityTypeBr,
          true
        ),
        /**
         * Static representation of the {@link otherDebit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OTHER_DEBIT: fieldBuilder.buildEnumField('OtherDebit', NoYes, true),
        /**
         * Static representation of the {@link occurrenceCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OCCURRENCE_CODE: fieldBuilder.buildEdmTypeField(
          'OccurrenceCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isPovertyFund} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_POVERTY_FUND: fieldBuilder.buildEnumField(
          'IsPovertyFund',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link receitaCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEITA_CODE: fieldBuilder.buildEdmTypeField(
          'ReceitaCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sourceTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_TAX: fieldBuilder.buildEnumField(
          'SourceTax',
          FbAdjustmentSourceTaxationTypeBr,
          true
        ),
        /**
         * Static representation of the {@link validToDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_TO_DATE: fieldBuilder.buildEdmTypeField(
          'ValidToDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link giaAdjustmentCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GIA_ADJUSTMENT_CODE: fieldBuilder.buildEdmTypeField(
          'GIAAdjustmentCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link assessmentType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSESSMENT_TYPE: fieldBuilder.buildEnumField(
          'AssessmentType',
          FbAdjustmentAssessmentTypeBr,
          true
        ),
        /**
         * Static representation of the {@link state} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATE: fieldBuilder.buildEdmTypeField('State', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', FbFiscalDocumentAdjustmentCodesIcms)
      };
    }

    return this._schema;
  }
}
