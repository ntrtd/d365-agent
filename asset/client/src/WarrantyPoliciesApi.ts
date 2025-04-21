/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WarrantyPolicies } from './WarrantyPolicies';
import { WarrantyPoliciesRequestBuilder } from './WarrantyPoliciesRequestBuilder';
import { WarrantyPolicyStatus } from './WarrantyPolicyStatus';
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
export class WarrantyPoliciesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<WarrantyPolicies<DeSerializersT>, DeSerializersT>
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
  ): WarrantyPoliciesApi<DeSerializersT> {
    return new WarrantyPoliciesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = WarrantyPolicies;

  requestBuilder(): WarrantyPoliciesRequestBuilder<DeSerializersT> {
    return new WarrantyPoliciesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    WarrantyPolicies<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<WarrantyPolicies<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<WarrantyPolicies<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof WarrantyPolicies, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        WarrantyPolicies,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      WarrantyPolicies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    POLICY_NUMBER: OrderableEdmTypeField<
      WarrantyPolicies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WARRANTY_EXPIRATION_DATE: OrderableEdmTypeField<
      WarrantyPolicies<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    WARRANTIED_SERIAL_NUMBER: OrderableEdmTypeField<
      WarrantyPolicies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WARRANTIED_FULFILLED_DATE: OrderableEdmTypeField<
      WarrantyPolicies<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    WARRANTY_ITEM_ID: OrderableEdmTypeField<
      WarrantyPolicies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER_ACCOUNT: OrderableEdmTypeField<
      WarrantyPolicies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WARRANTY_INVENTORY_LOT_ID: OrderableEdmTypeField<
      WarrantyPolicies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WARRANTIED_INVENTORY_LOT_ID: OrderableEdmTypeField<
      WarrantyPolicies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WARRANTY_EFFECTIVE_DATE: OrderableEdmTypeField<
      WarrantyPolicies<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    NOTES: OrderableEdmTypeField<
      WarrantyPolicies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WARRANTY_SALES_DATE: OrderableEdmTypeField<
      WarrantyPolicies<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    STATUS: EnumField<
      WarrantyPolicies<DeSerializers>,
      DeSerializersT,
      WarrantyPolicyStatus,
      true,
      true
    >;
    WARRANTIED_ITEM_ID: OrderableEdmTypeField<
      WarrantyPolicies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<WarrantyPolicies<DeSerializers>>;
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
         * Static representation of the {@link policyNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POLICY_NUMBER: fieldBuilder.buildEdmTypeField(
          'PolicyNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link warrantyExpirationDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WARRANTY_EXPIRATION_DATE: fieldBuilder.buildEdmTypeField(
          'WarrantyExpirationDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link warrantiedSerialNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WARRANTIED_SERIAL_NUMBER: fieldBuilder.buildEdmTypeField(
          'WarrantiedSerialNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link warrantiedFulfilledDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WARRANTIED_FULFILLED_DATE: fieldBuilder.buildEdmTypeField(
          'WarrantiedFulfilledDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link warrantyItemId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WARRANTY_ITEM_ID: fieldBuilder.buildEdmTypeField(
          'WarrantyItemId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link customerAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'CustomerAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link warrantyInventoryLotId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WARRANTY_INVENTORY_LOT_ID: fieldBuilder.buildEdmTypeField(
          'WarrantyInventoryLotId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link warrantiedInventoryLotId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WARRANTIED_INVENTORY_LOT_ID: fieldBuilder.buildEdmTypeField(
          'WarrantiedInventoryLotId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link warrantyEffectiveDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WARRANTY_EFFECTIVE_DATE: fieldBuilder.buildEdmTypeField(
          'WarrantyEffectiveDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link notes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NOTES: fieldBuilder.buildEdmTypeField('Notes', 'Edm.String', true),
        /**
         * Static representation of the {@link warrantySalesDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WARRANTY_SALES_DATE: fieldBuilder.buildEdmTypeField(
          'WarrantySalesDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEnumField(
          'Status',
          WarrantyPolicyStatus,
          true
        ),
        /**
         * Static representation of the {@link warrantiedItemId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WARRANTIED_ITEM_ID: fieldBuilder.buildEdmTypeField(
          'WarrantiedItemId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', WarrantyPolicies)
      };
    }

    return this._schema;
  }
}
