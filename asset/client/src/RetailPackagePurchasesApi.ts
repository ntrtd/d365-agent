/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailPackagePurchases } from './RetailPackagePurchases';
import { RetailPackagePurchasesRequestBuilder } from './RetailPackagePurchasesRequestBuilder';
import { RetailPackagesApi } from './RetailPackagesApi';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class RetailPackagePurchasesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RetailPackagePurchases<DeSerializersT>, DeSerializersT>
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
  ): RetailPackagePurchasesApi<DeSerializersT> {
    return new RetailPackagePurchasesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link retailPackage} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_PACKAGE: OneToOneLink<
      RetailPackagePurchases<DeSerializersT>,
      DeSerializersT,
      RetailPackagesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [RetailPackagesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      RETAIL_PACKAGE: new OneToOneLink('RetailPackage', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = RetailPackagePurchases;

  requestBuilder(): RetailPackagePurchasesRequestBuilder<DeSerializersT> {
    return new RetailPackagePurchasesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RetailPackagePurchases<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailPackagePurchases<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailPackagePurchases<DeSerializersT>,
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
    typeof RetailPackagePurchases,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailPackagePurchases,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RetailPackagePurchases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PURCHASE_ID: OrderableEdmTypeField<
      RetailPackagePurchases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PACKAGE_ID: OrderableEdmTypeField<
      RetailPackagePurchases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      RetailPackagePurchases<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALLOCATED_CROSS_DOCK_QTY: OrderableEdmTypeField<
      RetailPackagePurchases<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    QUANTITY_RECEIVED: OrderableEdmTypeField<
      RetailPackagePurchases<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    QUANTITY: OrderableEdmTypeField<
      RetailPackagePurchases<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailPackage} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_PACKAGE: OneToOneLink<
      RetailPackagePurchases<DeSerializersT>,
      DeSerializersT,
      RetailPackagesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<RetailPackagePurchases<DeSerializers>>;
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
         * Static representation of the {@link purchaseId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_ID: fieldBuilder.buildEdmTypeField(
          'PurchaseId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link packageId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PACKAGE_ID: fieldBuilder.buildEdmTypeField(
          'PackageId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link lineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'LineNumber',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link allocatedCrossDockQty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOCATED_CROSS_DOCK_QTY: fieldBuilder.buildEdmTypeField(
          'AllocatedCrossDockQty',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link quantityReceived} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUANTITY_RECEIVED: fieldBuilder.buildEdmTypeField(
          'QuantityReceived',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link quantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUANTITY: fieldBuilder.buildEdmTypeField(
          'Quantity',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailPackagePurchases)
      };
    }

    return this._schema;
  }
}
