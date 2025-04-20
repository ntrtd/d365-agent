/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { MaterialHandlingSubscriptions } from './MaterialHandlingSubscriptions';
import { MaterialHandlingSubscriptionsRequestBuilder } from './MaterialHandlingSubscriptionsRequestBuilder';
import { NoYes } from './NoYes';
import { WmheOutboundTransType } from './WmheOutboundTransType';
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
  EdmTypeField,
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class MaterialHandlingSubscriptionsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<MaterialHandlingSubscriptions<DeSerializersT>, DeSerializersT>
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
  ): MaterialHandlingSubscriptionsApi<DeSerializersT> {
    return new MaterialHandlingSubscriptionsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = MaterialHandlingSubscriptions;

  requestBuilder(): MaterialHandlingSubscriptionsRequestBuilder<DeSerializersT> {
    return new MaterialHandlingSubscriptionsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    MaterialHandlingSubscriptions<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      MaterialHandlingSubscriptions<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    MaterialHandlingSubscriptions<DeSerializersT>,
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
    typeof MaterialHandlingSubscriptions,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        MaterialHandlingSubscriptions,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      MaterialHandlingSubscriptions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SUBSCRIPTION: OrderableEdmTypeField<
      MaterialHandlingSubscriptions<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    PAYLOAD_GENERATOR: OrderableEdmTypeField<
      MaterialHandlingSubscriptions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WAREHOUSE_ID: OrderableEdmTypeField<
      MaterialHandlingSubscriptions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REF_FIELD_NAME: OrderableEdmTypeField<
      MaterialHandlingSubscriptions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QUERY: EdmTypeField<
      MaterialHandlingSubscriptions<DeSerializers>,
      DeSerializersT,
      'Edm.Binary',
      true,
      true
    >;
    SUBSCRIPTION_ID: OrderableEdmTypeField<
      MaterialHandlingSubscriptions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RUN_QUERY: EnumField<
      MaterialHandlingSubscriptions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      MaterialHandlingSubscriptions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REF_TABLE_NAME: OrderableEdmTypeField<
      MaterialHandlingSubscriptions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DATA_FIELD_NAME: OrderableEdmTypeField<
      MaterialHandlingSubscriptions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OUTBOUND_TRANSACTION_TYPE: EnumField<
      MaterialHandlingSubscriptions<DeSerializers>,
      DeSerializersT,
      WmheOutboundTransType,
      true,
      true
    >;
    ALL_FIELDS: AllFields<MaterialHandlingSubscriptions<DeSerializers>>;
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
         * Static representation of the {@link subscription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUBSCRIPTION: fieldBuilder.buildEdmTypeField(
          'Subscription',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link payloadGenerator} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYLOAD_GENERATOR: fieldBuilder.buildEdmTypeField(
          'PayloadGenerator',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link warehouseId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE_ID: fieldBuilder.buildEdmTypeField(
          'WarehouseId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link refFieldName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REF_FIELD_NAME: fieldBuilder.buildEdmTypeField(
          'RefFieldName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link query} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUERY: fieldBuilder.buildEdmTypeField('Query', 'Edm.Binary', true),
        /**
         * Static representation of the {@link subscriptionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUBSCRIPTION_ID: fieldBuilder.buildEdmTypeField(
          'SubscriptionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link runQuery} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RUN_QUERY: fieldBuilder.buildEnumField('RunQuery', NoYes, true),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link refTableName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REF_TABLE_NAME: fieldBuilder.buildEdmTypeField(
          'RefTableName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dataFieldName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_FIELD_NAME: fieldBuilder.buildEdmTypeField(
          'DataFieldName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link outboundTransactionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OUTBOUND_TRANSACTION_TYPE: fieldBuilder.buildEnumField(
          'OutboundTransactionType',
          WmheOutboundTransType,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', MaterialHandlingSubscriptions)
      };
    }

    return this._schema;
  }
}
