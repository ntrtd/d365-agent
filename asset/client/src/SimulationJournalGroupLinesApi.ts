/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SimulationJournalGroupLines } from './SimulationJournalGroupLines';
import { SimulationJournalGroupLinesRequestBuilder } from './SimulationJournalGroupLinesRequestBuilder';
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
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class SimulationJournalGroupLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<SimulationJournalGroupLines<DeSerializersT>, DeSerializersT>
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
  ): SimulationJournalGroupLinesApi<DeSerializersT> {
    return new SimulationJournalGroupLinesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = SimulationJournalGroupLines;

  requestBuilder(): SimulationJournalGroupLinesRequestBuilder<DeSerializersT> {
    return new SimulationJournalGroupLinesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    SimulationJournalGroupLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      SimulationJournalGroupLines<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SimulationJournalGroupLines<DeSerializersT>,
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
    typeof SimulationJournalGroupLines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SimulationJournalGroupLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      SimulationJournalGroupLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SIMULATION_JOURNAL_GROUP_ID: OrderableEdmTypeField<
      SimulationJournalGroupLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    JOURNAL_NAME: OrderableEdmTypeField<
      SimulationJournalGroupLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ALL_FIELDS: AllFields<SimulationJournalGroupLines<DeSerializers>>;
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
         * Static representation of the {@link simulationJournalGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SIMULATION_JOURNAL_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'SimulationJournalGroupId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link journalName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_NAME: fieldBuilder.buildEdmTypeField(
          'JournalName',
          'Edm.String',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SimulationJournalGroupLines)
      };
    }

    return this._schema;
  }
}
