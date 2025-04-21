/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BudgetPlanPriorityConstraints } from './BudgetPlanPriorityConstraints';
import { BudgetPlanPriorityConstraintsRequestBuilder } from './BudgetPlanPriorityConstraintsRequestBuilder';
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
export class BudgetPlanPriorityConstraintsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<BudgetPlanPriorityConstraints<DeSerializersT>, DeSerializersT>
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
  ): BudgetPlanPriorityConstraintsApi<DeSerializersT> {
    return new BudgetPlanPriorityConstraintsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = BudgetPlanPriorityConstraints;

  requestBuilder(): BudgetPlanPriorityConstraintsRequestBuilder<DeSerializersT> {
    return new BudgetPlanPriorityConstraintsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    BudgetPlanPriorityConstraints<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      BudgetPlanPriorityConstraints<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BudgetPlanPriorityConstraints<DeSerializersT>,
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
    typeof BudgetPlanPriorityConstraints,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BudgetPlanPriorityConstraints,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PROCESS: OrderableEdmTypeField<
      BudgetPlanPriorityConstraints<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRIORITY: OrderableEdmTypeField<
      BudgetPlanPriorityConstraints<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ALL_FIELDS: AllFields<BudgetPlanPriorityConstraints<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link process} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROCESS: fieldBuilder.buildEdmTypeField('Process', 'Edm.String', false),
        /**
         * Static representation of the {@link priority} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIORITY: fieldBuilder.buildEdmTypeField(
          'Priority',
          'Edm.String',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BudgetPlanPriorityConstraints)
      };
    }

    return this._schema;
  }
}
