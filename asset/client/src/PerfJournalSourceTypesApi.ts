/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PerfJournalSourceTypes } from './PerfJournalSourceTypes';
import { PerfJournalSourceTypesRequestBuilder } from './PerfJournalSourceTypesRequestBuilder';
import { PerformanceJournalsApi } from './PerformanceJournalsApi';
import { HcmPerfJournalSourceType } from './HcmPerfJournalSourceType';
import { HcmPerfManagerEmployee } from './HcmPerfManagerEmployee';
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
  EnumField,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class PerfJournalSourceTypesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<PerfJournalSourceTypes<DeSerializersT>, DeSerializersT>
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
  ): PerfJournalSourceTypesApi<DeSerializersT> {
    return new PerfJournalSourceTypesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link performanceJournal} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERFORMANCE_JOURNAL: OneToManyLink<
      PerfJournalSourceTypes<DeSerializersT>,
      DeSerializersT,
      PerformanceJournalsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [PerformanceJournalsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      PERFORMANCE_JOURNAL: new OneToManyLink(
        'PerformanceJournal',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = PerfJournalSourceTypes;

  requestBuilder(): PerfJournalSourceTypesRequestBuilder<DeSerializersT> {
    return new PerfJournalSourceTypesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PerfJournalSourceTypes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      PerfJournalSourceTypes<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PerfJournalSourceTypes<DeSerializersT>,
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
    typeof PerfJournalSourceTypes,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PerfJournalSourceTypes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    SOURCE_TYPE: EnumField<
      PerfJournalSourceTypes<DeSerializers>,
      DeSerializersT,
      HcmPerfJournalSourceType,
      true,
      true
    >;
    OWNER: EnumField<
      PerfJournalSourceTypes<DeSerializers>,
      DeSerializersT,
      HcmPerfManagerEmployee,
      true,
      true
    >;
    SHARE: EnumField<
      PerfJournalSourceTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ENABLED: EnumField<
      PerfJournalSourceTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link performanceJournal} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERFORMANCE_JOURNAL: OneToManyLink<
      PerfJournalSourceTypes<DeSerializersT>,
      DeSerializersT,
      PerformanceJournalsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<PerfJournalSourceTypes<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link sourceType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_TYPE: fieldBuilder.buildEnumField(
          'SourceType',
          HcmPerfJournalSourceType,
          true
        ),
        /**
         * Static representation of the {@link owner} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OWNER: fieldBuilder.buildEnumField(
          'Owner',
          HcmPerfManagerEmployee,
          true
        ),
        /**
         * Static representation of the {@link share} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHARE: fieldBuilder.buildEnumField('Share', NoYes, true),
        /**
         * Static representation of the {@link enabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENABLED: fieldBuilder.buildEnumField('Enabled', NoYes, true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PerfJournalSourceTypes)
      };
    }

    return this._schema;
  }
}
