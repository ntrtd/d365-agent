/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProjectControlCostGroups } from './ProjectControlCostGroups';
import { ProjectControlCostGroupsRequestBuilder } from './ProjectControlCostGroupsRequestBuilder';
import { ProjControlPeriodCostGroupCtcMethod } from './ProjControlPeriodCostGroupCtcMethod';
import { ProjCostType } from './ProjCostType';
import { NoYes } from './NoYes';
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
export class ProjectControlCostGroupsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProjectControlCostGroups<DeSerializersT>, DeSerializersT>
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
  ): ProjectControlCostGroupsApi<DeSerializersT> {
    return new ProjectControlCostGroupsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ProjectControlCostGroups;

  requestBuilder(): ProjectControlCostGroupsRequestBuilder<DeSerializersT> {
    return new ProjectControlCostGroupsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProjectControlCostGroups<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ProjectControlCostGroups<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProjectControlCostGroups<DeSerializersT>,
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
    typeof ProjectControlCostGroups,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProjectControlCostGroups,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ProjectControlCostGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COST_TEMPLATE_ID: OrderableEdmTypeField<
      ProjectControlCostGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COST_LINE_ID: OrderableEdmTypeField<
      ProjectControlCostGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COST_TO_COMPLETE_METHOD: EnumField<
      ProjectControlCostGroups<DeSerializers>,
      DeSerializersT,
      ProjControlPeriodCostGroupCtcMethod,
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      ProjectControlCostGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSACTION_TYPE: EnumField<
      ProjectControlCostGroups<DeSerializers>,
      DeSerializersT,
      ProjCostType,
      true,
      true
    >;
    MANDATORY_COST_LINE: EnumField<
      ProjectControlCostGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PERCENTAGE_OF_COMPLETION: EnumField<
      ProjectControlCostGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<ProjectControlCostGroups<DeSerializers>>;
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
         * Static representation of the {@link costTemplateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_TEMPLATE_ID: fieldBuilder.buildEdmTypeField(
          'CostTemplateId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link costLineId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_LINE_ID: fieldBuilder.buildEdmTypeField(
          'CostLineId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link costToCompleteMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_TO_COMPLETE_METHOD: fieldBuilder.buildEnumField(
          'CostToCompleteMethod',
          ProjControlPeriodCostGroupCtcMethod,
          true
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link transactionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_TYPE: fieldBuilder.buildEnumField(
          'TransactionType',
          ProjCostType,
          true
        ),
        /**
         * Static representation of the {@link mandatoryCostLine} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MANDATORY_COST_LINE: fieldBuilder.buildEnumField(
          'MandatoryCostLine',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link percentageOfCompletion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERCENTAGE_OF_COMPLETION: fieldBuilder.buildEnumField(
          'PercentageOfCompletion',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProjectControlCostGroups)
      };
    }

    return this._schema;
  }
}
