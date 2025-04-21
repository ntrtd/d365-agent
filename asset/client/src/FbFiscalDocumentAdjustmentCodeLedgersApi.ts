/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FbFiscalDocumentAdjustmentCodeLedgers } from './FbFiscalDocumentAdjustmentCodeLedgers';
import { FbFiscalDocumentAdjustmentCodeLedgersRequestBuilder } from './FbFiscalDocumentAdjustmentCodeLedgersRequestBuilder';
import { DimensionCombinationsApi } from './DimensionCombinationsApi';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class FbFiscalDocumentAdjustmentCodeLedgersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      FbFiscalDocumentAdjustmentCodeLedgers<DeSerializersT>,
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
  ): FbFiscalDocumentAdjustmentCodeLedgersApi<DeSerializersT> {
    return new FbFiscalDocumentAdjustmentCodeLedgersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      FbFiscalDocumentAdjustmentCodeLedgers<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [DimensionCombinationsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      DIMENSION_COMBINATION: new OneToOneLink(
        'DimensionCombination',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = FbFiscalDocumentAdjustmentCodeLedgers;

  requestBuilder(): FbFiscalDocumentAdjustmentCodeLedgersRequestBuilder<DeSerializersT> {
    return new FbFiscalDocumentAdjustmentCodeLedgersRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    FbFiscalDocumentAdjustmentCodeLedgers<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      FbFiscalDocumentAdjustmentCodeLedgers<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    FbFiscalDocumentAdjustmentCodeLedgers<DeSerializersT>,
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
    typeof FbFiscalDocumentAdjustmentCodeLedgers,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        FbFiscalDocumentAdjustmentCodeLedgers,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    FB_FISCAL_DOCUMENT_ADJUSTMENT_CODE_IDENTIFICATION: OrderableEdmTypeField<
      FbFiscalDocumentAdjustmentCodeLedgers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COMPANY: OrderableEdmTypeField<
      FbFiscalDocumentAdjustmentCodeLedgers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LEDGER_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      FbFiscalDocumentAdjustmentCodeLedgers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_CODE: OrderableEdmTypeField<
      FbFiscalDocumentAdjustmentCodeLedgers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      FbFiscalDocumentAdjustmentCodeLedgers<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<FbFiscalDocumentAdjustmentCodeLedgers<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link fbFiscalDocumentAdjustmentCodeIdentification} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FB_FISCAL_DOCUMENT_ADJUSTMENT_CODE_IDENTIFICATION:
          fieldBuilder.buildEdmTypeField(
            'FBFiscalDocumentAdjustmentCodeIdentification',
            'Edm.String',
            false
          ),
        /**
         * Static representation of the {@link company} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY: fieldBuilder.buildEdmTypeField('Company', 'Edm.String', false),
        /**
         * Static representation of the {@link ledgerDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEDGER_DIMENSION_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'LedgerDimensionDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_CODE: fieldBuilder.buildEdmTypeField('TaxCode', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', FbFiscalDocumentAdjustmentCodeLedgers)
      };
    }

    return this._schema;
  }
}
