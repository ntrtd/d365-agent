/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { MarkupTableBiEntities } from './MarkupTableBiEntities';
import { MarkupTableBiEntitiesRequestBuilder } from './MarkupTableBiEntitiesRequestBuilder';
import { MarkupModuleType } from './MarkupModuleType';
import { NoYes } from './NoYes';
import { LedgerPostingType } from './LedgerPostingType';
import { MarkupClassificationBr } from './MarkupClassificationBr';
import { CustomPaymTypeRu } from './CustomPaymTypeRu';
import { MarkupType } from './MarkupType';
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
export class MarkupTableBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<MarkupTableBiEntities<DeSerializersT>, DeSerializersT>
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
  ): MarkupTableBiEntitiesApi<DeSerializersT> {
    return new MarkupTableBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = MarkupTableBiEntities;

  requestBuilder(): MarkupTableBiEntitiesRequestBuilder<DeSerializersT> {
    return new MarkupTableBiEntitiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    MarkupTableBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<MarkupTableBiEntities<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    MarkupTableBiEntities<DeSerializersT>,
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
    typeof MarkupTableBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        MarkupTableBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      MarkupTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MODULE_TYPE: EnumField<
      MarkupTableBiEntities<DeSerializers>,
      DeSerializersT,
      MarkupModuleType,
      true,
      true
    >;
    MARKUP_CODE: OrderableEdmTypeField<
      MarkupTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    USE_CUST_POSTING_TYPE_TRANSIT_RU: EnumField<
      MarkupTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_LETTER_OF_CREDIT_SA: EnumField<
      MarkupTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    VEND_POSTING: EnumField<
      MarkupTableBiEntities<DeSerializers>,
      DeSerializersT,
      LedgerPostingType,
      true,
      true
    >;
    CUST_POSTING: EnumField<
      MarkupTableBiEntities<DeSerializers>,
      DeSerializersT,
      LedgerPostingType,
      true,
      true
    >;
    SYS_DATA_AREA_ID: OrderableEdmTypeField<
      MarkupTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SKIP_IN_FREE_INVOICES_IT: EnumField<
      MarkupTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MARKUP_CLASSIFICATION_BR: EnumField<
      MarkupTableBiEntities<DeSerializers>,
      DeSerializersT,
      MarkupClassificationBr,
      true,
      true
    >;
    IS_SHIPPING: EnumField<
      MarkupTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MCR_PRO_RATE: EnumField<
      MarkupTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    USE_IN_MATCHING: EnumField<
      MarkupTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INCLUDE_INTO_INTRASTAT_INVOICE_VALUE: EnumField<
      MarkupTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    VENDOR_LEDGER_DIMENSION_VALUES_JSON: OrderableEdmTypeField<
      MarkupTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TXT: OrderableEdmTypeField<
      MarkupTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MCR_BROKER_CONTRACT_FEE: EnumField<
      MarkupTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TAX_RATE_TYPE: OrderableEdmTypeField<
      MarkupTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    MAX_AMOUNT: OrderableEdmTypeField<
      MarkupTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SYS_REC_VERSION: OrderableEdmTypeField<
      MarkupTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TAX_WITHHOLD_ITEM_GROUP: OrderableEdmTypeField<
      MarkupTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SAT_UNIT_CODE_MX: OrderableEdmTypeField<
      MarkupTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INCLUDE_INTO_INTRASTAT_STATISTICAL_VALUE: EnumField<
      MarkupTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SAT_PRODUCT_CODE_MX: OrderableEdmTypeField<
      MarkupTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_KEY: OrderableEdmTypeField<
      MarkupTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    CUSTOM_PAYM_TYPE_RU: EnumField<
      MarkupTableBiEntities<DeSerializers>,
      DeSerializersT,
      CustomPaymTypeRu,
      true,
      true
    >;
    CUST_TYPE: EnumField<
      MarkupTableBiEntities<DeSerializers>,
      DeSerializersT,
      MarkupType,
      true,
      true
    >;
    VEND_TYPE: EnumField<
      MarkupTableBiEntities<DeSerializers>,
      DeSerializersT,
      MarkupType,
      true,
      true
    >;
    TAX_ITEM_GROUP: OrderableEdmTypeField<
      MarkupTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER_LEDGER_DIMENSION_VALUES_JSON: OrderableEdmTypeField<
      MarkupTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REFUNDABLE: EnumField<
      MarkupTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<MarkupTableBiEntities<DeSerializers>>;
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
         * Static representation of the {@link moduleType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MODULE_TYPE: fieldBuilder.buildEnumField(
          'ModuleType',
          MarkupModuleType,
          true
        ),
        /**
         * Static representation of the {@link markupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MARKUP_CODE: fieldBuilder.buildEdmTypeField(
          'MarkupCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link useCustPostingTypeTransitRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_CUST_POSTING_TYPE_TRANSIT_RU: fieldBuilder.buildEnumField(
          'UseCustPostingTypeTransit_RU',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isLetterOfCreditSa} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_LETTER_OF_CREDIT_SA: fieldBuilder.buildEnumField(
          'IsLetterOfCredit_SA',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link vendPosting} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEND_POSTING: fieldBuilder.buildEnumField(
          'VendPosting',
          LedgerPostingType,
          true
        ),
        /**
         * Static representation of the {@link custPosting} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_POSTING: fieldBuilder.buildEnumField(
          'CustPosting',
          LedgerPostingType,
          true
        ),
        /**
         * Static representation of the {@link sysDataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'SysDataAreaId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link skipInFreeInvoicesIt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SKIP_IN_FREE_INVOICES_IT: fieldBuilder.buildEnumField(
          'SkipInFreeInvoices_IT',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link markupClassificationBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MARKUP_CLASSIFICATION_BR: fieldBuilder.buildEnumField(
          'MarkupClassification_BR',
          MarkupClassificationBr,
          true
        ),
        /**
         * Static representation of the {@link isShipping} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SHIPPING: fieldBuilder.buildEnumField('IsShipping', NoYes, true),
        /**
         * Static representation of the {@link mcrProRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MCR_PRO_RATE: fieldBuilder.buildEnumField('MCRProRate', NoYes, true),
        /**
         * Static representation of the {@link useInMatching} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_IN_MATCHING: fieldBuilder.buildEnumField(
          'UseInMatching',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link includeIntoIntrastatInvoiceValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCLUDE_INTO_INTRASTAT_INVOICE_VALUE: fieldBuilder.buildEnumField(
          'IncludeIntoIntrastatInvoiceValue',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link vendorLedgerDimensionValuesJson} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_LEDGER_DIMENSION_VALUES_JSON: fieldBuilder.buildEdmTypeField(
          'VendorLedgerDimensionValuesJson',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link txt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TXT: fieldBuilder.buildEdmTypeField('Txt', 'Edm.String', true),
        /**
         * Static representation of the {@link mcrBrokerContractFee} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MCR_BROKER_CONTRACT_FEE: fieldBuilder.buildEnumField(
          'MCRBrokerContractFee',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link taxRateType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_RATE_TYPE: fieldBuilder.buildEdmTypeField(
          'TaxRateType',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link maxAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAX_AMOUNT: fieldBuilder.buildEdmTypeField(
          'MaxAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link sysRecVersion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_REC_VERSION: fieldBuilder.buildEdmTypeField(
          'SysRecVersion',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link taxWithholdItemGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_WITHHOLD_ITEM_GROUP: fieldBuilder.buildEdmTypeField(
          'TaxWithholdItemGroup',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link satUnitCodeMx} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SAT_UNIT_CODE_MX: fieldBuilder.buildEdmTypeField(
          'SATUnitCode_MX',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link includeIntoIntrastatStatisticalValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCLUDE_INTO_INTRASTAT_STATISTICAL_VALUE: fieldBuilder.buildEnumField(
          'IncludeIntoIntrastatStatisticalValue',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link satProductCodeMx} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SAT_PRODUCT_CODE_MX: fieldBuilder.buildEdmTypeField(
          'SATProductCode_MX',
          'Edm.String',
          true
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
         * Static representation of the {@link customPaymTypeRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOM_PAYM_TYPE_RU: fieldBuilder.buildEnumField(
          'CustomPaymType_RU',
          CustomPaymTypeRu,
          true
        ),
        /**
         * Static representation of the {@link custType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_TYPE: fieldBuilder.buildEnumField('CustType', MarkupType, true),
        /**
         * Static representation of the {@link vendType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEND_TYPE: fieldBuilder.buildEnumField('VendType', MarkupType, true),
        /**
         * Static representation of the {@link taxItemGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_ITEM_GROUP: fieldBuilder.buildEdmTypeField(
          'TaxItemGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link customerLedgerDimensionValuesJson} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_LEDGER_DIMENSION_VALUES_JSON: fieldBuilder.buildEdmTypeField(
          'CustomerLedgerDimensionValuesJson',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link refundable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REFUNDABLE: fieldBuilder.buildEnumField('Refundable', NoYes, true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', MarkupTableBiEntities)
      };
    }

    return this._schema;
  }
}
