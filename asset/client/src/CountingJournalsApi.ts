/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CountingJournals } from './CountingJournals';
import { CountingJournalsRequestBuilder } from './CountingJournalsRequestBuilder';
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
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class CountingJournalsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<CountingJournals<DeSerializersT>, DeSerializersT>
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
  ): CountingJournalsApi<DeSerializersT> {
    return new CountingJournalsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = CountingJournals;

  requestBuilder(): CountingJournalsRequestBuilder<DeSerializersT> {
    return new CountingJournalsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CountingJournals<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<CountingJournals<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<CountingJournals<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof CountingJournals, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CountingJournals,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      CountingJournals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COUNTING_START_DATE: OrderableEdmTypeField<
      CountingJournals<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    RESOLUTION_NUMBER: OrderableEdmTypeField<
      CountingJournals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RESOLUTION_DATE: OrderableEdmTypeField<
      CountingJournals<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    OFFICIAL_SESSION: OrderableEdmTypeField<
      CountingJournals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JOURNAL_BATCH_NUMBER: OrderableEdmTypeField<
      CountingJournals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CLOSED: EnumField<
      CountingJournals<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    COUNTING_END_DATE: OrderableEdmTypeField<
      CountingJournals<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      CountingJournals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<CountingJournals<DeSerializers>>;
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
         * Static representation of the {@link countingStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTING_START_DATE: fieldBuilder.buildEdmTypeField(
          'CountingStartDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link resolutionNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESOLUTION_NUMBER: fieldBuilder.buildEdmTypeField(
          'ResolutionNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link resolutionDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESOLUTION_DATE: fieldBuilder.buildEdmTypeField(
          'ResolutionDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link officialSession} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OFFICIAL_SESSION: fieldBuilder.buildEdmTypeField(
          'OfficialSession',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link journalBatchNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_BATCH_NUMBER: fieldBuilder.buildEdmTypeField(
          'JournalBatchNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link closed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLOSED: fieldBuilder.buildEnumField('Closed', NoYes, true),
        /**
         * Static representation of the {@link countingEndDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTING_END_DATE: fieldBuilder.buildEdmTypeField(
          'CountingEndDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CountingJournals)
      };
    }

    return this._schema;
  }
}
