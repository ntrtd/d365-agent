/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WarehouseNumberSequenceExtReferences } from './WarehouseNumberSequenceExtReferences';
import { WarehouseNumberSequenceExtReferencesRequestBuilder } from './WarehouseNumberSequenceExtReferencesRequestBuilder';
import { OmOperatingUnitType } from './OmOperatingUnitType';
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
export class WarehouseNumberSequenceExtReferencesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      WarehouseNumberSequenceExtReferences<DeSerializersT>,
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
  ): WarehouseNumberSequenceExtReferencesApi<DeSerializersT> {
    return new WarehouseNumberSequenceExtReferencesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = WarehouseNumberSequenceExtReferences;

  requestBuilder(): WarehouseNumberSequenceExtReferencesRequestBuilder<DeSerializersT> {
    return new WarehouseNumberSequenceExtReferencesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    WarehouseNumberSequenceExtReferences<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      WarehouseNumberSequenceExtReferences<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    WarehouseNumberSequenceExtReferences<DeSerializersT>,
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
    typeof WarehouseNumberSequenceExtReferences,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        WarehouseNumberSequenceExtReferences,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    NUMBER_SEQUENCE_SCOPE_DATA_AREA: OrderableEdmTypeField<
      WarehouseNumberSequenceExtReferences<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LEGAL_ENTITY_DATA_AREA: OrderableEdmTypeField<
      WarehouseNumberSequenceExtReferences<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    OPERATING_UNIT_PARTY_NUMBER: OrderableEdmTypeField<
      WarehouseNumberSequenceExtReferences<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FISCAL_CALENDAR_CALENDAR_ID: OrderableEdmTypeField<
      WarehouseNumberSequenceExtReferences<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FISCAL_CALENDAR_YEAR_NAME: OrderableEdmTypeField<
      WarehouseNumberSequenceExtReferences<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FISCAL_CALENDAR_PERIOD_NAME: OrderableEdmTypeField<
      WarehouseNumberSequenceExtReferences<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NUMBER_SEQUENCE_SCOPE_OPERATING_UNIT_TYPE: EnumField<
      WarehouseNumberSequenceExtReferences<DeSerializers>,
      DeSerializersT,
      OmOperatingUnitType,
      true,
      true
    >;
    NUMBER_SEQUENCE_SCOPE_SHA_256_HASH: OrderableEdmTypeField<
      WarehouseNumberSequenceExtReferences<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NUMBER_SEQUENCE_DATATYPE_DATATYPE_ID: OrderableEdmTypeField<
      WarehouseNumberSequenceExtReferences<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    NUMBER_SEQUENCE_EXT_ID: OrderableEdmTypeField<
      WarehouseNumberSequenceExtReferences<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<WarehouseNumberSequenceExtReferences<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link numberSequenceScopeDataArea} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_SEQUENCE_SCOPE_DATA_AREA: fieldBuilder.buildEdmTypeField(
          'NumberSequenceScope_DataArea',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link legalEntityDataArea} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEGAL_ENTITY_DATA_AREA: fieldBuilder.buildEdmTypeField(
          'LegalEntity_DataArea',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link operatingUnitPartyNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPERATING_UNIT_PARTY_NUMBER: fieldBuilder.buildEdmTypeField(
          'OperatingUnit_PartyNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link fiscalCalendarCalendarId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_CALENDAR_CALENDAR_ID: fieldBuilder.buildEdmTypeField(
          'FiscalCalendar_CalendarId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link fiscalCalendarYearName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_CALENDAR_YEAR_NAME: fieldBuilder.buildEdmTypeField(
          'FiscalCalendarYear_Name',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link fiscalCalendarPeriodName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_CALENDAR_PERIOD_NAME: fieldBuilder.buildEdmTypeField(
          'FiscalCalendarPeriod_Name',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link numberSequenceScopeOperatingUnitType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_SEQUENCE_SCOPE_OPERATING_UNIT_TYPE: fieldBuilder.buildEnumField(
          'NumberSequenceScope_OperatingUnitType',
          OmOperatingUnitType,
          true
        ),
        /**
         * Static representation of the {@link numberSequenceScopeSha256Hash} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_SEQUENCE_SCOPE_SHA_256_HASH: fieldBuilder.buildEdmTypeField(
          'NumberSequenceScope_SHA256Hash',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link numberSequenceDatatypeDatatypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_SEQUENCE_DATATYPE_DATATYPE_ID: fieldBuilder.buildEdmTypeField(
          'NumberSequenceDatatype_DatatypeId',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link numberSequenceExtId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_SEQUENCE_EXT_ID: fieldBuilder.buildEdmTypeField(
          'NumberSequenceExtId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', WarehouseNumberSequenceExtReferences)
      };
    }

    return this._schema;
  }
}
