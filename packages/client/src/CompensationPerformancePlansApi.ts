/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CompensationPerformancePlans } from './CompensationPerformancePlans';
import { CompensationPerformancePlansRequestBuilder } from './CompensationPerformancePlansRequestBuilder';
import { CompensationPayPerformanceAllocationsApi } from './CompensationPayPerformanceAllocationsApi';
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
export class CompensationPerformancePlansApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<CompensationPerformancePlans<DeSerializersT>, DeSerializersT>
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
  ): CompensationPerformancePlansApi<DeSerializersT> {
    return new CompensationPerformancePlansApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link compensationPayPerformanceAllocations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMPENSATION_PAY_PERFORMANCE_ALLOCATIONS: OneToManyLink<
      CompensationPerformancePlans<DeSerializersT>,
      DeSerializersT,
      CompensationPayPerformanceAllocationsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [CompensationPayPerformanceAllocationsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      COMPENSATION_PAY_PERFORMANCE_ALLOCATIONS: new OneToManyLink(
        'CompensationPayPerformanceAllocations',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = CompensationPerformancePlans;

  requestBuilder(): CompensationPerformancePlansRequestBuilder<DeSerializersT> {
    return new CompensationPerformancePlansRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CompensationPerformancePlans<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      CompensationPerformancePlans<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CompensationPerformancePlans<DeSerializersT>,
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
    typeof CompensationPerformancePlans,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CompensationPerformancePlans,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      CompensationPerformancePlans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PLAN: OrderableEdmTypeField<
      CompensationPerformancePlans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EXPIRATION: OrderableEdmTypeField<
      CompensationPerformancePlans<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      CompensationPerformancePlans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EFFECTIVE: OrderableEdmTypeField<
      CompensationPerformancePlans<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link compensationPayPerformanceAllocations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMPENSATION_PAY_PERFORMANCE_ALLOCATIONS: OneToManyLink<
      CompensationPerformancePlans<DeSerializersT>,
      DeSerializersT,
      CompensationPayPerformanceAllocationsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<CompensationPerformancePlans<DeSerializers>>;
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
         * Static representation of the {@link plan} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLAN: fieldBuilder.buildEdmTypeField('Plan', 'Edm.String', false),
        /**
         * Static representation of the {@link expiration} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPIRATION: fieldBuilder.buildEdmTypeField(
          'Expiration',
          'Edm.DateTimeOffset',
          false
        ),
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
         * Static representation of the {@link effective} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EFFECTIVE: fieldBuilder.buildEdmTypeField(
          'Effective',
          'Edm.DateTimeOffset',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CompensationPerformancePlans)
      };
    }

    return this._schema;
  }
}
