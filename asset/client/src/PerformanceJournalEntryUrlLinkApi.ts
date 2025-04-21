/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PerformanceJournalEntryUrlLink } from './PerformanceJournalEntryUrlLink';
import { PerformanceJournalEntryUrlLinkRequestBuilder } from './PerformanceJournalEntryUrlLinkRequestBuilder';
import { PerformanceJournalsApi } from './PerformanceJournalsApi';
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
export class PerformanceJournalEntryUrlLinkApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<PerformanceJournalEntryUrlLink<DeSerializersT>, DeSerializersT>
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
  ): PerformanceJournalEntryUrlLinkApi<DeSerializersT> {
    return new PerformanceJournalEntryUrlLinkApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link performanceJournalEntry} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERFORMANCE_JOURNAL_ENTRY: OneToOneLink<
      PerformanceJournalEntryUrlLink<DeSerializersT>,
      DeSerializersT,
      PerformanceJournalsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [PerformanceJournalsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      PERFORMANCE_JOURNAL_ENTRY: new OneToOneLink(
        'PerformanceJournalEntry',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = PerformanceJournalEntryUrlLink;

  requestBuilder(): PerformanceJournalEntryUrlLinkRequestBuilder<DeSerializersT> {
    return new PerformanceJournalEntryUrlLinkRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    PerformanceJournalEntryUrlLink<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      PerformanceJournalEntryUrlLink<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PerformanceJournalEntryUrlLink<DeSerializersT>,
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
    typeof PerformanceJournalEntryUrlLink,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PerformanceJournalEntryUrlLink,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    LINK_ID: OrderableEdmTypeField<
      PerformanceJournalEntryUrlLink<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    URL: OrderableEdmTypeField<
      PerformanceJournalEntryUrlLink<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      PerformanceJournalEntryUrlLink<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERFORMANCE_JOURNAL_ENTRY_ID: OrderableEdmTypeField<
      PerformanceJournalEntryUrlLink<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link performanceJournalEntry} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERFORMANCE_JOURNAL_ENTRY: OneToOneLink<
      PerformanceJournalEntryUrlLink<DeSerializersT>,
      DeSerializersT,
      PerformanceJournalsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<PerformanceJournalEntryUrlLink<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link linkId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINK_ID: fieldBuilder.buildEdmTypeField('LinkId', 'Edm.Guid', false),
        /**
         * Static representation of the {@link url} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        URL: fieldBuilder.buildEdmTypeField('URL', 'Edm.String', true),
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
         * Static representation of the {@link performanceJournalEntryId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERFORMANCE_JOURNAL_ENTRY_ID: fieldBuilder.buildEdmTypeField(
          'PerformanceJournalEntryId',
          'Edm.Guid',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PerformanceJournalEntryUrlLink)
      };
    }

    return this._schema;
  }
}
