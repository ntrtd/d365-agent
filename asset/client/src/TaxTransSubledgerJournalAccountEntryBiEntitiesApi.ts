/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TaxTransSubledgerJournalAccountEntryBiEntities } from './TaxTransSubledgerJournalAccountEntryBiEntities';
import { TaxTransSubledgerJournalAccountEntryBiEntitiesRequestBuilder } from './TaxTransSubledgerJournalAccountEntryBiEntitiesRequestBuilder';
import { TaxTransRelationshipType } from './TaxTransRelationshipType';
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
export class TaxTransSubledgerJournalAccountEntryBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      TaxTransSubledgerJournalAccountEntryBiEntities<DeSerializersT>,
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
  ): TaxTransSubledgerJournalAccountEntryBiEntitiesApi<DeSerializersT> {
    return new TaxTransSubledgerJournalAccountEntryBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = TaxTransSubledgerJournalAccountEntryBiEntities;

  requestBuilder(): TaxTransSubledgerJournalAccountEntryBiEntitiesRequestBuilder<DeSerializersT> {
    return new TaxTransSubledgerJournalAccountEntryBiEntitiesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    TaxTransSubledgerJournalAccountEntryBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      TaxTransSubledgerJournalAccountEntryBiEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    TaxTransSubledgerJournalAccountEntryBiEntities<DeSerializersT>,
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
    typeof TaxTransSubledgerJournalAccountEntryBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        TaxTransSubledgerJournalAccountEntryBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      TaxTransSubledgerJournalAccountEntryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SOURCE_KEY: OrderableEdmTypeField<
      TaxTransSubledgerJournalAccountEntryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TAX_TRANS_RELATIONSHIP: EnumField<
      TaxTransSubledgerJournalAccountEntryBiEntities<DeSerializers>,
      DeSerializersT,
      TaxTransRelationshipType,
      true,
      true
    >;
    TAX_TRANS: OrderableEdmTypeField<
      TaxTransSubledgerJournalAccountEntryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SUBLEDGER_JOURNAL_ACCOUNT_ENTRY: OrderableEdmTypeField<
      TaxTransSubledgerJournalAccountEntryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ALL_FIELDS: AllFields<
      TaxTransSubledgerJournalAccountEntryBiEntities<DeSerializers>
    >;
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
         * Static representation of the {@link taxTransRelationship} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_TRANS_RELATIONSHIP: fieldBuilder.buildEnumField(
          'TaxTransRelationship',
          TaxTransRelationshipType,
          true
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
         * Static representation of the {@link subledgerJournalAccountEntry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUBLEDGER_JOURNAL_ACCOUNT_ENTRY: fieldBuilder.buildEdmTypeField(
          'SubledgerJournalAccountEntry',
          'Edm.Int64',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          TaxTransSubledgerJournalAccountEntryBiEntities
        )
      };
    }

    return this._schema;
  }
}
