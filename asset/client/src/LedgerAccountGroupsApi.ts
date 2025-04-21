/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LedgerAccountGroups } from './LedgerAccountGroups';
import { LedgerAccountGroupsRequestBuilder } from './LedgerAccountGroupsRequestBuilder';
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
export class LedgerAccountGroupsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<LedgerAccountGroups<DeSerializersT>, DeSerializersT>
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
  ): LedgerAccountGroupsApi<DeSerializersT> {
    return new LedgerAccountGroupsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      LedgerAccountGroups<DeSerializersT>,
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

  entityConstructor = LedgerAccountGroups;

  requestBuilder(): LedgerAccountGroupsRequestBuilder<DeSerializersT> {
    return new LedgerAccountGroupsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    LedgerAccountGroups<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<LedgerAccountGroups<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    LedgerAccountGroups<DeSerializersT>,
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
    typeof LedgerAccountGroups,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        LedgerAccountGroups,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      LedgerAccountGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LEDGER_POSTING_GROUP: OrderableEdmTypeField<
      LedgerAccountGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DTL_DISPLAY_VALUE: OrderableEdmTypeField<
      LedgerAccountGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DTA_DISPLAY_VALUE: OrderableEdmTypeField<
      LedgerAccountGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WRITING_OFF_DTL_DISPLAY_VALUE: OrderableEdmTypeField<
      LedgerAccountGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WRITING_OFF_DTA_DISPLAY_VALUE: OrderableEdmTypeField<
      LedgerAccountGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCOUNT_FOR_FA_TAXES_DISPLAY_VALUE: OrderableEdmTypeField<
      LedgerAccountGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CTL_DISPLAY_VALUE: OrderableEdmTypeField<
      LedgerAccountGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CTA_DISPLAY_VALUE: OrderableEdmTypeField<
      LedgerAccountGroups<DeSerializers>,
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
      LedgerAccountGroups<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<LedgerAccountGroups<DeSerializers>>;
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
         * Static representation of the {@link ledgerPostingGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEDGER_POSTING_GROUP: fieldBuilder.buildEdmTypeField(
          'LedgerPostingGroup',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link dtlDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DTL_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'DTLDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dtaDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DTA_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'DTADisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link writingOffDtlDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WRITING_OFF_DTL_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'WritingOffDTLDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link writingOffDtaDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WRITING_OFF_DTA_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'WritingOffDTADisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link accountForFaTaxesDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_FOR_FA_TAXES_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'AccountForFATaxesDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link ctlDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CTL_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'CTLDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link ctaDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CTA_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'CTADisplayValue',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', LedgerAccountGroups)
      };
    }

    return this._schema;
  }
}
