/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ValueModelSetupShiftDepreciations } from './ValueModelSetupShiftDepreciations';
import { ValueModelSetupShiftDepreciationsRequestBuilder } from './ValueModelSetupShiftDepreciationsRequestBuilder';
import { TypeOfIndustryIn } from './TypeOfIndustryIn';
import { TypeOfShiftIn } from './TypeOfShiftIn';
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
export class ValueModelSetupShiftDepreciationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ValueModelSetupShiftDepreciations<DeSerializersT>, DeSerializersT>
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
  ): ValueModelSetupShiftDepreciationsApi<DeSerializersT> {
    return new ValueModelSetupShiftDepreciationsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ValueModelSetupShiftDepreciations;

  requestBuilder(): ValueModelSetupShiftDepreciationsRequestBuilder<DeSerializersT> {
    return new ValueModelSetupShiftDepreciationsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    ValueModelSetupShiftDepreciations<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ValueModelSetupShiftDepreciations<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ValueModelSetupShiftDepreciations<DeSerializersT>,
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
    typeof ValueModelSetupShiftDepreciations,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ValueModelSetupShiftDepreciations,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ValueModelSetupShiftDepreciations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VALUE_MODEL: OrderableEdmTypeField<
      ValueModelSetupShiftDepreciations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FROM_DATE: OrderableEdmTypeField<
      ValueModelSetupShiftDepreciations<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TO_DATE: OrderableEdmTypeField<
      ValueModelSetupShiftDepreciations<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TYPE_OF_INDUSTRY: EnumField<
      ValueModelSetupShiftDepreciations<DeSerializers>,
      DeSerializersT,
      TypeOfIndustryIn,
      true,
      true
    >;
    SHIFT_PERCENTAGE: OrderableEdmTypeField<
      ValueModelSetupShiftDepreciations<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TYPE_OF_SHIFT: EnumField<
      ValueModelSetupShiftDepreciations<DeSerializers>,
      DeSerializersT,
      TypeOfShiftIn,
      true,
      true
    >;
    ALL_FIELDS: AllFields<ValueModelSetupShiftDepreciations<DeSerializers>>;
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
         * Static representation of the {@link valueModel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALUE_MODEL: fieldBuilder.buildEdmTypeField(
          'ValueModel',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link fromDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FROM_DATE: fieldBuilder.buildEdmTypeField(
          'FromDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link toDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_DATE: fieldBuilder.buildEdmTypeField(
          'ToDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link typeOfIndustry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE_OF_INDUSTRY: fieldBuilder.buildEnumField(
          'TypeOfIndustry',
          TypeOfIndustryIn,
          true
        ),
        /**
         * Static representation of the {@link shiftPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIFT_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'ShiftPercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link typeOfShift} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE_OF_SHIFT: fieldBuilder.buildEnumField(
          'TypeOfShift',
          TypeOfShiftIn,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ValueModelSetupShiftDepreciations)
      };
    }

    return this._schema;
  }
}
