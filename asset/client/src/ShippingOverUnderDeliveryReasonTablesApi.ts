/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ShippingOverUnderDeliveryReasonTables } from './ShippingOverUnderDeliveryReasonTables';
import { ShippingOverUnderDeliveryReasonTablesRequestBuilder } from './ShippingOverUnderDeliveryReasonTablesRequestBuilder';
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
export class ShippingOverUnderDeliveryReasonTablesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      ShippingOverUnderDeliveryReasonTables<DeSerializersT>,
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
  ): ShippingOverUnderDeliveryReasonTablesApi<DeSerializersT> {
    return new ShippingOverUnderDeliveryReasonTablesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ShippingOverUnderDeliveryReasonTables;

  requestBuilder(): ShippingOverUnderDeliveryReasonTablesRequestBuilder<DeSerializersT> {
    return new ShippingOverUnderDeliveryReasonTablesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    ShippingOverUnderDeliveryReasonTables<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ShippingOverUnderDeliveryReasonTables<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ShippingOverUnderDeliveryReasonTables<DeSerializersT>,
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
    typeof ShippingOverUnderDeliveryReasonTables,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ShippingOverUnderDeliveryReasonTables,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ShippingOverUnderDeliveryReasonTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REASON_ID: OrderableEdmTypeField<
      ShippingOverUnderDeliveryReasonTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INVENTORY_MOVEMENT_JOURNAL_NAME_ID: OrderableEdmTypeField<
      ShippingOverUnderDeliveryReasonTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REASON_DESCRIPTION: OrderableEdmTypeField<
      ShippingOverUnderDeliveryReasonTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<ShippingOverUnderDeliveryReasonTables<DeSerializers>>;
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
         * Static representation of the {@link reasonId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REASON_ID: fieldBuilder.buildEdmTypeField(
          'ReasonId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link inventoryMovementJournalNameId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_MOVEMENT_JOURNAL_NAME_ID: fieldBuilder.buildEdmTypeField(
          'InventoryMovementJournalNameId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link reasonDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REASON_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'ReasonDescription',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ShippingOverUnderDeliveryReasonTables)
      };
    }

    return this._schema;
  }
}
