/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CompensationPayPerformanceAllocations } from './CompensationPayPerformanceAllocations';
import { CompensationPayPerformanceAllocationsRequestBuilder } from './CompensationPayPerformanceAllocationsRequestBuilder';
import { CompensationPayPerformanceAllocationLinesApi } from './CompensationPayPerformanceAllocationLinesApi';
import { CompensationPerformancePlansApi } from './CompensationPerformancePlansApi';
import { DepartmentsApi } from './DepartmentsApi';
import { OperatingUnitsApi } from './OperatingUnitsApi';
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
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class CompensationPayPerformanceAllocationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      CompensationPayPerformanceAllocations<DeSerializersT>,
      DeSerializersT
    >
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
  ): CompensationPayPerformanceAllocationsApi<DeSerializersT> {
    return new CompensationPayPerformanceAllocationsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link compensationPayPerformanceAllocationLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMPENSATION_PAY_PERFORMANCE_ALLOCATION_LINE: OneToManyLink<
      CompensationPayPerformanceAllocations<DeSerializersT>,
      DeSerializersT,
      CompensationPayPerformanceAllocationLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link compensationPerformancePlan} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMPENSATION_PERFORMANCE_PLAN: OneToOneLink<
      CompensationPayPerformanceAllocations<DeSerializersT>,
      DeSerializersT,
      CompensationPerformancePlansApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link department} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEPARTMENT: OneToOneLink<
      CompensationPayPerformanceAllocations<DeSerializersT>,
      DeSerializersT,
      DepartmentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link operatingUnit} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OPERATING_UNIT: OneToOneLink<
      CompensationPayPerformanceAllocations<DeSerializersT>,
      DeSerializersT,
      OperatingUnitsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      CompensationPayPerformanceAllocationLinesApi<DeSerializersT>,
      CompensationPerformancePlansApi<DeSerializersT>,
      DepartmentsApi<DeSerializersT>,
      OperatingUnitsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      COMPENSATION_PAY_PERFORMANCE_ALLOCATION_LINE: new OneToManyLink(
        'CompensationPayPerformanceAllocationLine',
        this,
        linkedApis[0]
      ),
      COMPENSATION_PERFORMANCE_PLAN: new OneToOneLink(
        'CompensationPerformancePlan',
        this,
        linkedApis[1]
      ),
      DEPARTMENT: new OneToOneLink('Department', this, linkedApis[2]),
      OPERATING_UNIT: new OneToOneLink('OperatingUnit', this, linkedApis[3])
    };
    return this;
  }

  entityConstructor = CompensationPayPerformanceAllocations;

  requestBuilder(): CompensationPayPerformanceAllocationsRequestBuilder<DeSerializersT> {
    return new CompensationPayPerformanceAllocationsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    CompensationPayPerformanceAllocations<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      CompensationPayPerformanceAllocations<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CompensationPayPerformanceAllocations<DeSerializersT>,
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
    typeof CompensationPayPerformanceAllocations,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CompensationPayPerformanceAllocations,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      CompensationPayPerformanceAllocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DEPARTMENT_NUMBER: OrderableEdmTypeField<
      CompensationPayPerformanceAllocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PLAN: OrderableEdmTypeField<
      CompensationPayPerformanceAllocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ALLOCATION: OrderableEdmTypeField<
      CompensationPayPerformanceAllocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EFFECTIVE: OrderableEdmTypeField<
      CompensationPayPerformanceAllocations<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      CompensationPayPerformanceAllocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXPIRATION: OrderableEdmTypeField<
      CompensationPayPerformanceAllocations<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link compensationPayPerformanceAllocationLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMPENSATION_PAY_PERFORMANCE_ALLOCATION_LINE: OneToManyLink<
      CompensationPayPerformanceAllocations<DeSerializersT>,
      DeSerializersT,
      CompensationPayPerformanceAllocationLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link compensationPerformancePlan} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMPENSATION_PERFORMANCE_PLAN: OneToOneLink<
      CompensationPayPerformanceAllocations<DeSerializersT>,
      DeSerializersT,
      CompensationPerformancePlansApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link department} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEPARTMENT: OneToOneLink<
      CompensationPayPerformanceAllocations<DeSerializersT>,
      DeSerializersT,
      DepartmentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link operatingUnit} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OPERATING_UNIT: OneToOneLink<
      CompensationPayPerformanceAllocations<DeSerializersT>,
      DeSerializersT,
      OperatingUnitsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<CompensationPayPerformanceAllocations<DeSerializers>>;
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
         * Static representation of the {@link departmentNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPARTMENT_NUMBER: fieldBuilder.buildEdmTypeField(
          'DepartmentNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link plan} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLAN: fieldBuilder.buildEdmTypeField('Plan', 'Edm.String', false),
        /**
         * Static representation of the {@link allocation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOCATION: fieldBuilder.buildEdmTypeField(
          'Allocation',
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
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link expiration} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPIRATION: fieldBuilder.buildEdmTypeField(
          'Expiration',
          'Edm.DateTimeOffset',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CompensationPayPerformanceAllocations)
      };
    }

    return this._schema;
  }
}
