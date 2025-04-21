/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FbGeneralAdjustmentCodeLedgers } from './FbGeneralAdjustmentCodeLedgers';
import { FbGeneralAdjustmentCodeLedgersRequestBuilder } from './FbGeneralAdjustmentCodeLedgersRequestBuilder';
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
export class FbGeneralAdjustmentCodeLedgersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<FbGeneralAdjustmentCodeLedgers<DeSerializersT>, DeSerializersT>
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
  ): FbGeneralAdjustmentCodeLedgersApi<DeSerializersT> {
    return new FbGeneralAdjustmentCodeLedgersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      FbGeneralAdjustmentCodeLedgers<DeSerializersT>,
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

  entityConstructor = FbGeneralAdjustmentCodeLedgers;

  requestBuilder(): FbGeneralAdjustmentCodeLedgersRequestBuilder<DeSerializersT> {
    return new FbGeneralAdjustmentCodeLedgersRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    FbGeneralAdjustmentCodeLedgers<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      FbGeneralAdjustmentCodeLedgers<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    FbGeneralAdjustmentCodeLedgers<DeSerializersT>,
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
    typeof FbGeneralAdjustmentCodeLedgers,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        FbGeneralAdjustmentCodeLedgers,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    FB_GENERAL_ADJUSTMENT_CODE_IDENTIFICATION: OrderableEdmTypeField<
      FbGeneralAdjustmentCodeLedgers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COMPANY: OrderableEdmTypeField<
      FbGeneralAdjustmentCodeLedgers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LEDGER_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      FbGeneralAdjustmentCodeLedgers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_CODE: OrderableEdmTypeField<
      FbGeneralAdjustmentCodeLedgers<DeSerializers>,
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
      FbGeneralAdjustmentCodeLedgers<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<FbGeneralAdjustmentCodeLedgers<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link fbGeneralAdjustmentCodeIdentification} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FB_GENERAL_ADJUSTMENT_CODE_IDENTIFICATION:
          fieldBuilder.buildEdmTypeField(
            'FBGeneralAdjustmentCodeIdentification',
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
        ALL_FIELDS: new AllFields('*', FbGeneralAdjustmentCodeLedgers)
      };
    }

    return this._schema;
  }
}
