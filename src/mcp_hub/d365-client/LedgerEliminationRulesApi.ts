/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LedgerEliminationRules } from './LedgerEliminationRules';
import { LedgerEliminationRulesRequestBuilder } from './LedgerEliminationRulesRequestBuilder';
import { LedgerEliminationRuleLinesApi } from './LedgerEliminationRuleLinesApi';
import { LegalEntitiesApi } from './LegalEntitiesApi';
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
  EnumField,
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class LedgerEliminationRulesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<LedgerEliminationRules<DeSerializersT>, DeSerializersT>
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
  ): LedgerEliminationRulesApi<DeSerializersT> {
    return new LedgerEliminationRulesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link ledgerEliminationRuleLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ELIMINATION_RULE_LINE: OneToManyLink<
      LedgerEliminationRules<DeSerializersT>,
      DeSerializersT,
      LedgerEliminationRuleLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link legalEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEGAL_ENTITY: OneToOneLink<
      LedgerEliminationRules<DeSerializersT>,
      DeSerializersT,
      LegalEntitiesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      LedgerEliminationRuleLinesApi<DeSerializersT>,
      LegalEntitiesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      LEDGER_ELIMINATION_RULE_LINE: new OneToManyLink(
        'LedgerEliminationRuleLine',
        this,
        linkedApis[0]
      ),
      LEGAL_ENTITY: new OneToOneLink('LegalEntity', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = LedgerEliminationRules;

  requestBuilder(): LedgerEliminationRulesRequestBuilder<DeSerializersT> {
    return new LedgerEliminationRulesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    LedgerEliminationRules<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      LedgerEliminationRules<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    LedgerEliminationRules<DeSerializersT>,
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
    typeof LedgerEliminationRules,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        LedgerEliminationRules,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      LedgerEliminationRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RULE_ID: OrderableEdmTypeField<
      LedgerEliminationRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    JOURNAL_NAME: OrderableEdmTypeField<
      LedgerEliminationRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACTIVE: EnumField<
      LedgerEliminationRules<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DATE_LAST_RUN: OrderableEdmTypeField<
      LedgerEliminationRules<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DESTINATION_COMPANY: OrderableEdmTypeField<
      LedgerEliminationRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      LedgerEliminationRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EFFECTIVE_START_DATE: OrderableEdmTypeField<
      LedgerEliminationRules<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    EFFECTIVE_END_DATE: OrderableEdmTypeField<
      LedgerEliminationRules<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link ledgerEliminationRuleLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ELIMINATION_RULE_LINE: OneToManyLink<
      LedgerEliminationRules<DeSerializersT>,
      DeSerializersT,
      LedgerEliminationRuleLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link legalEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEGAL_ENTITY: OneToOneLink<
      LedgerEliminationRules<DeSerializersT>,
      DeSerializersT,
      LegalEntitiesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<LedgerEliminationRules<DeSerializers>>;
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
         * Static representation of the {@link ruleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RULE_ID: fieldBuilder.buildEdmTypeField('RuleId', 'Edm.String', false),
        /**
         * Static representation of the {@link journalName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_NAME: fieldBuilder.buildEdmTypeField(
          'JournalName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link active} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVE: fieldBuilder.buildEnumField('Active', NoYes, true),
        /**
         * Static representation of the {@link dateLastRun} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE_LAST_RUN: fieldBuilder.buildEdmTypeField(
          'DateLastRun',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link destinationCompany} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESTINATION_COMPANY: fieldBuilder.buildEdmTypeField(
          'DestinationCompany',
          'Edm.String',
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
         * Static representation of the {@link effectiveStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EFFECTIVE_START_DATE: fieldBuilder.buildEdmTypeField(
          'EffectiveStartDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link effectiveEndDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EFFECTIVE_END_DATE: fieldBuilder.buildEdmTypeField(
          'EffectiveEndDate',
          'Edm.DateTimeOffset',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', LedgerEliminationRules)
      };
    }

    return this._schema;
  }
}
