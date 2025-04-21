/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SequenceV2Tables } from './SequenceV2Tables';
import { SequenceV2TablesRequestBuilder } from './SequenceV2TablesRequestBuilder';
import { NumberSequenceType } from './NumberSequenceType';
import { NoYes } from './NoYes';
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
export class SequenceV2TablesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<SequenceV2Tables<DeSerializersT>, DeSerializersT>
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
  ): SequenceV2TablesApi<DeSerializersT> {
    return new SequenceV2TablesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = SequenceV2Tables;

  requestBuilder(): SequenceV2TablesRequestBuilder<DeSerializersT> {
    return new SequenceV2TablesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    SequenceV2Tables<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<SequenceV2Tables<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<SequenceV2Tables<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof SequenceV2Tables, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SequenceV2Tables,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    NUMBER_SEQUENCE_CODE: OrderableEdmTypeField<
      SequenceV2Tables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SCOPE_TYPE: EnumField<
      SequenceV2Tables<DeSerializers>,
      DeSerializersT,
      NumberSequenceType,
      true,
      true
    >;
    SCOPE_VALUE: OrderableEdmTypeField<
      SequenceV2Tables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      SequenceV2Tables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NEXT: OrderableEdmTypeField<
      SequenceV2Tables<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    FORMAT: OrderableEdmTypeField<
      SequenceV2Tables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PREALLOCATION: EnumField<
      SequenceV2Tables<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MANUAL: EnumField<
      SequenceV2Tables<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TO_A_LOWER_NUMBER: EnumField<
      SequenceV2Tables<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    COMPANY: OrderableEdmTypeField<
      SequenceV2Tables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTERVAL: OrderableEdmTypeField<
      SequenceV2Tables<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ANNOTATED_FORMAT: OrderableEdmTypeField<
      SequenceV2Tables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SMALLEST: OrderableEdmTypeField<
      SequenceV2Tables<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CLEAN_UP: EnumField<
      SequenceV2Tables<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DATE_TIME: OrderableEdmTypeField<
      SequenceV2Tables<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    QUANTITY_OF_NUMBERS: OrderableEdmTypeField<
      SequenceV2Tables<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TO_A_HIGHER_NUMBER: EnumField<
      SequenceV2Tables<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CYCLICAL: EnumField<
      SequenceV2Tables<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    OPERATING_UNIT_TYPES: EnumField<
      SequenceV2Tables<DeSerializers>,
      DeSerializersT,
      OmOperatingUnitType,
      true,
      true
    >;
    LARGEST: OrderableEdmTypeField<
      SequenceV2Tables<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CONTINUOUS: EnumField<
      SequenceV2Tables<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    STOPPED: EnumField<
      SequenceV2Tables<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IN_USE: EnumField<
      SequenceV2Tables<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SKIP_COUNTING: EnumField<
      SequenceV2Tables<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<SequenceV2Tables<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link numberSequenceCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_SEQUENCE_CODE: fieldBuilder.buildEdmTypeField(
          'NumberSequenceCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link scopeType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCOPE_TYPE: fieldBuilder.buildEnumField(
          'ScopeType',
          NumberSequenceType,
          true
        ),
        /**
         * Static representation of the {@link scopeValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCOPE_VALUE: fieldBuilder.buildEdmTypeField(
          'ScopeValue',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link next} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NEXT: fieldBuilder.buildEdmTypeField('Next', 'Edm.Int32', false),
        /**
         * Static representation of the {@link format} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORMAT: fieldBuilder.buildEdmTypeField('Format', 'Edm.String', true),
        /**
         * Static representation of the {@link preallocation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PREALLOCATION: fieldBuilder.buildEnumField(
          'Preallocation',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link manual} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MANUAL: fieldBuilder.buildEnumField('Manual', NoYes, true),
        /**
         * Static representation of the {@link toALowerNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_A_LOWER_NUMBER: fieldBuilder.buildEnumField(
          'ToALowerNumber',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link company} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY: fieldBuilder.buildEdmTypeField('Company', 'Edm.String', true),
        /**
         * Static representation of the {@link interval} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTERVAL: fieldBuilder.buildEdmTypeField(
          'Interval',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link annotatedFormat} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ANNOTATED_FORMAT: fieldBuilder.buildEdmTypeField(
          'AnnotatedFormat',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link smallest} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SMALLEST: fieldBuilder.buildEdmTypeField(
          'Smallest',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link cleanUp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLEAN_UP: fieldBuilder.buildEnumField('CleanUp', NoYes, true),
        /**
         * Static representation of the {@link dateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE_TIME: fieldBuilder.buildEdmTypeField(
          'DateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link quantityOfNumbers} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUANTITY_OF_NUMBERS: fieldBuilder.buildEdmTypeField(
          'QuantityOfNumbers',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link toAHigherNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_A_HIGHER_NUMBER: fieldBuilder.buildEnumField(
          'ToAHigherNumber',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link cyclical} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CYCLICAL: fieldBuilder.buildEnumField('Cyclical', NoYes, true),
        /**
         * Static representation of the {@link operatingUnitTypes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPERATING_UNIT_TYPES: fieldBuilder.buildEnumField(
          'OperatingUnitTypes',
          OmOperatingUnitType,
          true
        ),
        /**
         * Static representation of the {@link largest} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LARGEST: fieldBuilder.buildEdmTypeField('Largest', 'Edm.Int32', false),
        /**
         * Static representation of the {@link continuous} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTINUOUS: fieldBuilder.buildEnumField('Continuous', NoYes, true),
        /**
         * Static representation of the {@link stopped} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STOPPED: fieldBuilder.buildEnumField('Stopped', NoYes, true),
        /**
         * Static representation of the {@link inUse} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IN_USE: fieldBuilder.buildEnumField('InUse', NoYes, true),
        /**
         * Static representation of the {@link skipCounting} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SKIP_COUNTING: fieldBuilder.buildEnumField('SkipCounting', NoYes, true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SequenceV2Tables)
      };
    }

    return this._schema;
  }
}
