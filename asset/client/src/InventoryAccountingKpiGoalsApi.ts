/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { InventoryAccountingKpiGoals } from './InventoryAccountingKpiGoals';
import { InventoryAccountingKpiGoalsRequestBuilder } from './InventoryAccountingKpiGoalsRequestBuilder';
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
export class InventoryAccountingKpiGoalsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<InventoryAccountingKpiGoals<DeSerializersT>, DeSerializersT>
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
  ): InventoryAccountingKpiGoalsApi<DeSerializersT> {
    return new InventoryAccountingKpiGoalsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = InventoryAccountingKpiGoals;

  requestBuilder(): InventoryAccountingKpiGoalsRequestBuilder<DeSerializersT> {
    return new InventoryAccountingKpiGoalsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    InventoryAccountingKpiGoals<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      InventoryAccountingKpiGoals<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    InventoryAccountingKpiGoals<DeSerializersT>,
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
    typeof InventoryAccountingKpiGoals,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        InventoryAccountingKpiGoals,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      InventoryAccountingKpiGoals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INVENTORY_ACCURACY: OrderableEdmTypeField<
      InventoryAccountingKpiGoals<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ANNUAL_INVENTORY_TURN: OrderableEdmTypeField<
      InventoryAccountingKpiGoals<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<InventoryAccountingKpiGoals<DeSerializers>>;
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
         * Static representation of the {@link inventoryAccuracy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_ACCURACY: fieldBuilder.buildEdmTypeField(
          'InventoryAccuracy',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link annualInventoryTurn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ANNUAL_INVENTORY_TURN: fieldBuilder.buildEdmTypeField(
          'AnnualInventoryTurn',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', InventoryAccountingKpiGoals)
      };
    }

    return this._schema;
  }
}
