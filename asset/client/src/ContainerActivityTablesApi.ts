/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ContainerActivityTables } from './ContainerActivityTables';
import { ContainerActivityTablesRequestBuilder } from './ContainerActivityTablesRequestBuilder';
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
export class ContainerActivityTablesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ContainerActivityTables<DeSerializersT>, DeSerializersT>
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
  ): ContainerActivityTablesApi<DeSerializersT> {
    return new ContainerActivityTablesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ContainerActivityTables;

  requestBuilder(): ContainerActivityTablesRequestBuilder<DeSerializersT> {
    return new ContainerActivityTablesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ContainerActivityTables<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ContainerActivityTables<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ContainerActivityTables<DeSerializersT>,
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
    typeof ContainerActivityTables,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ContainerActivityTables,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ContainerActivityTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SHIP_ID: OrderableEdmTypeField<
      ContainerActivityTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SHIP_CONTAINER_ID: OrderableEdmTypeField<
      ContainerActivityTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUM: OrderableEdmTypeField<
      ContainerActivityTables<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SHIP_ACTIVITY_ID: OrderableEdmTypeField<
      ContainerActivityTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIP_VESSEL_ID: OrderableEdmTypeField<
      ContainerActivityTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ESIMATED_DATE: OrderableEdmTypeField<
      ContainerActivityTables<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DLV_MODE_ID: OrderableEdmTypeField<
      ContainerActivityTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIP_TEMPERATURE: OrderableEdmTypeField<
      ContainerActivityTables<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SHIP_LEG_ID: OrderableEdmTypeField<
      ContainerActivityTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIP_SERVICE_PROVIDER: OrderableEdmTypeField<
      ContainerActivityTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NOTES: OrderableEdmTypeField<
      ContainerActivityTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    START_DATE: OrderableEdmTypeField<
      ContainerActivityTables<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ACTUAL_END_DATE: OrderableEdmTypeField<
      ContainerActivityTables<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ALL_FIELDS: AllFields<ContainerActivityTables<DeSerializers>>;
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
         * Static representation of the {@link shipId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_ID: fieldBuilder.buildEdmTypeField('ShipId', 'Edm.String', false),
        /**
         * Static representation of the {@link shipContainerId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_CONTAINER_ID: fieldBuilder.buildEdmTypeField(
          'ShipContainerId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link lineNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUM: fieldBuilder.buildEdmTypeField(
          'LineNum',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link shipActivityId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_ACTIVITY_ID: fieldBuilder.buildEdmTypeField(
          'ShipActivityId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shipVesselId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_VESSEL_ID: fieldBuilder.buildEdmTypeField(
          'ShipVesselId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link esimatedDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ESIMATED_DATE: fieldBuilder.buildEdmTypeField(
          'EsimatedDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link dlvModeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DLV_MODE_ID: fieldBuilder.buildEdmTypeField(
          'DlvModeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shipTemperature} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_TEMPERATURE: fieldBuilder.buildEdmTypeField(
          'ShipTemperature',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link shipLegId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_LEG_ID: fieldBuilder.buildEdmTypeField(
          'ShipLegId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shipServiceProvider} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_SERVICE_PROVIDER: fieldBuilder.buildEdmTypeField(
          'ShipServiceProvider',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link notes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NOTES: fieldBuilder.buildEdmTypeField('Notes', 'Edm.String', true),
        /**
         * Static representation of the {@link startDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        START_DATE: fieldBuilder.buildEdmTypeField(
          'StartDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link actualEndDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTUAL_END_DATE: fieldBuilder.buildEdmTypeField(
          'ActualEndDate',
          'Edm.DateTimeOffset',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ContainerActivityTables)
      };
    }

    return this._schema;
  }
}
