/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { MaterialHandlingOutboundQueues } from './MaterialHandlingOutboundQueues';
import { MaterialHandlingOutboundQueuesRequestBuilder } from './MaterialHandlingOutboundQueuesRequestBuilder';
import { WmheOutboundTransType } from './WmheOutboundTransType';
import { WmheOutboundStatus } from './WmheOutboundStatus';
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
export class MaterialHandlingOutboundQueuesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<MaterialHandlingOutboundQueues<DeSerializersT>, DeSerializersT>
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
  ): MaterialHandlingOutboundQueuesApi<DeSerializersT> {
    return new MaterialHandlingOutboundQueuesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = MaterialHandlingOutboundQueues;

  requestBuilder(): MaterialHandlingOutboundQueuesRequestBuilder<DeSerializersT> {
    return new MaterialHandlingOutboundQueuesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    MaterialHandlingOutboundQueues<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      MaterialHandlingOutboundQueues<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    MaterialHandlingOutboundQueues<DeSerializersT>,
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
    typeof MaterialHandlingOutboundQueues,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        MaterialHandlingOutboundQueues,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      MaterialHandlingOutboundQueues<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    OUTBOUND_QUEUE_ID: OrderableEdmTypeField<
      MaterialHandlingOutboundQueues<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WAREHOUSE_ID: OrderableEdmTypeField<
      MaterialHandlingOutboundQueues<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OUTBOUND_TRANS_TYPE: EnumField<
      MaterialHandlingOutboundQueues<DeSerializers>,
      DeSerializersT,
      WmheOutboundTransType,
      true,
      true
    >;
    DATA_08: OrderableEdmTypeField<
      MaterialHandlingOutboundQueues<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DATA_05: OrderableEdmTypeField<
      MaterialHandlingOutboundQueues<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DATA_01: OrderableEdmTypeField<
      MaterialHandlingOutboundQueues<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DATA_09: OrderableEdmTypeField<
      MaterialHandlingOutboundQueues<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUBSCRIPTION_ID: OrderableEdmTypeField<
      MaterialHandlingOutboundQueues<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DATA_06: OrderableEdmTypeField<
      MaterialHandlingOutboundQueues<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DATA_02: OrderableEdmTypeField<
      MaterialHandlingOutboundQueues<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OUTBOUND_STATUS: EnumField<
      MaterialHandlingOutboundQueues<DeSerializers>,
      DeSerializersT,
      WmheOutboundStatus,
      true,
      true
    >;
    PAYLOAD: OrderableEdmTypeField<
      MaterialHandlingOutboundQueues<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DATA_07: OrderableEdmTypeField<
      MaterialHandlingOutboundQueues<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DATA_03: OrderableEdmTypeField<
      MaterialHandlingOutboundQueues<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DATA_10: OrderableEdmTypeField<
      MaterialHandlingOutboundQueues<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DATA_04: OrderableEdmTypeField<
      MaterialHandlingOutboundQueues<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<MaterialHandlingOutboundQueues<DeSerializers>>;
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
         * Static representation of the {@link outboundQueueId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OUTBOUND_QUEUE_ID: fieldBuilder.buildEdmTypeField(
          'OutboundQueueId',
          'Edm.String',
          false
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
         * Static representation of the {@link outboundTransType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OUTBOUND_TRANS_TYPE: fieldBuilder.buildEnumField(
          'OutboundTransType',
          WmheOutboundTransType,
          true
        ),
        /**
         * Static representation of the {@link data08} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_08: fieldBuilder.buildEdmTypeField('Data08', 'Edm.String', true),
        /**
         * Static representation of the {@link data05} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_05: fieldBuilder.buildEdmTypeField('Data05', 'Edm.String', true),
        /**
         * Static representation of the {@link data01} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_01: fieldBuilder.buildEdmTypeField('Data01', 'Edm.String', true),
        /**
         * Static representation of the {@link data09} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_09: fieldBuilder.buildEdmTypeField('Data09', 'Edm.String', true),
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
         * Static representation of the {@link data06} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_06: fieldBuilder.buildEdmTypeField('Data06', 'Edm.String', true),
        /**
         * Static representation of the {@link data02} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_02: fieldBuilder.buildEdmTypeField('Data02', 'Edm.String', true),
        /**
         * Static representation of the {@link outboundStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OUTBOUND_STATUS: fieldBuilder.buildEnumField(
          'OutboundStatus',
          WmheOutboundStatus,
          true
        ),
        /**
         * Static representation of the {@link payload} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYLOAD: fieldBuilder.buildEdmTypeField('Payload', 'Edm.String', true),
        /**
         * Static representation of the {@link data07} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_07: fieldBuilder.buildEdmTypeField('Data07', 'Edm.String', true),
        /**
         * Static representation of the {@link data03} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_03: fieldBuilder.buildEdmTypeField('Data03', 'Edm.String', true),
        /**
         * Static representation of the {@link data10} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_10: fieldBuilder.buildEdmTypeField('Data10', 'Edm.String', true),
        /**
         * Static representation of the {@link data04} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_04: fieldBuilder.buildEdmTypeField('Data04', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', MaterialHandlingOutboundQueues)
      };
    }

    return this._schema;
  }
}
