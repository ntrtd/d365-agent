/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RegisterJournalTables } from './RegisterJournalTables';
import { RegisterJournalTablesRequestBuilder } from './RegisterJournalTablesRequestBuilder';
import { RTax25PeriodType } from './RTax25PeriodType';
import { RTax25RegisterJournalType } from './RTax25RegisterJournalType';
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
export class RegisterJournalTablesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RegisterJournalTables<DeSerializersT>, DeSerializersT>
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
  ): RegisterJournalTablesApi<DeSerializersT> {
    return new RegisterJournalTablesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RegisterJournalTables;

  requestBuilder(): RegisterJournalTablesRequestBuilder<DeSerializersT> {
    return new RegisterJournalTablesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RegisterJournalTables<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<RegisterJournalTables<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RegisterJournalTables<DeSerializersT>,
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
    typeof RegisterJournalTables,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RegisterJournalTables,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RegisterJournalTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    JOURNAL_NUMBER: OrderableEdmTypeField<
      RegisterJournalTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PERIOD_NUMBER: OrderableEdmTypeField<
      RegisterJournalTables<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PERIOD_TYPES: EnumField<
      RegisterJournalTables<DeSerializers>,
      DeSerializersT,
      RTax25PeriodType,
      true,
      true
    >;
    YEARS: OrderableEdmTypeField<
      RegisterJournalTables<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    JOURNAL_TYPE: EnumField<
      RegisterJournalTables<DeSerializers>,
      DeSerializersT,
      RTax25RegisterJournalType,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      RegisterJournalTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FINISH_DATE: OrderableEdmTypeField<
      RegisterJournalTables<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CALCULATION_DATE: OrderableEdmTypeField<
      RegisterJournalTables<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ALL_FIELDS: AllFields<RegisterJournalTables<DeSerializers>>;
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
         * Static representation of the {@link journalNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_NUMBER: fieldBuilder.buildEdmTypeField(
          'JournalNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link periodNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERIOD_NUMBER: fieldBuilder.buildEdmTypeField(
          'PeriodNumber',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link periodTypes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERIOD_TYPES: fieldBuilder.buildEnumField(
          'PeriodTypes',
          RTax25PeriodType,
          true
        ),
        /**
         * Static representation of the {@link years} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        YEARS: fieldBuilder.buildEdmTypeField('Years', 'Edm.Int32', false),
        /**
         * Static representation of the {@link journalType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_TYPE: fieldBuilder.buildEnumField(
          'JournalType',
          RTax25RegisterJournalType,
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
         * Static representation of the {@link finishDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FINISH_DATE: fieldBuilder.buildEdmTypeField(
          'FinishDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link calculationDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALCULATION_DATE: fieldBuilder.buildEdmTypeField(
          'CalculationDate',
          'Edm.DateTimeOffset',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RegisterJournalTables)
      };
    }

    return this._schema;
  }
}
