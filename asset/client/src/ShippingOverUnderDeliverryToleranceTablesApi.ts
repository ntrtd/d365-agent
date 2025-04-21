/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ShippingOverUnderDeliverryToleranceTables } from './ShippingOverUnderDeliverryToleranceTables';
import { ShippingOverUnderDeliverryToleranceTablesRequestBuilder } from './ShippingOverUnderDeliverryToleranceTablesRequestBuilder';
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
export class ShippingOverUnderDeliverryToleranceTablesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      ShippingOverUnderDeliverryToleranceTables<DeSerializersT>,
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
  ): ShippingOverUnderDeliverryToleranceTablesApi<DeSerializersT> {
    return new ShippingOverUnderDeliverryToleranceTablesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ShippingOverUnderDeliverryToleranceTables;

  requestBuilder(): ShippingOverUnderDeliverryToleranceTablesRequestBuilder<DeSerializersT> {
    return new ShippingOverUnderDeliverryToleranceTablesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    ShippingOverUnderDeliverryToleranceTables<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ShippingOverUnderDeliverryToleranceTables<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ShippingOverUnderDeliverryToleranceTables<DeSerializersT>,
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
    typeof ShippingOverUnderDeliverryToleranceTables,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ShippingOverUnderDeliverryToleranceTables,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ShippingOverUnderDeliverryToleranceTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VENDOR_ACCOUNT_NUMBER: OrderableEdmTypeField<
      ShippingOverUnderDeliverryToleranceTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VENDOR_OVER_UNDERDELIVERY_TOLERANCE_GROUP_ID: OrderableEdmTypeField<
      ShippingOverUnderDeliverryToleranceTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ITEM_NUMBER: OrderableEdmTypeField<
      ShippingOverUnderDeliverryToleranceTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ITEM_OVER_UNDERDELIVERY_TOLERANCE_GROUP_ID: OrderableEdmTypeField<
      ShippingOverUnderDeliverryToleranceTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TOLERANCE_PERCENTAGE: OrderableEdmTypeField<
      ShippingOverUnderDeliverryToleranceTables<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TOLERANCE_AMOUNT: OrderableEdmTypeField<
      ShippingOverUnderDeliverryToleranceTables<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<
      ShippingOverUnderDeliverryToleranceTables<DeSerializers>
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
         * Static representation of the {@link vendorAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'VendorAccountNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link vendorOverUnderdeliveryToleranceGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_OVER_UNDERDELIVERY_TOLERANCE_GROUP_ID:
          fieldBuilder.buildEdmTypeField(
            'VendorOverUnderdeliveryToleranceGroupId',
            'Edm.String',
            false
          ),
        /**
         * Static representation of the {@link itemNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_NUMBER: fieldBuilder.buildEdmTypeField(
          'ItemNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link itemOverUnderdeliveryToleranceGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_OVER_UNDERDELIVERY_TOLERANCE_GROUP_ID:
          fieldBuilder.buildEdmTypeField(
            'ItemOverUnderdeliveryToleranceGroupId',
            'Edm.String',
            false
          ),
        /**
         * Static representation of the {@link tolerancePercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOLERANCE_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'TolerancePercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link toleranceAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOLERANCE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'ToleranceAmount',
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
          ShippingOverUnderDeliverryToleranceTables
        )
      };
    }

    return this._schema;
  }
}
