/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SubBillBillingScheduleLineRevenueSplitUpdates } from './SubBillBillingScheduleLineRevenueSplitUpdates';
import { SubBillBillingScheduleLineRevenueSplitUpdatesRequestBuilder } from './SubBillBillingScheduleLineRevenueSplitUpdatesRequestBuilder';
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
export class SubBillBillingScheduleLineRevenueSplitUpdatesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      SubBillBillingScheduleLineRevenueSplitUpdates<DeSerializersT>,
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
  ): SubBillBillingScheduleLineRevenueSplitUpdatesApi<DeSerializersT> {
    return new SubBillBillingScheduleLineRevenueSplitUpdatesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = SubBillBillingScheduleLineRevenueSplitUpdates;

  requestBuilder(): SubBillBillingScheduleLineRevenueSplitUpdatesRequestBuilder<DeSerializersT> {
    return new SubBillBillingScheduleLineRevenueSplitUpdatesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    SubBillBillingScheduleLineRevenueSplitUpdates<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      SubBillBillingScheduleLineRevenueSplitUpdates<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SubBillBillingScheduleLineRevenueSplitUpdates<DeSerializersT>,
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
    typeof SubBillBillingScheduleLineRevenueSplitUpdates,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SubBillBillingScheduleLineRevenueSplitUpdates,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      SubBillBillingScheduleLineRevenueSplitUpdates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BILLING_SCHEDULE_NUMBER: OrderableEdmTypeField<
      SubBillBillingScheduleLineRevenueSplitUpdates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PARENT_LINE_NUM: OrderableEdmTypeField<
      SubBillBillingScheduleLineRevenueSplitUpdates<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CHILD_ITEM_ID: OrderableEdmTypeField<
      SubBillBillingScheduleLineRevenueSplitUpdates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CHILD_UNIT_PRICE: OrderableEdmTypeField<
      SubBillBillingScheduleLineRevenueSplitUpdates<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DEFAULT_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      SubBillBillingScheduleLineRevenueSplitUpdates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHILD_QUANTITY: OrderableEdmTypeField<
      SubBillBillingScheduleLineRevenueSplitUpdates<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<
      SubBillBillingScheduleLineRevenueSplitUpdates<DeSerializers>
    >;
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
         * Static representation of the {@link billingScheduleNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILLING_SCHEDULE_NUMBER: fieldBuilder.buildEdmTypeField(
          'BillingScheduleNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link parentLineNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARENT_LINE_NUM: fieldBuilder.buildEdmTypeField(
          'ParentLineNum',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link childItemId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHILD_ITEM_ID: fieldBuilder.buildEdmTypeField(
          'ChildItemId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link childUnitPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHILD_UNIT_PRICE: fieldBuilder.buildEdmTypeField(
          'ChildUnitPrice',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link defaultDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_DIMENSION_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'DefaultDimensionDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link childQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHILD_QUANTITY: fieldBuilder.buildEdmTypeField(
          'ChildQuantity',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          SubBillBillingScheduleLineRevenueSplitUpdates
        )
      };
    }

    return this._schema;
  }
}
