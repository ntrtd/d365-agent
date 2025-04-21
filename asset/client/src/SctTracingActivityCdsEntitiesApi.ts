/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SctTracingActivityCdsEntities } from './SctTracingActivityCdsEntities';
import { SctTracingActivityCdsEntitiesRequestBuilder } from './SctTracingActivityCdsEntitiesRequestBuilder';
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
export class SctTracingActivityCdsEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<SctTracingActivityCdsEntities<DeSerializersT>, DeSerializersT>
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
  ): SctTracingActivityCdsEntitiesApi<DeSerializersT> {
    return new SctTracingActivityCdsEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = SctTracingActivityCdsEntities;

  requestBuilder(): SctTracingActivityCdsEntitiesRequestBuilder<DeSerializersT> {
    return new SctTracingActivityCdsEntitiesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    SctTracingActivityCdsEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      SctTracingActivityCdsEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SctTracingActivityCdsEntities<DeSerializersT>,
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
    typeof SctTracingActivityCdsEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SctTracingActivityCdsEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      SctTracingActivityCdsEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RECORD_ID: OrderableEdmTypeField<
      SctTracingActivityCdsEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    CONSUMPTION_TRANSACTIONS: OrderableEdmTypeField<
      SctTracingActivityCdsEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACTIVITY_ID: OrderableEdmTypeField<
      SctTracingActivityCdsEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_TRANSACTIONS: OrderableEdmTypeField<
      SctTracingActivityCdsEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REFERENCE_ID: OrderableEdmTypeField<
      SctTracingActivityCdsEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCOUNT_NUM: OrderableEdmTypeField<
      SctTracingActivityCdsEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACTIVITY_TYPE: OrderableEdmTypeField<
      SctTracingActivityCdsEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DATA_COLLECTION: OrderableEdmTypeField<
      SctTracingActivityCdsEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACTIVITY_CODE: OrderableEdmTypeField<
      SctTracingActivityCdsEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INSTANCE_RELATION_TYPE: OrderableEdmTypeField<
      SctTracingActivityCdsEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    VENDOR: OrderableEdmTypeField<
      SctTracingActivityCdsEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACTIVITY_DATE_TIME: OrderableEdmTypeField<
      SctTracingActivityCdsEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ALL_FIELDS: AllFields<SctTracingActivityCdsEntities<DeSerializers>>;
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
         * Static representation of the {@link recordId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECORD_ID: fieldBuilder.buildEdmTypeField(
          'RecordId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link consumptionTransactions} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSUMPTION_TRANSACTIONS: fieldBuilder.buildEdmTypeField(
          'ConsumptionTransactions',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link activityId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVITY_ID: fieldBuilder.buildEdmTypeField(
          'ActivityId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productTransactions} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_TRANSACTIONS: fieldBuilder.buildEdmTypeField(
          'ProductTransactions',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link referenceId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REFERENCE_ID: fieldBuilder.buildEdmTypeField(
          'ReferenceId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link accountNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_NUM: fieldBuilder.buildEdmTypeField(
          'AccountNum',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link activityType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVITY_TYPE: fieldBuilder.buildEdmTypeField(
          'ActivityType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dataCollection} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_COLLECTION: fieldBuilder.buildEdmTypeField(
          'DataCollection',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link activityCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVITY_CODE: fieldBuilder.buildEdmTypeField(
          'ActivityCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link instanceRelationType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INSTANCE_RELATION_TYPE: fieldBuilder.buildEdmTypeField(
          'InstanceRelationType',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link vendor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR: fieldBuilder.buildEdmTypeField('Vendor', 'Edm.String', true),
        /**
         * Static representation of the {@link activityDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVITY_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'ActivityDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SctTracingActivityCdsEntities)
      };
    }

    return this._schema;
  }
}
