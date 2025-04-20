/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailWorkShiftSetups2 } from './RetailWorkShiftSetups2';
import { RetailWorkShiftSetups2RequestBuilder } from './RetailWorkShiftSetups2RequestBuilder';
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
export class RetailWorkShiftSetups2Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RetailWorkShiftSetups2<DeSerializersT>, DeSerializersT>
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
  ): RetailWorkShiftSetups2Api<DeSerializersT> {
    return new RetailWorkShiftSetups2Api(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RetailWorkShiftSetups2;

  requestBuilder(): RetailWorkShiftSetups2RequestBuilder<DeSerializersT> {
    return new RetailWorkShiftSetups2RequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RetailWorkShiftSetups2<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailWorkShiftSetups2<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailWorkShiftSetups2<DeSerializersT>,
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
    typeof RetailWorkShiftSetups2,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailWorkShiftSetups2,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RetailWorkShiftSetups2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WORK_SHIFT_ID: OrderableEdmTypeField<
      RetailWorkShiftSetups2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STORE_NUMBER: OrderableEdmTypeField<
      RetailWorkShiftSetups2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    START_TIME: OrderableEdmTypeField<
      RetailWorkShiftSetups2<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      RetailWorkShiftSetups2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ABBREVIATION_TEXT: OrderableEdmTypeField<
      RetailWorkShiftSetups2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ABBREVIATION: OrderableEdmTypeField<
      RetailWorkShiftSetups2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DATE_REFERENCE: EnumField<
      RetailWorkShiftSetups2<DeSerializers>,
      DeSerializersT,
      RetailEndTimeStartTime,
      true,
      true
    >;
    ENDING_TIME: OrderableEdmTypeField<
      RetailWorkShiftSetups2<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ALL_FIELDS: AllFields<RetailWorkShiftSetups2<DeSerializers>>;
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
         * Static representation of the {@link storeNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STORE_NUMBER: fieldBuilder.buildEdmTypeField(
          'StoreNumber',
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
        ALL_FIELDS: new AllFields('*', RetailWorkShiftSetups2)
      };
    }

    return this._schema;
  }
}
