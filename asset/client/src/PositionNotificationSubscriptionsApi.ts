/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PositionNotificationSubscriptions } from './PositionNotificationSubscriptions';
import { PositionNotificationSubscriptionsRequestBuilder } from './PositionNotificationSubscriptionsRequestBuilder';
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
export class PositionNotificationSubscriptionsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<PositionNotificationSubscriptions<DeSerializersT>, DeSerializersT>
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
  ): PositionNotificationSubscriptionsApi<DeSerializersT> {
    return new PositionNotificationSubscriptionsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = PositionNotificationSubscriptions;

  requestBuilder(): PositionNotificationSubscriptionsRequestBuilder<DeSerializersT> {
    return new PositionNotificationSubscriptionsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    PositionNotificationSubscriptions<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      PositionNotificationSubscriptions<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PositionNotificationSubscriptions<DeSerializersT>,
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
    typeof PositionNotificationSubscriptions,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PositionNotificationSubscriptions,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    RETAIL_OPERATION_OPERATION_ID: OrderableEdmTypeField<
      PositionNotificationSubscriptions<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    HCM_POSITION_POSITION_ID: OrderableEdmTypeField<
      PositionNotificationSubscriptions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DISPLAY_ORDER: OrderableEdmTypeField<
      PositionNotificationSubscriptions<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ALL_FIELDS: AllFields<PositionNotificationSubscriptions<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link retailOperationOperationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_OPERATION_OPERATION_ID: fieldBuilder.buildEdmTypeField(
          'RetailOperation_OperationId',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link hcmPositionPositionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HCM_POSITION_POSITION_ID: fieldBuilder.buildEdmTypeField(
          'HcmPosition_PositionId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link displayOrder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISPLAY_ORDER: fieldBuilder.buildEdmTypeField(
          'DisplayOrder',
          'Edm.Int32',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PositionNotificationSubscriptions)
      };
    }

    return this._schema;
  }
}
