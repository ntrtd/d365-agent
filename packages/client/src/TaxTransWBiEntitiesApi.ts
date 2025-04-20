/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TaxTransWBiEntities } from './TaxTransWBiEntities';
import { TaxTransWBiEntitiesRequestBuilder } from './TaxTransWBiEntitiesRequestBuilder';
import { TaxTypeIn } from './TaxTypeIn';
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
export class TaxTransWBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<TaxTransWBiEntities<DeSerializersT>, DeSerializersT>
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
  ): TaxTransWBiEntitiesApi<DeSerializersT> {
    return new TaxTransWBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = TaxTransWBiEntities;

  requestBuilder(): TaxTransWBiEntitiesRequestBuilder<DeSerializersT> {
    return new TaxTransWBiEntitiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    TaxTransWBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<TaxTransWBiEntities<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    TaxTransWBiEntities<DeSerializersT>,
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
    typeof TaxTransWBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        TaxTransWBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      TaxTransWBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SOURCE_KEY: OrderableEdmTypeField<
      TaxTransWBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SERVICE_TAX_REVERSE_CHARGE_PERCENTAGE_IN: OrderableEdmTypeField<
      TaxTransWBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DOCUMENT_DATE_PL: OrderableEdmTypeField<
      TaxTransWBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ADDRESSING_PL: OrderableEdmTypeField<
      TaxTransWBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OFFSET_REC_ID_MX: OrderableEdmTypeField<
      TaxTransWBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TAX_TYPE_IN: EnumField<
      TaxTransWBiEntities<DeSerializers>,
      DeSerializersT,
      TaxTypeIn,
      true,
      true
    >;
    SERVICE_TAX_REVERSE_CHARGE_ORIGIN_AMOUNT_IN: OrderableEdmTypeField<
      TaxTransWBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_TRANS_REF_REC_ID_IN: OrderableEdmTypeField<
      TaxTransWBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    CUST_VEND_TRANS_POSTING_LOG_TAX_ORIGIN_W: OrderableEdmTypeField<
      TaxTransWBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TRANS_REC_ID_MX: OrderableEdmTypeField<
      TaxTransWBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    REVERSED_TAX_TRANS_REC_ID_W: OrderableEdmTypeField<
      TaxTransWBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    EXCISE_AMOUNT_PL: OrderableEdmTypeField<
      TaxTransWBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CUST_VEND_NAME_PL: OrderableEdmTypeField<
      TaxTransWBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    APPLY_EXCISE_IN: EnumField<
      TaxTransWBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ABATEMENT_AMOUNT_IN: OrderableEdmTypeField<
      TaxTransWBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_COMPONENT_TABLE_IN: OrderableEdmTypeField<
      TaxTransWBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TAX_AMOUNT_CUSTOMS_IN: OrderableEdmTypeField<
      TaxTransWBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_REGISTRATION_NUMBER_TABLE_IN: OrderableEdmTypeField<
      TaxTransWBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    CLAIM_PERCENTAGE_IN: OrderableEdmTypeField<
      TaxTransWBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_TRANS: OrderableEdmTypeField<
      TaxTransWBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TAX_PERIOD_PAYMENT_CODE_PL: OrderableEdmTypeField<
      TaxTransWBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROMISSORY_NOTE_INVOICE_MX: OrderableEdmTypeField<
      TaxTransWBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANS_TABLE_ID_MX: OrderableEdmTypeField<
      TaxTransWBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CUSTOMS_DUTY_IN: OrderableEdmTypeField<
      TaxTransWBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    VAT_NUM_PL: OrderableEdmTypeField<
      TaxTransWBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VAT_DUE_DATE_W: OrderableEdmTypeField<
      TaxTransWBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ALL_FIELDS: AllFields<TaxTransWBiEntities<DeSerializers>>;
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
         * Static representation of the {@link sourceKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_KEY: fieldBuilder.buildEdmTypeField(
          'SourceKey',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link serviceTaxReverseChargePercentageIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_TAX_REVERSE_CHARGE_PERCENTAGE_IN:
          fieldBuilder.buildEdmTypeField(
            'ServiceTaxReverseChargePercentage_IN',
            'Edm.Decimal',
            false
          ),
        /**
         * Static representation of the {@link documentDatePl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_DATE_PL: fieldBuilder.buildEdmTypeField(
          'DocumentDate_PL',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link addressingPl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESSING_PL: fieldBuilder.buildEdmTypeField(
          'Addressing_PL',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link offsetRecIdMx} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OFFSET_REC_ID_MX: fieldBuilder.buildEdmTypeField(
          'OffsetRecId_MX',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link taxTypeIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_TYPE_IN: fieldBuilder.buildEnumField('TaxType_IN', TaxTypeIn, true),
        /**
         * Static representation of the {@link serviceTaxReverseChargeOriginAmountIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_TAX_REVERSE_CHARGE_ORIGIN_AMOUNT_IN:
          fieldBuilder.buildEdmTypeField(
            'ServiceTaxReverseChargeOriginAmount_IN',
            'Edm.Decimal',
            false
          ),
        /**
         * Static representation of the {@link taxTransRefRecIdIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_TRANS_REF_REC_ID_IN: fieldBuilder.buildEdmTypeField(
          'TaxTransRefRecId_IN',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link custVendTransPostingLogTaxOriginW} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_VEND_TRANS_POSTING_LOG_TAX_ORIGIN_W:
          fieldBuilder.buildEdmTypeField(
            'CustVendTransPostingLogTaxOrigin_W',
            'Edm.Int64',
            false
          ),
        /**
         * Static representation of the {@link transRecIdMx} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANS_REC_ID_MX: fieldBuilder.buildEdmTypeField(
          'TransRecId_MX',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link reversedTaxTransRecIdW} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REVERSED_TAX_TRANS_REC_ID_W: fieldBuilder.buildEdmTypeField(
          'ReversedTaxTransRecId_W',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link exciseAmountPl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCISE_AMOUNT_PL: fieldBuilder.buildEdmTypeField(
          'ExciseAmount_PL',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link custVendNamePl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_VEND_NAME_PL: fieldBuilder.buildEdmTypeField(
          'CustVendName_PL',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link applyExciseIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPLY_EXCISE_IN: fieldBuilder.buildEnumField(
          'ApplyExcise_IN',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link abatementAmountIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ABATEMENT_AMOUNT_IN: fieldBuilder.buildEdmTypeField(
          'AbatementAmount_IN',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link taxComponentTableIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_COMPONENT_TABLE_IN: fieldBuilder.buildEdmTypeField(
          'TaxComponentTable_IN',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link taxAmountCustomsIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_AMOUNT_CUSTOMS_IN: fieldBuilder.buildEdmTypeField(
          'TaxAmountCustoms_IN',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link taxRegistrationNumberTableIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_REGISTRATION_NUMBER_TABLE_IN: fieldBuilder.buildEdmTypeField(
          'TaxRegistrationNumberTable_IN',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link claimPercentageIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLAIM_PERCENTAGE_IN: fieldBuilder.buildEdmTypeField(
          'ClaimPercentage_IN',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link taxTrans} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_TRANS: fieldBuilder.buildEdmTypeField(
          'TaxTrans',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link taxPeriodPaymentCodePl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_PERIOD_PAYMENT_CODE_PL: fieldBuilder.buildEdmTypeField(
          'TaxPeriodPaymentCode_PL',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link promissoryNoteInvoiceMx} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROMISSORY_NOTE_INVOICE_MX: fieldBuilder.buildEdmTypeField(
          'PromissoryNoteInvoice_MX',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transTableIdMx} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANS_TABLE_ID_MX: fieldBuilder.buildEdmTypeField(
          'TransTableId_MX',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link customsDutyIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMS_DUTY_IN: fieldBuilder.buildEdmTypeField(
          'CustomsDuty_IN',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link vatNumPl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAT_NUM_PL: fieldBuilder.buildEdmTypeField(
          'VATNum_PL',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vatDueDateW} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAT_DUE_DATE_W: fieldBuilder.buildEdmTypeField(
          'VatDueDate_W',
          'Edm.DateTimeOffset',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', TaxTransWBiEntities)
      };
    }

    return this._schema;
  }
}
