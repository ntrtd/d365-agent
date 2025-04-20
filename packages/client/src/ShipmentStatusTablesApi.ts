/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ShipmentStatusTables } from './ShipmentStatusTables';
import { ShipmentStatusTablesRequestBuilder } from './ShipmentStatusTablesRequestBuilder';
import { ItmCostArea } from './ItmCostArea';
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
  OrderableEdmTypeField,
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class ShipmentStatusTablesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ShipmentStatusTables<DeSerializersT>, DeSerializersT>
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
  ): ShipmentStatusTablesApi<DeSerializersT> {
    return new ShipmentStatusTablesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ShipmentStatusTables;

  requestBuilder(): ShipmentStatusTablesRequestBuilder<DeSerializersT> {
    return new ShipmentStatusTablesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ShipmentStatusTables<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ShipmentStatusTables<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ShipmentStatusTables<DeSerializersT>,
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
    typeof ShipmentStatusTables,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ShipmentStatusTables,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ShipmentStatusTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COST_AREA: EnumField<
      ShipmentStatusTables<DeSerializers>,
      DeSerializersT,
      ItmCostArea,
      true,
      true
    >;
    STATUS_ID: OrderableEdmTypeField<
      ShipmentStatusTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IS_STATUS_MANDATORY: EnumField<
      ShipmentStatusTables<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    STATUS_DESCRIPTION: OrderableEdmTypeField<
      ShipmentStatusTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARENT_STATUS_ID: OrderableEdmTypeField<
      ShipmentStatusTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_STATUS_ALLOWING_MODIFICATION: EnumField<
      ShipmentStatusTables<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_STATUS_ALLOWING_DELETE: EnumField<
      ShipmentStatusTables<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<ShipmentStatusTables<DeSerializers>>;
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
         * Static representation of the {@link costArea} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_AREA: fieldBuilder.buildEnumField('CostArea', ItmCostArea, true),
        /**
         * Static representation of the {@link statusId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS_ID: fieldBuilder.buildEdmTypeField(
          'StatusId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link isStatusMandatory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_STATUS_MANDATORY: fieldBuilder.buildEnumField(
          'IsStatusMandatory',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link statusDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'StatusDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link parentStatusId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARENT_STATUS_ID: fieldBuilder.buildEdmTypeField(
          'ParentStatusId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isStatusAllowingModification} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_STATUS_ALLOWING_MODIFICATION: fieldBuilder.buildEnumField(
          'IsStatusAllowingModification',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isStatusAllowingDelete} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_STATUS_ALLOWING_DELETE: fieldBuilder.buildEnumField(
          'IsStatusAllowingDelete',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ShipmentStatusTables)
      };
    }

    return this._schema;
  }
}
