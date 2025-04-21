/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { UbuyRequisitionWorkflowApprovers } from './UbuyRequisitionWorkflowApprovers';
import { UbuyRequisitionWorkflowApproversRequestBuilder } from './UbuyRequisitionWorkflowApproversRequestBuilder';
import { WorkflowWorkItemStatus } from './WorkflowWorkItemStatus';
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
export class UbuyRequisitionWorkflowApproversApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<UbuyRequisitionWorkflowApprovers<DeSerializersT>, DeSerializersT>
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
  ): UbuyRequisitionWorkflowApproversApi<DeSerializersT> {
    return new UbuyRequisitionWorkflowApproversApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = UbuyRequisitionWorkflowApprovers;

  requestBuilder(): UbuyRequisitionWorkflowApproversRequestBuilder<DeSerializersT> {
    return new UbuyRequisitionWorkflowApproversRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    UbuyRequisitionWorkflowApprovers<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      UbuyRequisitionWorkflowApprovers<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    UbuyRequisitionWorkflowApprovers<DeSerializersT>,
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
    typeof UbuyRequisitionWorkflowApprovers,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        UbuyRequisitionWorkflowApprovers,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    REQUISITION_NUMBER: OrderableEdmTypeField<
      UbuyRequisitionWorkflowApprovers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    USER_ID: OrderableEdmTypeField<
      UbuyRequisitionWorkflowApprovers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PERSON_NAME: OrderableEdmTypeField<
      UbuyRequisitionWorkflowApprovers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REQUISITION_WORKFLOW_APPROVER_STATUS: EnumField<
      UbuyRequisitionWorkflowApprovers<DeSerializers>,
      DeSerializersT,
      WorkflowWorkItemStatus,
      true,
      true
    >;
    ALL_FIELDS: AllFields<UbuyRequisitionWorkflowApprovers<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link requisitionNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUISITION_NUMBER: fieldBuilder.buildEdmTypeField(
          'RequisitionNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link userId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_ID: fieldBuilder.buildEdmTypeField('UserId', 'Edm.String', false),
        /**
         * Static representation of the {@link personName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON_NAME: fieldBuilder.buildEdmTypeField(
          'PersonName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link requisitionWorkflowApproverStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUISITION_WORKFLOW_APPROVER_STATUS: fieldBuilder.buildEnumField(
          'RequisitionWorkflowApproverStatus',
          WorkflowWorkItemStatus,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', UbuyRequisitionWorkflowApprovers)
      };
    }

    return this._schema;
  }
}
