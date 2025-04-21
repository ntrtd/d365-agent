/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TaxTransBrBiEntities } from './TaxTransBrBiEntities';
import { TaxTransBrBiEntitiesRequestBuilder } from './TaxTransBrBiEntitiesRequestBuilder';
import { TaxTypeBr } from './TaxTypeBr';
import { TaxFiscalValueBr } from './TaxFiscalValueBr';
import { NoYes } from './NoYes';
import { FiTaxationOriginBr } from './FiTaxationOriginBr';
import { TaxSubstitutionEnumBr } from './TaxSubstitutionEnumBr';
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
export class TaxTransBrBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<TaxTransBrBiEntities<DeSerializersT>, DeSerializersT>
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
  ): TaxTransBrBiEntitiesApi<DeSerializersT> {
    return new TaxTransBrBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = TaxTransBrBiEntities;

  requestBuilder(): TaxTransBrBiEntitiesRequestBuilder<DeSerializersT> {
    return new TaxTransBrBiEntitiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    TaxTransBrBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<TaxTransBrBiEntities<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    TaxTransBrBiEntities<DeSerializersT>,
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
    typeof TaxTransBrBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        TaxTransBrBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      TaxTransBrBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SOURCE_KEY: OrderableEdmTypeField<
      TaxTransBrBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TAX_TYPE_BR: EnumField<
      TaxTransBrBiEntities<DeSerializers>,
      DeSerializersT,
      TaxTypeBr,
      true,
      true
    >;
    TAX_BASE_AMOUNT_OTHER_BR: OrderableEdmTypeField<
      TaxTransBrBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    FISCAL_VALUE_BR: EnumField<
      TaxTransBrBiEntities<DeSerializers>,
      DeSerializersT,
      TaxFiscalValueBr,
      true,
      true
    >;
    IS_ICMS_DIFFERENCE_TAX_BR: EnumField<
      TaxTransBrBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TAX_BASE_AMOUNT_EXEMPT_BR: OrderableEdmTypeField<
      TaxTransBrBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_TRANS: OrderableEdmTypeField<
      TaxTransBrBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TAX_RECEIVABLE_LONG_TERM_BR: EnumField<
      TaxTransBrBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TAXATION_CODE_BR: OrderableEdmTypeField<
      TaxTransBrBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_VALUE_DIFF_BR: OrderableEdmTypeField<
      TaxTransBrBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAXATION_ORIGIN_BR: EnumField<
      TaxTransBrBiEntities<DeSerializers>,
      DeSerializersT,
      FiTaxationOriginBr,
      true,
      true
    >;
    TAX_SUBSTITUTION_BR: EnumField<
      TaxTransBrBiEntities<DeSerializers>,
      DeSerializersT,
      TaxSubstitutionEnumBr,
      true,
      true
    >;
    TAX_AMOUNT_OTHER_BR: OrderableEdmTypeField<
      TaxTransBrBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_REDUCTION_PCT_BR: OrderableEdmTypeField<
      TaxTransBrBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<TaxTransBrBiEntities<DeSerializers>>;
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
         * Static representation of the {@link taxTypeBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_TYPE_BR: fieldBuilder.buildEnumField('TaxType_BR', TaxTypeBr, true),
        /**
         * Static representation of the {@link taxBaseAmountOtherBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_BASE_AMOUNT_OTHER_BR: fieldBuilder.buildEdmTypeField(
          'TaxBaseAmountOther_BR',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link fiscalValueBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_VALUE_BR: fieldBuilder.buildEnumField(
          'FiscalValue_BR',
          TaxFiscalValueBr,
          true
        ),
        /**
         * Static representation of the {@link isIcmsDifferenceTaxBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ICMS_DIFFERENCE_TAX_BR: fieldBuilder.buildEnumField(
          'IsICMSDifferenceTax_BR',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link taxBaseAmountExemptBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_BASE_AMOUNT_EXEMPT_BR: fieldBuilder.buildEdmTypeField(
          'TaxBaseAmountExempt_BR',
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
         * Static representation of the {@link taxReceivableLongTermBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_RECEIVABLE_LONG_TERM_BR: fieldBuilder.buildEnumField(
          'TaxReceivableLongTerm_BR',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link taxationCodeBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAXATION_CODE_BR: fieldBuilder.buildEdmTypeField(
          'TaxationCode_BR',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxValueDiffBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_VALUE_DIFF_BR: fieldBuilder.buildEdmTypeField(
          'TaxValueDiff_BR',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link taxationOriginBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAXATION_ORIGIN_BR: fieldBuilder.buildEnumField(
          'TaxationOrigin_BR',
          FiTaxationOriginBr,
          true
        ),
        /**
         * Static representation of the {@link taxSubstitutionBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_SUBSTITUTION_BR: fieldBuilder.buildEnumField(
          'TaxSubstitution_BR',
          TaxSubstitutionEnumBr,
          true
        ),
        /**
         * Static representation of the {@link taxAmountOtherBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_AMOUNT_OTHER_BR: fieldBuilder.buildEdmTypeField(
          'TaxAmountOther_BR',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link taxReductionPctBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_REDUCTION_PCT_BR: fieldBuilder.buildEdmTypeField(
          'TaxReductionPct_BR',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', TaxTransBrBiEntities)
      };
    }

    return this._schema;
  }
}
