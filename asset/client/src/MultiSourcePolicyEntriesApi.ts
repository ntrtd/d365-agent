/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { MultiSourcePolicyEntries } from './MultiSourcePolicyEntries';
import { MultiSourcePolicyEntriesRequestBuilder } from './MultiSourcePolicyEntriesRequestBuilder';
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
export class MultiSourcePolicyEntriesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<MultiSourcePolicyEntries<DeSerializersT>, DeSerializersT>
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
  ): MultiSourcePolicyEntriesApi<DeSerializersT> {
    return new MultiSourcePolicyEntriesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = MultiSourcePolicyEntries;

  requestBuilder(): MultiSourcePolicyEntriesRequestBuilder<DeSerializersT> {
    return new MultiSourcePolicyEntriesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    MultiSourcePolicyEntries<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      MultiSourcePolicyEntries<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    MultiSourcePolicyEntries<DeSerializersT>,
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
    typeof MultiSourcePolicyEntries,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        MultiSourcePolicyEntries,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      MultiSourcePolicyEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    POLICY_NAME: OrderableEdmTypeField<
      MultiSourcePolicyEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VENDOR_ACCOUNT_NUMBER: OrderableEdmTypeField<
      MultiSourcePolicyEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ALLOCATION_PCT: OrderableEdmTypeField<
      MultiSourcePolicyEntries<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<MultiSourcePolicyEntries<DeSerializers>>;
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
         * Static representation of the {@link policyName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POLICY_NAME: fieldBuilder.buildEdmTypeField(
          'PolicyName',
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
         * Static representation of the {@link allocationPct} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOCATION_PCT: fieldBuilder.buildEdmTypeField(
          'AllocationPct',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', MultiSourcePolicyEntries)
      };
    }

    return this._schema;
  }
}
