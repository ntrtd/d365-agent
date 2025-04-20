/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailWorkShiftSetups } from './RetailWorkShiftSetups';
import { RetailWorkShiftSetupsRequestBuilder } from './RetailWorkShiftSetupsRequestBuilder';
import { RetailEndTimeStartTime } from './RetailEndTimeStartTime';
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
export class RetailWorkShiftSetupsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RetailWorkShiftSetups<DeSerializersT>, DeSerializersT>
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
  ): RetailWorkShiftSetupsApi<DeSerializersT> {
    return new RetailWorkShiftSetupsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RetailWorkShiftSetups;

  requestBuilder(): RetailWorkShiftSetupsRequestBuilder<DeSerializersT> {
    return new RetailWorkShiftSetupsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RetailWorkShiftSetups<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<RetailWorkShiftSetups<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailWorkShiftSetups<DeSerializersT>,
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
    typeof RetailWorkShiftSetups,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailWorkShiftSetups,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RetailWorkShiftSetups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WORK_SHIFT_ID: OrderableEdmTypeField<
      RetailWorkShiftSetups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    OM_OPERATING_UNIT_NUMBER: OrderableEdmTypeField<
      RetailWorkShiftSetups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    START_TIME: OrderableEdmTypeField<
      RetailWorkShiftSetups<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      RetailWorkShiftSetups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ABBREVIATION_TEXT: OrderableEdmTypeField<
      RetailWorkShiftSetups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ABBREVIATION: OrderableEdmTypeField<
      RetailWorkShiftSetups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DATE_REFERENCE: EnumField<
      RetailWorkShiftSetups<DeSerializers>,
      DeSerializersT,
      RetailEndTimeStartTime,
      true,
      true
    >;
    ENDING_TIME: OrderableEdmTypeField<
      RetailWorkShiftSetups<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ALL_FIELDS: AllFields<RetailWorkShiftSetups<DeSerializers>>;
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
         * Static representation of the {@link workShiftId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORK_SHIFT_ID: fieldBuilder.buildEdmTypeField(
          'WorkShiftId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link omOperatingUnitNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OM_OPERATING_UNIT_NUMBER: fieldBuilder.buildEdmTypeField(
          'OMOperatingUnitNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link startTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        START_TIME: fieldBuilder.buildEdmTypeField(
          'StartTime',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link abbreviationText} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ABBREVIATION_TEXT: fieldBuilder.buildEdmTypeField(
          'AbbreviationText',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link abbreviation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ABBREVIATION: fieldBuilder.buildEdmTypeField(
          'Abbreviation',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dateReference} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE_REFERENCE: fieldBuilder.buildEnumField(
          'DateReference',
          RetailEndTimeStartTime,
          true
        ),
        /**
         * Static representation of the {@link endingTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENDING_TIME: fieldBuilder.buildEdmTypeField(
          'EndingTime',
          'Edm.Int32',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailWorkShiftSetups)
      };
    }

    return this._schema;
  }
}
