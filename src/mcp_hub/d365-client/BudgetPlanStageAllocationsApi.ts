/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BudgetPlanStageAllocations } from './BudgetPlanStageAllocations';
import { BudgetPlanStageAllocationsRequestBuilder } from './BudgetPlanStageAllocationsRequestBuilder';
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
export class BudgetPlanStageAllocationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<BudgetPlanStageAllocations<DeSerializersT>, DeSerializersT>
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
  ): BudgetPlanStageAllocationsApi<DeSerializersT> {
    return new BudgetPlanStageAllocationsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = BudgetPlanStageAllocations;

  requestBuilder(): BudgetPlanStageAllocationsRequestBuilder<DeSerializersT> {
    return new BudgetPlanStageAllocationsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BudgetPlanStageAllocations<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      BudgetPlanStageAllocations<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BudgetPlanStageAllocations<DeSerializersT>,
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
    typeof BudgetPlanStageAllocations,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BudgetPlanStageAllocations,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    WORKFLOW: OrderableEdmTypeField<
      BudgetPlanStageAllocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STAGE: OrderableEdmTypeField<
      BudgetPlanStageAllocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ALLOCATION_SCHEDULE: OrderableEdmTypeField<
      BudgetPlanStageAllocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ORDINAL: OrderableEdmTypeField<
      BudgetPlanStageAllocations<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ALL_FIELDS: AllFields<BudgetPlanStageAllocations<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link workflow} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKFLOW: fieldBuilder.buildEdmTypeField(
          'Workflow',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link stage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STAGE: fieldBuilder.buildEdmTypeField('Stage', 'Edm.String', false),
        /**
         * Static representation of the {@link allocationSchedule} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOCATION_SCHEDULE: fieldBuilder.buildEdmTypeField(
          'AllocationSchedule',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link ordinal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDINAL: fieldBuilder.buildEdmTypeField('Ordinal', 'Edm.Int32', false),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BudgetPlanStageAllocations)
      };
    }

    return this._schema;
  }
}
