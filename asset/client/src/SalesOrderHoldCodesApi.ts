/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SalesOrderHoldCodes } from './SalesOrderHoldCodes';
import { SalesOrderHoldCodesRequestBuilder } from './SalesOrderHoldCodesRequestBuilder';
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
export class SalesOrderHoldCodesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<SalesOrderHoldCodes<DeSerializersT>, DeSerializersT>
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
  ): SalesOrderHoldCodesApi<DeSerializersT> {
    return new SalesOrderHoldCodesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = SalesOrderHoldCodes;

  requestBuilder(): SalesOrderHoldCodesRequestBuilder<DeSerializersT> {
    return new SalesOrderHoldCodesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    SalesOrderHoldCodes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<SalesOrderHoldCodes<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SalesOrderHoldCodes<DeSerializersT>,
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
    typeof SalesOrderHoldCodes,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SalesOrderHoldCodes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      SalesOrderHoldCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SALES_ORDER_HOLD_CODE: OrderableEdmTypeField<
      SalesOrderHoldCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ASSOCIATED_SECURITY_ROLE_NAME: OrderableEdmTypeField<
      SalesOrderHoldCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_DEFAULT_SALES_ORDER_HOLD_CODE: EnumField<
      SalesOrderHoldCodes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_HOLD_CODE_REMOVING_INVENTORY_RESERVATIONS: EnumField<
      SalesOrderHoldCodes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      SalesOrderHoldCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<SalesOrderHoldCodes<DeSerializers>>;
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
         * Static representation of the {@link salesOrderHoldCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_ORDER_HOLD_CODE: fieldBuilder.buildEdmTypeField(
          'SalesOrderHoldCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link associatedSecurityRoleName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSOCIATED_SECURITY_ROLE_NAME: fieldBuilder.buildEdmTypeField(
          'AssociatedSecurityRoleName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isDefaultSalesOrderHoldCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DEFAULT_SALES_ORDER_HOLD_CODE: fieldBuilder.buildEnumField(
          'IsDefaultSalesOrderHoldCode',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isHoldCodeRemovingInventoryReservations} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_HOLD_CODE_REMOVING_INVENTORY_RESERVATIONS:
          fieldBuilder.buildEnumField(
            'IsHoldCodeRemovingInventoryReservations',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SalesOrderHoldCodes)
      };
    }

    return this._schema;
  }
}
