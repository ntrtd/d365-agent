/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailPackages } from './RetailPackages';
import { RetailPackagesRequestBuilder } from './RetailPackagesRequestBuilder';
import { RetailPackagePurchasesApi } from './RetailPackagePurchasesApi';
import { RetailPackageLinesApi } from './RetailPackageLinesApi';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class RetailPackagesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RetailPackages<DeSerializersT>, DeSerializersT>
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
  ): RetailPackagesApi<DeSerializersT> {
    return new RetailPackagesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link retailPackagePurchase} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_PACKAGE_PURCHASE: OneToManyLink<
      RetailPackages<DeSerializersT>,
      DeSerializersT,
      RetailPackagePurchasesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailPackageLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_PACKAGE_LINES: OneToManyLink<
      RetailPackages<DeSerializersT>,
      DeSerializersT,
      RetailPackageLinesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      RetailPackagePurchasesApi<DeSerializersT>,
      RetailPackageLinesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      RETAIL_PACKAGE_PURCHASE: new OneToManyLink(
        'RetailPackagePurchase',
        this,
        linkedApis[0]
      ),
      RETAIL_PACKAGE_LINES: new OneToManyLink(
        'RetailPackageLines',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = RetailPackages;

  requestBuilder(): RetailPackagesRequestBuilder<DeSerializersT> {
    return new RetailPackagesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RetailPackages<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<RetailPackages<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<RetailPackages<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof RetailPackages, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(RetailPackages, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RetailPackages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PACKAGE_ID: OrderableEdmTypeField<
      RetailPackages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VENDOR_ACCOUNT: OrderableEdmTypeField<
      RetailPackages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PACKAGE_NAME: OrderableEdmTypeField<
      RetailPackages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailPackagePurchase} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_PACKAGE_PURCHASE: OneToManyLink<
      RetailPackages<DeSerializersT>,
      DeSerializersT,
      RetailPackagePurchasesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailPackageLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_PACKAGE_LINES: OneToManyLink<
      RetailPackages<DeSerializersT>,
      DeSerializersT,
      RetailPackageLinesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<RetailPackages<DeSerializers>>;
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
         * Static representation of the {@link packageId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PACKAGE_ID: fieldBuilder.buildEdmTypeField(
          'PackageId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link vendorAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'VendorAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link packageName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PACKAGE_NAME: fieldBuilder.buildEdmTypeField(
          'PackageName',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailPackages)
      };
    }

    return this._schema;
  }
}
