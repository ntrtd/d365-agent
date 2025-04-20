/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { MaterialHandlingInboundQueues } from './MaterialHandlingInboundQueues';
import { MaterialHandlingInboundQueuesRequestBuilder } from './MaterialHandlingInboundQueuesRequestBuilder';
import { WmheInboundTransType } from './WmheInboundTransType';
import { WmheInboundStatus } from './WmheInboundStatus';
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
export class MaterialHandlingInboundQueuesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<MaterialHandlingInboundQueues<DeSerializersT>, DeSerializersT>
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
  ): MaterialHandlingInboundQueuesApi<DeSerializersT> {
    return new MaterialHandlingInboundQueuesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = MaterialHandlingInboundQueues;

  requestBuilder(): MaterialHandlingInboundQueuesRequestBuilder<DeSerializersT> {
    return new MaterialHandlingInboundQueuesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    MaterialHandlingInboundQueues<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      MaterialHandlingInboundQueues<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    MaterialHandlingInboundQueues<DeSerializersT>,
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
    typeof MaterialHandlingInboundQueues,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        MaterialHandlingInboundQueues,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      MaterialHandlingInboundQueues<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INBOUND_QUEUE_ID: OrderableEdmTypeField<
      MaterialHandlingInboundQueues<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DATA_01: OrderableEdmTypeField<
      MaterialHandlingInboundQueues<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DATA_02: OrderableEdmTypeField<
      MaterialHandlingInboundQueues<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DATA_07: OrderableEdmTypeField<
      MaterialHandlingInboundQueues<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DATA_08: OrderableEdmTypeField<
      MaterialHandlingInboundQueues<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DATA_10: OrderableEdmTypeField<
      MaterialHandlingInboundQueues<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INBOUND_TRANS_TYPE: EnumField<
      MaterialHandlingInboundQueues<DeSerializers>,
      DeSerializersT,
      WmheInboundTransType,
      true,
      true
    >;
    DATA_05: OrderableEdmTypeField<
      MaterialHandlingInboundQueues<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DATA_06: OrderableEdmTypeField<
      MaterialHandlingInboundQueues<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DATA_03: OrderableEdmTypeField<
      MaterialHandlingInboundQueues<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ERROR_MESSAGE: OrderableEdmTypeField<
      MaterialHandlingInboundQueues<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MESSAGE_ID: OrderableEdmTypeField<
      MaterialHandlingInboundQueues<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DATA_04: OrderableEdmTypeField<
      MaterialHandlingInboundQueues<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DATA_09: OrderableEdmTypeField<
      MaterialHandlingInboundQueues<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INBOUND_STATUS: EnumField<
      MaterialHandlingInboundQueues<DeSerializers>,
      DeSerializersT,
      WmheInboundStatus,
      true,
      true
    >;
    ALL_FIELDS: AllFields<MaterialHandlingInboundQueues<DeSerializers>>;
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
         * Static representation of the {@link inboundQueueId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INBOUND_QUEUE_ID: fieldBuilder.buildEdmTypeField(
          'InboundQueueId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link data01} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_01: fieldBuilder.buildEdmTypeField('Data01', 'Edm.String', true),
        /**
         * Static representation of the {@link data02} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_02: fieldBuilder.buildEdmTypeField('Data02', 'Edm.String', true),
        /**
         * Static representation of the {@link data07} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_07: fieldBuilder.buildEdmTypeField('Data07', 'Edm.String', true),
        /**
         * Static representation of the {@link data08} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_08: fieldBuilder.buildEdmTypeField('Data08', 'Edm.String', true),
        /**
         * Static representation of the {@link data10} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_10: fieldBuilder.buildEdmTypeField('Data10', 'Edm.String', true),
        /**
         * Static representation of the {@link inboundTransType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INBOUND_TRANS_TYPE: fieldBuilder.buildEnumField(
          'InboundTransType',
          WmheInboundTransType,
          true
        ),
        /**
         * Static representation of the {@link data05} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_05: fieldBuilder.buildEdmTypeField('Data05', 'Edm.String', true),
        /**
         * Static representation of the {@link data06} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_06: fieldBuilder.buildEdmTypeField('Data06', 'Edm.String', true),
        /**
         * Static representation of the {@link data03} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_03: fieldBuilder.buildEdmTypeField('Data03', 'Edm.String', true),
        /**
         * Static representation of the {@link errorMessage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ERROR_MESSAGE: fieldBuilder.buildEdmTypeField(
          'ErrorMessage',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link messageId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MESSAGE_ID: fieldBuilder.buildEdmTypeField(
          'MessageId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link data04} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_04: fieldBuilder.buildEdmTypeField('Data04', 'Edm.String', true),
        /**
         * Static representation of the {@link data09} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_09: fieldBuilder.buildEdmTypeField('Data09', 'Edm.String', true),
        /**
         * Static representation of the {@link inboundStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INBOUND_STATUS: fieldBuilder.buildEnumField(
          'InboundStatus',
          WmheInboundStatus,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', MaterialHandlingInboundQueues)
      };
    }

    return this._schema;
  }
}
