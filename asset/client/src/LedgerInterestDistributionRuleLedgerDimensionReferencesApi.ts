/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LedgerInterestDistributionRuleLedgerDimensionReferences } from './LedgerInterestDistributionRuleLedgerDimensionReferences';
import { LedgerInterestDistributionRuleLedgerDimensionReferencesRequestBuilder } from './LedgerInterestDistributionRuleLedgerDimensionReferencesRequestBuilder';
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
export class LedgerInterestDistributionRuleLedgerDimensionReferencesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      LedgerInterestDistributionRuleLedgerDimensionReferences<DeSerializersT>,
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
  ): LedgerInterestDistributionRuleLedgerDimensionReferencesApi<DeSerializersT> {
    return new LedgerInterestDistributionRuleLedgerDimensionReferencesApi(
      deSerializers
    );
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link ledgerAccountDimension} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ACCOUNT_DIMENSION: OneToOneLink<
      LedgerInterestDistributionRuleLedgerDimensionReferences<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link cashAccountDimension} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CASH_ACCOUNT_DIMENSION: OneToOneLink<
      LedgerInterestDistributionRuleLedgerDimensionReferences<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      DimensionCombinationsApi<DeSerializersT>,
      DimensionCombinationsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      LEDGER_ACCOUNT_DIMENSION: new OneToOneLink(
        'LedgerAccountDimension',
        this,
        linkedApis[0]
      ),
      CASH_ACCOUNT_DIMENSION: new OneToOneLink(
        'CashAccountDimension',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = LedgerInterestDistributionRuleLedgerDimensionReferences;

  requestBuilder(): LedgerInterestDistributionRuleLedgerDimensionReferencesRequestBuilder<DeSerializersT> {
    return new LedgerInterestDistributionRuleLedgerDimensionReferencesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    LedgerInterestDistributionRuleLedgerDimensionReferences<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      LedgerInterestDistributionRuleLedgerDimensionReferences<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    LedgerInterestDistributionRuleLedgerDimensionReferences<DeSerializersT>,
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
    typeof LedgerInterestDistributionRuleLedgerDimensionReferences,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        LedgerInterestDistributionRuleLedgerDimensionReferences,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CASH_ACCOUNT_DISPLAY_VALUE: OrderableEdmTypeField<
      LedgerInterestDistributionRuleLedgerDimensionReferences<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LEDGER_ACCOUNT_DISPLAY_VALUE: OrderableEdmTypeField<
      LedgerInterestDistributionRuleLedgerDimensionReferences<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DATA_AREA_ID: OrderableEdmTypeField<
      LedgerInterestDistributionRuleLedgerDimensionReferences<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerAccountDimension} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ACCOUNT_DIMENSION: OneToOneLink<
      LedgerInterestDistributionRuleLedgerDimensionReferences<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link cashAccountDimension} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CASH_ACCOUNT_DIMENSION: OneToOneLink<
      LedgerInterestDistributionRuleLedgerDimensionReferences<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      LedgerInterestDistributionRuleLedgerDimensionReferences<DeSerializers>
    >;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link cashAccountDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_ACCOUNT_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'CashAccountDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link ledgerAccountDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEDGER_ACCOUNT_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'LedgerAccountDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'dataAreaId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          LedgerInterestDistributionRuleLedgerDimensionReferences
        )
      };
    }

    return this._schema;
  }
}
