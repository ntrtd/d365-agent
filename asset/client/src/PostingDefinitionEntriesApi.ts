/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PostingDefinitionEntries } from './PostingDefinitionEntries';
import { PostingDefinitionEntriesRequestBuilder } from './PostingDefinitionEntriesRequestBuilder';
import { DimensionCombinationsApi } from './DimensionCombinationsApi';
import { JournalizingDefinitionSignId } from './JournalizingDefinitionSignId';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class PostingDefinitionEntriesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<PostingDefinitionEntries<DeSerializersT>, DeSerializersT>
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
  ): PostingDefinitionEntriesApi<DeSerializersT> {
    return new PostingDefinitionEntriesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      PostingDefinitionEntries<DeSerializersT>,
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

  entityConstructor = PostingDefinitionEntries;

  requestBuilder(): PostingDefinitionEntriesRequestBuilder<DeSerializersT> {
    return new PostingDefinitionEntriesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PostingDefinitionEntries<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      PostingDefinitionEntries<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PostingDefinitionEntries<DeSerializersT>,
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
    typeof PostingDefinitionEntries,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PostingDefinitionEntries,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      PostingDefinitionEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MATCH_CRITERIA_LEDGER_ACCOUNT_DISPLAY_VALUE: OrderableEdmTypeField<
      PostingDefinitionEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MATCH_CRITERIA_LEDGER_ACCOUNT_ACCOUNT_STRUCTURE: OrderableEdmTypeField<
      PostingDefinitionEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    GENERATED_ENTRY_LEDGER_ACCOUNT_DISPLAY_VALUE: OrderableEdmTypeField<
      PostingDefinitionEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    POSTING_DEFINITION_ID: OrderableEdmTypeField<
      PostingDefinitionEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VALID_FROM: OrderableEdmTypeField<
      PostingDefinitionEntries<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    GENERATED_ENTRIES_DEBIT_CREDIT: EnumField<
      PostingDefinitionEntries<DeSerializers>,
      DeSerializersT,
      JournalizingDefinitionSignId,
      true,
      true
    >;
    PRIORITY: OrderableEdmTypeField<
      PostingDefinitionEntries<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    GENERATED_ENTRY_LEDGER_ACCOUNT_ACCOUNT_STRUCTURE: OrderableEdmTypeField<
      PostingDefinitionEntries<DeSerializers>,
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
      PostingDefinitionEntries<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<PostingDefinitionEntries<DeSerializers>>;
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
         * Static representation of the {@link matchCriteriaLedgerAccountDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MATCH_CRITERIA_LEDGER_ACCOUNT_DISPLAY_VALUE:
          fieldBuilder.buildEdmTypeField(
            'MatchCriteriaLedgerAccountDisplayValue',
            'Edm.String',
            false
          ),
        /**
         * Static representation of the {@link matchCriteriaLedgerAccountAccountStructure} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MATCH_CRITERIA_LEDGER_ACCOUNT_ACCOUNT_STRUCTURE:
          fieldBuilder.buildEdmTypeField(
            'MatchCriteriaLedgerAccountAccountStructure',
            'Edm.String',
            false
          ),
        /**
         * Static representation of the {@link generatedEntryLedgerAccountDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GENERATED_ENTRY_LEDGER_ACCOUNT_DISPLAY_VALUE:
          fieldBuilder.buildEdmTypeField(
            'GeneratedEntryLedgerAccountDisplayValue',
            'Edm.String',
            false
          ),
        /**
         * Static representation of the {@link postingDefinitionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTING_DEFINITION_ID: fieldBuilder.buildEdmTypeField(
          'PostingDefinitionId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link validFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_FROM: fieldBuilder.buildEdmTypeField(
          'ValidFrom',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link generatedEntriesDebitCredit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GENERATED_ENTRIES_DEBIT_CREDIT: fieldBuilder.buildEnumField(
          'GeneratedEntriesDebitCredit',
          JournalizingDefinitionSignId,
          true
        ),
        /**
         * Static representation of the {@link priority} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIORITY: fieldBuilder.buildEdmTypeField(
          'Priority',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link generatedEntryLedgerAccountAccountStructure} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GENERATED_ENTRY_LEDGER_ACCOUNT_ACCOUNT_STRUCTURE:
          fieldBuilder.buildEdmTypeField(
            'GeneratedEntryLedgerAccountAccountStructure',
            'Edm.String',
            true
          ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PostingDefinitionEntries)
      };
    }

    return this._schema;
  }
}
