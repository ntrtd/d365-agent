/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { HoursWorked } from './HoursWorked';
import { HoursWorkedRequestBuilder } from './HoursWorkedRequestBuilder';
import { WorkersApi } from './WorkersApi';
import { LeaveHoursWorkedType } from './LeaveHoursWorkedType';
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
  EnumField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class HoursWorkedApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<HoursWorked<DeSerializersT>, DeSerializersT>
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
  ): HoursWorkedApi<DeSerializersT> {
    return new HoursWorkedApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link worker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER: OneToOneLink<
      HoursWorked<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(linkedApis: [WorkersApi<DeSerializersT>]): this {
    this.navigationPropertyFields = {
      WORKER: new OneToOneLink('Worker', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = HoursWorked;

  requestBuilder(): HoursWorkedRequestBuilder<DeSerializersT> {
    return new HoursWorkedRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    HoursWorked<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<HoursWorked<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<HoursWorked<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof HoursWorked, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(HoursWorked, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      HoursWorked<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PERSONNEL_NUMBER: OrderableEdmTypeField<
      HoursWorked<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DATE_WORKED: OrderableEdmTypeField<
      HoursWorked<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TYPE: EnumField<
      HoursWorked<DeSerializers>,
      DeSerializersT,
      LeaveHoursWorkedType,
      true,
      true
    >;
    HOURS: OrderableEdmTypeField<
      HoursWorked<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link worker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER: OneToOneLink<
      HoursWorked<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<HoursWorked<DeSerializers>>;
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
         * Static representation of the {@link personnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'PersonnelNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link dateWorked} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE_WORKED: fieldBuilder.buildEdmTypeField(
          'DateWorked',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link type} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE: fieldBuilder.buildEnumField('Type', LeaveHoursWorkedType, true),
        /**
         * Static representation of the {@link hours} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HOURS: fieldBuilder.buildEdmTypeField('Hours', 'Edm.Decimal', false),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', HoursWorked)
      };
    }

    return this._schema;
  }
}
