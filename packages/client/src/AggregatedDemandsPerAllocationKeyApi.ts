/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AggregatedDemandsPerAllocationKey } from './AggregatedDemandsPerAllocationKey';
import { AggregatedDemandsPerAllocationKeyRequestBuilder } from './AggregatedDemandsPerAllocationKeyRequestBuilder';
import { ReqDemPlanDemandCategory } from './ReqDemPlanDemandCategory';
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
export class AggregatedDemandsPerAllocationKeyApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<AggregatedDemandsPerAllocationKey<DeSerializersT>, DeSerializersT>
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
  ): AggregatedDemandsPerAllocationKeyApi<DeSerializersT> {
    return new AggregatedDemandsPerAllocationKeyApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = AggregatedDemandsPerAllocationKey;

  requestBuilder(): AggregatedDemandsPerAllocationKeyRequestBuilder<DeSerializersT> {
    return new AggregatedDemandsPerAllocationKeyRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    AggregatedDemandsPerAllocationKey<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      AggregatedDemandsPerAllocationKey<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AggregatedDemandsPerAllocationKey<DeSerializersT>,
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
    typeof AggregatedDemandsPerAllocationKey,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AggregatedDemandsPerAllocationKey,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AggregatedDemandsPerAllocationKey<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DEMAND_CATEGORY: EnumField<
      AggregatedDemandsPerAllocationKey<DeSerializers>,
      DeSerializersT,
      ReqDemPlanDemandCategory,
      true,
      true
    >;
    DELIVERING_SITE_ID: OrderableEdmTypeField<
      AggregatedDemandsPerAllocationKey<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_ALLOCATION_KEY_ID: OrderableEdmTypeField<
      AggregatedDemandsPerAllocationKey<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DEMAND_DATE: OrderableEdmTypeField<
      AggregatedDemandsPerAllocationKey<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DEMAND_QUANTITY_CONFIDENCE_INTERVAL_UPPER_BOUND: OrderableEdmTypeField<
      AggregatedDemandsPerAllocationKey<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DEMAND_QUANTITY: OrderableEdmTypeField<
      AggregatedDemandsPerAllocationKey<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DEMAND_QUANTITY_CONFIDENCE_INTERVAL_LOWER_BOUND: OrderableEdmTypeField<
      AggregatedDemandsPerAllocationKey<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<AggregatedDemandsPerAllocationKey<DeSerializers>>;
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
         * Static representation of the {@link demandCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEMAND_CATEGORY: fieldBuilder.buildEnumField(
          'DemandCategory',
          ReqDemPlanDemandCategory,
          true
        ),
        /**
         * Static representation of the {@link deliveringSiteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERING_SITE_ID: fieldBuilder.buildEdmTypeField(
          'DeliveringSiteId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productAllocationKeyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_ALLOCATION_KEY_ID: fieldBuilder.buildEdmTypeField(
          'ProductAllocationKeyId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link demandDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEMAND_DATE: fieldBuilder.buildEdmTypeField(
          'DemandDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link demandQuantityConfidenceIntervalUpperBound} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEMAND_QUANTITY_CONFIDENCE_INTERVAL_UPPER_BOUND:
          fieldBuilder.buildEdmTypeField(
            'DemandQuantityConfidenceIntervalUpperBound',
            'Edm.Decimal',
            false
          ),
        /**
         * Static representation of the {@link demandQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEMAND_QUANTITY: fieldBuilder.buildEdmTypeField(
          'DemandQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link demandQuantityConfidenceIntervalLowerBound} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEMAND_QUANTITY_CONFIDENCE_INTERVAL_LOWER_BOUND:
          fieldBuilder.buildEdmTypeField(
            'DemandQuantityConfidenceIntervalLowerBound',
            'Edm.Decimal',
            false
          ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AggregatedDemandsPerAllocationKey)
      };
    }

    return this._schema;
  }
}
