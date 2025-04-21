/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetLendings } from './AssetLendings';
import { AssetLendingsRequestBuilder } from './AssetLendingsRequestBuilder';
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
export class AssetLendingsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<AssetLendings<DeSerializersT>, DeSerializersT>
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
  ): AssetLendingsApi<DeSerializersT> {
    return new AssetLendingsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = AssetLendings;

  requestBuilder(): AssetLendingsRequestBuilder<DeSerializersT> {
    return new AssetLendingsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    AssetLendings<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<AssetLendings<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<AssetLendings<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof AssetLendings, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(AssetLendings, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AssetLendings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FA_INVENTORY_NUMBER: OrderableEdmTypeField<
      AssetLendings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DATE_OF_LEASE: OrderableEdmTypeField<
      AssetLendings<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ACTUAL_RETURN_DATE: OrderableEdmTypeField<
      AssetLendings<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    LOCATION: OrderableEdmTypeField<
      AssetLendings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXPECTED_RETURN_DATE: OrderableEdmTypeField<
      AssetLendings<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    LEASEHOLDER: OrderableEdmTypeField<
      AssetLendings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<AssetLendings<DeSerializers>>;
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
         * Static representation of the {@link faInventoryNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FA_INVENTORY_NUMBER: fieldBuilder.buildEdmTypeField(
          'FAInventoryNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link dateOfLease} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE_OF_LEASE: fieldBuilder.buildEdmTypeField(
          'DateOfLease',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link actualReturnDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTUAL_RETURN_DATE: fieldBuilder.buildEdmTypeField(
          'ActualReturnDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link location} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOCATION: fieldBuilder.buildEdmTypeField(
          'Location',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link expectedReturnDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPECTED_RETURN_DATE: fieldBuilder.buildEdmTypeField(
          'ExpectedReturnDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link leaseholder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEASEHOLDER: fieldBuilder.buildEdmTypeField(
          'Leaseholder',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AssetLendings)
      };
    }

    return this._schema;
  }
}
